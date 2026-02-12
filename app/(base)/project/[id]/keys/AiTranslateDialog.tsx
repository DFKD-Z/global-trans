"use client"

import { useState, useMemo } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { apiFetch } from "@/lib/apiClient"
import type { TranslationKey } from "./types"

/** 从 keys 中收集所有出现过的语言码 */
function getLangCodesFromKeys(keys: TranslationKey[]): string[] {
  const set = new Set<string>()
  keys.forEach((k) => Object.keys(k.values).forEach((lang) => set.add(lang)))
  return Array.from(set)
}

/** 有源语言文案的 key 路径列表（与 payload 中 entry 顺序一致，用于解析数组形式结果） */
function getKeyOrderForSource(keys: TranslationKey[], sourceLang: string): string[] {
  return keys
    .filter((k) => (k.values[sourceLang] ?? "").trim() !== "")
    .map((k) => k.key)
}

/** 根据 API 要求构建 payload：扁平 keyPath -> 源语言文案，需传 JSON 字符串 */
function buildPayloadFromKeys(
  keys: TranslationKey[],
  sourceLang: string
): string {
  const obj: Record<string, string> = {}
  keys.forEach((k) => {
    const v = k.values[sourceLang] ?? ""
    if (v.trim()) obj[k.key] = v
  })
  return JSON.stringify(obj)
}

/** 多语言结果：{ [langCode]: { [keyPath]: translatedText } } */
type MultiLangResult = Record<string, Record<string, string>>

/** 解析 API 返回的纯文本：单语言对象/数组，或多语言对象 */
function parseAiResponse(
  text: string
):
  | { type: "object"; data: Record<string, string> }
  | { type: "array"; data: string[] }
  | { type: "multiLang"; data: MultiLangResult }
  | null {
  const t = text?.trim()
  if (!t) return null
  try {
    const parsed = JSON.parse(t) as unknown
    if (Array.isArray(parsed) && parsed.every((x) => typeof x === "string")) {
      return { type: "array", data: parsed }
    }
    if (typeof parsed !== "object" || parsed === null) return null
    const obj = parsed as Record<string, unknown>
    const values = Object.values(obj)
    if (values.every((v) => typeof v === "string")) {
      return { type: "object", data: obj as Record<string, string> }
    }
    if (
      values.every(
        (v) =>
          typeof v === "object" &&
          v !== null &&
          Object.values(v as Record<string, unknown>).every((x) => typeof x === "string")
      )
    ) {
      return { type: "multiLang", data: obj as MultiLangResult }
    }
  } catch {
    // 非 JSON，忽略
  }
  return null
}

export function AiTranslateDialog({
  open,
  onOpenChange,
  keys,
  languages,
  onApplyTranslations,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  keys: TranslationKey[]
  languages: Array<{ code: string; name: string }>
  onApplyTranslations: (updates: Array<{ keyId: string; langCode: string; value: string }>) => void
}) {
  const [sourceLang, setSourceLang] = useState("zh-CN")
  const [targetLangs, setTargetLangs] = useState<string[]>(["en-US"])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const langCodes = useMemo(() => getLangCodesFromKeys(keys), [keys])
  const langOptions = useMemo(
    () => languages.filter((l) => langCodes.includes(l.code)),
    [languages, langCodes]
  )
  // 目标语言：除源语言外的所有项目语言
  const targetOptions = useMemo(
    () => languages.filter((l) => l.code !== sourceLang),
    [languages, sourceLang]
  )

  const effectiveSourceLang = langOptions.some((l) => l.code === sourceLang)
    ? sourceLang
    : langOptions[0]?.code ?? sourceLang
  // 多选：只保留仍在 targetOptions 中的项，避免源语言切换后留下无效项
  const effectiveTargetLangs = useMemo(
    () => targetLangs.filter((code) => targetOptions.some((l) => l.code === code)),
    [targetLangs, targetOptions]
  )

  const hasSourceContent = useMemo(() => {
    return keys.some((k) => (k.values[effectiveSourceLang] ?? "").trim() !== "")
  }, [keys, effectiveSourceLang])

  const keyOrder = useMemo(
    () => getKeyOrderForSource(keys, effectiveSourceLang),
    [keys, effectiveSourceLang]
  )

  const handleTranslate = async () => {
    if (!hasSourceContent) {
      setError("当前源语言下没有可翻译的文案")
      return
    }
    if (effectiveTargetLangs.length === 0) {
      setError("请至少选择一种目标语言")
      return
    }
    setError(null)
    setLoading(true)
    const srcLang = effectiveSourceLang
    const payload = buildPayloadFromKeys(keys, srcLang)
    const allUpdates: Array<{ keyId: string; langCode: string; value: string }> = []
    try {
      const res = await apiFetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payload,
          sourceLang: srcLang,
          targetLangs: effectiveTargetLangs,
        }),
      })
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}))
        throw new Error((errJson as { error?: string }).error || `请求失败: ${res.status}`)
      }
      const rawText = await res.text()
      const parsed = parseAiResponse(rawText)
      if (!parsed) {
        setError("AI 返回格式无法解析，请重试")
        return
      }
      if (parsed.type === "multiLang") {
        for (const [langCode, pathToValue] of Object.entries(parsed.data)) {
          for (const [path, value] of Object.entries(pathToValue)) {
            const keyItem = keys.find((k) => k.key === path)
            if (keyItem && typeof value === "string") {
              allUpdates.push({ keyId: keyItem.id, langCode, value })
            }
          }
        }
      } else {
        const tgtLang = effectiveTargetLangs[0]
        if (parsed.type === "array") {
          keyOrder.forEach((path, i) => {
            const keyItem = keys.find((k) => k.key === path)
            const value = parsed.data[i]
            if (keyItem && typeof value === "string") {
              allUpdates.push({ keyId: keyItem.id, langCode: tgtLang, value })
            }
          })
        } else {
          keys.forEach((k) => {
            const value = parsed.data[k.key]
            if (typeof value === "string") {
              allUpdates.push({ keyId: k.id, langCode: tgtLang, value })
            }
          })
        }
      }
      onApplyTranslations(allUpdates)
      onOpenChange(false)
    } catch (e) {
      setError(e instanceof Error ? e.message : "翻译请求失败")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" showCloseButton>
        <DialogHeader>
          <DialogTitle>一键翻译</DialogTitle>
          <DialogDescription>
            选择源语言与目标语言，将根据当前键的源语言文案调用 AI 翻译并写回目标语言
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>源语言</Label>
            <Select
              value={effectiveSourceLang}
              onValueChange={(v) => {
                setSourceLang(v)
                setTargetLangs((prev) => prev.filter((code) => code !== v))
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {langOptions.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    {l.name} ({l.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>目标语言（可多选）</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-input [&_svg]:text-muted-foreground flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs"
                  disabled={targetOptions.length === 0}
                >
                  <span className="truncate">
                    {effectiveTargetLangs.length === 0
                      ? "请选择目标语言"
                      : effectiveTargetLangs.length === 1
                        ? languages.find((l) => l.code === effectiveTargetLangs[0])?.name ?? effectiveTargetLangs[0]
                        : `已选 ${effectiveTargetLangs.length} 种语言`}
                  </span>
                  <ChevronDownIcon className="size-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[100] max-h-[280px] overflow-y-auto" align="start">
                {targetOptions.map((l) => (
                  <DropdownMenuCheckboxItem
                    key={l.code}
                    checked={effectiveTargetLangs.includes(l.code)}
                    onCheckedChange={(checked) => {
                      const isChecked = checked === true
                      setTargetLangs((prev) =>
                        isChecked ? [...prev, l.code] : prev.filter((c) => c !== l.code)
                      )
                    }}
                    onSelect={(e) => e.preventDefault()}
                  >
                    {l.name} ({l.code})
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {!hasSourceContent && (
            <p className="text-sm text-amber-600">当前源语言下暂无文案，请先在键中填写源语言内容。</p>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            取消
          </Button>
          <Button
            onClick={handleTranslate}
            disabled={loading || !hasSourceContent || effectiveTargetLangs.length === 0}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                翻译中…
              </>
            ) : (
              '开始翻译'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

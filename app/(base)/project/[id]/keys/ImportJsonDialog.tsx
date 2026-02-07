"use client"

import { useCallback, useRef, useState } from "react"
import { Upload, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import type { TranslationKey } from "./types"
import { createKey, batchUpdateKeys } from "@/app/services/client"

/** 从嵌套对象递归展平为 path -> value，path 用 "." 连接 */
function flattenNested(
  obj: Record<string, unknown>,
  prefix = ""
): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k
    if (typeof v === "string") {
      result[path] = v
    } else if (
      v !== null &&
      typeof v === "object" &&
      !Array.isArray(v)
    ) {
      Object.assign(
        result,
        flattenNested(v as Record<string, unknown>, path)
      )
    }
  }
  return result
}

/**
 * 解析与导出格式一致的 JSON：{ [langCode]: { nested key path -> value } }
 * 返回扁平化的翻译键列表 { key, values }
 */
export function parseImportJson(
  json: Record<string, Record<string, unknown>>
): { key: string; values: Record<string, string> }[] {
  const pathToValues: Record<string, Record<string, string>> = {}
  for (const [langCode, nested] of Object.entries(json)) {
    if (nested === null || typeof nested !== "object" || Array.isArray(nested)) continue
    const flat = flattenNested(nested)
    for (const [path, value] of Object.entries(flat)) {
      if (!pathToValues[path]) pathToValues[path] = {}
      pathToValues[path][langCode] = value
    }
  }
  return Object.entries(pathToValues).map(([key, values]) => ({ key, values }))
}

/** 校验键名格式（与后端一致） */
const KEY_NAME_REGEX = /^[a-zA-Z0-9._-]+$/
function validateKeyName(name: string): boolean {
  return name.length >= 1 && name.length <= 200 && KEY_NAME_REGEX.test(name)
}

export interface ImportJsonDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  versionId: string
  currentKeys: TranslationKey[]
  onImportSuccess: () => void
}

export function ImportJsonDialog({
  open,
  onOpenChange,
  versionId,
  currentKeys,
  onImportSuccess,
}: ImportJsonDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [parsed, setParsed] = useState<{ key: string; values: Record<string, string> }[] | null>(null)
  const [parseError, setParseError] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)

  const resetState = useCallback(() => {
    setParsed(null)
    setParseError(null)
    if (inputRef.current) inputRef.current.value = ""
  }, [])

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!next) resetState()
      onOpenChange(next)
    },
    [onOpenChange, resetState]
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return
      setParseError(null)
      setParsed(null)
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const text = reader.result as string
          const data = JSON.parse(text) as unknown
          if (data === null || typeof data !== "object" || Array.isArray(data)) {
            setParseError("JSON 格式无效：需要以语言代码为键的对象")
            return
          }
          const parsedList = parseImportJson(data as Record<string, Record<string, unknown>>)
          if (parsedList.length === 0) {
            setParseError("未解析到任何翻译键，请确认 JSON 结构（按语言分组的嵌套对象）")
            return
          }
          const invalid = parsedList.find((p) => !validateKeyName(p.key))
          if (invalid) {
            setParseError(`键名不合法: "${invalid.key}"，仅允许字母、数字、点、下划线和连字符`)
            return
          }
          setParsed(parsedList)
        } catch (err) {
          setParseError(err instanceof Error ? err.message : "JSON 解析失败")
        }
      }
      reader.readAsText(file, "UTF-8")
    },
    []
  )

  const handleConfirmImport = useCallback(async () => {
    if (!parsed || parsed.length === 0 || !versionId) return
    setImporting(true)
    try {
      const existingByKey = new Map(currentKeys.map((k) => [k.key, k]))
      const toUpdate: { id: string; name: string; values: Record<string, string> }[] = []

      for (const { key, values } of parsed) {
        const existing = existingByKey.get(key)
        if (existing) {
          toUpdate.push({
            id: existing.id,
            name: existing.key,
            values: { ...existing.values, ...values },
          })
        } else {
          const created = await createKey(versionId, { name: key })
          toUpdate.push({
            id: created.id,
            name: created.name,
            values,
          })
        }
      }

      await batchUpdateKeys(
        versionId,
        toUpdate.map(({ id, name, values }) => ({ id, name, values }))
      )
      toast.success(`已导入 ${parsed.length} 个翻译键`)
      handleOpenChange(false)
      onImportSuccess()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "导入失败，请稍后重试")
    } finally {
      setImporting(false)
    }
  }, [parsed, versionId, currentKeys, handleOpenChange, onImportSuccess])

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg" showCloseButton>
        <DialogHeader>
          <DialogTitle>导入 JSON</DialogTitle>
          <DialogDescription>
            选择与导出格式一致的 JSON 文件：以语言代码为键，值为嵌套对象（键路径用点分隔）。
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <input
            ref={inputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={handleFileChange}
          />
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            onClick={() => inputRef.current?.click()}
          >
            <Upload className="size-4" />
            选择 JSON 文件
          </Button>
          {parseError && (
            <p className="text-sm text-destructive">{parseError}</p>
          )}
          {parsed && (
            <div className="rounded-md border bg-muted/50 p-3 text-sm">
              <p className="font-medium text-foreground">
                已解析 {parsed.length} 个翻译键
              </p>
              <ul className="mt-2 max-h-40 overflow-auto space-y-1 text-muted-foreground">
                {parsed.slice(0, 20).map((p) => (
                  <li key={p.key} className="truncate" title={p.key}>
                    {p.key}
                  </li>
                ))}
                {parsed.length > 20 && (
                  <li className="text-muted-foreground/80">
                    ... 还有 {parsed.length - 20} 个
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={importing}
          >
            取消
          </Button>
          <Button
            onClick={handleConfirmImport}
            disabled={!parsed || parsed.length === 0 || importing}
            className="gap-2"
          >
            {importing ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                导入中…
              </>
            ) : (
              "确认导入"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

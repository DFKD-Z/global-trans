"use client"

import { useCallback } from "react"
import { Download } from "lucide-react"
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

/**
 * 将 path 按 "." 分割，写入嵌套对象
 * 例如 setNested(root, "common.button.submit", "提交") => root.common.button.submit = "提交"
 */
function setNested(
  root: Record<string, unknown>,
  path: string,
  value: string
): void {
  const parts = path.split(".")
  let current: Record<string, unknown> = root
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i]
    if (!(p in current) || typeof current[p] !== "object") {
      current[p] = {}
    }
    current = current[p] as Record<string, unknown>
  }
  current[parts[parts.length - 1]] = value
}

/**
 * 将扁平 key 列表按 "." 转为按语言分组的嵌套 JSON 结构
 * 返回形如 { "zh-CN": { common: { button: { submit: "..." } } }, "en-US": { ... } }
 */
export function buildNestedExportJson(
  keys: TranslationKey[]
): Record<string, Record<string, unknown>> {
  const langCodes = new Set<string>()
  keys.forEach((k) => Object.keys(k.values).forEach((lang) => langCodes.add(lang)))
  const result: Record<string, Record<string, unknown>> = {}
  for (const lang of langCodes) {
    result[lang] = {}
    keys.forEach((k) => {
      setNested(result[lang], k.key, k.values[lang] ?? "")
    })
  }
  return result
}

function downloadJson(json: Record<string, unknown>, filename: string) {
  const str = JSON.stringify(json, null, 2)
  const blob = new Blob([str], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function ExportJsonDialog({
  open,
  onOpenChange,
  exportData,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  exportData: Record<string, Record<string, unknown>> | null
}) {
  const handleExport = useCallback(() => {
    if (!exportData) return
    const filename = `i18n-export-${new Date().toISOString().slice(0, 10)}.json`
    downloadJson(exportData, filename)
    onOpenChange(false)
  }, [exportData, onOpenChange])

  const jsonString =
    exportData != null ? JSON.stringify(exportData, null, 2) : ""

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] flex flex-col" showCloseButton>
        <DialogHeader>
          <DialogTitle>导出 JSON 预览</DialogTitle>
          <DialogDescription>
            键名已按 "." 转为嵌套结构，确认无误后点击「确认导出」下载文件。
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 min-h-0 flex flex-col gap-2">
          <pre className="flex-1 overflow-auto rounded-md border bg-muted/50 p-4 text-sm">
            <code className="text-foreground">{jsonString || "暂无数据"}</code>
          </pre>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            取消
          </Button>
          <Button onClick={handleExport} disabled={!exportData} className="gap-2">
            <Download className="size-4" />
            确认导出
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

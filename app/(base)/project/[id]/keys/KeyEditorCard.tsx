"use client"

import { useState } from "react"
import { Trash2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { TranslationKey } from "./types"
import { deleteKey } from "@/app/services/client"

export function KeyEditorCard({
  item,
  languages,
  onUpdateValue,
  onUpdateKey,
  onDelete,
}: {
  item: TranslationKey
  languages: Array<{ code: string; name: string }>
  onUpdateValue: (keyId: string, langCode: string, value: string) => void
  onUpdateKey?: (keyId: string, newKey: string) => void
  onDelete: () => void
}) {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    setConfirmOpen(false)
    setDeleting(true)
    try {
      await deleteKey(item.id)
      onDelete()
    } catch (err) {
      alert(err instanceof Error ? err.message : "网络错误，请稍后重试")
    } finally {
      setDeleting(false)
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
        {onUpdateKey ? (
          <Input
            value={item.key}
            onChange={(e) => onUpdateKey(item.id, e.target.value)}
            placeholder="翻译键名称，如 common.button.submit"
            className="max-w-sm text-base font-medium"
          />
        ) : (
          <CardTitle className="text-base font-medium">{item.key}</CardTitle>
        )}
        <div className="flex shrink-0 items-center gap-2">
         
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => setConfirmOpen(true)}
            disabled={deleting}
            aria-label="删除翻译键"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {languages.map((lang) => (
            <div key={lang.code} className="space-y-2">
              <Label className="text-xs">
                {lang.name} ({lang.code})
              </Label>
              <Textarea
                placeholder={`输入${lang.name}翻译`}
                value={item.values[lang.code] ?? ""}
                onChange={(e) => onUpdateValue(item.id, lang.code, e.target.value)}
                className="min-h-[80px] resize-y text-sm"
                rows={3}
              />
            </div>
          ))}
        </div>
      </CardContent>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>删除翻译键</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除「{item.key}」吗？此操作不可恢复。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline">取消</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
                {deleting ? "删除中..." : "确定删除"}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}

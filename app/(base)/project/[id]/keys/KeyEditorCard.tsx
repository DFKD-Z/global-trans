"use client"

import { Trash2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { TranslationKey } from "./types"
import { LANGUAGES } from "./types"

export function KeyEditorCard({
  item,
  onUpdateValue,
  onDelete,
}: {
  item: TranslationKey
  onUpdateValue: (keyId: string, langCode: string, value: string) => void
  onDelete: () => void
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
        <CardTitle className="text-base font-medium">{item.key}</CardTitle>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-violet-600 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-950/50"
          >
            <Sparkles className="size-4" />
            AI翻译
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={onDelete}
            aria-label="删除翻译键"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LANGUAGES.map((lang) => (
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
    </Card>
  )
}

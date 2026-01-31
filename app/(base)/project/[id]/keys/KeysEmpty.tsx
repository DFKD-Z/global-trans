"use client"

import { Languages, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function KeysEmpty({
  onCreateKey,
  onImportJson,
}: {
  onCreateKey: () => void
  onImportJson: () => void
}) {
  return (
    <Empty className="min-h-[320px] border-2 border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="mb-2">
          <Languages className="size-16" />
        </EmptyMedia>
        <EmptyTitle>暂无翻译键</EmptyTitle>
        <EmptyDescription>
          点击&quot;新建翻译键&quot;或&quot;导入JSON&quot;开始管理翻译
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row gap-2 justify-center">
        <Button onClick={onCreateKey} className="gap-2">
          <Plus className="size-4" />
          创建翻译键
        </Button>
        <Button variant="outline" onClick={onImportJson} className="gap-2">
          <Upload className="size-4" />
          导入JSON
        </Button>
      </EmptyContent>
    </Empty>
  )
}

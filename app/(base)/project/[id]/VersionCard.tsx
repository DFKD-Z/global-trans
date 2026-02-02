"use client"

import Link from "next/link"
import { FileText, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { VersionItem } from "./types"

export function VersionCard({
  projectId,
  version,
  onDelete,
}: {
  projectId: string
  version: VersionItem
  onDelete: () => void
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start justify-between gap-4 pb-2">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">{version.name}</h3>
              <p className="text-muted-foreground mt-0.5 text-sm">
                {version.description || "—"}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={onDelete}
            aria-label="删除版本"
          >
            <Trash2 className="size-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <p className="text-muted-foreground text-sm">
            创建于: {version.createdAt}
          </p>
          <Button asChild className="w-full gap-2">
            <Link href={`/project/${projectId}/keys?versionId=${version.id}`}>
              <FileText className="size-4" />
              管理翻译
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

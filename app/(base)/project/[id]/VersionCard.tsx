"use client"

import Link from "next/link"
import { useState } from "react"
import { FileText, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
import type { VersionItem } from "./types"
import { apiFetch } from "@/lib/apiClient"

export function VersionCard({
  projectId,
  version,
  onDelete,
}: {
  projectId: string
  version: VersionItem
  onDelete: (id: string) => void
}) {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    setConfirmOpen(false)
    setDeleting(true)
    try {
      const response = await apiFetch(`/api/versions/${version.id}`, {
        method: "DELETE",
      })
      const data = await response.json()
      if (data.code === 200) {
        onDelete(version.id)
      } else {
        alert(data.msg || "删除失败")
      }
    } catch {
      alert("网络错误，请稍后重试")
    } finally {
      setDeleting(false)
    }
  }

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
            onClick={() => setConfirmOpen(true)}
            disabled={deleting}
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

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>删除版本</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除「{version.name}」吗？此操作不可恢复。
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
    </div>
  )
}

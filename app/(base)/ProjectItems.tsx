'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"
import { FolderCode, PencilIcon, TrashIcon } from "lucide-react"
import { useMemo, useState, useEffect, useCallback } from "react"
import { CreateDialog } from "./Create"
import { useRouter } from "next/navigation"
import {
  getProjects,
  deleteProject,
  type ProjectItem,
} from "@/app/services/client"

export type { ProjectItem }


export function EmptyItem({ data, fetchProjects }: { data?: ProjectItem[]; fetchProjects: () => void }) {
  const hasData = useMemo(() => data && data.length > 0, [data])
  const title = useMemo(() => hasData ? "未找到项目" : "还没有项目", [hasData])
  const description = useMemo(() => hasData ? "未找到匹配的项目" : "您还没有创建任何项目。开始创建您的第一个项目吧。", [hasData])
  return (
    <Empty className="border-2 border-dashed mt-4">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <CreateDialog onSuccess={() => fetchProjects()}>
          <Button>创建项目</Button>
        </CreateDialog>
      </EmptyContent>
    </Empty>
  )
}

type CardItemProps = {
  item: ProjectItem
  onDelete: (id: string) => void
}

export function CardItem({ item, onDelete }: CardItemProps) {
  const [deleting, setDeleting] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const handleDelete = async () => {
    setConfirmOpen(false)
    setDeleting(true)
    try {
      await deleteProject(item.id)
      onDelete(item.id)
    } catch (err) {
      alert(err instanceof Error ? err.message : "网络错误，请稍后重试")
    } finally {
      setDeleting(false)
    }
  }

  const sourceLanguage = item.languages.find((lang) => lang.isSource)
  const languageCodes = item.languages.map((lang) => lang.code).join(", ")

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {item.name}
          {sourceLanguage && (
            <Badge variant="outline">{sourceLanguage.code}</Badge>
          )}
        </CardTitle>
        <CardDescription>
          {item.description || "无描述"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          支持语言: {languageCodes}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          创建于: {new Date(item.createdAt).toLocaleDateString("zh-CN")}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Link className="w-3/4" href={`/project/${item.id}`}>
          <Button variant="outline" size="sm" className="w-full">
            <PencilIcon className="w-4 h-4" />
            管理
          </Button>
        </Link>
        
        <Button
          variant="destructive"
          size="sm"
          className="w-1/4"
          onClick={() => setConfirmOpen(true)}
          disabled={deleting}
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </CardFooter>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>删除项目</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除「{item.name}」吗？此操作不可恢复，项目下的所有版本和翻译数据将被一并删除。
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

export function ProjectItems() {
  const [data, setData] = useState<ProjectItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchProjects = useCallback(async () => {
    try {
      const result = await getProjects()
      setData(result)
    } catch (err) {
      console.error("获取项目列表失败:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }

  const handleCreateSuccess = () => {
    fetchProjects()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <p className="text-muted-foreground">加载中...</p>
      </div>
    )
  }

  return (
    <>
      <EmptyItem data={data} fetchProjects={fetchProjects} />
      {data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {data.map((item) => (
            <CardItem key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  )
}
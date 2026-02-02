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

export type ProjectItem = {
  id: string
  name: string
  description: string | null
  languages: Array<{
    id: string
    code: string
    isSource: boolean
  }>
  createdAt: Date
}

export function EmptyItem({ data, fetchProjects }: { data?: ProjectItem[], fetchProjects: () => void }) {
  const hasData = useMemo(() => data && data.length > 0, [data])
  const title = useMemo(() => hasData ? "未找到项目" : "还没有项目", [hasData])
  const description = useMemo(() => hasData ? "未找到匹配的项目" : "您还没有创建任何项目。开始创建您的第一个项目吧。", [hasData])
  return (
    <Empty>
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

  const handleDelete = async () => {
    if (!confirm("确定要删除这个项目吗？此操作不可恢复。")) {
      return
    }

    setDeleting(true)
    try {
      const response = await fetch(`/api/projects/${item.id}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.code === 200) {
        onDelete(item.id)
      } else {
        alert(data.msg || "删除失败")
      }
    } catch (err) {
      alert("网络错误，请稍后重试")
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
          onClick={handleDelete}
          disabled={deleting}
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProjectItems() {
  const [data, setData] = useState<ProjectItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch("/api/projects")
      const result = await response.json()

      if (result.code === 200 && result.data) {
        setData(result.data)
      } else {
        console.error("获取项目列表失败:", result.msg)
      }
    } catch (err) {
      console.error("网络错误:", err)
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
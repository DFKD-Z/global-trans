"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VersionCard } from "./VersionCard"
import { CreateVersionDialog } from "./CreateVersionDialog"
import type { VersionItem } from "./types"
import {
  getVersions,
  getProject,
  createVersion,
} from "@/app/services/client"

export function VersionItems({ projectId }: { projectId: string }) {
  const [versions, setVersions] = useState<VersionItem[]>([])
  const [projectName, setProjectName] = useState("")
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [versionName, setVersionName] = useState("")
  const [versionDesc, setVersionDesc] = useState("")
  const isFetchingRef = useRef(false)

  const fetchVersions = async () => {
    // 防止重复调用
    if (isFetchingRef.current) return
    isFetchingRef.current = true

    try {
      setLoading(true)
      const [versionsData, projectData] = await Promise.all([
        getVersions(projectId),
        getProject(projectId),
      ])
      setVersions(
        versionsData.map((v) => ({
          id: v.id,
          name: v.name,
          description: "",
          createdAt: new Date(v.createdAt).toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
        }))
      )
      setProjectName(projectData.name)
    } catch (err) {
      console.error("网络错误:", err)
    } finally {
      setLoading(false)
      isFetchingRef.current = false
    }
  }

  useEffect(() => {
    fetchVersions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId])

  const handleCreate = async () => {
    if (!versionName.trim()) return

    try {
      await createVersion(projectId, { name: versionName.trim() })
      setVersionName("")
      setVersionDesc("")
      setOpen(false)
      fetchVersions()
    } catch (err) {
      alert(err instanceof Error ? err.message : "网络错误，请稍后重试")
    }
  }

  const handleDelete = (id: string) => {
    setVersions((prev) => prev.filter((v) => v.id !== id))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <p className="text-muted-foreground">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            返回项目列表
          </Link>
          <Button onClick={() => setOpen(true)} className="gap-2">
            <Plus className="size-4" />
            新建版本
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">{projectName || "项目"}</h1>
          <p className="text-muted-foreground mt-1 text-sm">管理项目版本</p>
        </div>

        {versions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">还没有版本，创建第一个版本吧</p>
          </div>
        ) : (
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {versions.map((v) => (
              <VersionCard
                key={v.id}
                projectId={projectId}
                version={v}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <CreateVersionDialog
        open={open}
        onOpenChange={setOpen}
        versionName={versionName}
        versionDesc={versionDesc}
        onVersionNameChange={setVersionName}
        onVersionDescChange={setVersionDesc}
        onSubmit={handleCreate}
      />
    </div>
  )
}

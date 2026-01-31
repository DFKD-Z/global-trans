"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VersionCard } from "./VersionCard"
import { CreateVersionDialog } from "./CreateVersionDialog"
import type { VersionItem } from "./types"

const MOCK_VERSIONS: VersionItem[] = [
  {
    id: "v1",
    name: "qqq",
    description: "qq",
    createdAt: "2026/1/31",
  },
]

export function VersionItems({ projectId }: { projectId: string }) {
  const [versions, setVersions] = useState<VersionItem[]>(MOCK_VERSIONS)
  const [open, setOpen] = useState(false)
  const [versionName, setVersionName] = useState("")
  const [versionDesc, setVersionDesc] = useState("")

  const handleCreate = () => {
    if (!versionName.trim()) return
    setVersions((prev) => [
      ...prev,
      {
        id: `v${Date.now()}`,
        name: versionName.trim(),
        description: versionDesc.trim(),
        createdAt: new Date()
          .toLocaleDateString("zh-CN", { year: "numeric", month: "numeric", day: "numeric" })
          .replace(/\//g, "/"),
      },
    ])
    setVersionName("")
    setVersionDesc("")
    setOpen(false)
  }

  const handleDelete = (id: string) => {
    setVersions((prev) => prev.filter((v) => v.id !== id))
  }

  const projectName = "qqq"

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
          <h1 className="text-2xl font-bold tracking-tight">{projectName}</h1>
          <p className="text-muted-foreground mt-1 text-sm">管理项目版本</p>
        </div>

        <div className="space-y-4">
          {versions.map((v) => (
            <VersionCard
              key={v.id}
              projectId={projectId}
              version={v}
              onDelete={() => handleDelete(v.id)}
            />
          ))}
        </div>
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

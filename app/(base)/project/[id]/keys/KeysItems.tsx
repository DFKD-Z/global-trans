"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Upload, Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KeyEditorCard } from "./KeyEditorCard"
import { KeysEmpty } from "./KeysEmpty"
import { CreateKeyForm } from "./CreateKeyForm"
import { CreateKeyDialog } from "./CreateKeyDialog"
import type { TranslationKey } from "./types"
import { LANGUAGES } from "./types"

export function KeysItems({ projectId }: { projectId: string }) {
  const searchParams = useSearchParams()
  const versionId = searchParams.get("versionId")
  const [keys, setKeys] = useState<TranslationKey[]>([])
  const [loading, setLoading] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const isFetchingRef = useRef(false)

  const isEmpty = keys.length === 0

  const fetchKeys = async () => {
    if (!versionId) {
      setLoading(false)
      return
    }

    // 防止重复调用
    if (isFetchingRef.current) return
    isFetchingRef.current = true

    try {
      setLoading(true)
      const response = await fetch(`/api/versions/${versionId}/keys`)
      const result = await response.json()

      if (result.code === 200 && result.data) {
        setKeys(
          result.data.map((key: {
            id: string
            name: string
            values: Array<{ langCode: string; content: string }>
          }) => ({
            id: key.id,
            key: key.name,
            values: Object.fromEntries(
              key.values.map((v) => [v.langCode, v.content])
            ),
          }))
        )
      } else {
        console.error("获取翻译键列表失败:", result.msg)
      }
    } catch (err) {
      console.error("网络错误:", err)
    } finally {
      setLoading(false)
      isFetchingRef.current = false
    }
  }

  useEffect(() => {
    fetchKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [versionId])

  const handleCreateKey = async () => {
    if (!newKeyName.trim() || !versionId) return

    try {
      const response = await fetch(`/api/versions/${versionId}/keys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newKeyName.trim(),
        }),
      })

      const data = await response.json()

      if (data.code === 200) {
        setNewKeyName("")
        setCreateOpen(false)
        fetchKeys()
      } else {
        alert(data.msg || "创建翻译键失败")
      }
    } catch (err) {
      alert("网络错误，请稍后重试")
    }
  }

  const handleUpdateValue = (keyId: string, langCode: string, value: string) => {
    setKeys((prev) =>
      prev.map((k) =>
        k.id === keyId
          ? { ...k, values: { ...k.values, [langCode]: value } }
          : k
      )
    )
  }

  const handleDeleteKey = async (keyId: string) => {
    if (!confirm("确定要删除这个翻译键吗？此操作不可恢复。")) {
      return
    }

    try {
      const response = await fetch(`/api/keys/${keyId}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.code === 200) {
        setKeys((prev) => prev.filter((k) => k.id !== keyId))
      } else {
        alert(data.msg || "删除失败")
      }
    } catch (err) {
      alert("网络错误，请稍后重试")
    }
  }

  if (!versionId) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <p className="text-muted-foreground">请选择版本</p>
      </div>
    )
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
        <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/project/${projectId}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            返回版本列表
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="size-4" />
              导入JSON
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="size-4" />
              导出JSON
            </Button>
            <Button size="sm" className="gap-2" onClick={() => setCreateOpen(true)}>
              <Plus className="size-4" />
              新建翻译键
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        {isEmpty && (
          <KeysEmpty
            onCreateKey={() => setCreateOpen(true)}
            onImportJson={() => {}}
          />
        )}

        {!isEmpty && (
          <div className="space-y-6">
            {keys.map((item) => (
              <KeyEditorCard
                key={item.id}
                item={item}
                onUpdateValue={handleUpdateValue}
                onDelete={() => handleDeleteKey(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      <CreateKeyDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        keyName={newKeyName}
        onKeyNameChange={setNewKeyName}
        onSubmit={handleCreateKey}
      />
    </div>
  )
}

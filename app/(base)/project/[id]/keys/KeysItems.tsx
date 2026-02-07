"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Upload, Download, Plus, Save } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { KeyEditorCard } from "./KeyEditorCard"
import { KeysEmpty } from "./KeysEmpty"
import { CreateKeyDialog } from "./CreateKeyDialog"
import { ExportJsonDialog, buildNestedExportJson } from "./ExportJsonDialog"
import { ImportJsonDialog } from "./ImportJsonDialog"
import type { TranslationKey } from "./types"
import { getKeys, createKey, batchUpdateKeys } from "@/app/services/client"
import { Brain } from "lucide-react"

export function KeysItems({ projectId }: { projectId: string }) {
  const searchParams = useSearchParams()
  const versionId = searchParams.get("versionId")
  const [keys, setKeys] = useState<TranslationKey[]>([])
  const [loading, setLoading] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const [exportOpen, setExportOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [exportPreviewData, setExportPreviewData] = useState<Record<
    string,
    Record<string, unknown>
  > | null>(null)
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
      const result = await getKeys(versionId)
      setKeys(
        result.map((key) => ({
          id: key.id,
          key: key.name,
          values: Object.fromEntries(
            key.values.map((v) => [v.langCode, v.content])
          ),
        }))
      )
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
      await createKey(versionId, { name: newKeyName.trim() })
      toast.success("创建翻译键成功")
      setNewKeyName("")
      setCreateOpen(false)
      fetchKeys()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "网络错误，请稍后重试")
    }
  }

  // 保存翻译键（键名和翻译值）- 单次请求批量更新
  const handleSaveKeys = async () => {
    if (!versionId || keys.length === 0) return
    try {
      await batchUpdateKeys(
        versionId,
        keys.map((item) => ({
          id: item.id,
          name: item.key,
          values: item.values,
        }))
      )
      toast.success("保存成功")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "网络错误，请稍后重试")
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

  const handleUpdateKey = (keyId: string, newKey: string) => {
    setKeys((prev) =>
      prev.map((k) => (k.id === keyId ? { ...k, key: newKey } : k))
    )
  }

  const handleDeleteKey = (keyId: string) => {
    setKeys((prev) => prev.filter((k) => k.id !== keyId))
  }

  const handleExportJsonClick = () => {
    const data = buildNestedExportJson(keys)
    setExportPreviewData(data)
    setExportOpen(true)
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
            <Button variant="outline" size="sm" className="gap-2" onClick={handleSaveKeys}>
              <Save className="size-4" />
              保存
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => setImportOpen(true)}
            >
              <Upload className="size-4" />
              导入JSON
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleExportJsonClick}
              disabled={isEmpty}
            >
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
            onImportJson={() => setImportOpen(true)}
          />
        )}

        {!isEmpty &&
          <div className="space-y-2">
            {keys.map((item) => (
              <KeyEditorCard
                key={item.id}
                item={item}
                onUpdateValue={handleUpdateValue}
                onUpdateKey={handleUpdateKey}
                onDelete={() => handleDeleteKey(item.id)}
              />
            ))}
          </div>
        }
      </div>

      <CreateKeyDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        keyName={newKeyName}
        onKeyNameChange={setNewKeyName}
        onSubmit={handleCreateKey}
      />
      <ExportJsonDialog
        open={exportOpen}
        onOpenChange={setExportOpen}
        exportData={exportPreviewData}
      />
      <ImportJsonDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        versionId={versionId}
        currentKeys={keys}
        onImportSuccess={fetchKeys}
      />
    </div>
  )
}

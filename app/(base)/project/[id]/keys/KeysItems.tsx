"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Upload, Download, Plus, Save, InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { KeyEditorCard } from "./KeyEditorCard"
import { KeysEmpty } from "./KeysEmpty"
import { CreateKeyForm } from "./CreateKeyForm"
import { CreateKeyDialog } from "./CreateKeyDialog"
import type { TranslationKey } from "./types"
import { apiFetch } from "@/lib/apiClient"

const SaveResultAlert = ({
  saveResultType,
  saveResultMessage,
  onClose,
}: {
  saveResultType: "success" | "error"
  saveResultMessage: string
  onClose: () => void
}) => {
  return (
    <Alert variant={saveResultType === "error" ? "destructive" : "default"} className="relative pr-10">
      <InfoIcon />
      <AlertTitle>{saveResultType === "success" ? "保存成功" : "保存失败"}</AlertTitle>
      <AlertDescription>{saveResultMessage}</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 size-6"
        onClick={onClose}
        aria-label="关闭"
      >
        ×
      </Button>
    </Alert>
  )
}

export function KeysItems({ projectId }: { projectId: string }) {
  const searchParams = useSearchParams()
  const versionId = searchParams.get("versionId")
  const [keys, setKeys] = useState<TranslationKey[]>([])
  const [loading, setLoading] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const [saveResultOpen, setSaveResultOpen] = useState(false)
  const [saveResultMessage, setSaveResultMessage] = useState("")
  const [saveResultType, setSaveResultType] = useState<"success" | "error">("success")
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
      const response = await apiFetch(`/api/versions/${versionId}/keys`)
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
      const response = await apiFetch(`/api/versions/${versionId}/keys`, {
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
        setSaveResultMessage("创建翻译键成功")
        setSaveResultType("success")
        setSaveResultOpen(true)
        setNewKeyName("")
        setCreateOpen(false)
        fetchKeys()
      } else {
        setSaveResultMessage(data.msg || "创建翻译键失败")
        setSaveResultType("error")
        setSaveResultOpen(true)
      }
    } catch (err) {
      setSaveResultMessage("网络错误，请稍后重试")
      setSaveResultType("error")
      setSaveResultOpen(true)
    }
  }

  // 保存翻译键（键名和翻译值）- 单次请求批量更新
  const handleSaveKeys = async () => {
    if (!versionId || keys.length === 0) return
    try {
      const response = await apiFetch(`/api/versions/${versionId}/keys`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keys: keys.map((item) => ({
            id: item.id,
            name: item.key,
            values: item.values,
          })),
        }),
      })
      const data = await response.json()
      if (data.code === 200) {
        setSaveResultMessage("保存成功")
        setSaveResultType("success")
        setSaveResultOpen(true)
      } else {
        setSaveResultMessage(data.msg || "保存失败")
        setSaveResultType("error")
        setSaveResultOpen(true)
      }
    } catch (err) {
      setSaveResultMessage("网络错误，请稍后重试")
      setSaveResultType("error")
      setSaveResultOpen(true)
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
      {saveResultOpen && (
        <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
          <SaveResultAlert
            saveResultType={saveResultType}
            saveResultMessage={saveResultMessage}
            onClose={() => setSaveResultOpen(false)}
          />
        </div>
      )}
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
            onImportJson={() => { }}
          />
        )}

        {!isEmpty && (
          <div className="space-y-6">
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

"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Upload, Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KeyEditorCard } from "./KeyEditorCard"
import { KeysEmpty } from "./KeysEmpty"
import { CreateKeyForm } from "./CreateKeyForm"
import { CreateKeyDialog } from "./CreateKeyDialog"
import type { TranslationKey } from "./types"
import { LANGUAGES } from "./types"

export function KeysItems({ projectId }: { projectId: string }) {
  const [keys, setKeys] = useState<TranslationKey[]>([])
  const [createOpen, setCreateOpen] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")

  const isEmpty = keys.length === 0

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return
    setKeys((prev) => [
      ...prev,
      {
        id: `key-${Date.now()}`,
        key: newKeyName.trim(),
        values: Object.fromEntries(LANGUAGES.map((l) => [l.code, ""])),
      },
    ])
    setNewKeyName("")
    setCreateOpen(false)
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

  const handleDeleteKey = (keyId: string) => {
    setKeys((prev) => prev.filter((k) => k.id !== keyId))
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

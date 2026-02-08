'use client'

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createProject, getPlatformLanguages } from "@/app/services/client"
import type { PlatformLanguageItem } from "@/app/services/client/projectClient"

type CreateDialogProps = {
  children: React.ReactNode
  onSuccess?: () => void
}

export function CreateDialog({ children, onSuccess }: CreateDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [platformLanguages, setPlatformLanguages] = useState<PlatformLanguageItem[]>([])
  const [langsLoading, setLangsLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const fetchPlatformLanguages = useCallback(async () => {
    setLangsLoading(true)
    try {
      const list = await getPlatformLanguages()
      setPlatformLanguages(list)
    } catch {
      setPlatformLanguages([])
    } finally {
      setLangsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (open) fetchPlatformLanguages()
  }, [open, fetchPlatformLanguages])

  const handleLanguageChange = (langCode: string, checked: boolean) => {
    if (checked) {
      setSelectedLanguages((prev) => [...prev, langCode])
    } else {
      setSelectedLanguages((prev) => prev.filter((l) => l !== langCode))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!name.trim()) {
      setError("项目名称不能为空")
      setLoading(false)
      return
    }

    if (selectedLanguages.length === 0) {
      setError("至少需要选择一个语言")
      setLoading(false)
      return
    }

    try {
      await createProject({
        name: name.trim(),
        description: description.trim() || undefined,
        languages: selectedLanguages,
      })
        setOpen(false)
        setName("")
        setDescription("")
        setSelectedLanguages([])
        router.refresh()
        onSuccess?.()
    } catch (err) {
      const message = err instanceof Error ? err.message : "网络错误，请稍后重试"
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>创建项目</DialogTitle>
            <DialogDescription>
              创建一个新项目来开始管理您的翻译
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="name">项目名称</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例如: 我的应用"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">项目描述</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="输入项目描述 (可选)"
                rows={3}
              />
            </div>
            <div className="grid gap-3">
              <Label>支持的语言</Label>
              {langsLoading ? (
                <p className="text-muted-foreground text-sm">加载语言列表...</p>
              ) : platformLanguages.length === 0 ? (
                <p className="text-muted-foreground text-sm">暂无平台语言，请先在管理后台配置。</p>
              ) : (
                <div className="flex flex-wrap gap-4">
                  {platformLanguages.map((lang) => (
                    <div key={lang.code} className="flex items-center space-x-2">
                      <Checkbox
                        id={lang.code}
                        checked={selectedLanguages.includes(lang.code)}
                        onCheckedChange={(checked) =>
                          handleLanguageChange(lang.code, checked === true)
                        }
                      />
                      <Label htmlFor={lang.code} className="cursor-pointer">
                        {lang.name}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {error && (
              <div className="text-sm text-destructive">{error}</div>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={loading}>
                取消
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "创建中..." : "创建"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

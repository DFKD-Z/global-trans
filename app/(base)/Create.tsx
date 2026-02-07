'use client'

import { useState } from "react"
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
import { apiFetch } from "@/lib/apiClient"

const LANGUAGES = [
    {
        label: '简体中文',
        value: 'zh-CN',
    },
    {
        label: 'English (US)',
        value: 'en-US',
    },
    {
        label: 'English (GB)',
        value: 'en-GB',
    },
    {
        label: '日本語',
        value: 'ja-JP',
    },
    {
        label: '한국어',
        value: 'ko-KR',
    },
]

type CreateDialogProps = {
  children: React.ReactNode
  onSuccess?: () => void
}

export function CreateDialog({ children, onSuccess }: CreateDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

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
      const response = await apiFetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim() || undefined,
          languages: selectedLanguages,
        }),
      })

      const data = await response.json()

      if (data.code === 200) {
        setOpen(false)
        setName("")
        setDescription("")
        setSelectedLanguages([])
        router.refresh()
        onSuccess?.()
      } else {
        setError(data.msg || "创建项目失败")
      }
    } catch (err) {
      setError("网络错误，请稍后重试")
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
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={lang.value}
                      checked={selectedLanguages.includes(lang.value)}
                      onCheckedChange={(checked) =>
                        handleLanguageChange(lang.value, checked === true)
                      }
                    />
                    <Label htmlFor={lang.value} className="cursor-pointer">
                      {lang.label}
                    </Label>
                  </div>
                ))}
              </div>
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

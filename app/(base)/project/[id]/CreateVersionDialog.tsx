"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

type CreateVersionDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  versionName: string
  versionDesc: string
  onVersionNameChange: (value: string) => void
  onVersionDescChange: (value: string) => void
  onSubmit: () => void
}

export function CreateVersionDialog({
  open,
  onOpenChange,
  versionName,
  versionDesc,
  onVersionNameChange,
  onVersionDescChange,
  onSubmit,
}: CreateVersionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" showCloseButton>
        <DialogHeader>
          <DialogTitle>创建新版本</DialogTitle>
          <DialogDescription>填写版本信息开始创建</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="version-name">版本名称</Label>
            <Input
              id="version-name"
              placeholder="例如: v1.0.0"
              value={versionName}
              onChange={(e) => onVersionNameChange(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="version-desc">版本描述</Label>
            <Textarea
              id="version-desc"
              placeholder="输入版本描述 (可选)"
              value={versionDesc}
              onChange={(e) => onVersionDescChange(e.target.value)}
              className="min-h-[80px] resize-y"
              rows={3}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            取消
          </Button>
          <Button onClick={onSubmit}>创建</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

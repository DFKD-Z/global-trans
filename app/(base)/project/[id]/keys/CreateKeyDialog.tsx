"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function CreateKeyDialog({
  open,
  onOpenChange,
  keyName,
  onKeyNameChange,
  onSubmit,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  keyName: string
  onKeyNameChange: (value: string) => void
  onSubmit: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" showCloseButton>
        <DialogHeader>
          <DialogTitle>创建新翻译键</DialogTitle>
          <DialogDescription>输入翻译键名称</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="dialog-key-name">翻译键名称</Label>
            <Input
              id="dialog-key-name"
              placeholder="例如: common.button.submit"
              value={keyName}
              onChange={(e) => onKeyNameChange(e.target.value)}
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

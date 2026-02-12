"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateKeyForm({
  keyName,
  onKeyNameChange,
  onCancel,
  onSubmit,
}: {
  keyName: string
  onKeyNameChange: (value: string) => void
  onCancel: () => void
  onSubmit: () => void
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>创建新翻译键</CardTitle>
        <CardDescription>输入翻译键名称</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="key-name">翻译键名称</Label>
          <Input
            id="key-name"
            placeholder="例如: common.button.submit"
            value={keyName}
            onChange={(e) => onKeyNameChange(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>
            取消
          </Button>
          <Button onClick={onSubmit}>创建</Button>
        </div>
      </CardContent>
    </Card>
  )
}

"use client";

/** admin.menu.createUser */
const LABEL_TITLE = "创建用户";
/** admin.createUser.email */
const LABEL_EMAIL = "邮箱";
/** admin.createUser.password */
const LABEL_PASSWORD = "密码";
/** admin.createUser.isSuperAdmin */
const LABEL_SUPER_ADMIN = "设为超级管理员";
/** admin.actions.submit */
const LABEL_SUBMIT = "创建";

import React, { useState } from "react";
import { createUser, type CreateUserInput } from "@/app/services/client/adminClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export interface CreateUserFormProps {
  onSuccess?: () => void;
}

export function CreateUserForm({ onSuccess }: CreateUserFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resultDialog, setResultDialog] = useState<{
    open: boolean;
    title: string;
    description: string;
  }>({ open: false, title: "", description: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setResultDialog({ open: true, title: "提示", description: "请填写邮箱和密码。" });
      return;
    }
    setSubmitting(true);
    try {
      const input: CreateUserInput = { email: email.trim(), password, isSuperAdmin };
      await createUser(input);
      setEmail("");
      setPassword("");
      setIsSuperAdmin(false);
      onSuccess?.();
      setResultDialog({ open: true, title: "创建成功", description: "用户已创建。" });
    } catch (e) {
      setResultDialog({
        open: true,
        title: "创建失败",
        description: e instanceof Error ? e.message : "创建失败",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{LABEL_TITLE}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
          <div className="grid gap-2">
            <Label htmlFor="cu-email">{LABEL_EMAIL}</Label>
            <Input
              id="cu-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cu-password">{LABEL_PASSWORD}</Label>
            <Input
              id="cu-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="至少 8 位"
              minLength={8}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="cu-super"
              checked={isSuperAdmin}
              onCheckedChange={(v) => setIsSuperAdmin(v === true)}
            />
            <Label htmlFor="cu-super" className="font-normal cursor-pointer">
              {LABEL_SUPER_ADMIN}
            </Label>
          </div>
          <Button type="submit" disabled={submitting}>
            {submitting ? "创建中..." : LABEL_SUBMIT}
          </Button>
        </form>
      </CardContent>

      {/* 操作结果提示 */}
      <AlertDialog
        open={resultDialog.open}
        onOpenChange={(open) => setResultDialog((r) => ({ ...r, open }))}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{resultDialog.title}</AlertDialogTitle>
            <AlertDialogDescription>{resultDialog.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>确定</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

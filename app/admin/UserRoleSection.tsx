"use client";

/** admin.menu.userRoles */
const LABEL_TITLE = "账号角色";
/** admin.roles.superAdmin */
const LABEL_SUPER_ADMIN = "超级管理员";
/** admin.user.email */
const LABEL_EMAIL = "邮箱";
/** admin.user.createdAt */
const LABEL_CREATED = "注册时间";
/** admin.actions.delete */
const LABEL_DELETE = "删除";
/** admin.deleteUser.confirm */
const LABEL_DELETE_CONFIRM = "确定删除该用户吗？此操作不可恢复。";
/** admin.result.ok */
const LABEL_OK = "确定";

import React, { useCallback, useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useAuth } from "@/app/provider/AuthProvider";
import {
  getAdminUsers,
  updateUserRole,
  deleteUser,
  type UserItem,
} from "@/app/services/client/adminClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function UserRoleSection() {
  const { user: currentUser } = useAuth();
  const [list, setList] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [userToDelete, setUserToDelete] = useState<UserItem | null>(null);
  const [resultDialog, setResultDialog] = useState<{
    open: boolean;
    title: string;
    description: string;
  }>({ open: false, title: "", description: "" });

  const showResult = useCallback((title: string, description: string) => {
    setResultDialog({ open: true, title, description });
  }, []);

  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAdminUsers();
      setList(data);
    } catch (e) {
      showResult("加载失败", e instanceof Error ? e.message : "加载失败");
    } finally {
      setLoading(false);
    }
  }, [showResult]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleToggleSuperAdmin = async (user: UserItem) => {
    const next = !user.isSuperAdmin;
    setUpdatingId(user.id);
    try {
      await updateUserRole(user.id, next);
      setList((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, isSuperAdmin: next } : u))
      );
      showResult("更新成功", "角色已更新。");
    } catch (e) {
      showResult("更新失败", e instanceof Error ? e.message : "更新失败");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteClick = (user: UserItem) => setUserToDelete(user);

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return;
    const id = userToDelete.id;
    setUserToDelete(null);
    try {
      await deleteUser(id);
      setList((prev) => prev.filter((u) => u.id !== id));
      showResult("删除成功", "用户已删除。");
    } catch (e) {
      showResult("删除失败", e instanceof Error ? e.message : "删除失败");
    }
  };

  const formatDate = (s: string) => {
    try {
      return new Date(s).toLocaleString();
    } catch {
      return s;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{LABEL_TITLE}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground text-sm">加载中...</p>
        ) : list.length === 0 ? (
          <p className="text-muted-foreground text-sm">暂无用户</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{LABEL_EMAIL}</TableHead>
                <TableHead>{LABEL_CREATED}</TableHead>
                <TableHead className="w-[140px]">{LABEL_SUPER_ADMIN}</TableHead>
                <TableHead className="w-[100px]">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.email}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(row.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={row.isSuperAdmin}
                      disabled={updatingId === row.id}
                      onCheckedChange={() => handleToggleSuperAdmin(row)}
                      aria-label={`${LABEL_SUPER_ADMIN} ${row.email}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 text-destructive"
                      disabled={row.id === currentUser?.id}
                      onClick={() => handleDeleteClick(row)}
                      aria-label={LABEL_DELETE}
                      title={row.id === currentUser?.id ? "不能删除当前登录账号" : LABEL_DELETE}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      {/* 删除确认 */}
      <AlertDialog open={!!userToDelete} onOpenChange={(open) => !open && setUserToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{LABEL_DELETE}</AlertDialogTitle>
            <AlertDialogDescription>
              {userToDelete
                ? `确定删除用户「${userToDelete.email}」吗？此操作不可恢复。`
                : LABEL_DELETE_CONFIRM}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="destructive"
                onClick={handleDeleteConfirm}
              >
                删除
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
            <AlertDialogCancel>{LABEL_OK}</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
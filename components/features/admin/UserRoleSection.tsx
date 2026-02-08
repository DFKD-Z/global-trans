"use client";

/** admin.menu.userRoles */
const LABEL_TITLE = "账号角色";
/** admin.roles.superAdmin */
const LABEL_SUPER_ADMIN = "超级管理员";
/** admin.user.email */
const LABEL_EMAIL = "邮箱";
/** admin.user.createdAt */
const LABEL_CREATED = "注册时间";

import React, { useCallback, useEffect, useState } from "react";
import { getAdminUsers, updateUserRole, type UserItem } from "@/app/services/client/adminClient";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

export function UserRoleSection() {
  const [list, setList] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAdminUsers();
      setList(data);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "加载失败");
    } finally {
      setLoading(false);
    }
  }, []);

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
      toast.success("更新成功");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "更新失败");
    } finally {
      setUpdatingId(null);
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

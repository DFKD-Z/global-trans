"use client";

/** admin.menu.platformLanguages */
const LABEL_TITLE = "平台语言配置";
/** admin.platformLanguage.code */
const LABEL_CODE = "语言代码";
/** admin.platformLanguage.name */
const LABEL_NAME = "显示名";
/** admin.platformLanguage.sortOrder */
const LABEL_SORT = "排序";
/** admin.actions.add */
const LABEL_ADD = "新增";
/** admin.actions.edit */
const LABEL_EDIT = "编辑";
/** admin.actions.delete */
const LABEL_DELETE = "删除";
/** admin.actions.save */
const LABEL_SAVE = "保存";
/** admin.actions.cancel */
const LABEL_CANCEL = "取消";

import React, { useCallback, useEffect, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import {
  getPlatformLanguages,
  createPlatformLanguage,
  updatePlatformLanguage,
  deletePlatformLanguage,
  type PlatformLanguageItem,
  type CreatePlatformLanguageInput,
} from "@/app/services/client/adminClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

export function PlatformLanguageSection() {
  const [list, setList] = useState<PlatformLanguageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<CreatePlatformLanguageInput>({
    code: "",
    name: "",
    sortOrder: 0,
  });

  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPlatformLanguages();
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

  const openCreate = () => {
    setEditingId(null);
    setForm({ code: "", name: "", sortOrder: list.length });
    setDialogOpen(true);
  };

  const openEdit = (row: PlatformLanguageItem) => {
    setEditingId(row.id);
    setForm({
      code: row.code,
      name: row.name,
      sortOrder: row.sortOrder,
    });
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await updatePlatformLanguage(editingId, form);
        toast.success("更新成功");
      } else {
        await createPlatformLanguage(form);
        toast.success("创建成功");
      }
      setDialogOpen(false);
      fetchList();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "操作失败");
    }
  };

  const handleDelete = async (id: string, code: string) => {
    if (!confirm(`确定删除语言「${code}」吗？`)) return;
    try {
      await deletePlatformLanguage(id);
      toast.success("删除成功");
      fetchList();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "删除失败");
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{LABEL_TITLE}</CardTitle>
        <Button size="sm" onClick={openCreate}>
          <Plus className="size-4" />
          {LABEL_ADD}
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground text-sm">加载中...</p>
        ) : list.length === 0 ? (
          <p className="text-muted-foreground text-sm">暂无数据，点击「新增」添加平台支持的语言。</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{LABEL_CODE}</TableHead>
                <TableHead>{LABEL_NAME}</TableHead>
                <TableHead>{LABEL_SORT}</TableHead>
                <TableHead className="w-[120px]">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.sortOrder}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        onClick={() => openEdit(row)}
                        aria-label={LABEL_EDIT}
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-destructive"
                        onClick={() => handleDelete(row.id, row.code)}
                        aria-label={LABEL_DELETE}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? LABEL_EDIT : LABEL_ADD}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="pl-code">{LABEL_CODE}</Label>
              <Input
                id="pl-code"
                value={form.code}
                onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
                placeholder="如 en-US, zh-CN"
                disabled={!!editingId}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pl-name">{LABEL_NAME}</Label>
              <Input
                id="pl-name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="如 英语(美国)"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pl-sort">{LABEL_SORT}</Label>
              <Input
                id="pl-sort"
                type="number"
                value={form.sortOrder ?? 0}
                onChange={(e) =>
                  setForm((f) => ({ ...f, sortOrder: parseInt(e.target.value, 10) || 0 }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              {LABEL_CANCEL}
            </Button>
            <Button onClick={handleSubmit}>{LABEL_SAVE}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

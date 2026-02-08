/**
 * Admin API 客户端（仅超级管理员功能）
 */
import { apiFetch } from "@/lib/apiClient";
import type { ApiResponse } from "@/app/services/common/types";

export interface PlatformLanguageItem {
  id: string;
  code: string;
  name: string;
  sortOrder: number;
}

export interface CreatePlatformLanguageInput {
  code: string;
  name: string;
  sortOrder?: number;
}

export interface UserItem {
  id: string;
  email: string;
  isSuperAdmin: boolean;
  createdAt: string;
}

export interface CreateUserInput {
  email: string;
  password: string;
  isSuperAdmin?: boolean;
}

export async function getPlatformLanguages(): Promise<PlatformLanguageItem[]> {
  const res = await apiFetch("/api/admin/platform-languages");
  const json = (await res.json()) as ApiResponse<PlatformLanguageItem[]>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg ?? "获取平台语言列表失败");
}

export async function createPlatformLanguage(
  input: CreatePlatformLanguageInput
): Promise<PlatformLanguageItem> {
  const res = await apiFetch("/api/admin/platform-languages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<PlatformLanguageItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg ?? "创建失败");
}

export async function updatePlatformLanguage(
  id: string,
  input: Partial<CreatePlatformLanguageInput>
): Promise<PlatformLanguageItem> {
  const res = await apiFetch(`/api/admin/platform-languages/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<PlatformLanguageItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg ?? "更新失败");
}

export async function deletePlatformLanguage(id: string): Promise<void> {
  const res = await apiFetch(`/api/admin/platform-languages/${id}`, {
    method: "DELETE",
  });
  const json = (await res.json()) as ApiResponse;
  if (json.code !== 200) throw new Error(json.msg ?? "删除失败");
}

export async function getAdminUsers(): Promise<UserItem[]> {
  const res = await apiFetch("/api/admin/users");
  const json = (await res.json()) as ApiResponse<UserItem[]>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg ?? "获取用户列表失败");
}

export async function createUser(input: CreateUserInput): Promise<UserItem> {
  const res = await apiFetch("/api/admin/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<UserItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg ?? "创建用户失败");
}

export async function updateUserRole(
  userId: string,
  isSuperAdmin: boolean
): Promise<UserItem> {
  const res = await apiFetch(`/api/admin/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isSuperAdmin }),
  });
  const json = (await res.json()) as ApiResponse<UserItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg ?? "更新角色失败");
}

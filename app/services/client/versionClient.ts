/**
 * 版本 API 客户端 - 纯前端调用
 * 封装创建版本、获取版本列表、删除版本等 HTTP 请求
 */
import { apiFetch } from "@/lib/apiClient";
import type { ApiResponse } from "@/app/services/common/types";

export interface VersionItem {
  id: string;
  name: string;
  projectId: string;
  createdAt: string;
}

export interface CreateVersionInput {
  name: string;
}

/** 获取项目的版本列表 */
export async function getVersions(projectId: string): Promise<VersionItem[]> {
  const res = await apiFetch(`/api/projects/${projectId}/versions`);
  const json = (await res.json()) as ApiResponse<VersionItem[]>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取版本列表失败");
}

/** 获取版本详情 */
export async function getVersion(versionId: string): Promise<VersionItem> {
  const res = await apiFetch(`/api/versions/${versionId}`);
  const json = (await res.json()) as ApiResponse<VersionItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取版本详情失败");
}

/** 创建版本 */
export async function createVersion(
  projectId: string,
  input: CreateVersionInput
): Promise<VersionItem> {
  const res = await apiFetch(`/api/projects/${projectId}/versions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<VersionItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "创建版本失败");
}

/** 删除版本 */
export async function deleteVersion(versionId: string): Promise<void> {
  const res = await apiFetch(`/api/versions/${versionId}`, { method: "DELETE" });
  const json = (await res.json()) as ApiResponse;
  if (json.code !== 200) throw new Error(json.msg || "删除版本失败");
}

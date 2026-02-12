/**
 * 项目 API 客户端 - 纯前端调用
 * 封装创建项目、获取项目列表、删除项目等 HTTP 请求
 */
import { apiFetch } from "@/lib/apiClient";
import type { ApiResponse } from "@/app/services/common/types";

export interface ProjectItem {
  id: string;
  name: string;
  description: string | null;
  languages: Array<{ id: string; code: string; isSource: boolean }>;
  createdAt: string;
}

export interface CreateProjectInput {
  name: string;
  description?: string;
  languages: string[];
}

/** 平台语言项（与 GET /api/platform-languages 返回一致，供创建项目、Keys 页使用） */
export interface PlatformLanguageItem {
  id: string;
  code: string;
  name: string;
  sortOrder: number;
}

/** 获取平台语言列表（已登录可访问，供创建项目与 Keys 页语言选项） */
export async function getPlatformLanguages(): Promise<PlatformLanguageItem[]> {
  const res = await apiFetch("/api/platform-languages");
  const json = (await res.json()) as ApiResponse<PlatformLanguageItem[]>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取平台语言列表失败");
}

/** 获取项目列表 */
export async function getProjects(): Promise<ProjectItem[]> {
  const res = await apiFetch("/api/projects");
  const json = (await res.json()) as ApiResponse<ProjectItem[]>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取项目列表失败");
}

/** 获取项目详情 */
export async function getProject(projectId: string): Promise<ProjectItem> {
  const res = await apiFetch(`/api/projects/${projectId}`);
  const json = (await res.json()) as ApiResponse<ProjectItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取项目详情失败");
}

/** 创建项目 */
export async function createProject(input: CreateProjectInput): Promise<ProjectItem> {
  const res = await apiFetch("/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<ProjectItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "创建项目失败");
}

/** 删除项目 */
export async function deleteProject(projectId: string): Promise<void> {
  const res = await apiFetch(`/api/projects/${projectId}`, { method: "DELETE" });
  const json = (await res.json()) as ApiResponse;
  if (json.code !== 200) throw new Error(json.msg || "删除项目失败");
}

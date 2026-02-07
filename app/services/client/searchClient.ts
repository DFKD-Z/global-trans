/**
 * 搜索 API 客户端 - 纯前端调用
 * 封装全局搜索（项目、版本、翻译键）
 */
import { apiFetch } from "@/lib/apiClient";
import type { ApiResponse } from "@/app/services/common/types";

export interface GlobalSearchResult {
  projects: Array<{ id: string; name: string }>;
  versions: Array<{
    id: string;
    name: string;
    projectId: string;
    projectName: string;
  }>;
  keys: Array<{
    id: string;
    name: string;
    versionId: string;
    projectId: string;
    versionName: string;
    projectName: string;
  }>;
}

/** 全局搜索 */
export async function search(q?: string): Promise<GlobalSearchResult> {
  const url = q
    ? `/api/search?q=${encodeURIComponent(q)}`
    : "/api/search";
  const res = await apiFetch(url);
  const json = (await res.json()) as ApiResponse<GlobalSearchResult>;
  if (json.code === 200 && json.data) return json.data;
  return { projects: [], versions: [], keys: [] };
}

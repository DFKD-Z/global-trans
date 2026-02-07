/**
 * 翻译键 API 客户端 - 纯前端调用
 * 封装创建键、获取键列表、批量更新、删除键等 HTTP 请求
 */
import { apiFetch } from "@/lib/apiClient";
import type { ApiResponse } from "@/app/services/common/types";

export interface KeyItem {
  id: string;
  name: string;
  values: Array<{ langCode: string; content: string }>;
}

export interface BatchUpdateKeyItem {
  id: string;
  name: string;
  values: Record<string, string>;
}

/** 获取版本的翻译键列表 */
export async function getKeys(versionId: string): Promise<KeyItem[]> {
  const res = await apiFetch(`/api/versions/${versionId}/keys`);
  const json = (await res.json()) as ApiResponse<KeyItem[]>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取翻译键列表失败");
}

/** 创建翻译键 */
export async function createKey(
  versionId: string,
  input: { name: string; comment?: string }
): Promise<KeyItem> {
  const res = await apiFetch(`/api/versions/${versionId}/keys`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<KeyItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "创建翻译键失败");
}

/** 批量更新翻译键 */
export async function batchUpdateKeys(
  versionId: string,
  keys: BatchUpdateKeyItem[]
): Promise<void> {
  const res = await apiFetch(`/api/versions/${versionId}/keys`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keys }),
  });
  const json = (await res.json()) as ApiResponse;
  if (json.code !== 200) throw new Error(json.msg || "批量更新失败");
}

/** 获取翻译键详情 */
export async function getKey(keyId: string): Promise<KeyItem> {
  const res = await apiFetch(`/api/keys/${keyId}`);
  const json = (await res.json()) as ApiResponse<KeyItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "获取翻译键详情失败");
}

/** 更新翻译键 */
export async function updateKey(
  keyId: string,
  input: { name?: string; values?: Record<string, string> }
): Promise<KeyItem> {
  const res = await apiFetch(`/api/keys/${keyId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const json = (await res.json()) as ApiResponse<KeyItem>;
  if (json.code === 200 && json.data) return json.data;
  throw new Error(json.msg || "更新翻译键失败");
}

/** 删除翻译键 */
export async function deleteKey(keyId: string): Promise<void> {
  const res = await apiFetch(`/api/keys/${keyId}`, { method: "DELETE" });
  const json = (await res.json()) as ApiResponse;
  if (json.code !== 200) throw new Error(json.msg || "删除翻译键失败");
}

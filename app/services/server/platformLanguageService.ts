/**
 * 平台支持语言 CRUD（仅超级管理员通过 Admin API 调用）
 */
import { db } from "@/app/services/server/db";

export interface PlatformLanguageInput {
  code: string;
  name: string;
  sortOrder?: number;
}

export interface PlatformLanguageItem {
  id: string;
  code: string;
  name: string;
  sortOrder: number;
}

export async function listPlatformLanguages(): Promise<PlatformLanguageItem[]> {
  const list = await db.platformLanguage.findMany({
    orderBy: [{ sortOrder: "asc" }, { code: "asc" }],
  });
  return list.map((row) => ({
    id: row.id,
    code: row.code,
    name: row.name,
    sortOrder: row.sortOrder,
  }));
}

export async function createPlatformLanguage(
  input: PlatformLanguageInput
): Promise<PlatformLanguageItem> {
  const { code, name, sortOrder = 0 } = input;
  const created = await db.platformLanguage.create({
    data: { code: code.trim(), name: name.trim(), sortOrder },
  });
  return {
    id: created.id,
    code: created.code,
    name: created.name,
    sortOrder: created.sortOrder,
  };
}

export async function updatePlatformLanguage(
  id: string,
  input: Partial<PlatformLanguageInput>
): Promise<PlatformLanguageItem> {
  const data: { code?: string; name?: string; sortOrder?: number } = {};
  if (input.code !== undefined) data.code = input.code.trim();
  if (input.name !== undefined) data.name = input.name.trim();
  if (input.sortOrder !== undefined) data.sortOrder = input.sortOrder;

  const updated = await db.platformLanguage.update({
    where: { id },
    data,
  });
  return {
    id: updated.id,
    code: updated.code,
    name: updated.name,
    sortOrder: updated.sortOrder,
  };
}

export async function deletePlatformLanguage(id: string): Promise<void> {
  await db.platformLanguage.delete({ where: { id } });
}

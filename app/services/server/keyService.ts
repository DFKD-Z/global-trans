/**
 * 翻译键业务逻辑服务
 */
import { db } from "@/app/services/common/db";
import { getVersionById } from "./versionService";

/**
 * 创建翻译键输入参数
 */
export interface CreateKeyInput {
  name: string;
  versionId: string;
  comment?: string;
}

/**
 * 翻译键响应数据
 */
export interface KeyResponse {
  id: string;
  name: string;
  comment: string | null;
  versionId: string;
  values: Array<{
    id: string;
    langCode: string;
    content: string;
    isAiTranslated: boolean;
  }>;
}

/**
 * 创建翻译键
 * @param userId 用户 ID
 * @param input 翻译键输入参数
 * @returns 翻译键响应数据
 * @throws 如果版本不存在、用户无权限或键名已存在
 */
export async function createKey(
  userId: string,
  input: CreateKeyInput
): Promise<KeyResponse> {
  const { name, versionId, comment } = input;

  // 验证键名称
  if (!name || name.trim().length === 0) {
    throw new Error("翻译键名称不能为空");
  }

  if (name.length > 200) {
    throw new Error("翻译键名称长度不能超过 200 个字符");
  }

  // 验证键名称格式（使用点分隔的路径，如 common.button.submit）
  const keyNamePattern = /^[a-zA-Z0-9._-]+$/;
  if (!keyNamePattern.test(name.trim())) {
    throw new Error("翻译键名称只能包含字母、数字、点、下划线和连字符");
  }

  // 验证用户是否有权限访问该版本
  await getVersionById(versionId, userId);

  // 检查同一版本下是否已存在同名键
  const existingKey = await db.transKey.findUnique({
    where: {
      versionId_name: {
        versionId,
        name: name.trim(),
      },
    },
  });

  if (existingKey) {
    throw new Error("该翻译键名称已存在");
  }

  // 创建翻译键
  const key = await db.transKey.create({
    data: {
      name: name.trim(),
      versionId,
      comment: comment?.trim() || null,
    },
    include: {
      values: true,
    },
  });

  return {
    id: key.id,
    name: key.name,
    comment: key.comment,
    versionId: key.versionId,
    values: key.values.map((value) => ({
      id: value.id,
      langCode: value.langCode,
      content: value.content,
      isAiTranslated: value.isAiTranslated,
    })),
  };
}

/**
 * 获取版本的翻译键列表
 * @param versionId 版本 ID
 * @param userId 用户 ID（用于权限验证）
 * @returns 翻译键列表
 */
export async function getVersionKeys(
  versionId: string,
  userId: string
): Promise<KeyResponse[]> {
  // 验证用户是否有权限访问该版本
  await getVersionById(versionId, userId);

  // 查询翻译键列表
  const keys = await db.transKey.findMany({
    where: { versionId },
    include: {
      values: true,
    },
    orderBy: { name: "asc" },
  });

  return keys.map((key) => ({
    id: key.id,
    name: key.name,
    comment: key.comment,
    versionId: key.versionId,
    values: key.values.map((value) => ({
      id: value.id,
      langCode: value.langCode,
      content: value.content,
      isAiTranslated: value.isAiTranslated,
    })),
  }));
}

/**
 * 获取翻译键详情
 * @param keyId 翻译键 ID
 * @param userId 用户 ID（用于权限验证）
 * @returns 翻译键详情
 * @throws 如果翻译键不存在或用户无权限
 */
export async function getKeyById(
  keyId: string,
  userId: string
): Promise<KeyResponse> {
  const key = await db.transKey.findUnique({
    where: { id: keyId },
    include: {
      version: true,
      values: true,
    },
  });

  if (!key) {
    throw new Error("翻译键不存在");
  }

  // 验证用户是否有权限访问该版本
  await getVersionById(key.versionId, userId);

  return {
    id: key.id,
    name: key.name,
    comment: key.comment,
    versionId: key.versionId,
    values: key.values.map((value) => ({
      id: value.id,
      langCode: value.langCode,
      content: value.content,
      isAiTranslated: value.isAiTranslated,
    })),
  };
}

/**
 * 删除翻译键
 * @param keyId 翻译键 ID
 * @param userId 用户 ID（用于权限验证）
 * @throws 如果翻译键不存在或用户无权限
 */
export async function deleteKey(
  keyId: string,
  userId: string
): Promise<void> {
  const key = await db.transKey.findUnique({
    where: { id: keyId },
    include: {
      version: {
        include: {
          project: {
            include: {
              members: {
                where: { userId },
              },
            },
          },
        },
      },
    },
  });

  if (!key) {
    throw new Error("翻译键不存在");
  }

  // 检查用户权限（translator 和 manager 都可以删除键）
  const member = key.version.project.members[0];
  if (!member || (member.role !== "manager" && member.role !== "translator")) {
    throw new Error("您没有权限删除翻译键");
  }

  // 删除翻译键（级联删除会自动删除关联的 values）
  await db.transKey.delete({
    where: { id: keyId },
  });
}

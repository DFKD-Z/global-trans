/**
 * 翻译键业务逻辑服务（服务端专用）
 */
import { db } from "@/app/services/server/db";
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
 * 更新翻译键输入参数
 */
export interface UpdateKeyInput {
  name?: string;
  values?: Record<string, string>;
}

/**
 * 更新翻译键（键名和/或翻译值）
 * @param keyId 翻译键 ID
 * @param userId 用户 ID（用于权限验证）
 * @param input 更新参数
 * @returns 更新后的翻译键
 * @throws 如果翻译键不存在、用户无权限或键名冲突
 */
export async function updateKey(
  keyId: string,
  userId: string,
  input: UpdateKeyInput
): Promise<KeyResponse> {
  const { name, values } = input;

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

  await getVersionById(key.versionId, userId);

  await db.$transaction(async (tx) => {
    if (name !== undefined && name.trim() !== key.name) {
      const trimmedName = name.trim();
      if (!trimmedName) {
        throw new Error("翻译键名称不能为空");
      }
      if (trimmedName.length > 200) {
        throw new Error("翻译键名称长度不能超过 200 个字符");
      }
      const keyNamePattern = /^[a-zA-Z0-9._-]+$/;
      if (!keyNamePattern.test(trimmedName)) {
        throw new Error("翻译键名称只能包含字母、数字、点、下划线和连字符");
      }
      const existingKey = await tx.transKey.findUnique({
        where: {
          versionId_name: {
            versionId: key.versionId,
            name: trimmedName,
          },
        },
      });
      if (existingKey) {
        throw new Error("该翻译键名称已存在");
      }
      await tx.transKey.update({
        where: { id: keyId },
        data: { name: trimmedName },
      });
    }

    if (values && typeof values === "object") {
      for (const [langCode, content] of Object.entries(values)) {
        const contentStr = content ?? "";
        await tx.transValue.upsert({
          where: {
            keyId_langCode: { keyId, langCode },
          },
          create: {
            keyId,
            langCode,
            content: contentStr,
          },
          update: { content: contentStr },
        });
      }
    }
  });

  const updated = await db.transKey.findUnique({
    where: { id: keyId },
    include: { values: true },
  });

  if (!updated) {
    throw new Error("更新后获取翻译键失败");
  }

  return {
    id: updated.id,
    name: updated.name,
    comment: updated.comment,
    versionId: updated.versionId,
    values: updated.values.map((value) => ({
      id: value.id,
      langCode: value.langCode,
      content: value.content,
      isAiTranslated: value.isAiTranslated,
    })),
  };
}

/**
 * 批量更新翻译键输入项
 */
export interface BatchUpdateKeyItem {
  id: string;
  name: string;
  values: Record<string, string>;
}

/**
 * 批量更新翻译键（一次请求更新所有键）
 * @param versionId 版本 ID
 * @param userId 用户 ID（用于权限验证）
 * @param keys 待更新的翻译键列表
 * @throws 如果版本不存在、用户无权限或任一键更新失败
 */
export async function batchUpdateKeys(
  versionId: string,
  userId: string,
  keys: BatchUpdateKeyItem[]
): Promise<void> {
  await getVersionById(versionId, userId);

  await db.$transaction(async (tx) => {
    for (const item of keys) {
      const key = await tx.transKey.findUnique({
        where: { id: item.id },
        include: { values: true },
      });

      if (!key || key.versionId !== versionId) {
        throw new Error(`翻译键 ${item.id} 不存在或不属于当前版本`);
      }

      const trimmedName = item.name?.trim() ?? "";
      if (!trimmedName) {
        throw new Error("翻译键名称不能为空");
      }
      if (trimmedName.length > 200) {
        throw new Error("翻译键名称长度不能超过 200 个字符");
      }
      const keyNamePattern = /^[a-zA-Z0-9._-]+$/;
      if (!keyNamePattern.test(trimmedName)) {
        throw new Error("翻译键名称只能包含字母、数字、点、下划线和连字符");
      }

      if (trimmedName !== key.name) {
        const existingKey = await tx.transKey.findUnique({
          where: {
            versionId_name: { versionId, name: trimmedName },
          },
        });
        if (existingKey) {
          throw new Error(`该翻译键名称「${trimmedName}」已存在`);
        }
        await tx.transKey.update({
          where: { id: item.id },
          data: { name: trimmedName },
        });
      }

      if (item.values && typeof item.values === "object") {
        for (const [langCode, content] of Object.entries(item.values)) {
          const contentStr = content ?? "";
          await tx.transValue.upsert({
            where: {
              keyId_langCode: { keyId: item.id, langCode },
            },
            create: {
              keyId: item.id,
              langCode,
              content: contentStr,
            },
            update: { content: contentStr },
          });
        }
      }
    }
  });
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

  // 因外键 ON DELETE RESTRICT，需先删除子记录 TransValue，再删除 TransKey
  await db.$transaction([
    db.transValue.deleteMany({ where: { keyId } }),
    db.transKey.delete({ where: { id: keyId } }),
  ]);
}

/**
 * 版本业务逻辑服务
 */
import { db } from "@/app/services/common/db";
import { getProjectById } from "./projectService";

/**
 * 创建版本输入参数
 */
export interface CreateVersionInput {
  name: string;
  projectId: string;
}

/**
 * 版本响应数据
 */
export interface VersionResponse {
  id: string;
  name: string;
  projectId: string;
  createdAt: Date;
}

/**
 * 创建版本
 * @param userId 用户 ID
 * @param input 版本输入参数
 * @returns 版本响应数据
 * @throws 如果项目不存在、用户无权限或版本名已存在
 */
export async function createVersion(
  userId: string,
  input: CreateVersionInput
): Promise<VersionResponse> {
  const { name, projectId } = input;

  // 验证版本名称
  if (!name || name.trim().length === 0) {
    throw new Error("版本名称不能为空");
  }

  if (name.length > 50) {
    throw new Error("版本名称长度不能超过 50 个字符");
  }

  // 验证版本名称格式（可选：如 v1.0.0）
  const versionNamePattern = /^[a-zA-Z0-9._-]+$/;
  if (!versionNamePattern.test(name.trim())) {
    throw new Error("版本名称只能包含字母、数字、点、下划线和连字符");
  }

  // 验证用户是否有权限访问该项目
  await getProjectById(projectId, userId);

  // 检查同一项目下是否已存在同名版本
  const existingVersion = await db.version.findFirst({
    where: {
      projectId,
      name: name.trim(),
    },
  });

  if (existingVersion) {
    throw new Error("该版本名称已存在");
  }

  // 创建版本
  const version = await db.version.create({
    data: {
      name: name.trim(),
      projectId,
    },
  });

  return {
    id: version.id,
    name: version.name,
    projectId: version.projectId,
    createdAt: version.createdAt,
  };
}

/**
 * 获取项目的版本列表
 * @param projectId 项目 ID
 * @param userId 用户 ID（用于权限验证）
 * @returns 版本列表
 */
export async function getProjectVersions(
  projectId: string,
  userId: string
): Promise<VersionResponse[]> {
  // 验证用户是否有权限访问该项目
  await getProjectById(projectId, userId);

  // 查询版本列表
  const versions = await db.version.findMany({
    where: { projectId },
    orderBy: { createdAt: "desc" },
  });

  return versions.map((version) => ({
    id: version.id,
    name: version.name,
    projectId: version.projectId,
    createdAt: version.createdAt,
  }));
}

/**
 * 获取版本详情
 * @param versionId 版本 ID
 * @param userId 用户 ID（用于权限验证）
 * @returns 版本详情
 * @throws 如果版本不存在或用户无权限
 */
export async function getVersionById(
  versionId: string,
  userId: string
): Promise<VersionResponse> {
  const version = await db.version.findUnique({
    where: { id: versionId },
    include: {
      project: true,
    },
  });

  if (!version) {
    throw new Error("版本不存在");
  }

  // 验证用户是否有权限访问该项目
  await getProjectById(version.projectId, userId);

  return {
    id: version.id,
    name: version.name,
    projectId: version.projectId,
    createdAt: version.createdAt,
  };
}

/**
 * 删除版本
 * @param versionId 版本 ID
 * @param userId 用户 ID（用于权限验证）
 * @throws 如果版本不存在或用户无权限
 */
export async function deleteVersion(
  versionId: string,
  userId: string
): Promise<void> {
  const version = await db.version.findUnique({
    where: { id: versionId },
    include: {
      project: {
        include: {
          members: {
            where: { userId },
          },
        },
      },
    },
  });

  if (!version) {
    throw new Error("版本不存在");
  }

  // 检查用户权限（只有 manager 可以删除版本）
  const member = version.project.members[0];
  if (!member || member.role !== "manager") {
    throw new Error("只有项目管理员可以删除版本");
  }

  // 因外键 ON DELETE RESTRICT，需先删除 TransValue、TransKey 再删除 Version
  await db.$transaction(async (tx) => {
    const keys = await tx.transKey.findMany({
      where: { versionId },
      select: { id: true },
    });
    const keyIds = keys.map((k) => k.id);
    if (keyIds.length > 0) {
      await tx.transValue.deleteMany({ where: { keyId: { in: keyIds } } });
    }
    await tx.transKey.deleteMany({ where: { versionId } });
    await tx.version.delete({ where: { id: versionId } });
  });
}

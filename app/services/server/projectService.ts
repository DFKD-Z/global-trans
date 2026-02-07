/**
 * 项目业务逻辑服务（服务端专用）
 */
import { db } from "@/app/services/server/db";
import type { ApiResponse } from "./types";

/**
 * 创建项目输入参数
 */
export interface CreateProjectInput {
  name: string;
  description?: string;
  languages: string[]; // 语言代码数组，如 ["zh-CN", "en-US"]
}

/**
 * 项目响应数据
 */
export interface ProjectResponse {
  id: string;
  name: string;
  description: string | null;
  languages: Array<{
    id: string;
    code: string;
    isSource: boolean;
  }>;
  createdAt: Date;
}

/**
 * 创建项目
 * @param userId 用户 ID
 * @param input 项目输入参数
 * @returns 项目响应数据
 * @throws 如果项目名称已存在或输入无效
 */
export async function createProject(
  userId: string,
  input: CreateProjectInput
): Promise<ProjectResponse> {
  const { name, description, languages } = input;

  // 验证项目名称
  if (!name || name.trim().length === 0) {
    throw new Error("项目名称不能为空");
  }

  if (name.length > 100) {
    throw new Error("项目名称长度不能超过 100 个字符");
  }

  // 验证语言列表
  if (!languages || languages.length === 0) {
    throw new Error("至少需要选择一个语言");
  }

  // 验证语言代码格式（简单验证）
  const validLangPattern = /^[a-z]{2}(-[A-Z]{2})?$/;
  for (const lang of languages) {
    if (!validLangPattern.test(lang)) {
      throw new Error(`语言代码格式不正确: ${lang}`);
    }
  }

  // 使用事务创建项目和项目成员
  const result = await db.$transaction(async (tx) => {
    // 创建项目
    const project = await tx.project.create({
      data: {
        name: name.trim(),
        description: description?.trim() || null,
      },
    });

    // 创建项目语言配置（第一个语言作为源语言）
    const projectLanguages = await Promise.all(
      languages.map((code, index) =>
        tx.projectLanguage.create({
          data: {
            projectId: project.id,
            code,
            isSource: index === 0, // 第一个语言作为源语言
          },
        })
      )
    );

    // 创建项目成员（创建者自动成为 manager）
    await tx.projectMember.create({
      data: {
        projectId: project.id,
        userId,
        role: "manager",
      },
    });

    return {
      project,
      languages: projectLanguages,
    };
  });

  return {
    id: result.project.id,
    name: result.project.name,
    description: result.project.description,
    languages: result.languages.map((lang) => ({
      id: lang.id,
      code: lang.code,
      isSource: lang.isSource,
    })),
    createdAt: result.project.createdAt,
  };
}

/**
 * 获取用户的项目列表
 * @param userId 用户 ID
 * @returns 项目列表
 */
export async function getUserProjects(
  userId: string
): Promise<ProjectResponse[]> {
  // 通过 ProjectMember 关联查询用户的项目
  const members = await db.projectMember.findMany({
    where: { userId },
    include: {
      project: {
        include: {
          languages: {
            orderBy: { isSource: "desc" }, // 源语言排在前面
          },
        },
      },
    },
    orderBy: {
      project: {
        createdAt: "desc",
      },
    },
  });

  return members.map((member) => ({
    id: member.project.id,
    name: member.project.name,
    description: member.project.description,
    languages: member.project.languages.map((lang) => ({
      id: lang.id,
      code: lang.code,
      isSource: lang.isSource,
    })),
    createdAt: member.project.createdAt,
  }));
}

/**
 * 获取项目详情
 * @param projectId 项目 ID
 * @param userId 用户 ID（用于权限验证）
 * @returns 项目详情
 * @throws 如果项目不存在或用户无权限
 */
export async function getProjectById(
  projectId: string,
  userId: string
): Promise<ProjectResponse> {
  // 检查用户是否有权限访问该项目
  const member = await db.projectMember.findUnique({
    where: {
      projectId_userId: {
        projectId,
        userId,
      },
    },
    include: {
      project: {
        include: {
          languages: {
            orderBy: { isSource: "desc" },
          },
        },
      },
    },
  });

  if (!member) {
    throw new Error("项目不存在或您没有权限访问");
  }

  return {
    id: member.project.id,
    name: member.project.name,
    description: member.project.description,
    languages: member.project.languages.map((lang) => ({
      id: lang.id,
      code: lang.code,
      isSource: lang.isSource,
    })),
    createdAt: member.project.createdAt,
  };
}

/**
 * 删除项目
 * @param projectId 项目 ID
 * @param userId 用户 ID（用于权限验证）
 * @throws 如果项目不存在或用户无权限
 */
export async function deleteProject(
  projectId: string,
  userId: string
): Promise<void> {
  // 检查用户是否有权限删除该项目（只有 manager 可以删除）
  const member = await db.projectMember.findUnique({
    where: {
      projectId_userId: {
        projectId,
        userId,
      },
    },
  });

  if (!member) {
    throw new Error("项目不存在或您没有权限访问");
  }

  if (member.role !== "manager") {
    throw new Error("只有项目管理员可以删除项目");
  }

  // 因外键 ON DELETE RESTRICT，需按依赖顺序删除：TransValue -> TransKey -> Version -> ProjectLanguage -> ProjectMember -> Project
  await db.$transaction(async (tx) => {
    const versions = await tx.version.findMany({
      where: { projectId },
      select: { id: true },
    });
    const versionIds = versions.map((v) => v.id);
    if (versionIds.length > 0) {
      const keys = await tx.transKey.findMany({
        where: { versionId: { in: versionIds } },
        select: { id: true },
      });
      const keyIds = keys.map((k) => k.id);
      if (keyIds.length > 0) {
        await tx.transValue.deleteMany({ where: { keyId: { in: keyIds } } });
      }
      await tx.transKey.deleteMany({ where: { versionId: { in: versionIds } } });
      await tx.version.deleteMany({ where: { projectId } });
    }
    await tx.projectLanguage.deleteMany({ where: { projectId } });
    await tx.projectMember.deleteMany({ where: { projectId } });
    await tx.project.delete({ where: { id: projectId } });
  });
}

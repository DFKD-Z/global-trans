/**
 * 全局搜索业务逻辑服务（服务端专用）
 * 按关键词搜索当前用户有权限的项目、版本、翻译键
 */
import { db } from "@/app/services/server/db";

/** 搜索结果中的项目项 */
export interface SearchProjectItem {
  id: string;
  name: string;
}

/** 搜索结果中的版本项（含所属项目名） */
export interface SearchVersionItem {
  id: string;
  name: string;
  projectId: string;
  projectName: string;
}

/** 搜索结果中的翻译键项（含所属版本、项目名） */
export interface SearchKeyItem {
  id: string;
  name: string;
  versionId: string;
  projectId: string;
  versionName: string;
  projectName: string;
}

/** 全局搜索结果 */
export interface GlobalSearchResult {
  projects: SearchProjectItem[];
  versions: SearchVersionItem[];
  keys: SearchKeyItem[];
}

/**
 * 全局搜索：按关键词搜索项目、版本、翻译键（仅限当前用户有权限的数据）
 * @param userId 用户 ID
 * @param q 搜索关键词，为空或空格时返回全部（限制数量避免过大）
 * @returns 分组后的项目、版本、键列表
 */
export async function globalSearch(
  userId: string,
  q?: string
): Promise<GlobalSearchResult> {
  const keyword = (q ?? "").trim();
  const hasKeyword = keyword.length > 0;

  if(!hasKeyword) {
    return { projects: [], versions: [], keys: [] };
  }

  // 用户有权限的项目 ID 列表
  const members = await db.projectMember.findMany({
    where: { userId },
    select: { projectId: true },
  });
  const projectIds = members.map((m) => m.projectId);
  if (projectIds.length === 0) {
    return { projects: [], versions: [], keys: [] };
  }

  const limit = 20;

  const [projects, versions, keys] = await Promise.all([
    // 项目：名称匹配
    db.project.findMany({
      where: {
        id: { in: projectIds },
        ...(hasKeyword && {
          name: { contains: keyword, mode: "insensitive" },
        }),
      },
      select: { id: true, name: true },
      take: limit,
      orderBy: { createdAt: "desc" },
    }),

    // 版本：名称匹配，且项目属于用户
    db.version.findMany({
      where: {
        projectId: { in: projectIds },
        ...(hasKeyword && {
          name: { contains: keyword, mode: "insensitive" },
        }),
      },
      include: { project: { select: { name: true } } },
      take: limit,
      orderBy: { createdAt: "desc" },
    }),

    // 翻译键：名称匹配，且所属版本的项目属于用户
    db.transKey.findMany({
      where: {
        version: { projectId: { in: projectIds } },
        ...(hasKeyword && {
          name: { contains: keyword, mode: "insensitive" },
        }),
      },
      include: {
        version: {
          select: { name: true, projectId: true, project: { select: { name: true } } },
        },
      },
      take: limit,
      orderBy: { name: "asc" },
    }),
  ]);

  return {
    projects: projects.map((p) => ({ id: p.id, name: p.name })),
    versions: versions.map((v) => ({
      id: v.id,
      name: v.name,
      projectId: v.projectId,
      projectName: v.project.name,
    })),
    keys: keys.map((k) => ({
      id: k.id,
      name: k.name,
      versionId: k.versionId,
      projectId: k.version.projectId,
      versionName: k.version.name,
      projectName: k.version.project.name,
    })),
  };
}

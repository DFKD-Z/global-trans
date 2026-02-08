/**
 * Admin API 鉴权：要求当前用户为超级管理员，否则返回 403
 * 供 app/api/admin/* 路由使用
 */
import type { NextRequest } from "next/server";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import { getCurrentUser } from "@/app/services/server/authService";
import type { ApiResponse } from "@/app/services/server/types";

const FORBIDDEN_JSON: ApiResponse = {
  code: 403,
  msg: "仅超级管理员可执行此操作",
};

/**
 * 校验请求方为超级管理员
 * @param request NextRequest
 * @returns 若为 superAdmin 返回用户信息，否则返回 null（调用方需返回 403）
 */
export async function requireSuperAdmin(request: NextRequest): Promise<{
  userId: string;
  email: string;
  isSuperAdmin: true;
} | null> {
  const authUser = getAuthUserFromRequest(request);
  if (!authUser) return null;

  const user = await getCurrentUser(authUser.userId);
  if (!user.isSuperAdmin) return null;

  return {
    userId: user.id,
    email: user.email,
    isSuperAdmin: true,
  };
}

/** 403 响应体，供 API 路由使用 NextResponse.json(FORBIDDEN_JSON, { status: 403 }) */
export { FORBIDDEN_JSON };

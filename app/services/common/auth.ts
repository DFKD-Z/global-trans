/**
 * 认证工具 - 供 API 路由从 Middleware 注入的 headers 中读取用户信息
 * 仅当请求已通过 Middleware 的 Token 验证后，这些 headers 才会存在
 */
import type { NextRequest } from "next/server";

/** Middleware 注入的用户 ID 头 */
export const AUTH_USER_ID_HEADER = "x-user-id";
/** Middleware 注入的用户邮箱头 */
export const AUTH_USER_EMAIL_HEADER = "x-user-email";

export interface AuthUser {
  userId: string;
  email: string;
}

/**
 * 从请求头中获取已认证用户信息（由 Middleware 注入）
 * @param request NextRequest 对象
 * @returns 用户信息，若 headers 不存在则返回 null
 */
export function getAuthUserFromRequest(request: NextRequest): AuthUser | null {
  const userId = request.headers.get(AUTH_USER_ID_HEADER);
  const email = request.headers.get(AUTH_USER_EMAIL_HEADER);

  if (!userId || !email) {
    return null;
  }

  return { userId, email };
}

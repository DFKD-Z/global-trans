/**
 * Next.js Middleware - 统一认证与路由保护
 * 1. API 路由：验证 Token，未登录/过期返回 401 JSON，有效时注入用户信息到 headers
 * 2. 页面路由：未登录/过期重定向到登录页
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getTokenFromCookies,
  verifyTokenEdge,
} from "@/app/services/common/jwt";
import {
  AUTH_USER_ID_HEADER,
  AUTH_USER_EMAIL_HEADER,
} from "@/app/services/common/auth";

/** 无需认证的 API 路径前缀 */
const PUBLIC_API_PREFIXES = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/logout",
];

/** 需要保护的页面路径 */
const PROTECTED_PAGE_PATHS = ["/", "/project", "/admin"];

/** 公开页面路径（不需要认证） */
const PUBLIC_PAGE_PATHS = ["/login", "/signup"];

/** 统一 401 响应体 */
const UNAUTHORIZED_JSON = { code: 401, msg: "未登录或 Token 已过期" };

/**
 * 判断 API 路径是否需要认证
 */
function isProtectedApiPath(pathname: string): boolean {
  if (!pathname.startsWith("/api/")) return false;
  return !PUBLIC_API_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

/**
 * 判断页面路径是否需要保护
 */
function isProtectedPagePath(pathname: string): boolean {
  if (PUBLIC_PAGE_PATHS.some((p) => pathname.startsWith(p))) return false;
  return PROTECTED_PAGE_PATHS.some((p) => {
    if (p === "/") return pathname === "/";
    return pathname.startsWith(p);
  });
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = getTokenFromCookies(request.cookies);
  const payload = token ? await verifyTokenEdge(token) : null;

  // ========== API 路由：统一认证 ==========
  if (pathname.startsWith("/api/")) {
    if (!isProtectedApiPath(pathname)) {
      return NextResponse.next();
    }

    if (!token || !payload) {
      return NextResponse.json(UNAUTHORIZED_JSON, { status: 401 });
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(AUTH_USER_ID_HEADER, payload.userId);
    requestHeaders.set(AUTH_USER_EMAIL_HEADER, payload.email);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // ========== 页面路由：未认证时重定向到登录页 ==========
  if (!isProtectedPagePath(pathname)) {
    return NextResponse.next();
  }

  if (!token || !payload) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

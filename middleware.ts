/**
 * Next.js Middleware - 路由保护
 * 在服务端拦截未授权的请求，重定向到登录页
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTokenFromCookies, verifyTokenEdge } from "@/app/services/common/jwt";

// 需要保护的路由路径（匹配规则）
const protectedPaths = ["/", "/project"];

// 公开路由（不需要认证）
const publicPaths = ["/login", "/signup"];

/**
 * 检查路径是否需要保护
 */
function isProtectedPath(pathname: string): boolean {
  // 检查是否是公开路由
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return false;
  }

  // 检查是否是受保护的路由
  return protectedPaths.some((path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  });
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 如果是公开路由，直接放行
  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  // 获取 Token
  const token = getTokenFromCookies(request.cookies);
  
  // 如果没有 Token，重定向到登录页
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    // 保存原始 URL，登录后可以跳转回来
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 验证 Token（使用 Edge Runtime 兼容的函数）
  const payload = await verifyTokenEdge(token);
  // 如果 Token 无效，重定向到登录页
  if (!payload) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Token 有效，继续请求
  return NextResponse.next();
}

// 配置中间件匹配规则
export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了：
     * - api 路由
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (图标)
     * - 公开文件 (public 目录)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

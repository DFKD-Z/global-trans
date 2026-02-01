/**
 * JWT Token 生成、验证和 Cookie 管理工具
 */
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const TOKEN_NAME = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 天

export interface TokenPayload {
  userId: string;
  email: string;
}

/**
 * 生成 JWT Token
 * @param userId 用户 ID
 * @param email 用户邮箱
 * @returns JWT Token 字符串
 */
export function generateToken(userId: string, email: string): string {
  return jwt.sign({ userId, email }, JWT_SECRET, {
    expiresIn: "7d",
  });
}

/**
 * 验证 JWT Token
 * @param token JWT Token 字符串
 * @returns Token 载荷或 null（如果无效）
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * 设置 JWT Token 到 httpOnly Cookie
 * @param response NextResponse 对象
 * @param token JWT Token 字符串
 */
export function setTokenCookie(
  response: NextResponse,
  token: string
): void {
  response.cookies.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

/**
 * 清除 JWT Token Cookie
 * @param response NextResponse 对象
 */
export function clearTokenCookie(response: NextResponse): void {
  response.cookies.set(TOKEN_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
}

/**
 * 从请求中获取 Token
 * @param cookies Next.js Request cookies 对象
 * @returns JWT Token 或 null
 */
export function getTokenFromCookies(
  cookies: { get: (name: string) => { value: string } | undefined }
): string | null {
  const token = cookies.get(TOKEN_NAME);
  return token?.value || null;
}

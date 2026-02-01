/**
 * 获取当前用户信息接口
 * GET /api/auth/me
 */
import { NextRequest, NextResponse } from "next/server";
import { getTokenFromCookies, verifyToken } from "@/app/services/common/jwt";
import { getCurrentUser } from "@/app/services/server/authService";
import type { ApiResponse, UserResponse } from "@/app/services/server/types";

export async function GET(request: NextRequest) {
  try {
    // 从 Cookie 中获取 Token
    const token = getTokenFromCookies(request.cookies);

    if (!token) {
      const response: ApiResponse = {
        code: 401,
        msg: "未登录",
      };
      return NextResponse.json(response, { status: 401 });
    }

    // 验证 Token
    const payload = verifyToken(token);

    if (!payload) {
      const response: ApiResponse = {
        code: 401,
        msg: "Token 无效或已过期",
      };
      return NextResponse.json(response, { status: 401 });
    }

    // 获取用户信息
    const user = await getCurrentUser(payload.userId);

    const response: ApiResponse<UserResponse> = {
      code: 200,
      data: user,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取用户信息失败";

    const response: ApiResponse = {
      code: 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 500 });
  }
}

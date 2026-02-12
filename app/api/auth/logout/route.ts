/**
 * 用户登出接口
 * POST /api/auth/logout
 */
import { NextResponse } from "next/server";
import { clearTokenCookie } from "@/app/services/common/jwt";
import type { ApiResponse } from "@/app/services/server/types";

export async function POST() {
  try {
    // 创建响应
    const response = NextResponse.json<ApiResponse>({
      code: 200,
      msg: "登出成功",
    });

    // 清除 JWT Cookie
    clearTokenCookie(response);

    return response;
  } catch (error) {
    const response: ApiResponse = {
      code: 500,
      msg: "登出失败，请稍后重试",
    };

    return NextResponse.json(response, { status: 500 });
  }
}

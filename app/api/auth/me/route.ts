/**
 * 获取当前用户信息接口
 * GET /api/auth/me
 */
import { NextRequest, NextResponse } from "next/server";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import { getCurrentUser } from "@/app/services/server/authService";
import type { ApiResponse, UserResponse } from "@/app/services/server/types";

export async function GET(request: NextRequest) {
  try {
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const user = await getCurrentUser(authUser.userId);

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

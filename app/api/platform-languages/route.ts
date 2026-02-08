/**
 * 平台语言列表（只读）- 已登录用户可访问，供创建项目、Keys 页使用
 * GET /api/platform-languages
 */
import { NextRequest, NextResponse } from "next/server";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import { listPlatformLanguages } from "@/app/services/server/platformLanguageService";
import type { ApiResponse } from "@/app/services/server/types";
import type { PlatformLanguageItem } from "@/app/services/server/platformLanguageService";

export async function GET(request: NextRequest) {
  const authUser = getAuthUserFromRequest(request);
  if (!authUser) {
    return NextResponse.json(
      { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
      { status: 401 }
    );
  }
  try {
    const list = await listPlatformLanguages();
    const response: ApiResponse<PlatformLanguageItem[]> = {
      code: 200,
      data: list,
      msg: "获取成功",
    };
    return NextResponse.json(response);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "获取失败";
    return NextResponse.json(
      { code: 500, msg } satisfies ApiResponse,
      { status: 500 }
    );
  }
}

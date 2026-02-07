/**
 * 全局搜索接口
 * GET /api/search?q=关键词 - 搜索项目、版本、翻译键
 */
import { NextRequest, NextResponse } from "next/server";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import { globalSearch } from "@/app/services/server/searchService";
import type { ApiResponse } from "@/app/services/server/types";
import type { GlobalSearchResult } from "@/app/services/server/searchService";

/**
 * GET /api/search?q=xxx
 */
export async function GET(request: NextRequest) {
  try {
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") ?? undefined;

    const data: GlobalSearchResult = await globalSearch(authUser.userId, q);

    const response: ApiResponse<GlobalSearchResult> = {
      code: 200,
      data,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "搜索失败";
    return NextResponse.json(
      { code: 500, msg: errorMessage } satisfies ApiResponse,
      { status: 500 }
    );
  }
}

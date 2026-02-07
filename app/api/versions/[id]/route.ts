/**
 * 版本详情接口
 * GET /api/versions/[id] - 获取版本详情
 * DELETE /api/versions/[id] - 删除版本
 */
import { NextRequest, NextResponse } from "next/server";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import {
  getVersionById,
  deleteVersion,
} from "@/app/services/server/versionService";
import type { ApiResponse } from "@/app/services/server/types";

/**
 * 获取版本详情
 * GET /api/versions/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const { id } = await params;

    const version = await getVersionById(id, authUser.userId);

    const response: ApiResponse = {
      code: 200,
      data: version,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取版本详情失败";

    const statusCode = error instanceof Error && error.message.includes("不存在") ? 404 : 500;

    const response: ApiResponse = {
      code: statusCode === 404 ? 404 : 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: statusCode });
  }
}

/**
 * 删除版本
 * DELETE /api/versions/[id]
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const { id } = await params;

    await deleteVersion(id, authUser.userId);

    const response: ApiResponse = {
      code: 200,
      msg: "删除成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "删除版本失败";

    const statusCode = error instanceof Error && error.message.includes("不存在") ? 404 : 400;

    const response: ApiResponse = {
      code: statusCode === 404 ? 404 : 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: statusCode });
  }
}

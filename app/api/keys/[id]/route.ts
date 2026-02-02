/**
 * 翻译键详情接口
 * GET /api/keys/[id] - 获取翻译键详情
 * DELETE /api/keys/[id] - 删除翻译键
 */
import { NextRequest, NextResponse } from "next/server";
import { getTokenFromCookies, verifyToken } from "@/app/services/common/jwt";
import {
  getKeyById,
  deleteKey,
} from "@/app/services/server/keyService";
import type { ApiResponse } from "@/app/services/server/types";

/**
 * 获取翻译键详情
 * GET /api/keys/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;

    // 获取翻译键详情
    const key = await getKeyById(id, payload.userId);

    const response: ApiResponse = {
      code: 200,
      data: key,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取翻译键详情失败";

    const statusCode = error instanceof Error && error.message.includes("不存在") ? 404 : 500;

    const response: ApiResponse = {
      code: statusCode === 404 ? 404 : 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: statusCode });
  }
}

/**
 * 删除翻译键
 * DELETE /api/keys/[id]
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;

    // 删除翻译键
    await deleteKey(id, payload.userId);

    const response: ApiResponse = {
      code: 200,
      msg: "删除成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "删除翻译键失败";

    const statusCode = error instanceof Error && error.message.includes("不存在") ? 404 : 400;

    const response: ApiResponse = {
      code: statusCode === 404 ? 404 : 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: statusCode });
  }
}

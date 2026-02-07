/**
 * 翻译键详情接口
 * GET /api/keys/[id] - 获取翻译键详情
 * PATCH /api/keys/[id] - 更新翻译键（键名和/或翻译值）
 * DELETE /api/keys/[id] - 删除翻译键
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import {
  getKeyById,
  updateKey,
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
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const { id } = await params;

    const key = await getKeyById(id, authUser.userId);

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

const updateKeySchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z0-9._-]+$/, "翻译键名称只能包含字母、数字、点、下划线和连字符")
    .optional(),
  values: z.record(z.string()).optional(),
});

/**
 * 更新翻译键（键名和/或翻译值）
 * PATCH /api/keys/[id]
 */
export async function PATCH(
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

    const body = await request.json();
    const validationResult = updateKeySchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          code: 400,
          msg: validationResult.error.errors[0]?.message || "输入验证失败",
        } satisfies ApiResponse,
        { status: 400 }
      );
    }

    const key = await updateKey(id, authUser.userId, {
      name: validationResult.data.name,
      values: validationResult.data.values,
    });

    return NextResponse.json({
      code: 200,
      data: key,
      msg: "更新成功",
    } satisfies ApiResponse);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "更新翻译键失败";

    const statusCode =
      error instanceof Error && error.message.includes("不存在") ? 404 : 400;

    return NextResponse.json(
      { code: statusCode, msg: errorMessage } satisfies ApiResponse,
      { status: statusCode }
    );
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
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const { id } = await params;

    await deleteKey(id, authUser.userId);

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

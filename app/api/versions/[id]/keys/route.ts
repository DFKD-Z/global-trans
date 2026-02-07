/**
 * 翻译键管理接口
 * GET /api/versions/[id]/keys - 获取翻译键列表
 * POST /api/versions/[id]/keys - 创建翻译键
 * PUT /api/versions/[id]/keys - 批量更新翻译键
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import {
  createKey,
  getVersionKeys,
  batchUpdateKeys,
  type CreateKeyInput,
  type BatchUpdateKeyItem,
} from "@/app/services/server/keyService";
import type { ApiResponse } from "@/app/services/server/types";

// 批量更新翻译键输入验证 Schema
const batchUpdateKeysSchema = z.object({
  keys: z.array(
    z.object({
      id: z.string().min(1, "翻译键 ID 不能为空"),
      name: z
        .string()
        .min(1, "翻译键名称不能为空")
        .max(200, "翻译键名称长度不能超过 200 个字符")
        .regex(/^[a-zA-Z0-9._-]+$/, "翻译键名称只能包含字母、数字、点、下划线和连字符"),
      values: z.record(z.string(), z.string()),
    })
  ),
});

// 创建翻译键输入验证 Schema
const createKeySchema = z.object({
  name: z
    .string()
    .min(1, "翻译键名称不能为空")
    .max(200, "翻译键名称长度不能超过 200 个字符")
    .regex(/^[a-zA-Z0-9._-]+$/, "翻译键名称只能包含字母、数字、点、下划线和连字符"),
  comment: z.string().max(500, "注释长度不能超过 500 个字符").optional(),
});

/**
 * 获取翻译键列表
 * GET /api/versions/[id]/keys
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

    const { id: versionId } = await params;

    const keys = await getVersionKeys(versionId, authUser.userId);

    const response: ApiResponse = {
      code: 200,
      data: keys,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取翻译键列表失败";

    const response: ApiResponse = {
      code: 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 500 });
  }
}

/**
 * 创建翻译键
 * POST /api/versions/[id]/keys
 */
export async function POST(
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

    const { id: versionId } = await params;

    const body = await request.json();

    // 验证输入
    const validationResult = createKeySchema.safeParse(body);

    if (!validationResult.success) {
      const response: ApiResponse = {
        code: 400,
        msg: validationResult.error.issues[0]?.message || "输入验证失败",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const input: CreateKeyInput = {
      name: validationResult.data.name,
      versionId,
      comment: validationResult.data.comment,
    };

    const key = await createKey(authUser.userId, input);

    const response: ApiResponse = {
      code: 200,
      data: key,
      msg: "创建成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    // 处理业务错误
    const errorMessage =
      error instanceof Error ? error.message : "创建翻译键失败，请稍后重试";

    const response: ApiResponse = {
      code: 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 400 });
  }
}

/**
 * 批量更新翻译键
 * PUT /api/versions/[id]/keys
 */
export async function PUT(
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

    const { id: versionId } = await params;
    const body = await request.json();

    const validationResult = batchUpdateKeysSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          code: 400,
          msg: validationResult.error.issues[0]?.message || "输入验证失败",
        } satisfies ApiResponse,
        { status: 400 }
      );
    }

    await batchUpdateKeys(versionId, authUser.userId, validationResult.data.keys as BatchUpdateKeyItem[]);

    return NextResponse.json({
      code: 200,
      msg: "保存成功",
    } satisfies ApiResponse);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "批量更新翻译键失败，请稍后重试";

    return NextResponse.json(
      { code: 400, msg: errorMessage } satisfies ApiResponse,
      { status: 400 }
    );
  }
}

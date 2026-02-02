/**
 * 翻译键管理接口
 * GET /api/versions/[id]/keys - 获取翻译键列表
 * POST /api/versions/[id]/keys - 创建翻译键
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getTokenFromCookies, verifyToken } from "@/app/services/common/jwt";
import {
  createKey,
  getVersionKeys,
  type CreateKeyInput,
} from "@/app/services/server/keyService";
import type { ApiResponse } from "@/app/services/server/types";

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

    const { id: versionId } = await params;

    // 获取翻译键列表
    const keys = await getVersionKeys(versionId, payload.userId);

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

    const { id: versionId } = await params;

    // 解析请求体
    const body = await request.json();

    // 验证输入
    const validationResult = createKeySchema.safeParse(body);

    if (!validationResult.success) {
      const response: ApiResponse = {
        code: 400,
        msg: validationResult.error.errors[0]?.message || "输入验证失败",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const input: CreateKeyInput = {
      name: validationResult.data.name,
      versionId,
      comment: validationResult.data.comment,
    };

    // 调用业务逻辑
    const key = await createKey(payload.userId, input);

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

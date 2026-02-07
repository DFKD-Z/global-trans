/**
 * 版本管理接口
 * GET /api/projects/[id]/versions - 获取版本列表
 * POST /api/projects/[id]/versions - 创建版本
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import {
  createVersion,
  getProjectVersions,
  type CreateVersionInput,
} from "@/app/services/server/versionService";
import type { ApiResponse } from "@/app/services/server/types";

// 创建版本输入验证 Schema
const createVersionSchema = z.object({
  name: z
    .string()
    .min(1, "版本名称不能为空")
    .max(50, "版本名称长度不能超过 50 个字符")
    .regex(/^[a-zA-Z0-9._-]+$/, "版本名称只能包含字母、数字、点、下划线和连字符"),
});

/**
 * 获取版本列表
 * GET /api/projects/[id]/versions
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

    const { id: projectId } = await params;

    const versions = await getProjectVersions(projectId, authUser.userId);

    const response: ApiResponse = {
      code: 200,
      data: versions,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取版本列表失败";

    const response: ApiResponse = {
      code: 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 500 });
  }
}

/**
 * 创建版本
 * POST /api/projects/[id]/versions
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

    const { id: projectId } = await params;

    const body = await request.json();

    // 验证输入
    const validationResult = createVersionSchema.safeParse(body);

    if (!validationResult.success) {
      const response: ApiResponse = {
        code: 400,
        msg: validationResult.error.errors[0]?.message || "输入验证失败",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const input: CreateVersionInput = {
      name: validationResult.data.name,
      projectId,
    };

    const version = await createVersion(authUser.userId, input);

    const response: ApiResponse = {
      code: 200,
      data: version,
      msg: "创建成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    // 处理业务错误
    const errorMessage =
      error instanceof Error ? error.message : "创建版本失败，请稍后重试";

    const response: ApiResponse = {
      code: 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 400 });
  }
}

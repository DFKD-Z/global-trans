/**
 * 项目管理接口
 * GET /api/projects - 获取项目列表
 * POST /api/projects - 创建项目
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAuthUserFromRequest } from "@/app/services/common/auth";
import {
  createProject,
  getUserProjects,
  type CreateProjectInput,
} from "@/app/services/server/projectService";
import type { ApiResponse } from "@/app/services/server/types";

// 创建项目输入验证 Schema
const createProjectSchema = z.object({
  name: z.string().min(1, "项目名称不能为空").max(100, "项目名称长度不能超过 100 个字符"),
  description: z.string().max(500, "项目描述长度不能超过 500 个字符").optional(),
  languages: z
    .array(z.string().min(1, "语言代码不能为空").max(20, "语言代码过长"))
    .min(1, "至少需要选择一个语言"),
});

/**
 * 获取项目列表
 * GET /api/projects
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

    const projects = await getUserProjects(authUser.userId);

    const response: ApiResponse = {
      code: 200,
      data: projects,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取项目列表失败";

    const response: ApiResponse = {
      code: 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 500 });
  }
}

/**
 * 创建项目
 * POST /api/projects
 */
export async function POST(request: NextRequest) {
  try {
    const authUser = getAuthUserFromRequest(request);
    if (!authUser) {
      return NextResponse.json(
        { code: 401, msg: "未登录或 Token 已过期" } satisfies ApiResponse,
        { status: 401 }
      );
    }

    const body = await request.json();

    const validationResult = createProjectSchema.safeParse(body);

    if (!validationResult.success) {
      const firstIssue = validationResult.error.issues[0];
      const response: ApiResponse = {
        code: 400,
        msg: firstIssue?.message ?? "输入验证失败",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const input: CreateProjectInput = validationResult.data;

    const project = await createProject(authUser.userId, input);

    const response: ApiResponse = {
      code: 200,
      data: project,
      msg: "创建成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    // 处理业务错误
    const errorMessage =
      error instanceof Error ? error.message : "创建项目失败，请稍后重试";

    const response: ApiResponse = {
      code: 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 400 });
  }
}

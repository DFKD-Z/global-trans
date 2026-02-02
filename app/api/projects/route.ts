/**
 * 项目管理接口
 * GET /api/projects - 获取项目列表
 * POST /api/projects - 创建项目
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getTokenFromCookies, verifyToken } from "@/app/services/common/jwt";
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
    .array(z.string().regex(/^[a-z]{2}(-[A-Z]{2})?$/, "语言代码格式不正确"))
    .min(1, "至少需要选择一个语言"),
});

/**
 * 获取项目列表
 * GET /api/projects
 */
export async function GET(request: NextRequest) {
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

    // 获取项目列表
    const projects = await getUserProjects(payload.userId);

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

    // 解析请求体
    const body = await request.json();

    // 验证输入
    const validationResult = createProjectSchema.safeParse(body);

    if (!validationResult.success) {
      const response: ApiResponse = {
        code: 400,
        msg: validationResult.error.errors[0]?.message || "输入验证失败",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const input: CreateProjectInput = validationResult.data;

    // 调用业务逻辑
    const project = await createProject(payload.userId, input);

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

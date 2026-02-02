/**
 * 项目详情接口
 * GET /api/projects/[id] - 获取项目详情
 * DELETE /api/projects/[id] - 删除项目
 */
import { NextRequest, NextResponse } from "next/server";
import { getTokenFromCookies, verifyToken } from "@/app/services/common/jwt";
import {
  getProjectById,
  deleteProject,
} from "@/app/services/server/projectService";
import type { ApiResponse } from "@/app/services/server/types";

/**
 * 获取项目详情
 * GET /api/projects/[id]
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

    // 获取项目详情
    const project = await getProjectById(id, payload.userId);

    const response: ApiResponse = {
      code: 200,
      data: project,
      msg: "获取成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "获取项目详情失败";

    const statusCode = error instanceof Error && error.message.includes("不存在") ? 404 : 500;

    const response: ApiResponse = {
      code: statusCode === 404 ? 404 : 500,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: statusCode });
  }
}

/**
 * 删除项目
 * DELETE /api/projects/[id]
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

    // 删除项目
    await deleteProject(id, payload.userId);

    const response: ApiResponse = {
      code: 200,
      msg: "删除成功",
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "删除项目失败";

    const statusCode = error instanceof Error && error.message.includes("不存在") ? 404 : 400;

    const response: ApiResponse = {
      code: statusCode === 404 ? 404 : 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: statusCode });
  }
}

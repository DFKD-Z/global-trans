/**
 * 管理员用户管理接口（仅超级管理员）
 * GET /api/admin/users - 用户列表
 * POST /api/admin/users - 创建用户
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireSuperAdmin, FORBIDDEN_JSON } from "@/app/services/common/adminAuth";
import { listUsers, createUserByAdmin } from "@/app/services/server/authService";
import type { ApiResponse, UserResponse } from "@/app/services/server/types";

const createUserSchema = z.object({
  email: z.string().email("邮箱格式不正确"),
  password: z.string().min(8, "密码长度至少为 8 个字符"),
  isSuperAdmin: z.boolean().optional(),
});

export async function GET(request: NextRequest) {
  const admin = await requireSuperAdmin(request);
  if (!admin) {
    return NextResponse.json(FORBIDDEN_JSON, { status: 403 });
  }
  try {
    const users = await listUsers();
    const response: ApiResponse<UserResponse[]> = {
      code: 200,
      data: users,
      msg: "获取成功",
    };
    return NextResponse.json(response);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "获取失败";
    return NextResponse.json(
      { code: 500, msg } satisfies ApiResponse,
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const admin = await requireSuperAdmin(request);
  if (!admin) {
    return NextResponse.json(FORBIDDEN_JSON, { status: 403 });
  }
  try {
    const body = await request.json();
    const parsed = createUserSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { code: 400, msg: parsed.error.errors[0]?.message ?? "参数错误" } satisfies ApiResponse,
        { status: 400 }
      );
    }
    const user = await createUserByAdmin(parsed.data);
    return NextResponse.json<ApiResponse<UserResponse>>({
      code: 200,
      data: user,
      msg: "创建成功",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "创建失败";
    return NextResponse.json(
      { code: 400, msg } satisfies ApiResponse,
      { status: 400 }
    );
  }
}

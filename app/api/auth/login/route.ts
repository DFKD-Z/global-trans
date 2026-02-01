/**
 * 用户登录接口
 * POST /api/auth/login
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { login } from "@/app/services/server/authService";
import { setTokenCookie } from "@/app/services/common/jwt";
import type { ApiResponse, UserResponse } from "@/app/services/server/types";

// 登录输入验证 Schema
const loginSchema = z.object({
  email: z.string().email("邮箱格式不正确"),
  password: z.string().min(1, "密码不能为空"),
});

export async function POST(request: NextRequest) {
  try {
    // 解析请求体
    const body = await request.json();

    // 验证输入
    const validationResult = loginSchema.safeParse(body);

    if (!validationResult.success) {
      const response: ApiResponse = {
        code: 400,
        msg: validationResult.error.errors[0]?.message || "输入验证失败",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const { email, password } = validationResult.data;

    // 调用业务逻辑
    const authResult = await login({ email, password });

    // 创建响应
    const response = NextResponse.json<ApiResponse<UserResponse>>({
      code: 200,
      data: authResult.user,
      msg: "登录成功",
    });

    // 设置 JWT Cookie
    setTokenCookie(response, authResult.token);

    return response;
  } catch (error) {
    // 处理业务错误
    const errorMessage =
      error instanceof Error ? error.message : "登录失败，请稍后重试";

    const response: ApiResponse = {
      code: 400,
      msg: errorMessage,
    };

    return NextResponse.json(response, { status: 400 });
  }
}

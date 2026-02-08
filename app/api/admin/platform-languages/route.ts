/**
 * 平台语言配置接口（仅超级管理员）
 * GET /api/admin/platform-languages - 列表
 * POST /api/admin/platform-languages - 新增
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireSuperAdmin, FORBIDDEN_JSON } from "@/app/services/common/adminAuth";
import {
  listPlatformLanguages,
  createPlatformLanguage,
} from "@/app/services/server/platformLanguageService";
import type { ApiResponse } from "@/app/services/server/types";
import type { PlatformLanguageItem } from "@/app/services/server/platformLanguageService";

const createSchema = z.object({
  code: z.string().min(1, "语言代码不能为空"),
  name: z.string().min(1, "显示名不能为空"),
  sortOrder: z.number().int().optional(),
});

export async function GET(request: NextRequest) {
  const admin = await requireSuperAdmin(request);
  if (!admin) {
    return NextResponse.json(FORBIDDEN_JSON, { status: 403 });
  }
  try {
    const list = await listPlatformLanguages();
    const response: ApiResponse<PlatformLanguageItem[]> = {
      code: 200,
      data: list,
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
    const parsed = createSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { code: 400, msg: parsed.error.issues[0]?.message ?? "参数错误" } satisfies ApiResponse,
        { status: 400 }
      );
    }
    const item = await createPlatformLanguage(parsed.data);
    return NextResponse.json<ApiResponse<PlatformLanguageItem>>({
      code: 200,
      data: item,
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

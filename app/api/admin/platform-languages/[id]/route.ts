/**
 * 平台语言单条操作（仅超级管理员）
 * PUT /api/admin/platform-languages/[id] - 更新
 * DELETE /api/admin/platform-languages/[id] - 删除
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireSuperAdmin, FORBIDDEN_JSON } from "@/app/services/common/adminAuth";
import {
  updatePlatformLanguage,
  deletePlatformLanguage,
} from "@/app/services/server/platformLanguageService";
import type { ApiResponse } from "@/app/services/server/types";
import type { PlatformLanguageItem } from "@/app/services/server/platformLanguageService";

const updateSchema = z.object({
  code: z.string().min(1).optional(),
  name: z.string().min(1).optional(),
  sortOrder: z.number().int().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireSuperAdmin(request);
  if (!admin) {
    return NextResponse.json(FORBIDDEN_JSON, { status: 403 });
  }
  const { id } = await params;
  try {
    const body = await request.json();
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { code: 400, msg: parsed.error.issues[0]?.message ?? "参数错误" } satisfies ApiResponse,
        { status: 400 }
      );
    }
    const item = await updatePlatformLanguage(id, parsed.data);
    return NextResponse.json<ApiResponse<PlatformLanguageItem>>({
      code: 200,
      data: item,
      msg: "更新成功",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "更新失败";
    return NextResponse.json(
      { code: 400, msg } satisfies ApiResponse,
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireSuperAdmin(request);
  if (!admin) {
    return NextResponse.json(FORBIDDEN_JSON, { status: 403 });
  }
  const { id } = await params;
  try {
    await deletePlatformLanguage(id);
    return NextResponse.json<ApiResponse>({
      code: 200,
      msg: "删除成功",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "删除失败";
    return NextResponse.json(
      { code: 400, msg } satisfies ApiResponse,
      { status: 400 }
    );
  }
}

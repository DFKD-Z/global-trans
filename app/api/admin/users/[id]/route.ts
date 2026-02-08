/**
 * 管理员更新用户角色 / 删除用户（仅超级管理员）
 * PATCH /api/admin/users/[id] - 更新角色
 * DELETE /api/admin/users/[id] - 删除用户（不可删除当前登录用户）
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireSuperAdmin, FORBIDDEN_JSON } from "@/app/services/common/adminAuth";
import { updateUserRole, deleteUserByAdmin } from "@/app/services/server/authService";
import type { ApiResponse, UserResponse } from "@/app/services/server/types";

const patchSchema = z.object({
  isSuperAdmin: z.boolean(),
});

export async function PATCH(
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
    const parsed = patchSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { code: 400, msg: parsed.error.errors[0]?.message ?? "参数错误" } satisfies ApiResponse,
        { status: 400 }
      );
    }
    const user = await updateUserRole(id, { isSuperAdmin: parsed.data.isSuperAdmin });
    return NextResponse.json<ApiResponse<UserResponse>>({
      code: 200,
      data: user,
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
  if (id === admin.userId) {
    return NextResponse.json(
      { code: 400, msg: "不能删除当前登录账号" } satisfies ApiResponse,
      { status: 400 }
    );
  }
  try {
    await deleteUserByAdmin(id);
    return NextResponse.json<ApiResponse>({ code: 200, msg: "删除成功" });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "删除失败";
    return NextResponse.json(
      { code: 400, msg } satisfies ApiResponse,
      { status: 400 }
    );
  }
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/provider/AuthProvider";

/**
 * 仅超级管理员可访问；非 superAdmin 重定向至首页
 */
export function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    if (!user.isSuperAdmin) {
      router.replace("/?admin=forbidden");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-muted-foreground">加载中...</p>
      </div>
    );
  }
  if (!user || !user.isSuperAdmin) {
    return null;
  }
  return <>{children}</>;
}

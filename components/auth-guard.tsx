"use client"

/**
 * 认证保护组件
 * 在客户端检查用户认证状态，未登录时重定向到登录页
 */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/provider/AuthProvider";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  console.log("loading", loading);
    console.log("user", user);

  useEffect(() => {
    // 如果不在加载中且用户未登录，重定向到登录页
    
    if (!loading && !user) {
      console.log("redirecting to /login");
      const currentPath = window.location.pathname;
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
    }
  }, [user, loading, router]);

  // 加载中或已登录时显示内容
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-muted-foreground">加载中...</div>
      </div>
    );
  }

  // 未登录时不渲染内容（会重定向）
  if (!user) {
    return null;
  }

  return <>{children}</>;
}

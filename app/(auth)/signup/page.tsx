"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/signup-form"
import { useAuth } from "@/app/provider/AuthProvider"

export default function SignupPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // 如果已登录，重定向到首页
  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  // 加载中或已登录时不显示注册表单
  if (loading || user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-muted-foreground">加载中...</div>
      </div>
    );
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div> */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        {/* <img
          src="/globe.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  )
}

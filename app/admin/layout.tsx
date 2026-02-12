"use client";

import { ProjectHeader } from "@/components/project-header";
import { AdminGuard } from "@/app/admin/AdminGuard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProjectHeader />
      <AdminGuard>{children}</AdminGuard>
    </div>
  );
}

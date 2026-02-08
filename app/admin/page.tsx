"use client";

/** admin.title */
const LABEL_TITLE = "管理后台";
/** admin.tab.platformLanguages */
const TAB_LANGUAGES = "平台语言";
/** admin.tab.userRoles */
const TAB_ROLES = "账号角色";
/** admin.tab.createUser */
const TAB_CREATE_USER = "创建用户";

import React, { useState, useCallback } from "react";
import { Globe, UserPlus, Users } from "lucide-react";
import { PlatformLanguageSection } from "@/components/features/admin/PlatformLanguageSection";
import { UserRoleSection } from "@/components/features/admin/UserRoleSection";
import { CreateUserForm } from "@/components/features/admin/CreateUserForm";
import { cn } from "@/lib/utils";

type TabId = "languages" | "roles" | "create";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "languages", label: TAB_LANGUAGES, icon: <Globe className="size-4" /> },
  { id: "roles", label: TAB_ROLES, icon: <Users className="size-4" /> },
  { id: "create", label: TAB_CREATE_USER, icon: <UserPlus className="size-4" /> },
];

export default function AdminPage() {
  const [tab, setTab] = useState<TabId>("languages");
  const [userListKey, setUserListKey] = useState(0);

  const onUserCreated = useCallback(() => {
    setUserListKey((k) => k + 1);
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <h1 className="mb-6 text-2xl font-semibold">{LABEL_TITLE}</h1>

      <div className="mb-6 flex gap-2 border-b">
        {TABS.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors",
              tab === id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {tab === "languages" && <PlatformLanguageSection />}
      {tab === "roles" && <UserRoleSection key={userListKey} />}
      {tab === "create" && <CreateUserForm onSuccess={onUserCreated} />}
    </div>
  );
}

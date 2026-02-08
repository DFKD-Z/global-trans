# Admin 管理后台

## 概述

仅**超级管理员**（`User.isSuperAdmin === true`）可访问管理后台，用于：

1. 配置平台支持的国家/语言（供创建项目时选择）
2. 配置账号角色（平台级：是否超级管理员）
3. 手动创建用户账号

## 入口与权限

- **入口**：登录后，头像下拉菜单第一项「管理后台」（仅超级管理员可见），链接至 `/admin`。
- **路由保护**：`/admin` 已加入 `middleware` 的 `PROTECTED_PAGE_PATHS`，未登录访问会重定向到登录页。
- **权限校验**：`app/admin/layout.tsx` 使用 `AdminGuard`，根据 `useAuth().user?.isSuperAdmin` 判断，非超级管理员重定向至首页。

## API 鉴权

所有 `/api/admin/*` 接口在 handler 内调用 `requireSuperAdmin(request)`：

- 未登录或非超级管理员 → 返回 `403`，`{ code: 403, msg: "仅超级管理员可执行此操作" }`。
- 超级管理员 → 继续执行业务逻辑。

## 接口说明

### 平台语言

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/admin/platform-languages` | 获取平台语言列表（按 sortOrder、code 排序） |
| POST | `/api/admin/platform-languages` | 新增，body: `{ code, name, sortOrder? }` |
| PUT | `/api/admin/platform-languages/[id]` | 更新，body: `{ code?, name?, sortOrder? }` |
| DELETE | `/api/admin/platform-languages/[id]` | 删除 |

### 用户管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/admin/users` | 获取用户列表（id, email, isSuperAdmin, createdAt） |
| POST | `/api/admin/users` | 创建用户，body: `{ email, password, isSuperAdmin? }` |
| PATCH | `/api/admin/users/[id]` | 更新用户角色，body: `{ isSuperAdmin }` |

## 数据模型

- **PlatformLanguage**（`prisma/schema.prisma`）：`id`、`code`（唯一）、`name`、`sortOrder`（默认 0）。

部署或首次开发前请执行：

```bash
npx prisma generate
npx prisma migrate dev
```

## 前端组件

- **布局**：`app/admin/layout.tsx` — 顶部 `ProjectHeader` + `AdminGuard` 包裹子页面。
- **页面**：`app/admin/page.tsx` — Tab：平台语言 | 账号角色 | 创建用户，分别渲染：
  - `components/features/admin/PlatformLanguageSection.tsx`
  - `components/features/admin/UserRoleSection.tsx`
  - `components/features/admin/CreateUserForm.tsx`

## i18n 说明

界面文案已使用常量占位（如 `admin.menu.platformLanguages`），便于后续接入语言包。需在语言包中补全对应 key。

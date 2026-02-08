# Global Trans — 国际化翻译平台

基于 **Next.js 16** 的全栈国际化翻译管理平台，支持多项目、多版本、多语言键值管理，并提供 AI 辅助翻译（Moonshot）、JSON 导入导出等能力。

---

## 功能概览

| 模块 | 说明 |
|------|------|
| **用户认证** | 注册、登录、登出；JWT + httpOnly Cookie，路由与 API 统一鉴权 |
| **项目管理** | 创建项目、配置多语言、项目成员与角色（RBAC） |
| **版本管理** | 按版本管理翻译内容，便于迭代与发布 |
| **翻译键管理** | 键名、注释、多语言译文；支持创建、编辑、搜索 |
| **AI 翻译** | 基于 Moonshot 的批量/多语言翻译，一键补全译文 |
| **导入导出** | JSON 格式导入、导出，便于与现有 i18n 流程对接 |

---

## 技术栈

- **框架**: Next.js 16 (App Router)、React 19
- **样式**: Tailwind CSS 4、Radix UI、shadcn/ui 风格组件
- **数据**: PostgreSQL（Supabase）、Prisma ORM
- **认证**: JWT（jose）、bcrypt 密码加密、httpOnly Cookie
- **校验**: Zod
- **AI 翻译**: LangChain + Moonshot API

---

## 项目结构（核心）

```
app/
├── (auth)/              # 登录、注册页面
├── (base)/               # 需登录的主应用
│   ├── page.tsx          # 项目列表
│   └── project/[id]/     # 项目详情 → 版本 → 翻译键
│       └── keys/         # 键列表、编辑器、AI 翻译、导入导出
├── api/                  # API 路由（仅解析与鉴权，业务在 Service）
│   ├── auth/             # 登录、注册、登出、me
│   ├── projects/         # 项目 CRUD、版本
│   ├── versions/         # 版本、键
│   ├── keys/             # 键 CRUD
│   ├── search/           # 搜索
│   └── ai/               # AI 批量翻译
├── services/
│   ├── client/           # 供 RSC/SSR 调用的数据获取
│   ├── server/           # 核心业务逻辑（DB、外部 API）
│   └── common/           # JWT、auth 常量、通用工具
components/               # UI 与业务组件
lib/                      # 工具、API 客户端、AI Agent
prisma/                   # Schema、迁移
doc/                      # 接口、流程、环境与数据库说明
```

---

## 快速开始

### 1. 安装依赖

```bash
pnpm install
# 或 npm install
```

### 2. 配置环境变量

在项目根目录创建 `.env.local`：

```env
# 必需：Supabase PostgreSQL
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres?schema=public"

# 必需：JWT 签名（生产请用强随机 32+ 字符）
JWT_SECRET="dev-secret-key-change-in-production"

# 可选：AI 翻译（不配置则 AI 翻译功能不可用）
MOONSHOT_API_KEY="sk-xxx"

NODE_ENV="development"
```

- 环境变量详细说明：[README-ENV.md](README-ENV.md) / [doc/env-setup.md](doc/env-setup.md)
- 启动前可执行：`pnpm run check-env` 检查必需变量

### 3. 初始化数据库

```bash
pnpm run db:migrate
# 或开发环境快速同步：pnpm run db:push
```

- 数据库说明与故障排查：[doc/database-setup.md](doc/database-setup.md)

### 4. 启动开发服务器

```bash
pnpm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。未登录会跳转登录/注册页。

---

## 常用脚本

| 命令 | 说明 |
|------|------|
| `pnpm run dev` | 启动开发服务器 |
| `pnpm run build` | 生产构建 |
| `pnpm run start` | 生产模式启动 |
| `pnpm run lint` | ESLint 检查 |
| `pnpm run check-env` | 检查必需环境变量 |
| `pnpm run db:migrate` | 执行 Prisma 迁移 |
| `pnpm run db:generate` | 生成 Prisma 客户端 |
| `pnpm run db:studio` | 打开 Prisma Studio |
| `pnpm run db:push` | 开发环境快速同步 Schema |
| `pnpm run db:status` | 查看迁移状态 |

---

## 文档索引

| 文档 | 内容 |
|------|------|
| [README-ENV.md](README-ENV.md) | 环境变量快速配置 |
| [doc/env-setup.md](doc/env-setup.md) | 环境变量详细说明 |
| [doc/database-setup.md](doc/database-setup.md) | 数据库设置与故障排查 |
| [doc/auth-flow.md](doc/auth-flow.md) | 认证流程（注册/登录/登出/me） |
| [doc/auth-api.md](doc/auth-api.md) | 认证相关 API 说明 |
| [doc/auth-middleware.md](doc/auth-middleware.md) | 中间件与路由保护 |

---

## 数据模型简述

- **User**：用户（邮箱、密码哈希、是否超管）
- **Project**：项目（名称、描述、语言配置）
- **ProjectMember**：项目成员与角色（manager / translator / viewer）
- **ProjectLanguage**：项目支持语言及源语言标记
- **Version**：版本（如 v1.0.0）
- **TransKey**：翻译键（键名、注释）
- **TransValue**：键在某语言下的译文（支持 AI 翻译标记）

---

## 架构与规范摘要

- **API 层**：只做参数解析与鉴权，业务逻辑放在 `services/server`。
- **前端**：页面只负责拉取数据与组装；业务组件在 `components`，可复用 UI 在 `components/ui`。
- **认证**：Middleware 统一校验 JWT，保护页面与 API；Token 存 httpOnly Cookie。
- **接口约定**：统一响应格式 `{ code, data?, msg }`，输入使用 Zod 校验。

详见项目规则：`.cursor/rules/server.mdc`。

---

## 许可证

Private.

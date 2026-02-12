# 认证中间件架构说明

## 概述

登录验证与 Token 过期验证已从各 API 路由抽离至统一中间件，实现集中式认证处理。

## 架构变更

### 1. Middleware (`middleware.ts`)

- **API 路由**：对需认证的 `/api/*`（除 login/register/logout）进行 Token 验证
  - 无 Token 或 Token 无效/过期 → 返回 `{ code: 401, msg: "未登录或 Token 已过期" }`
  - 验证通过 → 注入 `x-user-id`、`x-user-email` 到请求头，继续执行

- **页面路由**：对受保护路径（`/`、`/project/*`）进行验证
  - 未认证 → 重定向至 `/login?redirect=原路径`

### 2. 认证工具 (`app/services/common/auth.ts`)

- `getAuthUserFromRequest(request)`：从请求头读取 Middleware 注入的用户信息
- API 路由通过该函数获取 `userId`，不再自行验证 Token

### 3. API 客户端 (`lib/apiClient.ts`)

- `apiFetch`：封装 `fetch`，当响应为 401 时自动跳转至 `/login?redirect=当前路径`
- 所有业务 API 调用（项目、版本、翻译键等）应使用 `apiFetch`

### 4. 公开 API（无需认证）

- `/api/auth/login`
- `/api/auth/register`
- `/api/auth/logout`

## 验证清单

| 场景 | 预期行为 |
|------|----------|
| 未登录访问 `/` | 重定向至 `/login?redirect=/` |
| 未登录访问 `/project/xxx` | 重定向至 `/login?redirect=/project/xxx` |
| Token 过期访问页面 | 重定向至 `/login?redirect=...` |
| 未登录调用 `/api/projects` | 返回 401 JSON |
| Token 过期调用 `/api/projects` | 返回 401 JSON → 前端 apiFetch 跳转登录页 |
| 已登录访问受保护页面/API | 正常访问 |
| 访问 `/api/auth/login` | 无需 Token，正常处理 |

# 认证接口文档

## 概述

本文档描述了认证系统的所有 API 接口，包括注册、登录、登出和获取当前用户信息。

## 统一响应格式

所有接口遵循统一的响应格式：

```typescript
{
  code: number;    // 状态码：200 成功，400 客户端错误，401 未授权，500 服务器错误
  data?: T;        // 响应数据（可选）
  msg: string;     // 响应消息
}
```

## 接口列表

### 1. 用户注册

**接口地址**: `POST /api/auth/register`

**请求头**:
```
Content-Type: application/json
```

**请求体**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**请求参数说明**:
- `email` (string, 必填): 用户邮箱，必须是有效的邮箱格式
- `password` (string, 必填): 用户密码，长度至少 8 个字符

**成功响应** (200):
```json
{
  "code": 200,
  "data": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "isSuperAdmin": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "msg": "注册成功"
}
```

**错误响应** (400):
```json
{
  "code": 400,
  "msg": "该邮箱已被注册"
}
```

**可能的错误消息**:
- `"邮箱格式不正确"` - 邮箱格式验证失败
- `"密码长度至少为 8 个字符"` - 密码长度不足
- `"该邮箱已被注册"` - 邮箱已存在

**注意事项**:
- 注册成功后，JWT Token 会自动设置到 httpOnly Cookie 中
- 密码不会在响应中返回

---

### 2. 用户登录

**接口地址**: `POST /api/auth/login`

**请求头**:
```
Content-Type: application/json
```

**请求体**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**请求参数说明**:
- `email` (string, 必填): 用户邮箱
- `password` (string, 必填): 用户密码

**成功响应** (200):
```json
{
  "code": 200,
  "data": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "isSuperAdmin": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "msg": "登录成功"
}
```

**错误响应** (400):
```json
{
  "code": 400,
  "msg": "邮箱或密码错误"
}
```

**可能的错误消息**:
- `"邮箱格式不正确"` - 邮箱格式验证失败
- `"密码不能为空"` - 密码为空
- `"邮箱或密码错误"` - 邮箱不存在或密码错误

**注意事项**:
- 登录成功后，JWT Token 会自动设置到 httpOnly Cookie 中
- 为了安全，错误消息不区分是邮箱错误还是密码错误

---

### 3. 用户登出

**接口地址**: `POST /api/auth/logout`

**请求头**: 无需特殊请求头（会自动携带 Cookie）

**请求体**: 无

**成功响应** (200):
```json
{
  "code": 200,
  "msg": "登出成功"
}
```

**错误响应** (500):
```json
{
  "code": 500,
  "msg": "登出失败，请稍后重试"
}
```

**注意事项**:
- 登出后会清除 httpOnly Cookie 中的 JWT Token
- 无需传递任何参数，Token 从 Cookie 中自动获取

---

### 4. 获取当前用户信息

**接口地址**: `GET /api/auth/me`

**请求头**: 无需特殊请求头（会自动携带 Cookie）

**请求体**: 无

**成功响应** (200):
```json
{
  "code": 200,
  "data": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "isSuperAdmin": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "msg": "获取成功"
}
```

**错误响应** (401):
```json
{
  "code": 401,
  "msg": "未登录"
}
```

或

```json
{
  "code": 401,
  "msg": "Token 无效或已过期"
}
```

**错误响应** (500):
```json
{
  "code": 500,
  "msg": "获取用户信息失败"
}
```

**注意事项**:
- 需要有效的 JWT Token（通过 Cookie 传递）
- 用于验证用户身份和获取用户信息
- 前端可以在应用启动时调用此接口检查登录状态

---

## 错误码说明

| 错误码 | 说明 | 处理建议 |
|--------|------|----------|
| 200 | 请求成功 | 正常处理响应数据 |
| 400 | 客户端错误 | 检查请求参数和格式 |
| 401 | 未授权 | 需要重新登录 |
| 500 | 服务器错误 | 稍后重试或联系管理员 |

---

## 安全说明

1. **密码加密**: 所有密码使用 bcrypt 加密存储，salt rounds 为 10
2. **Token 存储**: JWT Token 存储在 httpOnly Cookie 中，防止 XSS 攻击
3. **Token 过期**: JWT Token 有效期为 7 天
4. **输入验证**: 所有输入都经过 zod 验证
5. **错误信息**: 错误消息不泄露敏感信息（如不区分邮箱/密码错误）

---

## 使用示例

### JavaScript/TypeScript 示例

```typescript
// 注册
const registerResponse = await fetch("/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    password: "password123",
  }),
});

const registerData = await registerResponse.json();
if (registerData.code === 200) {
  console.log("注册成功", registerData.data);
}

// 登录
const loginResponse = await fetch("/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    password: "password123",
  }),
});

const loginData = await loginResponse.json();
if (loginData.code === 200) {
  console.log("登录成功", loginData.data);
  // Token 已自动设置到 Cookie 中
}

// 获取当前用户
const meResponse = await fetch("/api/auth/me");
const meData = await meResponse.json();
if (meData.code === 200) {
  console.log("当前用户", meData.data);
}

// 登出
const logoutResponse = await fetch("/api/auth/logout", {
  method: "POST",
});
const logoutData = await logoutResponse.json();
if (logoutData.code === 200) {
  console.log("登出成功");
}
```

---

## 环境变量配置

需要在 `.env.local` 文件中配置以下环境变量：

```env
# 数据库连接（Supabase PostgreSQL）
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"

# JWT 签名密钥（生产环境必须修改）
JWT_SECRET="your-secret-key-change-in-production"
```

**重要**: 生产环境必须使用强随机字符串作为 `JWT_SECRET`，建议使用至少 32 个字符的随机字符串。

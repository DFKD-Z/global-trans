# 认证流程说明文档

## 概述

本文档详细说明了认证系统的业务流程，包括注册、登录、登出和身份验证的完整流程。

## 架构设计

### 数据流图

```
┌─────────────┐
│  前端表单    │
└──────┬──────┘
       │ HTTP Request
       ▼
┌─────────────┐
│  API 路由层  │ (参数解析、验证)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Server Service│ (业务逻辑)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Prisma    │ (数据库操作)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Supabase   │ (PostgreSQL)
└─────────────┘
```

## 认证流程

### 1. 用户注册流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Frontend as 前端表单
    participant API as API 路由
    participant Service as 业务服务
    participant DB as 数据库
    participant JWT as JWT 工具

    User->>Frontend: 填写注册信息
    Frontend->>API: POST /api/auth/register
    API->>API: Zod 验证输入
    alt 验证失败
        API->>Frontend: 返回错误
        Frontend->>User: 显示错误信息
    else 验证成功
        API->>Service: register(email, password)
        Service->>Service: 验证邮箱格式
        Service->>DB: 检查邮箱是否已存在
        alt 邮箱已存在
            DB->>Service: 返回用户记录
            Service->>API: 抛出错误
            API->>Frontend: 返回错误
        else 邮箱不存在
            Service->>Service: 验证密码长度
            Service->>Service: 加密密码 (bcrypt)
            Service->>DB: 创建用户
            DB->>Service: 返回新用户
            Service->>JWT: 生成 Token
            JWT->>Service: 返回 Token
            Service->>API: 返回用户信息和 Token
            API->>JWT: 设置 httpOnly Cookie
            API->>Frontend: 返回用户信息
            Frontend->>User: 跳转到首页
        end
    end
```

**流程说明**:

1. **前端验证**: 用户在注册表单中填写邮箱和密码
2. **密码确认**: 前端验证两次密码输入是否一致
3. **API 验证**: 使用 Zod 验证邮箱格式和密码长度
4. **业务逻辑**:
   - 验证邮箱格式（正则表达式）
   - 检查邮箱是否已存在（数据库查询）
   - 验证密码长度（至少 8 个字符）
   - 使用 bcrypt 加密密码（salt rounds: 10）
   - 创建用户记录
5. **Token 生成**: 生成 JWT Token（有效期 7 天）
6. **Cookie 设置**: 将 Token 设置到 httpOnly Cookie 中
7. **响应返回**: 返回用户信息（不包含密码）

---

### 2. 用户登录流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Frontend as 前端表单
    participant API as API 路由
    participant Service as 业务服务
    participant DB as 数据库
    participant JWT as JWT 工具

    User->>Frontend: 输入邮箱和密码
    Frontend->>API: POST /api/auth/login
    API->>API: Zod 验证输入
    alt 验证失败
        API->>Frontend: 返回错误
    else 验证成功
        API->>Service: login(email, password)
        Service->>DB: 根据邮箱查找用户
        alt 用户不存在
            DB->>Service: 返回 null
            Service->>API: 抛出错误
            API->>Frontend: 返回错误
        else 用户存在
            Service->>Service: 验证密码 (bcrypt.compare)
            alt 密码错误
                Service->>API: 抛出错误
                API->>Frontend: 返回错误
            else 密码正确
                Service->>JWT: 生成 Token
                JWT->>Service: 返回 Token
                Service->>API: 返回用户信息和 Token
                API->>JWT: 设置 httpOnly Cookie
                API->>Frontend: 返回用户信息
                Frontend->>User: 更新认证状态并跳转
            end
        end
    end
```

**流程说明**:

1. **前端提交**: 用户提交登录表单
2. **API 验证**: 使用 Zod 验证输入格式
3. **业务逻辑**:
   - 根据邮箱查找用户
   - 如果用户不存在，返回统一错误消息（不区分邮箱/密码错误）
   - 使用 bcrypt 验证密码
   - 如果密码错误，返回统一错误消息
4. **Token 生成**: 生成 JWT Token
5. **Cookie 设置**: 将 Token 设置到 httpOnly Cookie 中
6. **状态更新**: 前端更新认证状态并跳转到首页

**安全考虑**:
- 错误消息统一为"邮箱或密码错误"，不泄露具体是邮箱还是密码错误
- 防止通过错误消息枚举用户邮箱

---

### 3. 身份验证流程（获取当前用户）

```mermaid
sequenceDiagram
    participant Frontend as 前端应用
    participant API as API 路由
    participant JWT as JWT 工具
    participant Service as 业务服务
    participant DB as 数据库

    Frontend->>API: GET /api/auth/me
    API->>JWT: 从 Cookie 获取 Token
    alt Token 不存在
        JWT->>API: 返回 null
        API->>Frontend: 401 未登录
    else Token 存在
        API->>JWT: 验证 Token
        alt Token 无效或过期
            JWT->>API: 返回 null
            API->>Frontend: 401 Token 无效
        else Token 有效
            JWT->>API: 返回 payload (userId, email)
            API->>Service: getCurrentUser(userId)
            Service->>DB: 查询用户信息
            DB->>Service: 返回用户数据
            Service->>API: 返回用户信息
            API->>Frontend: 返回用户信息
            Frontend->>Frontend: 更新认证状态
        end
    end
```

**流程说明**:

1. **Token 获取**: 从 httpOnly Cookie 中读取 JWT Token
2. **Token 验证**: 验证 Token 的有效性和签名
3. **用户查询**: 根据 Token 中的 userId 查询用户信息
4. **响应返回**: 返回用户信息或错误

**使用场景**:
- 应用启动时检查登录状态
- 保护需要认证的路由
- 获取当前用户信息用于显示

---

### 4. 用户登出流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Frontend as 前端应用
    participant API as API 路由
    participant JWT as JWT 工具

    User->>Frontend: 点击登出按钮
    Frontend->>API: POST /api/auth/logout
    API->>JWT: 清除 Cookie
    JWT->>API: Cookie 已清除
    API->>Frontend: 返回成功
    Frontend->>Frontend: 清除本地状态
    Frontend->>User: 跳转到登录页
```

**流程说明**:

1. **请求登出**: 前端发送登出请求
2. **清除 Cookie**: 服务器清除 httpOnly Cookie（设置 maxAge 为 0）
3. **清除状态**: 前端清除本地认证状态
4. **页面跳转**: 跳转到登录页面

---

## 安全措施

### 1. 密码安全

- **加密算法**: 使用 bcrypt 加密，salt rounds 为 10
- **密码策略**: 最少 8 个字符
- **存储**: 密码哈希存储在数据库中，明文密码永不存储

### 2. Token 安全

- **存储位置**: JWT Token 存储在 httpOnly Cookie 中
- **防止 XSS**: httpOnly 标志防止 JavaScript 访问 Cookie
- **有效期**: Token 有效期为 7 天
- **签名验证**: 使用 JWT_SECRET 签名，防止篡改

### 3. 输入验证

- **Zod 验证**: 所有 API 输入都经过 Zod Schema 验证
- **邮箱格式**: 使用正则表达式验证邮箱格式
- **密码长度**: 验证密码最小长度

### 4. 错误处理

- **统一错误消息**: 登录错误不区分邮箱/密码错误，防止用户枚举
- **错误码**: 使用标准 HTTP 状态码
- **错误日志**: 服务器错误记录日志，但不返回敏感信息给客户端

---

## 数据库设计

### User 模型

```prisma
model User {
  id            String          @id @default(cuid())
  email         String          @unique
  password      String          // bcrypt 加密后的密码哈希
  isSuperAdmin  Boolean         @default(false)
  projects      ProjectMember[]
  createdAt     DateTime        @default(now())
}
```

**字段说明**:
- `id`: 用户唯一标识（CUID）
- `email`: 用户邮箱（唯一索引）
- `password`: 加密后的密码哈希
- `isSuperAdmin`: 是否为超级管理员
- `createdAt`: 创建时间

---

## 环境变量

### 必需的环境变量

```env
# 数据库连接字符串（Supabase PostgreSQL）
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"

# JWT 签名密钥（生产环境必须使用强随机字符串）
JWT_SECRET="your-secret-key-change-in-production"
```

### 环境变量说明

- **DATABASE_URL**: Supabase PostgreSQL 数据库连接字符串
- **JWT_SECRET**: JWT Token 签名密钥，生产环境必须使用至少 32 个字符的强随机字符串

---

## 最佳实践

### 1. 前端

- 在应用启动时调用 `/api/auth/me` 检查登录状态
- 使用 AuthProvider 统一管理认证状态
- 保护需要认证的路由，未登录时重定向到登录页
- 登出时清除所有本地状态

### 2. 后端

- 所有业务逻辑放在 Service 层，API 路由只负责参数解析
- 使用统一的错误响应格式
- 敏感信息（如密码）不返回给前端
- 错误消息不泄露系统内部信息

### 3. 安全

- 定期更新 JWT_SECRET
- 使用 HTTPS 传输（生产环境）
- 监控异常登录尝试
- 考虑实现 Token 刷新机制（未来优化）

---

## 故障排查

### 常见问题

1. **登录失败**: 检查邮箱和密码是否正确，检查数据库连接
2. **Token 无效**: 检查 JWT_SECRET 是否正确配置
3. **Cookie 未设置**: 检查 Cookie 设置选项（httpOnly, secure, sameSite）
4. **数据库连接失败**: 检查 DATABASE_URL 是否正确

### 调试建议

- 检查服务器日志
- 使用浏览器开发者工具查看 Cookie
- 验证环境变量是否正确加载
- 检查 Prisma 客户端是否正确初始化

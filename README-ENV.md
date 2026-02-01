# 环境变量配置指南

## 快速开始

1. **创建 `.env.local` 文件**（开发环境）

   在项目根目录创建 `.env.local` 文件，并添加以下内容：

   ```env
   # Supabase 数据库连接字符串
   DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres?schema=public"

   # JWT 签名密钥（开发环境可以使用简单密钥）
   JWT_SECRET="dev-secret-key-change-in-production"

   # Node 环境
   NODE_ENV="development"
   ```

2. **获取 Supabase 数据库连接字符串**

   - 登录 [Supabase 控制台](https://app.supabase.com)
   - 选择你的项目
   - 进入 Settings → Database
   - 找到 "Connection string" 部分
   - 选择 "URI" 格式
   - 复制连接字符串并替换密码部分

3. **生成 JWT_SECRET**（生产环境必须使用强随机字符串）

   **开发环境**：可以使用简单字符串，如 `"dev-secret-key"`

   **生产环境**：必须使用强随机字符串，至少 32 个字符

   生成方式：
   ```bash
   # 使用 OpenSSL
   openssl rand -base64 32

   # 或使用 Node.js
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

4. **重启开发服务器**

   ```bash
   npm run dev
   ```

## 环境变量说明

### DATABASE_URL（必需）

Supabase PostgreSQL 数据库连接字符串。

**格式：**
```
postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?schema=public
```

### JWT_SECRET（必需）

JWT Token 签名密钥。

- **开发环境**：可以使用简单字符串
- **生产环境**：必须使用强随机字符串（至少 32 个字符）

### NODE_ENV（可选）

Node.js 运行环境。

- `development` - 开发环境（默认）
- `production` - 生产环境

## 生产环境配置

在生产环境部署时，通过以下方式设置环境变量：

### Vercel

1. 进入项目设置
2. 选择 "Environment Variables"
3. 添加 `DATABASE_URL` 和 `JWT_SECRET`

### 其他平台

根据平台文档设置环境变量，确保以下变量已配置：
- `DATABASE_URL`
- `JWT_SECRET`
- `NODE_ENV=production`

## 验证配置

配置完成后，可以通过以下方式验证：

```bash
# 检查 Prisma 连接
npx prisma db pull

# 运行数据库迁移（如果需要）
npx prisma migrate dev
```

## 故障排查

### 错误：DATABASE_URL 环境变量未设置

**解决方案：**
1. 确保 `.env.local` 文件存在于项目根目录
2. 检查文件中的 `DATABASE_URL` 是否正确配置
3. 重启开发服务器

### 错误：JWT_SECRET 环境变量未设置

**解决方案：**
1. 在 `.env.local` 文件中添加 `JWT_SECRET`
2. 重启开发服务器

### 错误：数据库连接失败

**解决方案：**
1. 检查 `DATABASE_URL` 是否正确
2. 确认 Supabase 数据库已启动
3. 检查网络连接和防火墙设置

## 更多信息

详细的环境变量配置说明请参考：[doc/env-setup.md](doc/env-setup.md)

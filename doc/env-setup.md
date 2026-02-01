# 环境变量配置说明

## 环境变量文件

项目需要以下环境变量文件：

### 开发环境（.env.local）

在项目根目录创建 `.env.local` 文件（此文件不会被提交到 Git）：

```env
# Supabase 数据库连接字符串
DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres?schema=public"

# JWT 签名密钥（开发环境可以使用简单密钥）
JWT_SECRET="dev-secret-key-change-in-production"

# Node 环境
NODE_ENV="development"
```

### 生产环境

在生产环境部署时，通过以下方式设置环境变量：

1. **Vercel/Netlify 等平台**：在平台的环境变量设置中配置
2. **服务器部署**：在服务器上设置系统环境变量
3. **Docker**：在 docker-compose.yml 或 Dockerfile 中配置

**生产环境必须配置：**

```env
DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres?schema=public"
JWT_SECRET="production-secret-key-must-be-strong-and-random-at-least-32-characters"
NODE_ENV="production"
```

## 环境变量说明

### DATABASE_URL

Supabase PostgreSQL 数据库连接字符串。

**获取方式：**
1. 登录 Supabase 控制台
2. 进入项目设置
3. 找到 Database → Connection string
4. 选择 "URI" 格式，复制连接字符串

**格式：**
```
postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?schema=public
```

### JWT_SECRET

JWT Token 签名密钥。

**开发环境：** 可以使用简单字符串（如 "dev-secret-key"）

**生产环境：** 必须使用强随机字符串，至少 32 个字符

**生成方式：**

使用 OpenSSL：
```bash
openssl rand -base64 32
```

使用 Node.js：
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### NODE_ENV

Node.js 运行环境。

- `development` - 开发环境
- `production` - 生产环境

## 快速开始

1. 复制环境变量模板：
   ```bash
   # 开发环境
   cp .env.local.example .env.local
   ```

2. 编辑 `.env.local` 文件，填入实际的配置值

3. 重启开发服务器：
   ```bash
   npm run dev
   ```

## 注意事项

1. **不要提交 `.env.local` 到 Git**：此文件包含敏感信息，已在 `.gitignore` 中排除
2. **生产环境密钥**：生产环境的 `JWT_SECRET` 必须使用强随机字符串
3. **数据库连接**：确保数据库连接字符串正确，并且数据库已创建相应的表结构
4. **环境变量优先级**：Next.js 会按以下顺序加载环境变量：
   - `.env.local`（所有环境，本地覆盖）
   - `.env.development`（开发环境）
   - `.env.production`（生产环境）
   - `.env`（所有环境）

## 验证配置

配置完成后，可以通过以下方式验证：

1. 检查环境变量是否加载：
   ```typescript
   console.log('DATABASE_URL:', process.env.DATABASE_URL ? '已设置' : '未设置');
   console.log('JWT_SECRET:', process.env.JWT_SECRET ? '已设置' : '未设置');
   ```

2. 测试数据库连接：
   ```bash
   npx prisma db pull
   ```

3. 运行 Prisma 迁移（如果需要）：
   ```bash
   npx prisma migrate dev
   ```

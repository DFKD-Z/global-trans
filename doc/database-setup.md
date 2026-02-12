# 数据库设置指南

## 问题说明

如果遇到以下错误：
```
The table `public.User` does not exist in the current database.
```

这表示数据库表还没有创建，需要运行 Prisma 迁移来创建表结构。

## 解决步骤

### 1. 确保环境变量已配置

确保 `.env.local` 文件中已配置 `DATABASE_URL`：

```env
DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres?schema=public"
```

### 2. 创建数据库迁移

运行以下命令创建并应用数据库迁移：

```bash
npx prisma migrate dev --name init
```

这个命令会：
- 创建迁移文件（在 `prisma/migrations` 目录）
- 将迁移应用到数据库
- 生成 Prisma 客户端

### 3. 验证迁移

迁移完成后，可以通过以下方式验证：

```bash
# 查看迁移状态
npx prisma migrate status

# 查看数据库结构
npx prisma studio
```

## 生产环境部署

在生产环境，使用以下命令应用迁移：

```bash
npx prisma migrate deploy
```

**注意**：`migrate deploy` 不会创建新的迁移，只会应用已存在的迁移文件。

## 数据库表结构

迁移将创建以下表：

1. **User** - 用户表
2. **Project** - 项目表
3. **ProjectMember** - 项目成员表
4. **ProjectLanguage** - 项目语言配置表
5. **Version** - 版本管理表
6. **TransKey** - 翻译键表
7. **TransValue** - 翻译值表

## 故障排查

### 错误：Environment variable not found: DATABASE_URL

**解决方案：**
1. 确保 `.env.local` 文件存在于项目根目录
2. 检查文件中的 `DATABASE_URL` 是否正确配置
3. 重启终端/命令行窗口

### 错误：Can't reach database server

**解决方案：**
1. 检查 `DATABASE_URL` 中的主机地址、端口、用户名和密码是否正确
2. 确认 Supabase 数据库已启动
3. 检查网络连接和防火墙设置
4. 确认 Supabase 项目的数据库连接设置允许外部连接

### 错误：Migration failed

**解决方案：**
1. 检查数据库连接是否正常
2. 确认数据库用户有创建表的权限
3. 查看详细的错误信息，可能需要手动修复数据库状态

## 重置数据库（开发环境）

如果需要重置数据库（**仅限开发环境**）：

```bash
# 警告：这会删除所有数据！
npx prisma migrate reset
```

## 更多信息

- [Prisma 迁移文档](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Supabase 数据库连接](https://supabase.com/docs/guides/database/connecting-to-postgres)

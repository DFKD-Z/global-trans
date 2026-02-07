/**
 * Prisma 客户端初始化（服务端专用）
 * 使用单例模式，避免重复创建连接
 */
import { PrismaClient } from "@/lib/generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 确保 DATABASE_URL 存在
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL 环境变量未设置。请在 .env.local 文件中配置 DATABASE_URL。\n" +
    "参考文档：doc/env-setup.md"
  );
}

// 确保 JWT_SECRET 存在
if (!process.env.JWT_SECRET) {
  throw new Error(
    "JWT_SECRET 环境变量未设置。请在 .env.local 文件中配置 JWT_SECRET。\n" +
    "参考文档：doc/env-setup.md"
  );
}

// 使用默认配置初始化 PrismaClient
// Prisma 会自动从环境变量 DATABASE_URL 读取数据库连接
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

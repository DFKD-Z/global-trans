/**
 * 检查环境变量配置脚本
 * 运行: node scripts/check-env.js
 */
const { config } = require("dotenv");
const { resolve } = require("path");
const fs = require("fs");

console.log("🔍 检查环境变量配置...\n");

// 检查 .env.local 文件是否存在
const envLocalPath = resolve(process.cwd(), ".env.local");
const envPath = resolve(process.cwd(), ".env");

if (fs.existsSync(envLocalPath)) {
  console.log("✅ 找到 .env.local 文件");
  config({ path: envLocalPath });
} else if (fs.existsSync(envPath)) {
  console.log("⚠️  找到 .env 文件（建议使用 .env.local）");
  config({ path: envPath });
} else {
  console.log("❌ 未找到 .env.local 或 .env 文件");
  console.log("\n请创建 .env.local 文件并添加以下内容：");
  console.log(`
DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres?schema=public"
JWT_SECRET="dev-secret-key"
NODE_ENV="development"
  `);
  process.exit(1);
}

// 检查必需的环境变量
const requiredVars = ["DATABASE_URL", "JWT_SECRET"];
const missingVars = [];

requiredVars.forEach((varName) => {
  if (process.env[varName]) {
    const value = process.env[varName];
    // 隐藏敏感信息，只显示前几个字符
    const displayValue =
      varName === "DATABASE_URL"
        ? value.substring(0, 30) + "..."
        : value.substring(0, 10) + "...";
    console.log(`✅ ${varName}: ${displayValue}`);
  } else {
    console.log(`❌ ${varName}: 未设置`);
    missingVars.push(varName);
  }
});

if (missingVars.length > 0) {
  console.log(`\n❌ 缺少以下环境变量: ${missingVars.join(", ")}`);
  console.log("\n请参考 README-ENV.md 或 doc/env-setup.md 进行配置。");
  process.exit(1);
}

console.log("\n✅ 所有必需的环境变量已配置！");
console.log("\n现在可以运行以下命令：");
console.log("  npm run db:push    - 推送数据库 schema");
console.log("  npm run db:migrate - 创建数据库迁移");

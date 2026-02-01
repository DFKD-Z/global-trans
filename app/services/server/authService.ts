/**
 * 认证业务逻辑服务
 */
import { db } from "@/app/services/common/db";
import { hashPassword, verifyPassword } from "@/app/services/common/password";
import { generateToken } from "@/app/services/common/jwt";
import type {
  RegisterInput,
  LoginInput,
  AuthResponse,
  UserResponse,
} from "./types";

/**
 * 验证邮箱格式
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 验证密码长度
 */
function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

/**
 * 注册新用户
 * @param input 注册输入参数
 * @returns 认证响应数据
 * @throws 如果邮箱已存在或输入无效
 */
export async function register(
  input: RegisterInput
): Promise<AuthResponse> {
  const { email, password } = input;

  // 验证邮箱格式
  if (!isValidEmail(email)) {
    throw new Error("邮箱格式不正确");
  }

  // 验证密码长度
  if (!isValidPassword(password)) {
    throw new Error("密码长度至少为 8 个字符");
  }

  // 检查邮箱是否已存在
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("该邮箱已被注册");
  }

  // 加密密码
  const hashedPassword = await hashPassword(password);

  // 创建用户
  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      isSuperAdmin: false,
    },
  });

  // 生成 JWT Token
  const token = generateToken(user.id, user.email);

  // 返回用户信息（不包含密码）
  const userResponse: UserResponse = {
    id: user.id,
    email: user.email,
    isSuperAdmin: user.isSuperAdmin,
    createdAt: user.createdAt,
  };

  return {
    user: userResponse,
    token,
  };
}

/**
 * 用户登录
 * @param input 登录输入参数
 * @returns 认证响应数据
 * @throws 如果邮箱或密码错误
 */
export async function login(input: LoginInput): Promise<AuthResponse> {
  const { email, password } = input;

  // 验证邮箱格式
  if (!isValidEmail(email)) {
    throw new Error("邮箱格式不正确");
  }

  // 查找用户
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("邮箱或密码错误");
  }

  // 验证密码
  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error("邮箱或密码错误");
  }

  // 生成 JWT Token
  const token = generateToken(user.id, user.email);

  // 返回用户信息（不包含密码）
  const userResponse: UserResponse = {
    id: user.id,
    email: user.email,
    isSuperAdmin: user.isSuperAdmin,
    createdAt: user.createdAt,
  };

  return {
    user: userResponse,
    token,
  };
}

/**
 * 获取当前用户信息
 * @param userId 用户 ID
 * @returns 用户信息
 * @throws 如果用户不存在
 */
export async function getCurrentUser(userId: string): Promise<UserResponse> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      isSuperAdmin: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new Error("用户不存在");
  }

  return user;
}

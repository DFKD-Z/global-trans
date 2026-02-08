/**
 * 认证业务逻辑服务（服务端专用）
 */
import { db } from "@/app/services/server/db";
import { hashPassword, verifyPassword } from "@/app/services/server/password";
import { generateToken } from "@/app/services/common/jwt";
import type {
  RegisterInput,
  LoginInput,
  AuthResponse,
  UserResponse,
  CreateUserByAdminInput,
  UpdateUserRoleInput,
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

/**
 * 列出所有用户（仅超级管理员）
 * @returns 用户列表，不含密码
 */
export async function listUsers(): Promise<UserResponse[]> {
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      isSuperAdmin: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return users;
}

/**
 * 更新用户平台角色（仅超级管理员）
 * @param userId 用户 ID
 * @param input 角色字段
 */
export async function updateUserRole(
  userId: string,
  input: UpdateUserRoleInput
): Promise<UserResponse> {
  const user = await db.user.update({
    where: { id: userId },
    data: { isSuperAdmin: input.isSuperAdmin },
    select: {
      id: true,
      email: true,
      isSuperAdmin: true,
      createdAt: true,
    },
  });
  return user;
}

/**
 * 管理员创建用户（不生成 token，不写 cookie）
 * @param input 邮箱、密码、可选 isSuperAdmin
 * @returns 创建的用户信息
 */
export async function createUserByAdmin(
  input: CreateUserByAdminInput
): Promise<UserResponse> {
  const { email, password, isSuperAdmin = false } = input;

  if (!isValidEmail(email)) {
    throw new Error("邮箱格式不正确");
  }
  if (!isValidPassword(password)) {
    throw new Error("密码长度至少为 8 个字符");
  }

  const existingUser = await db.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    throw new Error("该邮箱已被注册");
  }

  const hashedPassword = await hashPassword(password);
  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      isSuperAdmin,
    },
    select: {
      id: true,
      email: true,
      isSuperAdmin: true,
      createdAt: true,
    },
  });
  return user;
}

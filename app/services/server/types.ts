/**
 * 认证服务相关的类型定义
 */

/**
 * 注册输入参数
 */
export interface RegisterInput {
  email: string;
  password: string;
}

/**
 * 登录输入参数
 */
export interface LoginInput {
  email: string;
  password: string;
}

/**
 * 用户响应数据（不包含敏感信息）
 */
export interface UserResponse {
  id: string;
  email: string;
  isSuperAdmin: boolean;
  createdAt: Date;
}

/**
 * 认证响应数据
 */
export interface AuthResponse {
  user: UserResponse;
  token: string;
}

/**
 * API 统一响应格式
 */
export interface ApiResponse<T = unknown> {
  code: number;
  data?: T;
  msg: string;
}

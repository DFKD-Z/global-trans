/**
 * 服务端业务逻辑相关的类型定义
 */
import type { ApiResponse } from "@/app/services/common/types";

// 重新导出 ApiResponse 供 API 路由使用
export type { ApiResponse };

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

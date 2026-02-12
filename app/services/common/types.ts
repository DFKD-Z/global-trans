/**
 * 跨层共享的类型定义
 * 供 client（解析响应）与 server（构造响应）共同使用
 */

/**
 * API 统一响应格式
 */
export interface ApiResponse<T = unknown> {
  code: number;
  data?: T;
  msg: string;
}

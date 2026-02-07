/**
 * API 请求客户端
 * 封装 fetch，401 时自动跳转登录页
 */

/**
 * 带认证的 fetch 封装
 * - 401 时跳转 /login?redirect=当前路径
 */
export async function apiFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const response = await fetch(input, {
    ...init,
    credentials: "include",
  });

  if (response.status === 401 && typeof window !== "undefined") {
    const redirect = window.location.pathname + window.location.search;
    window.location.href = `/login?redirect=${encodeURIComponent(redirect)}`;
    throw new Error("未登录或 Token 已过期");
  }

  return response;
}

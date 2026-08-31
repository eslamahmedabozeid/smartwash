import "server-only";

const API_BASE_URL = process.env.API_BASE_URL;
const API_ACCESS_KEY = process.env.API_ACCESS_KEY;
const API_INSTANCE_ID = process.env.API_INSTANCE_ID;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit & { lang?: string }
): Promise<T> {
  if (!API_BASE_URL || !API_ACCESS_KEY || !API_INSTANCE_ID) {
    throw new Error("API configuration is missing");
  }

  const { lang, ...fetchOptions } = options ?? {};

  const headers: HeadersInit = {
    Accept: "application/json",
    "X-Access-Api": API_ACCESS_KEY,
    "X-Instance-ID": API_INSTANCE_ID,
    lang: lang ?? "en",
    ...fetchOptions.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API error ${response.status}: ${errorBody}`);
  }

  return response.json() as Promise<T>;
}

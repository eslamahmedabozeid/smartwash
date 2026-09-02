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

  const method = fetchOptions.method ?? "GET";
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`[API ERROR] ${method} ${endpoint} [${response.status}]`, {
      url,
      lang: lang ?? "en",
      error: errorBody,
    });
    throw new Error(`API error ${response.status}: ${errorBody}`);
  }

  const data = (await response.json()) as T;
  console.log(`[API RESPONSE] ${method} ${endpoint}:`, data);

  return data;
}

import "server-only";

import { apiFetch } from "./client";
import type { ApiResponse, SitePage, SiteSection } from "@/types/api";

export async function getHomePage(lang: string): Promise<SitePage> {
  const response = await apiFetch<ApiResponse<SitePage>>(
    "/dashboard/pages/home",
    { lang }
  );

  return response.data;
}

export async function getPricingPage(lang: string): Promise<SitePage> {
  const response = await apiFetch<ApiResponse<SitePage>>(
    "/dashboard/pages/prices",
    { lang }
  );

  return response.data;
}

export async function getAboutPage(lang: string): Promise<SitePage> {
  const response = await apiFetch<ApiResponse<SitePage>>(
    "/dashboard/pages/about",
    { lang }
  );

  return response.data;
}

export function getSectionByType(
  sections: SiteSection[],
  type: string
): SiteSection | undefined {
  return sections.find((section) => section.type === type);
}

import "server-only";

import { apiFetch } from "./client";
import type { ApiResponse, SiteFooter, SitePage, SiteSection } from "@/types/api";

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

export async function getHelpPage(lang: string): Promise<SitePage> {
  const response = await apiFetch<ApiResponse<SitePage>>(
    "/dashboard/pages/help",
    { lang }
  );

  return response.data;
}

export async function getTermsPage(lang: string): Promise<SitePage> {
  const response = await apiFetch<ApiResponse<SitePage>>(
    "/dashboard/pages/terms",
    { lang }
  );

  return response.data;
}

export async function getPrivacyPage(lang: string): Promise<SitePage> {
  const response = await apiFetch<ApiResponse<SitePage>>(
    "/dashboard/pages/privacy",
    { lang }
  );

  return response.data;
}

export async function getFooter(lang: string): Promise<SiteFooter> {
  const response = await apiFetch<ApiResponse<SiteFooter>>(
    "/dashboard/footer",
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


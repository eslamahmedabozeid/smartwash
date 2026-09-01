import React from "react";
import { getHomePage, getWebsiteServices } from "@/lib/api/home";
import Header from "@/components/layout/Header";
import type { SiteLink, WebsiteServices } from "@/types/api";

interface HeaderContainerProps {
  lang: string;
  dict: any;
}

export default async function HeaderContainer({ lang, dict }: HeaderContainerProps) {
  let websiteServices: WebsiteServices | null = null;
  let downloadLink: SiteLink | null = null;

  try {
    websiteServices = await getWebsiteServices(lang);
  } catch (error) {
    console.error("Failed to fetch website services:", error);
  }

  try {
    const homePage = await getHomePage(lang);
    const heroSection = homePage.sections.find((section) => section.type === "hero");
    downloadLink =
      heroSection?.links?.find((link) => link.label.toLowerCase().includes("download")) ??
      heroSection?.links?.[0] ??
      null;
  } catch (error) {
    console.error("Failed to fetch home hero download link:", error);
  }

  return (
    <Header
      lang={lang}
      dict={dict}
      websiteServices={websiteServices}
      downloadLink={downloadLink}
    />
  );
}

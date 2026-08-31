import React from "react";
import { getFooter } from "@/lib/api/home";
import Footer from "@/components/layout/Footer";
import type { SiteFooter } from "@/types/api";

interface FooterContainerProps {
  lang: string;
  dict: any;
}

export default async function FooterContainer({ lang, dict }: FooterContainerProps) {
  let footerData: SiteFooter | null = null;

  try {
    footerData = await getFooter(lang);
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
  }

  if (footerData?.visible === false) {
    return null;
  }

  return <Footer lang={lang} dict={dict} footerData={footerData} />;
}

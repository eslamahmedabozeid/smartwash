import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { getTermsPage } from "@/lib/api/home";
import TermsView from "@/components/terms/TermsView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr
      ? "الشروط والأحكام | سمارت واش"
      : "Terms & Conditions | Smart Wash",
    description: isAr
      ? "الشروط والأحكام لخدمات سمارت واش للغسيل والتنظيف الجاف."
      : "Terms and conditions for Smart Wash premium laundry and dry cleaning services.",
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let termsPage = null;
  try {
    termsPage = await getTermsPage(lang);
  } catch (error) {
    console.error("Failed to fetch terms page data:", error);
  }

  return <TermsView lang={lang} dict={dict} termsPage={termsPage} />;
}

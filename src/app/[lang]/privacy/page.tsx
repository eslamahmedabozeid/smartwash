import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { getPrivacyPage } from "@/lib/api/home";
import PrivacyView from "@/components/privacy/PrivacyView";

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
      ? "سياسة الخصوصية | سمارت واش"
      : "Privacy Policy | Smart Wash",
    description: isAr
      ? "سياسة الخصوصية وحماية البيانات لخدمات سمارت واش."
      : "Privacy policy and data protection practices for Smart Wash services.",
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let privacyPage = null;
  try {
    privacyPage = await getPrivacyPage(lang);
  } catch (error) {
    console.error("Failed to fetch privacy page data:", error);
  }

  return (
    <PrivacyView
      lang={lang}
      dict={dict}
      privacyPage={privacyPage}
    />
  );
}

import React from "react";
import { getDictionary } from "@/dictionaries";
import { getFaq, getHelpPage } from "@/lib/api/home";
import HelpView from "@/components/help/HelpView";
import type { FaqCategory } from "@/types/api";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HelpPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let helpPage = null;
  let faqCategories: FaqCategory[] | null = null;

  try {
    helpPage = await getHelpPage(lang);
  } catch (error) {
    console.error("Failed to fetch help page data:", error);
  }

  try {
    faqCategories = await getFaq(lang);
  } catch (error) {
    console.error("Failed to fetch FAQ data:", error);
  }

  return <HelpView lang={lang} dict={dict} helpPage={helpPage} faqCategories={faqCategories} />;
}

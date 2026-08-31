import React from "react";
import { getDictionary } from "@/dictionaries";
import { getHelpPage } from "@/lib/api/home";
import HelpView from "@/components/help/HelpView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HelpPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let helpPage = null;
  try {
    helpPage = await getHelpPage(lang);
  } catch (error) {
    console.error("Failed to fetch help page data:", error);
  }

  return <HelpView lang={lang} dict={dict} helpPage={helpPage} />;
}

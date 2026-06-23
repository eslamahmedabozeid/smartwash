import React from "react";
import { getDictionary } from "@/dictionaries";
import HelpView from "@/components/help/HelpView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HelpPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <HelpView lang={lang} dict={dict} />;
}

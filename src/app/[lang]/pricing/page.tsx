import React from "react";
import { getDictionary } from "@/dictionaries";
import PricingView from "@/components/PricingView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Pricing({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <PricingView lang={lang} dict={dict} />;
}

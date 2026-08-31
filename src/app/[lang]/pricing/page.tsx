import React from "react";
import { getDictionary } from "@/dictionaries";
import { getPricingPage } from "@/lib/api/home";
import PricingView from "@/components/pricing/PricingView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Pricing({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let pricingPage = null;
  try {
    pricingPage = await getPricingPage(lang);
  } catch (error) {
    console.error("Failed to fetch pricing page data:", error);
  }

  return <PricingView lang={lang} dict={dict} pricingPage={pricingPage} />;
}

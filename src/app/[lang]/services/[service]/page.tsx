import React from "react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { getPageBySlug } from "@/lib/api/home";
import ServiceView from "@/components/services/ServiceView";

interface PageProps {
  params: Promise<{ lang: string; service: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { lang, service } = await params;
  const dict = await getDictionary(lang);

  let servicePage = null;

  try {
    servicePage = await getPageBySlug(lang, service);
  } catch (error) {
    console.error(`Failed to fetch service page "${service}":`, error);
    notFound();
  }

  if (!servicePage) {
    notFound();
  }

  return <ServiceView lang={lang} dict={dict} servicePage={servicePage} />;
}

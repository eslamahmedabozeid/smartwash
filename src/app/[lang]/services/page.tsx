import React from "react";
import { getDictionary } from "@/dictionaries";
import { getServicesPage } from "@/lib/api/home";
import ServicesView from "@/components/services/ServicesView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let servicesPage = null;

  try {
    servicesPage = await getServicesPage(lang);
  } catch (error) {
    console.error("Failed to fetch services page data:", error);
  }

  return <ServicesView lang={lang} dict={dict} servicesPage={servicesPage} />;
}

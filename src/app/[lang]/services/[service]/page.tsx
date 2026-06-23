import React from "react";
import { getDictionary } from "@/dictionaries";
import ServiceView from "@/components/services/ServiceView";

interface PageProps {
  params: Promise<{ lang: string; service: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { lang, service } = await params;
  const dict = await getDictionary(lang);

  return <ServiceView lang={lang} service={service} dict={dict} />;
}

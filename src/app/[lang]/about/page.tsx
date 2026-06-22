import React from "react";
import { getDictionary } from "@/dictionaries";
import AboutView from "@/components/about/AboutView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function About({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboutView lang={lang} dict={dict} />;
}

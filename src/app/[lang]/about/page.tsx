import React from "react";
import { getDictionary } from "@/dictionaries";
import { getAboutPage } from "@/lib/api/home";
import AboutView from "@/components/about/AboutView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function About({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let aboutPage = null;
  try {
    aboutPage = await getAboutPage(lang);
  } catch (error) {
    console.error("Failed to fetch about page data:", error);
  }

  return <AboutView lang={lang} dict={dict} aboutPage={aboutPage} />;
}

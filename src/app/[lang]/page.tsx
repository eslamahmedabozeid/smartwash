import React from "react";
import { getDictionary } from "@/dictionaries";
import { getHomePage } from "@/lib/api/home";
import HomeView from "@/components/home/HomeView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  let homePage = null;
  try {
    homePage = await getHomePage(lang);
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
  }

  return <HomeView lang={lang} dict={dict} homePage={homePage} />;
}

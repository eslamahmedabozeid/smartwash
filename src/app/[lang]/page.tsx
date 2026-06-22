import React from "react";
import { getDictionary } from "@/dictionaries";
import HomeView from "@/components/home/HomeView";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <HomeView lang={lang} dict={dict} />;
}

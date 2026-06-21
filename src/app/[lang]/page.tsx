import React from "react";
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoSection from "@/components/PromoSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-hidden">
      {/* 1. Navigation Header Section */}
      <Header lang={lang} dict={dict} />

      {/* 2. Hero Section (First home page section) */}
      <HeroSection lang={lang} dict={dict} />

      {/* 3. Promo Section (Second home page section) */}
      <PromoSection lang={lang} dict={dict} />

      {/* 4. Services Grid Section */}
      <ServicesSection lang={lang} dict={dict} />

      {/* 5. Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

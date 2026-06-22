import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PromoSection from "./PromoSection";
import SavingsBagsSection from "./SavingsBagsSection";
import HowItWorksSection from "./HowItWorksSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import MobileAppSection from "./MobileAppSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";

interface HomeViewProps {
  lang: string;
  dict: any;
}

export default function HomeView({ lang, dict }: HomeViewProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* 1. Navigation Header Section */}
      <Header lang={lang} dict={dict} />

      {/* 2. Hero Section (First home page section) */}
      <HeroSection lang={lang} dict={dict} />

      {/* 3. Promo Section (Second home page section) */}
      <PromoSection lang={lang} dict={dict} />

      {/* 4. Savings Bags Section (Third home page section) */}
      <SavingsBagsSection lang={lang} dict={dict} />

      {/* How It Works Section */}
      <HowItWorksSection lang={lang} dict={dict} />

      {/* 5. Services Grid Section */}
      <ServicesSection lang={lang} dict={dict} />

      {/* Testimonials Section */}
      <TestimonialsSection lang={lang} dict={dict} />

      {/* Mobile App Section */}
      <MobileAppSection lang={lang} dict={dict} />

      {/* FAQ Section */}
      <FaqSection lang={lang} dict={dict} />

      {/* 6. Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

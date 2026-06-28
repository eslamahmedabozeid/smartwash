import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import PromoSection from "@/components/home/PromoSection";
import SavingsBagsSection from "@/components/home/SavingsBagsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import FaqSection from "@/components/shared/FaqSection";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";

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
      <ScrollReveal variant="fade-in" delay={100} duration={800}>
        <HeroSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* 3. Promo Section (Second home page section) */}
      <ScrollReveal variant="fade-up">
        <PromoSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* 4. Savings Bags Section (Third home page section) */}
      <ScrollReveal variant="fade-up">
        <SavingsBagsSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* How It Works Section */}
      <ScrollReveal variant="fade-up">
        <HowItWorksSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* 5. Services Grid Section */}
      <ScrollReveal variant="fade-up">
        <ServicesSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* Mobile App Section */}
      <ScrollReveal variant="fade-up">
        <MobileAppSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal variant="fade-up">
        <FaqSection lang={lang} dict={dict} />
      </ScrollReveal>

      {/* 6. Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

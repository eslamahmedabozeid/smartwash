import React from "react";
import HeaderContainer from "@/components/layout/HeaderContainer";
import HeroSection from "@/components/home/HeroSection";
import PromoSection from "@/components/home/PromoSection";
import SavingsBagsSection from "@/components/home/SavingsBagsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import FaqSection from "@/components/shared/FaqSection";
import FooterContainer from "@/components/layout/FooterContainer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import type { SitePage } from "@/types/api";

interface HomeViewProps {
  lang: string;
  dict: any;
  homePage: SitePage | null;
}

export default function HomeView({ lang, dict, homePage }: HomeViewProps) {
  const sections = homePage?.sections ?? [];
  const heroSection = getSectionByType(sections, "hero");
  const appPromoSection = getSectionByType(sections, "app_promo");
  const servicesGridSection = getSectionByType(sections, "services_grid");
  const howItWorksSection = getSectionByType(sections, "how_it_works");
  const whyChooseUsSection = getSectionByType(sections, "why_choose_us");
  const testimonialsSection = getSectionByType(sections, "testimonials");
  const appDownloadSection = getSectionByType(sections, "app_download");
  const faqSection = getSectionByType(sections, "faq");
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* 1. Navigation Header Section */}
      <HeaderContainer lang={lang} dict={dict} />

      {/* 2. Hero Section (First home page section) */}
      <ScrollReveal variant="fade-up" delay={100} duration={800}>
        <HeroSection lang={lang} dict={dict} section={heroSection} />
      </ScrollReveal>

      {/* 3. Promo Section (Second home page section) */}
      <ScrollReveal variant="fade-up">
        <PromoSection lang={lang} dict={dict} section={appPromoSection} />
      </ScrollReveal>

      {/* 4. Savings Bags Section (Third home page section) */}
      <ScrollReveal variant="fade-up">
        <SavingsBagsSection lang={lang} dict={dict} section={servicesGridSection} />
      </ScrollReveal>

      {/* How It Works Section */}
      <ScrollReveal variant="fade-up">
        <HowItWorksSection lang={lang} dict={dict} section={howItWorksSection} />
      </ScrollReveal>

      {/* 5. Services Grid Section */}
      <ScrollReveal variant="fade-up">
        <ServicesSection lang={lang} dict={dict} section={whyChooseUsSection} />
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal variant="fade-up">
        <TestimonialsSection lang={lang} dict={dict} section={testimonialsSection} />
      </ScrollReveal>

      {/* Mobile App Section */}
      <ScrollReveal variant="fade-up">
        <MobileAppSection lang={lang} dict={dict} section={appDownloadSection} />
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal variant="fade-up">
        <FaqSection lang={lang} dict={dict} section={faqSection} />
      </ScrollReveal>

      {/* 6. Footer Section */}
      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

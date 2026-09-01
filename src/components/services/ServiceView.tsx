import React from "react";
import HeaderContainer from "@/components/layout/HeaderContainer";
import FooterContainer from "@/components/layout/FooterContainer";
import MobileAppSection from "@/components/home/MobileAppSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SavingsBagsSection from "@/components/home/SavingsBagsSection";
import FaqSection from "@/components/shared/FaqSection";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import ServiceHandleEverythingSection from "@/components/services/ServiceHandleEverythingSection";
import ServiceFeaturesSection from "@/components/services/ServiceFeaturesSection";
import ServiceHowItWorksSection from "@/components/services/ServiceHowItWorksSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import type { SitePage } from "@/types/api";

interface ServiceViewProps {
  lang: string;
  dict: any;
  servicePage: SitePage;
}

export default function ServiceView({ lang, dict, servicePage }: ServiceViewProps) {
  const sections = servicePage.sections;
  const heroSection = getSectionByType(sections, "hero");
  const handleEverythingSection =
    getSectionByType(sections, "features") ??
    getSectionByType(sections, "audience");
  const featuresSection = getSectionByType(sections, "why_choose_us");
  const howItWorksSection = getSectionByType(sections, "how_it_works");
  const pricingSection = getSectionByType(sections, "pricing");
  const testimonialsSection = getSectionByType(sections, "testimonials");
  const appDownloadSection = getSectionByType(sections, "app_download");
  const faqSection = getSectionByType(sections, "faq");

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      <HeaderContainer lang={lang} dict={dict} />

      <main className="w-full flex-1 py-12 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <ServiceHeroSection lang={lang} dict={dict} section={heroSection} />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <ServiceHandleEverythingSection
            lang={lang}
            dict={dict}
            section={handleEverythingSection}
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <ServiceFeaturesSection lang={lang} dict={dict} section={featuresSection} />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <ServiceHowItWorksSection lang={lang} dict={dict} section={howItWorksSection} />
        </ScrollReveal>

        {pricingSection && (
          <ScrollReveal variant="fade-up">
            <SavingsBagsSection lang={lang} dict={dict} section={pricingSection} />
          </ScrollReveal>
        )}

        {testimonialsSection && (
          <ScrollReveal variant="fade-up">
            <TestimonialsSection lang={lang} dict={dict} section={testimonialsSection} />
          </ScrollReveal>
        )}

        <ScrollReveal variant="fade-up">
          <MobileAppSection lang={lang} dict={dict} section={appDownloadSection} />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <FaqSection lang={lang} dict={dict} section={faqSection} />
        </ScrollReveal>
      </main>

      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

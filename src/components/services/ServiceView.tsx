import React from "react";
import HeaderContainer from "@/components/layout/HeaderContainer";
import FooterContainer from "@/components/layout/FooterContainer";
import MobileAppSection from "@/components/home/MobileAppSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SavingsBagsSection from "@/components/home/SavingsBagsSection";
import ServicesSection from "@/components/home/ServicesSection";
import FaqSection from "@/components/shared/FaqSection";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import ServiceHandleEverythingSection from "@/components/services/ServiceHandleEverythingSection";
import ServiceFeaturesSection from "@/components/services/ServiceFeaturesSection";
import ServiceHowItWorksSection from "@/components/services/ServiceHowItWorksSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import type { SitePage, SiteSection } from "@/types/api";

interface ServiceViewProps {
  lang: string;
  dict: any;
  servicePage: SitePage;
}

/** Figma order for per-service landing pages */
const FIGMA_SECTION_ORDER = [
  "hero",
  "garment_categories",
  "why_choose_us",
  "how_it_works",
  "audience",
  "testimonials",
  "app_download",
] as const;

function renderByType(
  type: string,
  section: SiteSection | undefined,
  lang: string,
  dict: any
) {
  switch (type) {
    case "hero":
      return <ServiceHeroSection lang={lang} dict={dict} section={section} />;
    case "garment_categories":
      return (
        <ServiceHandleEverythingSection lang={lang} dict={dict} section={section} />
      );
    case "why_choose_us":
      return <ServiceFeaturesSection lang={lang} dict={dict} section={section} />;
    case "how_it_works":
      return <ServiceHowItWorksSection lang={lang} dict={dict} section={section} />;
    case "audience":
      return section ? (
        <ServicesSection lang={lang} dict={dict} section={section} bgClass="bg-[#F5F5F5]" />
      ) : null;
    case "testimonials":
      return section ? (
        <TestimonialsSection lang={lang} dict={dict} section={section} />
      ) : null;
    case "app_download":
      return <MobileAppSection lang={lang} dict={dict} section={section} />;
    case "pricing":
      return section ? (
        <SavingsBagsSection lang={lang} dict={dict} section={section} />
      ) : null;
    case "faq":
      return <FaqSection lang={lang} dict={dict} section={section} />;
    case "services_grid":
      return section ? (
        <SavingsBagsSection lang={lang} dict={dict} section={section} />
      ) : null;
    default:
      return null;
  }
}

export default function ServiceView({ lang, dict, servicePage }: ServiceViewProps) {
  const sections = servicePage.sections;

  const renderedTypes = new Set<string>();

  const figmaBlocks = FIGMA_SECTION_ORDER.map((type) => {
    const section = getSectionByType(sections, type);
    const content = renderByType(type, section, lang, dict);

    if (!content) return null;

    renderedTypes.add(type);

    return (
      <ScrollReveal
        key={section?.id ?? type}
        variant={type === "hero" ? "fade-in" : "fade-up"}
        delay={type === "hero" ? 100 : 0}
        duration={type === "hero" ? 800 : undefined}
      >
        {content}
      </ScrollReveal>
    );
  });

  // Extra CMS sections (pricing, faq, etc.) after Figma order
  const extraBlocks = [...sections]
    .sort((a, b) => a.order - b.order)
    .filter((section) => !renderedTypes.has(section.type))
    .map((section) => {
      const content = renderByType(section.type, section, lang, dict);
      if (!content) return null;

      return (
        <ScrollReveal key={section.id} variant="fade-up">
          {content}
        </ScrollReveal>
      );
    });

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      <HeaderContainer lang={lang} dict={dict} />

      <main className="w-full flex-1 py-12 lg:px-8 space-y-12 bg-white">
        {figmaBlocks}
        {extraBlocks}
      </main>

      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

import React from "react";
import HeaderContainer from "@/components/layout/HeaderContainer";
import FooterContainer from "@/components/layout/FooterContainer";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SavingsBagsSection from "@/components/home/SavingsBagsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import FaqSection from "@/components/shared/FaqSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import type { SitePage, SiteSection } from "@/types/api";

interface ServicesViewProps {
  lang: string;
  dict: any;
  servicesPage: SitePage | null;
}

function renderSection(section: SiteSection, lang: string, dict: any) {
  switch (section.type) {
    case "hero":
      return <ServiceHeroSection key={section.id} lang={lang} dict={dict} section={section} />;
    case "how_it_works":
      return <HowItWorksSection key={section.id} lang={lang} dict={dict} section={section} />;
    case "services_grid":
      return <SavingsBagsSection key={section.id} lang={lang} dict={dict} section={section} />;
    case "audience":
      return (
        <ServicesSection
          key={section.id}
          lang={lang}
          dict={dict}
          section={section}
          bgClass="bg-[#F5F5F5]"
        />
      );
    case "testimonials":
      return <TestimonialsSection key={section.id} lang={lang} dict={dict} section={section} />;
    case "app_download":
      return <MobileAppSection key={section.id} lang={lang} dict={dict} section={section} />;
    case "faq":
      return <FaqSection key={section.id} lang={lang} dict={dict} section={section} />;
    default:
      return null;
  }
}

export default function ServicesView({ lang, dict, servicesPage }: ServicesViewProps) {
  const sections = servicesPage?.sections ?? [];
  const heroSection = getSectionByType(sections, "hero");
  const howItWorksSection = getSectionByType(sections, "how_it_works");
  const servicesGridSection = getSectionByType(sections, "services_grid");
  const audienceSection = getSectionByType(sections, "audience");
  const testimonialsSection = getSectionByType(sections, "testimonials");
  const appDownloadSection = getSectionByType(sections, "app_download");
  const faqSection = getSectionByType(sections, "faq");

  const orderedSections = servicesPage
    ? [...sections].sort((a, b) => a.order - b.order)
    : [];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      <HeaderContainer lang={lang} dict={dict} />

      <main className="w-full flex-1 py-12 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        {servicesPage ? (
          orderedSections.map((section) => (
            <ScrollReveal key={section.id} variant="fade-up">
              {renderSection(section, lang, dict)}
            </ScrollReveal>
          ))
        ) : (
          <>
            <ScrollReveal variant="fade-in" delay={100} duration={800}>
              <ServiceHeroSection lang={lang} dict={dict} section={heroSection} />
            </ScrollReveal>
            <ScrollReveal variant="fade-up">
              <HowItWorksSection lang={lang} dict={dict} section={howItWorksSection} />
            </ScrollReveal>
            <ScrollReveal variant="fade-up">
              <SavingsBagsSection lang={lang} dict={dict} section={servicesGridSection} />
            </ScrollReveal>
            <ScrollReveal variant="fade-up">
              <ServicesSection
                lang={lang}
                dict={dict}
                section={audienceSection}
                bgClass="bg-[#F5F5F5]"
              />
            </ScrollReveal>
            <ScrollReveal variant="fade-up">
              <TestimonialsSection lang={lang} dict={dict} section={testimonialsSection} />
            </ScrollReveal>
            <ScrollReveal variant="fade-up">
              <MobileAppSection lang={lang} dict={dict} section={appDownloadSection} />
            </ScrollReveal>
            <ScrollReveal variant="fade-up">
              <FaqSection lang={lang} dict={dict} section={faqSection} />
            </ScrollReveal>
          </>
        )}
      </main>

      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

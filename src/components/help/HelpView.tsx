import React from "react";
import Header from "@/components/layout/Header";
import FooterContainer from "@/components/layout/FooterContainer";
import HelpHeaderSection from "@/components/help/HelpHeaderSection";
import HelpFaqSection from "@/components/help/HelpFaqSection";
import AboutFeaturesSection from "@/components/about/AboutFeaturesSection";
import MobileAppSection from "@/components/home/MobileAppSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import type { FaqCategory, SitePage } from "@/types/api";

interface HelpViewProps {
  lang: string;
  dict: any;
  helpPage: SitePage | null;
  faqCategories?: FaqCategory[] | null;
}

export default function HelpView({ lang, dict, helpPage, faqCategories }: HelpViewProps) {
  const sections = helpPage?.sections ?? [];
  const heroSection = getSectionByType(sections, "hero");
  const contactSection = getSectionByType(sections, "contact_channels");
  const featuresSection = getSectionByType(sections, "features");
  const appDownloadSection = getSectionByType(sections, "app_download");

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-12 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        {/* Help Banner & Contact Section */}
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <HelpHeaderSection
            lang={lang}
            dict={dict}
            heroSection={heroSection}
            contactSection={contactSection}
          />
        </ScrollReveal>

        {/* FAQ Tabs & Accordion Section */}
        <ScrollReveal variant="fade-up">
          <HelpFaqSection lang={lang} dict={dict} faqCategories={faqCategories} />
        </ScrollReveal>

        {/* Features Section */}
        <ScrollReveal variant="fade-up">
          <AboutFeaturesSection lang={lang} dict={dict} section={featuresSection} />
        </ScrollReveal>

        {/* Mobile App Section */}
        <ScrollReveal variant="fade-up">
          <MobileAppSection lang={lang} dict={dict} section={appDownloadSection} />
        </ScrollReveal>
      </main>

      {/* Footer Section */}
      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

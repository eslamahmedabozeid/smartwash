
import React from "react";
import Link from "next/link";
import HeaderContainer from "@/components/layout/HeaderContainer";
import FooterContainer from "@/components/layout/FooterContainer";
import MobileAppSection from "@/components/home/MobileAppSection";
import AboutHowItWorksSection from "@/components/about/AboutHowItWorksSection";
import AboutFeaturesSection from "@/components/about/AboutFeaturesSection";
import AboutPromoSection from "@/components/about/AboutPromoSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import FaqSection from "@/components/shared/FaqSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import type { SitePage } from "@/types/api";

interface AboutViewProps {
  lang: string;
  dict: any;
  aboutPage: SitePage | null;
}

export default function AboutView({ lang, dict, aboutPage }: AboutViewProps) {
  const s = dict.aboutPage;
  const sections = aboutPage?.sections ?? [];
  const heroSection = getSectionByType(sections, "hero");
  const featuresSection = getSectionByType(sections, "features");
  const appPromoSection = getSectionByType(sections, "app_promo");
  const howItWorksSection = getSectionByType(sections, "how_it_works");
  const whyChooseUsSection = getSectionByType(sections, "why_choose_us");
  const appDownloadSection = getSectionByType(sections, "app_download");
  const faqSection = getSectionByType(sections, "faq");

  const downloadLink = heroSection?.links?.find((link) =>
    link.label.toLowerCase().includes("download")
  );
  const heroImageTop = heroSection?.images?.[0]?.url ?? "/images/about/Rectangle1.png";
  const heroImageBottom = heroSection?.images?.[1]?.url ?? "/images/about/Rectangle21.png";

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <HeaderContainer lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-6 px-[10px] sm:px-6 lg:px-8 space-y-12 bg-white">

        {/* Peach Hero Banner Block */}
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-8 sm:p-12 md:p-10 flex flex-col gap-12 lg:gap-8 shadow-sm relative overflow-hidden transition-all duration-300">

            {/* Top Row: Info + Right Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Left side text column */}
              <div className="flex flex-col items-start text-left rtl:text-right h-full justify-between">

                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181818] leading-tight tracking-tight max-w-lg">
                    {heroSection?.title ?? s.title}
                  </h1>

                  <p className="text-sm sm:text-[1.5rem] text-[#8C8C8C] font-normal leading-relaxed ">
                    {heroSection?.content ?? s.desc}
                  </p>
                </div>

                <Link
                  href={downloadLink?.url ?? "#download-app"}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[1rem] bg-[#FF5500] text-white font-bold hover:bg-orange-600 active:scale-95 transition-all duration-300 w-fit text-sm shadow-sm sm:mt-10 mt-5"
                >
                  {/* Download Icon */}
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="text-[1.125rem]">{downloadLink?.label ?? s.downloadApp}</span>
                </Link>
              </div>

              {/* Right side Image column */}
              <div className="relative w-full">
                <img
                  src={heroImageTop}
                  alt={heroSection?.images?.[0]?.alt ?? "Hanging Clothes on Rack"}
                  className="w-full h-auto"
                />
              </div>

            </div>

            {/* Bottom Row: Wide Image Banner */}
            <div className="relative w-full  ">
              <img
                src={heroImageBottom}
                alt={heroSection?.images?.[1]?.alt ?? "Hanging Clothes on Rack"}
                className="w-full h-auto"
              />
            </div>

          </div>
        </ScrollReveal>

      </main>


      {/* Features Section */}
      <ScrollReveal variant="fade-up">
        <AboutFeaturesSection lang={lang} dict={dict} section={featuresSection} />
      </ScrollReveal>

      {/* About Promo Section */}
      <ScrollReveal variant="fade-up">
        <AboutPromoSection lang={lang} dict={dict} section={appPromoSection} />
      </ScrollReveal>

      {/* How It Works Section */}
      <ScrollReveal variant="fade-up">
        <HowItWorksSection lang={lang} dict={dict} section={howItWorksSection} />
      </ScrollReveal>


      {/* How It Works Section with Stacking Scroll Animation */}
      <ScrollReveal variant="fade-up">
        <AboutHowItWorksSection lang={lang} dict={dict} section={howItWorksSection} />
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal variant="fade-up">
        <ServicesSection lang={lang} dict={dict} section={whyChooseUsSection} bgClass="bg-[#FFF3ED]" />
      </ScrollReveal>

      {/* Mobile App Section */}
      <ScrollReveal variant="fade-up">
        <MobileAppSection lang={lang} dict={dict} section={appDownloadSection} />
      </ScrollReveal>


      {/* FAQ Section */}
      <ScrollReveal variant="fade-up">
        <FaqSection lang={lang} dict={dict} section={faqSection} />
      </ScrollReveal>

      {/* Footer Section */}
      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

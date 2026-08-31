import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import FooterContainer from "@/components/layout/FooterContainer";
import MobileAppSection from "@/components/home/MobileAppSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getSectionByType } from "@/lib/api/home";
import { sortByOrder } from "@/lib/api/utils";
import type { SitePage } from "@/types/api";

interface PricingViewProps {
  lang: string;
  dict: any;
  pricingPage: SitePage | null;
}

const fallbackImages = [
  "/images/price/Rectangle3.png",
  "/images/price/Rectangle4.png",
  "/images/price/Rectangle5.png",
  "/images/price/Rectangle6.png",
  "/images/price/Rectangle1.png",
  "/images/price/Rectangle2.png",
];

export default function PricingView({ lang, dict, pricingPage }: PricingViewProps) {
  const s = dict.pricingPage;
  const sections = pricingPage?.sections ?? [];
  const heroSection = getSectionByType(sections, "hero");
  const servicesGridSection = getSectionByType(sections, "services_grid");
  const appDownloadSection = getSectionByType(sections, "app_download");

  const fallbackCards = [
    {
      title: s.card1Title,
      desc: s.card1Desc,
      price: s.card1Price,
      image: fallbackImages[0],
    },
    {
      title: s.card2Title,
      desc: s.card2Desc,
      price: s.card2Price,
      image: fallbackImages[1],
    },
    {
      title: s.card3Title,
      desc: s.card3Desc,
      price: s.card3Price,
      image: fallbackImages[2],
    },
    {
      title: s.card4Title,
      desc: s.card4Desc,
      price: s.card4Price,
      image: fallbackImages[3],
    },
    {
      title: s.card5Title,
      desc: s.card5Desc,
      price: s.card5Price,
      image: fallbackImages[4],
    },
    {
      title: s.card6Title,
      desc: s.card6Desc,
      price: s.card6Price,
      image: fallbackImages[5],
    },
  ];

  const pricedSubsections = sortByOrder(servicesGridSection?.subsections).filter(
    (item) => item.price != null
  );

  const cards = pricedSubsections.length
    ? pricedSubsections.map((item, idx) => ({
        title: item.title,
        desc: item.content,
        price: String(item.price),
        image: item.images?.[0]?.url ?? fallbackImages[idx] ?? fallbackImages[0],
      }))
    : fallbackCards;

  const renderCardImage = (image: string, title: string) => {
    return (
      <div className="relative w-20 h-20 select-none">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          draggable={false}
        />
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-6 px-[10px] sm:px-6 lg:px-8 space-y-12 bg-white">

        {/* Transparent Pricing Orange Banner Block */}
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <div className="max-w-7xl mx-auto bg-[#FF5500] text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300">
            <span className="text-xs sm:text-[1.125rem] font-medium text-[#BFD1FA] tracking-wider  block mb-3">
              {heroSection?.title ?? s.headerLabel}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight whitespace-pre-line max-w-3xl">
              {heroSection?.content ?? s.headerTitle}
            </h1>
          </div>
        </ScrollReveal>

        {/* Savings Bags Section Panel (Lavender Background) */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-7xl mx-auto bg-[#ECEFFB] rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col shadow-sm transition-all duration-300">

            {/* Header block for section */}
            <div className="text-left rtl:text-right mb-10 max-w-3xl space-y-3">
              <h2 className="text-[#3748C8] font-semibold text-5xl sm:text-5xl tracking-tight leading-none">
                {servicesGridSection?.title ?? s.sectionTitle}
              </h2>
              <p className="text-[#3748C8] font-normal text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {servicesGridSection?.content ?? s.sectionDesc}
              </p>
            </div>

            {/* Pricing cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col border border-slate-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center items-center justify-between min-h-[340px]"
                >
                  {/* Horizontal peach pill shape top container for the icon */}
                  <div className="w-full h-28 rounded-[2rem] bg-[#FFF3ED] flex items-center justify-center mb-6 shrink-0 relative overflow-hidden">
                    {renderCardImage(card.image, card.title)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#181818] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8C8C8C] font-normal leading-relaxed max-w-xs mb-4">
                    {card.desc}
                  </p>

                  {/* Price block */}
                  <div className="flex items-baseline justify-center gap-1 mt-auto">
                    <span className="text-3xl font-bold text-[#1A1D2E] leading-none">
                      {card.price}
                    </span>
                    <span className="text-xs font-normal text-[#6B7194] leading-none">
                      {s.currency}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

      </main>

      {/* Mobile App Section */}
      <ScrollReveal variant="fade-up">
        <MobileAppSection lang={lang} dict={dict} section={appDownloadSection} />
      </ScrollReveal>

      {/* Footer Section */}
      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

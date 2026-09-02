import React from "react";
import Link from "next/link";
import type { SiteSection } from "@/types/api";

interface PromoSectionProps {
  lang: string;
  dict: {
    promo: {
      title: string;
      subtitle: string;
      appStoreSub: string;
      appStoreTitle: string;
      playStoreSub: string;
      playStoreTitle: string;
    };
  };
  section?: SiteSection;
}

export default function PromoSection({ lang, dict, section }: PromoSectionProps) {
  const isAr = lang === "ar";
  const appStoreLink =
    section?.links?.find(
      (link) =>
        link.label.toLowerCase().includes("app store") ||
        link.label.toLowerCase().includes("apple") ||
        link.label.includes("ابل") ||
        link.label.includes("آبل")
    ) ?? section?.links?.[0];

  const playStoreLink =
    section?.links?.find(
      (link) =>
        link.label.toLowerCase().includes("play store") ||
        link.label.toLowerCase().includes("google") ||
        link.label.includes("جوجل") ||
        link.label.includes("بلاي")
    ) ?? (section?.links && section.links.length > 1 ? section.links[1] : undefined);

  const promoImage = section?.images?.[0]?.url ?? "/images/HandandiPhone16Pro.png";

  return (
    <section className="w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-white">
      {/* Orange Container */}
      <div className="max-w-7xl mx-auto bg-[#FF5500] rounded-[2rem] sm:rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between shadow-lg overflow-hidden transition-all duration-300 relative">

        {/* Text Content Block */}
        <div
          className={`flex-1 text-white flex flex-col ${
            isAr
              ? "text-right items-start lg:items-start lg:pr-16 lg:pl-8"
              : "text-left items-start lg:items-start lg:pl-16 lg:pr-8"
          } p-6 sm:p-10 md:p-12 lg:py-16 w-full z-10`}
        >
          {/* Main Title */}
          <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight tracking-tight whitespace-pre-line">
            {section?.title ?? dict.promo.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-xs min-[400px]:text-sm sm:text-base lg:text-2xl text-white/90 max-w-lg font-medium leading-relaxed">
            {section?.content ?? dict.promo.subtitle}
          </p>

          {/* App Download Badges */}
          <div className="mt-6 sm:mt-8 flex flex-row items-center gap-3 sm:gap-4 flex-wrap w-full sm:w-auto">
            {/* Apple App Store */}
            <Link
              href={appStoreLink?.url ?? "#app-store"}
              className="flex items-center gap-2.5 sm:gap-3 py-2 px-3.5 sm:py-2.5 sm:px-5 bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 rounded-xl sm:rounded-2xl transition-all duration-200 text-white backdrop-blur-xs flex-1 min-[380px]:flex-initial justify-center sm:justify-start"
            >
              {/* Apple Icon */}
              <img
                src="/images/about/iconios.svg"
                alt="App Store"
                className="w-7 h-7 sm:w-9 sm:h-9 object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-tight text-left rtl:text-right">
                <span className="text-[9px] sm:text-[11px] text-white/80 font-medium">{dict.promo.appStoreSub}</span>
                <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide whitespace-nowrap">{appStoreLink?.label ?? dict.promo.appStoreTitle}</span>
              </div>
            </Link>

            {/* Google Play Store */}
            <Link
              href={playStoreLink?.url ?? "#play-store"}
              className="flex items-center gap-2.5 sm:gap-3 py-2 px-3.5 sm:py-2.5 sm:px-5 bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 rounded-xl sm:rounded-2xl transition-all duration-200 text-white backdrop-blur-xs flex-1 min-[380px]:flex-initial justify-center sm:justify-start"
            >
              {/* Google Play Icon */}
              <img
                src="/images/about/Icongoogle.svg"
                alt="Play Store"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-tight text-left rtl:text-right">
                <span className="text-[9px] sm:text-[11px] text-white/80 font-medium">{dict.promo.playStoreSub}</span>
                <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide whitespace-nowrap">{playStoreLink?.label ?? dict.promo.playStoreTitle}</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Hand holding iPhone Image Block */}
        <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-end h-full self-end relative mt-3 sm:mt-6 lg:mt-0 px-4 sm:px-8 lg:px-0">
          <div className="relative self-end overflow-hidden flex items-end justify-center w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] -mb-1">
            <img
              src={promoImage}
              alt={section?.images?.[0]?.alt ?? "Hand holding iPhone 16 Pro"}
              className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

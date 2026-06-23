import React from "react";
import Link from "next/link";

interface AboutPromoSectionProps {
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
}

export default function AboutPromoSection({ lang, dict }: AboutPromoSectionProps) {
  const isAr = lang === "ar";

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Orange Container */}
      <div className="max-w-7xl mx-auto bg-[#FF5500] rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between shadow-lg overflow-hidden transition-all duration-300">

        {/* Text Content Block */}
        <div
          className={`flex-1 text-white flex flex-col ${isAr ? "text-right items-start lg:items-start lg:pr-16 lg:pl-8" : "text-left items-start lg:items-start lg:pl-16 lg:pr-8"
            } p-8 sm:p-12 lg:py-16 w-full`}
        >
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight whitespace-pre-line">
            {dict.promo.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-lg font-medium leading-relaxed">
            {dict.promo.subtitle}
          </p>

          {/* App Download Badges (Horizontal Row) */}
          <div className="mt-8 flex flex-row items-center gap-8 flex-wrap">
            {/* Apple App Store */}
            <Link
              href="#app-store"
              className="flex items-center gap-3 text-white hover:text-white/80 group active:scale-95 transition-all duration-200"
            >
              {/* Apple Icon */}
              <img
                src="/images/about/iconios.svg"
                alt="App Store"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] sm:text-xs text-white/70 font-semibold">{dict.promo.appStoreSub}</span>
                <span className="text-sm sm:text-base font-bold tracking-wide">{dict.promo.appStoreTitle}</span>
              </div>
            </Link>

            {/* Google Play Store */}
            <Link
              href="#play-store"
              className="flex items-center gap-3 text-white hover:text-white/80 group active:scale-95 transition-all duration-200"
            >
              {/* Google Play Icon */}
              <img
                src="/images/about/Icongoogle.svg"
                alt="Play Store"
                className="w-8 h-8 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] sm:text-xs text-white/70 font-semibold">{dict.promo.playStoreSub}</span>
                <span className="text-sm sm:text-base font-bold tracking-wide">{dict.promo.playStoreTitle}</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Hand holding iPhone Image Block */}
        <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-end h-full self-end relative">
          <div className="relative self-end overflow-hidden flex items-end">
            <img
              src="/images/about/Handiphone.png"
              alt="Hand holding iPhone"
              className="w-full h-auto object-contain object-bottom select-none pointer-events-none transform hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

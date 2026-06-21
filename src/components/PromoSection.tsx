import React from "react";
import Image from "next/image";
import Link from "next/link";

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
}

export default function PromoSection({ lang, dict }: PromoSectionProps) {
  const isAr = lang === "ar";

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Orange Container */}
      <div className="max-w-7xl mx-auto bg-[#FF5500] rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between shadow-lg overflow-hidden transition-all duration-300">
        
        {/* Text Content Block */}
        <div
          className={`flex-1 text-white flex flex-col ${
            isAr ? "text-right items-start lg:items-start lg:pr-16 lg:pl-8" : "text-left items-start lg:items-start lg:pl-16 lg:pr-8"
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
              <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.1.08.2.12.3.12.87 0 1.93-.57 2.52-1.45z" />
              </svg>
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
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 2.03c-.23 0-.44.06-.62.18l11.09 11.09 3.29-3.29-13.14-7.58c-.2-.11-.41-.18-.62-.18zM3.5 3.32v17.36c0 .17.03.34.1.5l10.22-10.22L3.5 3.32zm11.75 8.16L4.72 21.73c.16.1.34.15.53.15.22 0 .43-.06.63-.17l13.13-7.58-3.76-3.76zm2.84-.88l4.13 2.39c.5.29.62.91.33 1.41-.16.27-.43.43-.72.43-.24 0-.47-.1-.66-.2l-3.08-1.78 3.76-3.76z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] sm:text-xs text-white/70 font-semibold">{dict.promo.playStoreSub}</span>
                <span className="text-sm sm:text-base font-bold tracking-wide">{dict.promo.playStoreTitle}</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Hand holding iPhone 16 Pro Image Block */}
        <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-end h-full self-end relative pt-6 lg:pt-16">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[440px] aspect-[4/3] lg:aspect-[4.5/4] self-end overflow-hidden flex items-end">
            <Image
              src="/images/HandandiPhone16Pro.png"
              alt="Hand holding iPhone 16 Pro"
              width={440}
              height={440}
              style={{ height: "auto" }}
              className="w-full object-contain object-bottom select-none pointer-events-none transform hover:scale-[1.02] transition-transform duration-500 ease-out"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MobileAppSectionProps {
  lang: string;
  dict: {
    mobileAppSection: {
      label: string;
      title: string;
      scanToDownload: string;
      platforms: string;
      appStoreSub: string;
      appStoreTitle: string;
      playStoreSub: string;
      playStoreTitle: string;
    };
  };
}

export default function MobileAppSection({ lang, dict }: MobileAppSectionProps) {
  const isAr = lang === "ar";
  const s = dict.mobileAppSection;

  return (
    <section id="download-app" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Brand Royal Blue Rounded Container */}
      <div className="max-w-7xl mx-auto bg-[#3748C8] rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 shadow-sm relative overflow-hidden transition-all duration-300 min-h-[480px]">

        {/* Left Column: Title, Subtitle, Download Badges & QR Code */}
        <div className="w-full lg:w-[60%] flex flex-col items-start text-left rtl:text-right z-10 space-y-8">

          {/* Header Texts */}
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold text-white/80 tracking-wider uppercase block">
              {s.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight whitespace-pre-line">
              {s.title}
            </h2>
          </div>

          {/* Badges and QR code horizontal flex row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-6 w-full sm:w-auto">

            {/* Badges Card (App Store & Play Store) */}
            <div className="bg-white/10 border border-white/10 rounded-[2rem] p-10 flex flex-col gap-4 w-full sm:w-[240px] justify-center">

              {/* App Store button */}
              <Link
                href="#download-ios"
                className="flex items-center gap-3 bg-white hover:bg-white/95 rounded-2xl px-5 py-3 shadow-sm text-left rtl:text-right w-full transition-colors cursor-pointer"
              >
                <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/ios.svg"
                    alt="iOS App Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold block leading-none">
                    {s.appStoreSub}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-800 block leading-none mt-1">
                    {s.appStoreTitle}
                  </span>
                </div>
              </Link>

              {/* Play Store button */}
              <Link
                href="#download-android"
                className="flex items-center gap-3 bg-white hover:bg-white/95 rounded-2xl px-5 py-3 shadow-sm text-left rtl:text-right w-full transition-colors cursor-pointer"
              >
                <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/google_play.svg"
                    alt="Android Play Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold block leading-none">
                    {s.playStoreSub}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-800 block leading-none mt-1">
                    {s.playStoreTitle}
                  </span>
                </div>
              </Link>
            </div>

            {/* QR Code Card */}
            <div className="bg-white/10 border border-white/10 rounded-[2rem] p-10 flex flex-row items-center gap-4 w-full sm:w-[371px]">

              {/* White Box for QR Code */}
              <div className="w-[112px] h-[112px]  rounded-xl p-1.5 flex items-center justify-center shrink-0  relative">
                <Image
                  src="/images/imageqr.png"
                  alt="Download QR Code"
                  fill
                  className="p-1 object-contain"
                />
              </div>

              {/* Text */}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-black text-white block leading-snug">
                  {s.scanToDownload}
                </span>
                <span className="text-[10px] sm:text-xs text-white/70 font-bold block leading-none">
                  {s.platforms}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: iPhone 15 App Mockup */}
        {/* Desktop Absolute/Aligned-bottom placement */}
        <div className="hidden lg:block absolute bottom-0 right-10 xl:right-16 w-[340px] xl:w-[518px] h-[430px] xl:h-[463px] z-10 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/iPhone15.svg"
              alt="SmartWash iPhone App Screen"
              fill
              sizes="380px"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Mobile/Tablet Centered-bottom placement */}
        <div className="block lg:hidden w-[260px] sm:w-[300px] h-[320px] sm:h-[360px] relative mt-8 -mb-6 sm:-mb-10 md:-mb-16 pointer-events-none shrink-0">
          <Image
            src="/images/iPhone15.svg"
            alt="SmartWash iPhone App Screen"
            fill
            sizes="(max-width: 768px) 300px, 100vw"
            className="object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}

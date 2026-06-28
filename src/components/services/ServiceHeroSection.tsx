import React from "react";

interface ServiceHeroSectionProps {
  lang: string;
  dict: any;
}

export default function ServiceHeroSection({ lang, dict }: ServiceHeroSectionProps) {
  const s = dict.servicePage;

  return (
    <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-[1.5rem] sm:p-12 md:p-[2.5rem] flex flex-col gap-10 shadow-sm relative overflow-hidden transition-all duration-300">

      {/* Top Grid: Info and Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Column: Text Info (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left rtl:text-right space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#181818] leading-tight tracking-tight whitespace-pre-line">
            {s.heroTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#8C8C8C] font-normal leading-relaxed max-w-md mb-12">
            {s.heroDesc}
          </p>
          <a
            href="#download-app"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[1.25rem] bg-[#FC4F00] text-white font-bold hover:bg-orange-600 active:scale-95 transition-all duration-300 shadow-sm w-fit text-sm"
          >
            {/* Download Icon */}
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="font-medium">{s.downloadApp}</span>
          </a>
        </div>

        {/* Middle Column: Two Stacked Info Cards (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
          {/* Card 1: Instant Pickup */}
          <div className="bg-[#3748c81a] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between items-start text-left rtl:text-right min-h-[160px] lg:h-[72%] select-none">
            <div className="w-full h-full ">
              <img src="/images/service/stars.svg" alt="Stars Icon" className="w-6 h-6" />
            </div>
            <div className="space-y-1 mt-20">
              <h3 className="text-lg font-bold text-[#000] text-[1.25rem] leading-tight">
                {s.instantPickup}
              </h3>
              <p className="text-xs text-[#8C8C8C] font-normal leading-relaxed">
                {s.instantPickupDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Honest Pricing */}
          <div className="bg-[#3748c81a] rounded-[2rem] p-6 sm:p-8 flex items-center justify-between gap-4 min-h-[90px] lg:h-[36%] select-none text-left rtl:text-right">
            <div className="space-y-0.5">
              <p className="text-xs text-[#000] font-normal leading-tight">
                {s.honestPricing}
              </p>
              <h3 className="text-lg font-bold text-[#000] leading-tight">
                {s.honestPricingDesc}
              </h3>
            </div>
            <div className="w-12 h-12 flex items-center justify-center  shrink-0">
              <img src="/images/service/invoice-04.svg" alt="Invoice Icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Right Column: Tall Card (col-span-4) */}
        <div className="lg:col-span-4 bg-[#3748c81a] rounded-[2rem] p-4 sm:p-4 flex flex-col justify-between items-start text-left rtl:text-right select-none min-h-[300px]">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FC4F00] font-normal text-white text-[16px] sm:text-xs font-black uppercase tracking-wider mb-3">
              {s.fastTrack}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#181818] leading-tight">
              {s.fastTrackDesc}
            </h3>
          </div>
          <div className="relative w-full mt-[66px] rounded-[1.5rem] overflow-hidden shadow-sm">
            <img
              src="/images/service/Rectangle33.png"
              alt="Delivery Van"
              className="w-full object-cover h-40 sm:h-48 lg:h-44"
            />
          </div>
        </div>

      </div>

      {/* Bottom Grid: Gallery Images */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Image (Col Span 4) */}
        <div className="lg:col-span-4 rounded-[2rem] overflow-hidden shadow-sm relative min-h-[220px]">
          <img
            src="/images/service/Rectangle3.png"
            alt="Folded Laundry Stack & Basket"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image (Col Span 8) */}
        <div className="lg:col-span-8 rounded-[2rem] overflow-hidden shadow-sm relative min-h-[220px]">
          <img
            src="/images/service/Rectangle1.png"
            alt="Hanging Clothes Rack & Dressing Room"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}

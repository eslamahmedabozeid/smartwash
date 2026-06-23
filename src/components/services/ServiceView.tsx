import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileAppSection from "@/components/home/MobileAppSection";
import FaqSection from "@/components/shared/FaqSection";

interface ServiceViewProps {
  lang: string;
  service: string;
  dict: any;
}

export default function ServiceView({ lang, service, dict }: ServiceViewProps) {
  const s = dict.servicePage;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-12 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        
        {/* Service Hero Banner Block */}
        <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col gap-10 shadow-sm relative overflow-hidden transition-all duration-300">
          
          {/* Top Grid: Info and Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Text Info (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start text-left rtl:text-right space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-tight tracking-tight whitespace-pre-line">
                {s.heroTitle}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed max-w-md">
                {s.heroDesc}
              </p>
              <a
                href="#download-app"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[1.25rem] bg-[#FF5500] text-white font-bold hover:bg-orange-600 active:scale-95 transition-all duration-300 shadow-sm w-fit text-sm"
              >
                {/* Download Icon */}
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>{s.downloadApp}</span>
              </a>
            </div>

            {/* Middle Column: Two Stacked Info Cards (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
              {/* Card 1: Instant Pickup */}
              <div className="bg-[#EAEAF2]/60 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between items-start text-left rtl:text-right min-h-[160px] lg:h-[58%] select-none">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <img src="/images/service/stars.svg" alt="Stars Icon" className="w-6 h-6" />
                </div>
                <div className="space-y-1 mt-4">
                  <h3 className="text-lg font-black text-slate-800 leading-tight">
                    {s.instantPickup}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                    {s.instantPickupDesc}
                  </p>
                </div>
              </div>

              {/* Card 2: Honest Pricing */}
              <div className="bg-[#EAEAF2]/60 rounded-[2rem] p-6 sm:p-8 flex items-center justify-between gap-4 min-h-[90px] lg:h-[36%] select-none text-left rtl:text-right">
                <div className="space-y-0.5">
                  <p className="text-xs text-slate-400 font-semibold leading-tight">
                    {s.honestPricing}
                  </p>
                  <h3 className="text-lg font-black text-slate-800 leading-tight">
                    {s.honestPricingDesc}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                  <img src="/images/service/invoice-04.svg" alt="Invoice Icon" className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Right Column: Tall Card (col-span-4) */}
            <div className="lg:col-span-4 bg-[#EAEAF2]/60 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between items-start text-left rtl:text-right select-none min-h-[300px]">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#FF5500] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
                  {s.fastTrack}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 leading-tight">
                  {s.fastTrackDesc}
                </h3>
              </div>
              <div className="relative w-full mt-6 rounded-[1.5rem] overflow-hidden shadow-sm">
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

        {/* Mobile App Section */}
        <MobileAppSection lang={lang} dict={dict} />

        {/* FAQ Section */}
        <FaqSection lang={lang} dict={dict} />

      </main>

      {/* Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

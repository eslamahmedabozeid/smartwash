import React from "react";
import Image from "next/image";

interface ServiceFeaturesSectionProps {
  lang: string;
  dict: any;
}

export default function ServiceFeaturesSection({ lang, dict }: ServiceFeaturesSectionProps) {
  const isAr = lang === "ar";
  const s = dict.serviceFeaturesSection;

  const steps = [
    {
      title: s.card1Title,
      desc: s.card1Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#3F51B5]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: s.card2Title,
      desc: s.card2Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#3F51B5]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: s.card3Title,
      desc: s.card3Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      ),
    },
    {
      title: s.card4Title,
      desc: s.card4Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#3F51B5]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-smartwash" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Orange Container */}
      <div className="max-w-7xl mx-auto bg-[#FF5500] rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-start gap-20 lg:gap-20 shadow-lg relative transition-all duration-300 w-full text-white">

        {/* Left Column: Sticky Title & Image */}
        <div className="w-full lg:w-[45%] sticky top-[15px] sm:top-20 lg:top-28 lg:self-start space-y-8 text-left rtl:text-right z-[99999] bg-[#FF5500]">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-medium text-white tracking-wider block">
              {s.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight whitespace-pre-line">
              {s.title}
            </h2>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
            <Image
              src="/images/hero_laundry_bag.png"
              alt="Luxurious And Cozy Laundry Experience"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Steps Stack with Timeline Line */}
        <div className="w-full lg:w-[50%] lg:ml-auto relative flex flex-col items-center">

          {/* Vertical dashed line running behind cards - aligned with the icons */}
          <div
            className={`absolute top-12 bottom-12 w-0.5 border-l-2 border-dashed border-white/20 z-0 hidden lg:block ${isAr ? "right-[50%]" : "left-[50%]"
              }`}
          />

          {/* Cards container with scroll spacing */}
          <div className="w-full flex flex-col items-center z-10 relative space-y-0">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className={`sticky top-[440px] sm:top-[640px] lg:top-[284px] w-full transition-all duration-300 ${
                  idx < steps.length - 1 ? "mb-[25vh] lg:mb-[20vh]" : "mb-[15vh] lg:mb-[20vh]"
                }`}
                style={{ zIndex: 10 + idx }}
              >

                {/* Step Card */}
                <div className="w-full bg-white rounded-[2rem] p-6 sm:p-8 flex flex-row items-center gap-5 sm:gap-6 shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300 text-left rtl:text-right">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0EA] flex items-center justify-center shrink-0 shadow-inner">
                    {step.icon}
                  </div>

                  {/* Step Contents */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#181818] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C8C8C] font-normal leading-relaxed w-[74%]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Mobile Dash Line Connector */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-3 lg:hidden">
                    <div className="w-0.5 h-6 border-l-2 border-dashed border-white/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

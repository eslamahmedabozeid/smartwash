import React from "react";
import Image from "next/image";

interface HowItWorksSectionProps {
  lang: string;
  dict: {
    howItWorksSection: {
      label: string;
      title: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
    };
  };
}

export default function HowItWorksSection({ lang, dict }: HowItWorksSectionProps) {
  const isAr = lang === "ar";
  const s = dict.howItWorksSection;

  const steps = [
    {
      title: s.step1Title,
      desc: s.step1Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      title: s.step2Title,
      desc: s.step2Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: s.step3Title,
      desc: s.step3Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 7a3 3 0 1 0-3-3" />
          <path d="M2 17h20L12 7z" />
        </svg>
      ),
    },
    {
      title: s.step4Title,
      desc: s.step4Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Container matching standard page styling with light peach container */}
      <div className="max-w-7xl mx-auto bg-[#FFEDE6] rounded-[2.5rem] p-6 sm:p-10 md:p-14 flex flex-col lg:flex-row items-start gap-12 lg:gap-16 shadow-sm relative transition-all duration-300">

        {/* Left Column: Fixed/Sticky layout header & image on desktop */}
        <div className="w-full lg:w-[45%] sticky top-[15px] sm:top-20 lg:top-28 lg:self-start space-y-8 text-left rtl:text-right z-[99999] bg-[#FFEDE6]">
          <div className="space-y-3">
            <span className="text-xs sm:text-[1.125rem] font-medium text-[#000] tracking-wider uppercase block">
              {s.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E1E1E] leading-tight tracking-tight whitespace-pre-line">
              {s.title}
            </h2>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md">
            <Image
              src="/images/Rectangle 11.png"
              alt="How Smart Wash Works"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Scrollable cards stack */}
        <div className="w-full lg:w-[50%] lg:ml-auto relative flex flex-col items-center">

          {/* Vertical dashed line running behind cards on desktop */}
          <div className="absolute top-12 bottom-[30vh] left-1/2 w-0.5 border-l-2 border-dashed border-[#FF5500]/20 -translate-x-1/2 z-0 hidden lg:block" />

          {/* Cards container */}
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
                <div className="w-full bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-start gap-5 shadow-sm border border-slate-100/50 hover:shadow-md transition-all duration-300 text-left rtl:text-right">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FFEFEA] flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>

                  {/* Step Contents */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#181818] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8C8C8C] font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Mobile Dash Line Connector */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <div className="w-0.5 h-8 border-l-2 border-dashed border-[#FF5500]/25" />
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

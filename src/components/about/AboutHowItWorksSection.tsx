import React from "react";

interface AboutHowItWorksSectionProps {
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

export default function AboutHowItWorksSection({ lang, dict }: AboutHowItWorksSectionProps) {
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
    <section id="about-how-it-works" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative bg-[#FFF3ED] rounded-[2.5rem] shadow-sm w-full">

        {/* Section Header (Centered & Sticky) */}
        <div className="sticky top-0 text-center space-y-3 w-full pt-10 pb-6 z-30 bg-[#FFF3ED] rounded-t-[2.5rem] px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-[1.125rem] font-medium text-[#FC4F00] tracking-wider uppercase block">
            {s.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FC4F00] leading-tight tracking-tight whitespace-pre-line">
            {s.title}
          </h2>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-6xl relative flex flex-col items-center pb-12 px-4 sm:px-6 lg:px-8 mt-4">

          {/* Vertical dashed line running behind cards */}
          <div className="absolute top-16 bottom-[35vh] left-1/2 w-0.5 border-l-2 border-dashed border-[#FF5500]/20 -translate-x-1/2 z-0" />

          {/* Vertical Cards List */}
          <div className="w-full flex flex-col items-center z-10 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`sticky top-[150px] sm:top-[200px] w-full transition-all duration-300 ${idx < steps.length - 1 ? "mb-[30vh] md:mb-[45vh]" : "mb-0"
                  }`}
                style={{ zIndex: 10 + idx }}
              >
                {/* Step Card */}
                <div className="w-full bg-white rounded-[2.5rem] p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 shadow-sm border border-slate-100/40 text-left rtl:text-right">

                  {/* Giant Faint Number (Left Column) */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-16 lg:pl-24 shrink-0 select-none">
                    <span className="text-7xl sm:text-8xl md:text-9xl font-black text-[#E8EBF8]/75 leading-none">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Icon and Content Block (Right Column) */}
                  <div className="w-full md:w-1/2 flex items-start gap-4 sm:gap-6 justify-start md:pr-12 lg:pr-20">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF3ED] flex items-center justify-center shrink-0 shadow-inner">
                      {step.icon}
                    </div>

                    {/* Step text info */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#181818] leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-[14px] text-[#8C8C8C] font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

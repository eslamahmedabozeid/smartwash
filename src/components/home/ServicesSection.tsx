import React from "react";

interface ServicesSectionProps {
  lang: string;
  dict: {
    servicesSection: {
      label: string;
      title: string;
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
      card4Title: string;
      card4Desc: string;
    };
  };
  bgClass?: string;
}

export default function ServicesSection({ lang, dict, bgClass = "bg-[#ECEFFB]" }: ServicesSectionProps) {
  const isAr = lang === "ar";
  const s = dict.servicesSection;

  const features = [
    {
      title: s.card1Title,
      desc: s.card1Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: s.card2Title,
      desc: s.card2Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M13 7l-4 5h4v5l4-5h-4z" />
        </svg>
      ),
    },
    {
      title: s.card3Title,
      desc: s.card3Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: s.card4Title,
      desc: s.card4Desc,
      icon: (
        <svg className="w-6 h-6 stroke-[#FF5500]" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22C2 10 10 2 22 2c0 12-8 20-20 20z" />
          <path d="M2 22l14-14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-smartwash" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Light Lavender/Peach Rounded Card Panel matching user screenshot */}
      <div className={`max-w-7xl mx-auto ${bgClass} rounded-[2.5rem] p-6 sm:p-10 md:p-[2.5rem] flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300`}>

        {/* Section Header Block */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-[1.125rem] font-medium text-[#181818] tracking-wider uppercase block">
            {s.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-semibold text-[#1E1E1E] leading-tight tracking-tight max-w-3xl whitespace-pre-line">
            {s.title}
          </h2>
        </div>

        {/* Feature Cards Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[var(--spacing-700,2rem)] p-6 sm:p-6 flex flex-col items-center text-center border-2 border-[rgba(252,79,0,0.10)] hover:shadow-md transition-all duration-300"

            >
              {/* Centered Pill Shape Box for Icon */}
              <div className="w-full h-12 rounded-2xl bg-[#FFEFEA] flex items-center justify-center mb-6 shrink-0">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[1.25rem] font-bold text-[#181818] mb-2 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[1rem] text-[#8C8C8C] font-normal leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

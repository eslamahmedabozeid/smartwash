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
        <img src="/images/icons/clock-01.svg" alt="" />
      ),
    },
    {
      title: s.card2Title,
      desc: s.card2Desc,
      icon: (
        <img src="/images/icons/shield-energy.svg" alt="" />

      ),
    },
    {
      title: s.card3Title,
      desc: s.card3Desc,
      icon: (
        <img src="/images/icons/locations-06.svg" alt="" />
      ),
    },
    {
      title: s.card4Title,
      desc: s.card4Desc,
      icon: (
        <img src="/images/icons/leaf-01.svg" alt="" />

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

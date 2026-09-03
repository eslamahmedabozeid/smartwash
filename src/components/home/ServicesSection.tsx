import React from "react";
import { normalizeHtmlContent, sortByOrder, stripHtml } from "@/lib/api/utils";
import type { SiteSection } from "@/types/api";

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
  section?: SiteSection;
  bgClass?: string;
}

const fallbackIcons = [
  <img key="clock" src="/images/icons/clock-01.svg" alt="" />,
  <img key="shield" src="/images/icons/shield-energy.svg" alt="" />,
  <img key="location" src="/images/icons/locations-06.svg" alt="" />,
  <img key="leaf" src="/images/icons/leaf-01.svg" alt="" />,
];

export default function ServicesSection({ lang, dict, section, bgClass = "bg-[#ECEFFB]" }: ServicesSectionProps) {
  const s = dict.servicesSection;

  const fallbackFeatures = [
    { title: s.card1Title, desc: s.card1Desc, icon: fallbackIcons[0] },
    { title: s.card2Title, desc: s.card2Desc, icon: fallbackIcons[1] },
    { title: s.card3Title, desc: s.card3Desc, icon: fallbackIcons[2] },
    { title: s.card4Title, desc: s.card4Desc, icon: fallbackIcons[3] },
  ];

  const features = section?.subsections?.length
    ? sortByOrder(section.subsections).map((item, idx) => {
      const iconUrl =
        item.images?.find((image) => image.role === "icon")?.url ??
        item.images?.[0]?.url;

      return {
        title: item.title,
        desc: stripHtml(normalizeHtmlContent(item.content)),
        icon: iconUrl ? (
          <img
            src={iconUrl}
            alt={item.images?.[0]?.alt ?? item.title}
            className="w-7 h-7 object-contain"
          />
        ) : (
          fallbackIcons[idx] ?? fallbackIcons[0]
        ),
      };
    })
    : fallbackFeatures;

  const sectionLabel = section?.title ?? s.label;
  const sectionTitle = section?.content
    ? stripHtml(normalizeHtmlContent(section.content))
    : s.title;

  return (
    <section id="why-smartwash" className="w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-white">
      {/* Light Lavender/Peach Rounded Card Panel matching user screenshot */}
      <div className={`max-w-7xl mx-auto ${bgClass} rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-10 md:p-[2.5rem] flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300`}>

        {/* Section Header Block */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-[1.125rem] font-medium text-[#181818] tracking-wider uppercase block">
            {sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-semibold text-[#1E1E1E] leading-tight tracking-tight max-w-3xl whitespace-pre-line">
            {sectionTitle}
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

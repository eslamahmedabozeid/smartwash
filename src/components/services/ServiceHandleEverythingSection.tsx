import React from "react";
import { sortByOrder, stripHtml } from "@/lib/api/utils";
import type { SiteSection } from "@/types/api";

interface ServiceHandleEverythingSectionProps {
  lang: string;
  dict: any;
  section?: SiteSection;
}

export default function ServiceHandleEverythingSection({
  lang,
  dict,
  section,
}: ServiceHandleEverythingSectionProps) {
  const s = dict.servicePage;

  const fallbackItems = [
    { label: s.catWorkwear, img: "/images/service/second/Rectangle20.png" },
    { label: s.catShirts, img: "/images/service/second/Rectangle201.png" },
    { label: s.catTrousers, img: "/images/service/second/Rectangle 202.png" },
    { label: s.catSuits, img: "/images/service/second/Rectangle203.png" },
    { label: s.catDelicates, img: "/images/service/second/Rectangle204.png" },
    { label: s.catOuterwear, img: "/images/service/second/Rectangle205.png" },
    { label: s.catTraditional, img: "/images/service/second/Rectangle206.png" },
    { label: s.catSarees, img: "/images/service/second/Rectangle207.png" },
  ];

  const items = section?.subsections?.length
    ? sortByOrder(section.subsections).map((item, idx) => ({
        label: item.title,
        img: item.images?.[0]?.url ?? fallbackItems[idx]?.img ?? "/images/service/second/Rectangle20.png",
      }))
    : fallbackItems;

  const showcaseImage =
    section?.images?.find((image) => image.role === "content")?.url ??
    section?.images?.[0]?.url ??
    "/images/service/second/Rectangle24.png";

  const showcaseAlt =
    section?.images?.[0]?.alt ?? "Wardrobe Showcase";

  return (
    <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-8 sm:p-12 md:p-10 flex flex-col lg:flex-row gap-12 lg:gap-16 mt-7 justify-between shadow-sm relative overflow-hidden transition-all duration-300 w-full">

      {/* Left Column: Title & Category Icons */}
      <div className="flex-1 flex flex-col items-start text-left rtl:text-right w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FC4F00] leading-tight tracking-tight whitespace-pre-line max-w-lg">
          {section?.title ?? s.handleTitle}
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:gap-x-6 md:gap-y-10 mt-14 w-full justify-items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center select-none group">
              <img src={item.img} alt={item.label} className=" object-contain" />
              <span className="text-[1.125rem] sm:text-xs md:text-[1.125rem] font-medium text-[#000] text-center mt-3 leading-tight block max-w-[70px] sm:max-w-[100px] min-h-[2rem] overflow-hidden line-clamp-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Wardrobe Showcase Image */}
      <div className="w-full lg:w-[45%] shrink-0">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-sm">
          <img
            src={showcaseImage}
            alt={showcaseAlt}
            className="w-full object-cover aspect-square sm:aspect-[4/3] lg:aspect-auto"
          />
        </div>
      </div>

    </div>
  );
}

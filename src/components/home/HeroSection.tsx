import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroTitle from "./HeroTitle";
import {
  parseHeroTitle,
  splitHeroDescription,
} from "@/lib/api/utils";
import type { SiteSection } from "@/types/api";

interface HeroSectionProps {
  lang: string;
  dict: {
    actions: {
      downloadApp: string;
    };
    hero: {
      title1: string;
      title2: string;
      title3: string;
      desc1: string;
      desc2: string;
      howItWorks: string;
    };
  };
  section?: SiteSection;
}

const imageHeightClasses = [
  "h-[135px] min-[400px]:h-[165px] sm:h-[260px] md:h-[340px] lg:h-[408px]",
  "h-[92px] min-[400px]:h-[112px] sm:h-[175px] md:h-[230px] lg:h-[275px]",
  "h-[58px] min-[400px]:h-[70px] sm:h-[110px] md:h-[140px] lg:h-[164px]",
  "h-[92px] min-[400px]:h-[112px] sm:h-[175px] md:h-[230px] lg:h-[275px]",
  "h-[135px] min-[400px]:h-[165px] sm:h-[260px] md:h-[340px] lg:h-[408px]",
];

const fallbackImages = [
  {
    src: "/images/home/Rectangle5.png",
    alt: "Man with laundry basket",
  },
  {
    src: "/images/home/Rectangle4.png",
    alt: "Professional ironing",
  },
  {
    src: "/images/home/Rectangle3.png",
    alt: "Clothes on hangers",
  },
  {
    src: "/images/home/Rectangle2.png",
    alt: "Laundry duffle bag",
  },
  {
    src: "/images/home/Rectangle1.png",
    alt: "Laundry doorstep delivery",
  },
];

export default function HeroSection({ lang, dict, section }: HeroSectionProps) {
  const heroTitle = section?.title
    ? parseHeroTitle(section.title)
    : {
        title1: dict.hero.title1,
        title2: dict.hero.title2,
        title3: dict.hero.title3,
      };

  const heroDescription = section?.content
    ? splitHeroDescription(section.content)
    : { desc1: dict.hero.desc1, desc2: dict.hero.desc2 };

  const downloadLink =
    section?.links?.find(
      (link) =>
        link.label.toLowerCase().includes("download") ||
        link.label.includes("تحميل") ||
        link.label.includes("تطبيق")
    ) ?? section?.links?.[0];

  const howItWorksLink =
    section?.links?.find(
      (link) =>
        link.label.toLowerCase().includes("how") ||
        link.label.includes("كيف") ||
        link.label.includes("نعمل")
    ) ?? (section?.links && section.links.length > 1 ? section.links[1] : undefined);

  const apiImages = section?.images ?? [];
  const images = fallbackImages.map((fallback, idx) => {
    const apiImage = apiImages[idx];

    return {
      src: apiImage?.url ?? fallback.src,
      alt: apiImage?.alt ?? fallback.alt,
      heightClass: imageHeightClasses[idx],
    };
  });

  return (
    <section className="w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-white">
      {/* Peach/Cream rounded container matching user design */}
      <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-10 md:px-10 md:pt-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300">

        {/* Title */}
        <HeroTitle
          lang={lang}
          title1={heroTitle.title1}
          title2={heroTitle.title2}
          title3={heroTitle.title3}
        />

        {/* Subtitle / Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-[1.5rem] text-slate-500 max-w-5xl leading-relaxed">
          {heroDescription.desc1}
          {heroDescription.desc2 ? (
            <span className="block mt-1">{heroDescription.desc2}</span>
          ) : null}
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Download App Solid Orange Button */}
          <Link
            href={downloadLink?.url ?? "#download"}
            className="flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold rounded-2xl shadow-lg shadow-orange-500/10 active:scale-95 transition-all text-xs sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>{downloadLink?.label ?? dict.actions.downloadApp}</span>
          </Link>

          {/* How It Works Button */}
          <Link
            href={howItWorksLink?.url ?? "#how-it-works"}
            className="px-5 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-[#FF5500]/30 hover:border-[#FF5500] text-[#FF5500] font-bold rounded-2xl hover:bg-orange-50/50 transition-all text-xs sm:text-base"
          >
            {howItWorksLink?.label ?? dict.hero.howItWorks}
          </Link>
        </div>

        {/* Wave-aligned Gallery Images (Side-by-side single row wave on all screens) */}
        <div className="mt-8 sm:mt-12 md:mt-20 w-full flex flex-row flex-nowrap justify-center items-end gap-1.5 min-[400px]:gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative flex-1 min-w-0 max-w-[19%] md:max-w-[18%] ${img.heightClass} overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] shadow-md hover:scale-105 transition-all duration-500 ease-out`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 19vw, (max-width: 1024px) 18vw, 210px"
                className="object-cover"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

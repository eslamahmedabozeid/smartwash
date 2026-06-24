import React from "react";
import Image from "next/image";
import Link from "next/link";

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
}

export default function HeroSection({ lang, dict }: HeroSectionProps) {
  const isAr = lang === "ar";

  // List of images for the gallery
  const images = [
    {
      src: "/images/home/Rectangle5.png",
      alt: "Man with laundry basket",
      heightClass: "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[408px]",
      widthClass: "w-[45%] sm:w-[30%] md:w-[18%]",
    },
    {
      src: "/images/home/Rectangle4.png",
      alt: "Professional ironing",
      heightClass: "h-[160px] sm:h-[220px] md:h-[280px] lg:h-[275px]",
      widthClass: "w-[45%] sm:w-[30%] md:w-[18%]",
    },
    {
      src: "/images/home/Rectangle3.png",
      alt: "Clothes on hangers",
      heightClass: "h-[120px] sm:h-[160px] md:h-[200px] lg:h-[164px]",
      widthClass: "hidden sm:block sm:w-[30%] md:w-[18%]",
    },
    {
      src: "/images/home/Rectangle2.png",
      alt: "Laundry duffle bag",
      heightClass: "h-[160px] sm:h-[220px] md:h-[280px] lg:h-[275px]",
      widthClass: "w-[45%] sm:w-[30%] md:w-[18%]",
    },
    {
      src: "/images/home/Rectangle1.png",
      alt: "Laundry doorstep delivery",
      heightClass: "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[408px]",
      widthClass: "w-[45%] sm:w-[30%] md:w-[18%]",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Peach/Cream rounded container matching user design */}
      <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-6  sm:p-10 md:px-10 md:pt-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E1E1E] leading-tight max-w-4xl tracking-tight">
          {dict.hero.title1}
          <span className="block mt-2 sm:mt-3">
            {dict.hero.title2}{" "}
            <span className="text-[#FF5500] font-black">{dict.hero.title3}</span>
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 text-sm sm:text-base md:text-[1.5rem] text-slate-500 max-w-5xl  leading-relaxed">
          {dict.hero.desc1}
          <span className="block mt-1">{dict.hero.desc2}</span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Download App Solid Orange Button */}
          <Link
            href="#download"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold rounded-2xl shadow-lg shadow-orange-500/10 active:scale-95 transition-all text-sm sm:text-base"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>{dict.actions.downloadApp}</span>
          </Link>

          {/* How It Works Button */}
          <Link
            href="#how-it-works"
            className="px-6 sm:px-8 py-3.5 bg-transparent border-2 border-[#FF5500]/30 hover:border-[#FF5500] text-[#FF5500] font-bold rounded-2xl hover:bg-orange-50/50 transition-all text-sm sm:text-base"
          >
            {dict.hero.howItWorks}
          </Link>
        </div>

        {/* Wave-aligned Gallery Images */}
        <div className="mt-12 md:mt-20 w-full flex flex-wrap md:flex-nowrap justify-center items-end gap-3 sm:gap-4 md:gap-5">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative ${img.widthClass} ${img.heightClass} overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-md   hover:scale-103 transition-all duration-500 ease-out`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 45vw, 18vw"
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

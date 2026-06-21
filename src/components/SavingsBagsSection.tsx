"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface SavingsBagsSectionProps {
  lang: string;
  dict: {
    servicesSectionCustom: {
      label: string;
      title: string;
      subtitle: string;
      knowMore: string;
      card1Tag: string;
      card1Title: string;
      card1Desc: string;
      card1Price: string;
      card2Tag: string;
      card2Title: string;
      card2Desc: string;
      card2Price: string;
      card3Tag: string;
      card3Title: string;
      card3Desc: string;
      card3Price: string;
      card4Tag: string;
      card4Title: string;
      card4Desc: string;
      card4Price: string;
      card5Tag: string;
      card5Title: string;
      card5Desc: string;
      card5Price: string;
      card6Tag: string;
      card6Title: string;
      card6Desc: string;
      card6Price: string;
    };
  };
}

export default function SavingsBagsSection({ lang, dict }: SavingsBagsSectionProps) {
  const isAr = lang === "ar";
  const s = dict.servicesSectionCustom;
  const sliderRef = useRef<HTMLDivElement>(null);

  // Render cards details
  const cards = [
    {
      tag: s.card1Tag,
      title: s.card1Title,
      desc: s.card1Desc,
      price: s.card1Price,
      image: "/images/card_savings_bag.png",
    },
    {
      tag: s.card2Tag,
      title: s.card2Title,
      desc: s.card2Desc,
      price: s.card2Price,
      image: "/images/card_dry_clean_bag.png",
    },
    {
      tag: s.card3Tag,
      title: s.card3Title,
      desc: s.card3Desc,
      price: s.card3Price,
      image: "/images/card_ironing_bag.png",
    },
    {
      tag: s.card4Tag,
      title: s.card4Title,
      desc: s.card4Desc,
      price: s.card4Price,
      image: "/images/card_savings_bag.png",
    },
    {
      tag: s.card5Tag,
      title: s.card5Title,
      desc: s.card5Desc,
      price: s.card5Price,
      image: "/images/card_dry_clean_bag.png",
    },
    {
      tag: s.card6Tag,
      title: s.card6Title,
      desc: s.card6Desc,
      price: s.card6Price,
      image: "/images/card_ironing_bag.png",
    },
  ];

  // Scroll function for slider
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = 440; // Card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      // Reverse scroll direction in RTL
      const finalScrollAmount = isAr ? -scrollAmount : scrollAmount;

      sliderRef.current.scrollBy({
        left: finalScrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Light Lavender Rounded Card Panel */}
      <div className="max-w-7xl mx-auto bg-[#ECEFFB] rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col shadow-sm relative overflow-hidden transition-all duration-300">
        
        {/* Top Header Block: Title & Description side-by-side with slider buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 pb-12 sm:pb-16 border-b border-[#3B52DF]/10">
          <div className="flex-1 space-y-3">
            <span className="text-xs sm:text-sm font-bold text-[#3B52DF] tracking-wider uppercase block">
              {s.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E41CD] leading-tight tracking-tight whitespace-pre-line">
              {s.title}
            </h2>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-end justify-between gap-6 lg:pb-2">
            <p className="text-sm sm:text-base text-[#4F5FB0] font-medium leading-relaxed max-w-md">
              {s.subtitle}
            </p>
            {/* Slider navigation controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous card"
                className="w-11 h-11 rounded-full border-2 border-[#3B52DF]/20 hover:border-[#3B52DF] text-[#3B52DF] hover:bg-[#3B52DF]/5 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next card"
                className="w-11 h-11 rounded-full bg-[#3B52DF] hover:bg-[#2E41CD] text-white flex items-center justify-center transition-all active:scale-95 shadow-md shadow-[#3B52DF]/20 cursor-pointer"
              >
                <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Carousel: Flex horizontal scrollable on both mobile and desktop */}
        <div
          ref={sliderRef}
          className="mt-12 flex overflow-x-auto pb-6 gap-6 scrollbar-none snap-x snap-mandatory w-full cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[290px] sm:w-[380px] lg:w-[415px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden flex flex-row border border-[#3B52DF]/5 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 group"
            >
              {/* Left Column (Image) */}
              <div className="relative w-[40%] sm:w-[45%] h-full min-h-[170px] sm:min-h-[210px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 40vw, 15vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Right Column (Contents) */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between text-left rtl:text-right">
                <div className="space-y-1 sm:space-y-2">
                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold rounded-full bg-[#FFEFEA] text-[#FF5500] tracking-wide uppercase">
                    {card.tag}
                  </span>
                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-slate-800 leading-tight">
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  {/* Price */}
                  <span className="text-xs sm:text-sm font-black text-slate-800">
                    {card.price}
                  </span>
                  {/* Action Link */}
                  <Link
                    href={`#service-detail-${idx}`}
                    className="flex items-center gap-1 text-[11px] sm:text-xs font-black text-[#FF5500] hover:text-[#E64D00] transition-colors"
                  >
                    <span>{s.knowMore}</span>
                    <svg
                      className="w-3.5 h-3.5 rtl:rotate-180 stroke-current transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

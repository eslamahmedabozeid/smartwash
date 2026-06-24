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

  // Drag-to-scroll logic
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    // Disable snapping and smooth behavior during manual drag for pixel-perfect tracking
    sliderRef.current.style.scrollSnapType = "none";
    sliderRef.current.style.scrollBehavior = "auto";
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (isDown.current && sliderRef.current) {
      // Re-enable snapping when drag is cancelled
      sliderRef.current.style.scrollSnapType = "";
      sliderRef.current.style.scrollBehavior = "";
    }
    isDown.current = false;
  };

  const handleMouseUp = () => {
    if (isDown.current && sliderRef.current) {
      // Re-enable snapping when drag finishes so cards lock into place
      sliderRef.current.style.scrollSnapType = "";
      sliderRef.current.style.scrollBehavior = "";
    }
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Light Lavender Rounded Card Panel */}
      <div className="max-w-7xl mx-auto bg-[#ECEFFB] rounded-[2.5rem] p-10 sm:p-10 md:p-10 flex flex-col shadow-sm relative overflow-hidden transition-all duration-300">

        {/* Top Header Block: Title & Description side-by-side with slider buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 pb-12 sm:pb-16 border-b border-[#3B52DF]/10">
          <div className="flex-1 space-y-3">
            <span className="text-xs sm:text-sm font-medium text-[#3B52DF] tracking-wider uppercase block">
              {s.label}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-[#2E41CD] leading-tight tracking-tight whitespace-pre-line">
              {s.title}
            </h2>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-end justify-between gap-6 lg:pb-2">
            <p className="text-sm sm:text-base text-[#4F5FB0] font-medium leading-relaxed max-w-md">
              {s.subtitle}
            </p>
            {/* Slider navigation controls */}
            {/* <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
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
            </div> */}
          </div>
        </div>

        {/* Cards Carousel: Flex horizontal scrollable on both mobile and desktop */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onDragStart={(e) => e.preventDefault()}
          className="mt-12 flex overflow-x-auto pb-6 gap-6 scrollbar-none snap-x snap-mandatory w-full cursor-grab active:cursor-grabbing select-none"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[32.5625rem] h-[20.9375rem] sm:w-[380px] lg:w-[32.5625rem] shrink-0 snap-start bg-white rounded-3xl overflow-hidden flex flex-row border border-[#3B52DF]/5 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 group"
            >
              {/* Left Column (Image) */}
              <div className="relative w-[40%] sm:w-[45%] h-full min-h-[170px] sm:min-h-[210px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 40vw, 15vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  draggable={false}
                />
              </div>

              {/* Right Column (Contents) */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center text-left rtl:text-right">
                <div className="space-y-1 sm:space-y-2">
                  {/* Badge */}
                  <span className="inline-block mb-[0.5rem] px-[0.75rem] py-[0.25rem] text-[9px] sm:text-[0.75rem] font-normal rounded-full bg-[#FFEDE6] text-[#000] tracking-wide uppercase">
                    {card.tag}
                  </span>
                  {/* Title */}
                  <h3 className="mb-[0.5rem] sm:text-base font-bold text-[1.25rem] text-slate-800 leading-tight">
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[0.875rem] mb-[0.5rem] sm:text-xs text-[#181818] font-medium leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                  <span className="text-xs sm:text-[1rem] font-semibold text-[#181818]">
                    {card.price}
                  </span>
                  <Link
                    href={`#service-detail-${idx}`}
                    className="flex mt-[2rem] items-center gap-1 text-[1.125rem] sm:text-[1.125rem] font-medium text-[#FC4F00] hover:text-[#E64D00] transition-colors"
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

                {/* <div className="pt-2 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

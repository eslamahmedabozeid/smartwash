"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sortByOrder } from "@/lib/api/utils";
import type { SiteSection } from "@/types/api";

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
  section?: SiteSection;
}

export default function SavingsBagsSection({ lang, dict, section }: SavingsBagsSectionProps) {
  const isAr = lang === "ar";
  const s = dict.servicesSectionCustom;
  const sliderRef = useRef<HTMLDivElement>(null);

  const fallbackCards = [
    {
      tag: s.card1Tag,
      title: s.card1Title,
      desc: s.card1Desc,
      price: s.card1Price,
      image: "/images/card_savings_bag.png",
      href: `#service-detail-0`,
      knowMore: s.knowMore,
    },
    {
      tag: s.card2Tag,
      title: s.card2Title,
      desc: s.card2Desc,
      price: s.card2Price,
      image: "/images/card_dry_clean_bag.png",
      href: `#service-detail-1`,
      knowMore: s.knowMore,
    },
    {
      tag: s.card3Tag,
      title: s.card3Title,
      desc: s.card3Desc,
      price: s.card3Price,
      image: "/images/card_ironing_bag.png",
      href: `#service-detail-2`,
      knowMore: s.knowMore,
    },
    {
      tag: s.card4Tag,
      title: s.card4Title,
      desc: s.card4Desc,
      price: s.card4Price,
      image: "/images/card_savings_bag.png",
      href: `#service-detail-3`,
      knowMore: s.knowMore,
    },
    {
      tag: s.card5Tag,
      title: s.card5Title,
      desc: s.card5Desc,
      price: s.card5Price,
      image: "/images/card_dry_clean_bag.png",
      href: `#service-detail-4`,
      knowMore: s.knowMore,
    },
    {
      tag: s.card6Tag,
      title: s.card6Title,
      desc: s.card6Desc,
      price: s.card6Price,
      image: "/images/card_ironing_bag.png",
      href: `#service-detail-5`,
      knowMore: s.knowMore,
    },
  ];

  const cards = section?.subsections?.length
    ? sortByOrder(section.subsections).map((item, idx) => ({
        tag: item.title,
        title: item.title,
        desc: item.content,
        price: item.price != null ? `${item.price} AED` : "",
        image: item.images?.[0]?.url ?? fallbackCards[idx]?.image ?? "/images/card_savings_bag.png",
        href: item.link?.url ?? `#service-detail-${idx}`,
        knowMore: item.link?.label ?? s.knowMore,
      }))
    : fallbackCards;

  // Scroll function for slider
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth ?? 340;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      // Reverse scroll direction in RTL
      const finalScrollAmount = isAr ? -scrollAmount : scrollAmount;

      sliderRef.current.scrollBy({
        left: finalScrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll logic
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(() => {
      if (isDown.current || isHovered.current || !sliderRef.current) return;
      
      const slider = sliderRef.current;
      const cardWidth = slider.firstElementChild?.clientWidth ?? 340;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      
      // Reset to beginning if at the end, otherwise scroll forward
      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3500);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Smooth Drag-to-scroll logic with inertia (momentum)
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Momentum velocity state tracking
  const lastEventTime = useRef(0);
  const lastEventX = useRef(0);
  const velocity = useRef(0);
  const momentumRafId = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    
    // Pause auto-scroll & cancel ongoing momentum slide
    stopAutoScroll();
    if (momentumRafId.current !== null) {
      cancelAnimationFrame(momentumRafId.current);
      momentumRafId.current = null;
    }

    isDown.current = true;
    sliderRef.current.style.scrollSnapType = "none";
    sliderRef.current.style.scrollBehavior = "auto";
    
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftStart.current = sliderRef.current.scrollLeft;
    
    lastEventTime.current = Date.now();
    lastEventX.current = e.pageX;
    velocity.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    slider.scrollLeft = scrollLeftStart.current - walk;

    const now = Date.now();
    const elapsed = now - lastEventTime.current;
    if (elapsed > 0) {
      const deltaX = e.pageX - lastEventX.current;
      velocity.current = -deltaX / elapsed;
      lastEventTime.current = now;
      lastEventX.current = e.pageX;
    }
  };

  const handleMouseUp = () => {
    if (!isDown.current || !sliderRef.current) return;
    isDown.current = false;
    applyMomentum();
    startAutoScroll();
  };

  const handleMouseLeave = () => {
    if (!isDown.current || !sliderRef.current) return;
    isDown.current = false;
    applyMomentum();
    startAutoScroll();
  };

  const applyMomentum = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    let v = velocity.current * 16;
    const decay = 0.95;

    const step = () => {
      if (Math.abs(v) < 0.2 || isDown.current) {
        if (sliderRef.current) {
          sliderRef.current.style.scrollSnapType = "";
          sliderRef.current.style.scrollBehavior = "";
        }
        momentumRafId.current = null;
        return;
      }

      slider.scrollLeft += v;
      v *= decay;
      momentumRafId.current = requestAnimationFrame(step);
    };

    momentumRafId.current = requestAnimationFrame(step);
  };

  return (
    <section className="w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-white">
      {/* Light Lavender Rounded Card Panel */}
      <div className="max-w-7xl mx-auto bg-[#ECEFFB] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 flex flex-col shadow-sm relative overflow-hidden transition-all duration-300">

        {/* Top Header Block: Title & Description side-by-side with slider buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-12 lg:pb-16 border-b border-[#3B52DF]/10">
          <div className="flex-1 space-y-2 sm:space-y-3">
            <span className="text-xs sm:text-sm font-semibold text-[#3B52DF] tracking-wider uppercase block">
              {section?.title ?? s.label}
            </span>
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E41CD] leading-tight tracking-tight whitespace-pre-line">
              {section?.content ?? s.title}
            </h2>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 lg:pb-2">
            <p className="text-xs min-[400px]:text-sm sm:text-base text-[#4F5FB0] font-medium leading-relaxed max-w-md">
              {section?.subtitle ?? s.subtitle}
            </p>
          </div>
        </div>

        {/* Cards Carousel: Flex horizontal scrollable on both mobile and desktop */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => {
            isHovered.current = true;
            stopAutoScroll();
          }}
          onMouseLeave={() => {
            isHovered.current = false;
            handleMouseLeave();
          }}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onDragStart={(e) => e.preventDefault()}
          className="mt-6 sm:mt-12 flex overflow-x-auto pb-4 sm:pb-6 gap-3 sm:gap-6 scrollbar-none snap-x snap-mandatory w-full cursor-grab active:cursor-grabbing select-none"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[82vw] min-[420px]:w-[78vw] sm:w-[380px] lg:w-[32.5625rem] max-w-[520px] h-auto min-h-[13.5rem] sm:h-[18rem] lg:h-[20.9375rem] shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-row border border-[#3B52DF]/5 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 group"
            >
              {/* Left Column (Image) */}
              <div className="relative w-[38%] min-[400px]:w-[42%] sm:w-[45%] h-full min-h-[140px] sm:min-h-[210px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 38vw, (max-width: 1024px) 30vw, 240px"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  draggable={false}
                />
              </div>

              {/* Right Column (Contents) */}
              <div className="flex-1 p-3 min-[400px]:p-4 sm:p-5 flex flex-col justify-between text-left rtl:text-right">
                <div className="space-y-1">
                  {/* Badge */}
                  <span className="inline-block mb-1 px-2 py-0.5 text-[9px] sm:text-xs font-semibold rounded-full bg-[#FFEDE6] text-[#FF5500] tracking-wide uppercase">
                    {card.tag}
                  </span>
                  {/* Title */}
                  <h3 className="mb-1 font-bold text-sm min-[400px]:text-base sm:text-lg lg:text-[1.25rem] text-slate-800 leading-tight line-clamp-2">
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[11px] min-[400px]:text-xs sm:text-sm text-[#181818] font-normal leading-relaxed line-clamp-2 sm:line-clamp-3 mb-1">
                    {card.desc}
                  </p>
                  {card.price && (
                    <span className="text-xs min-[400px]:text-sm sm:text-base font-bold text-[#181818] block">
                      {card.price}
                    </span>
                  )}
                </div>

                <Link
                  href={card.href}
                  className="flex mt-2 sm:mt-4 items-center gap-1 text-xs min-[400px]:text-sm sm:text-base font-semibold text-[#FC4F00] hover:text-[#E64D00] transition-colors"
                >
                  <span>{card.knowMore}</span>
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
          ))}
        </div>

      </div>
    </section>
  );
}

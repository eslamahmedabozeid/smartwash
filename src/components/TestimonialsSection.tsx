"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TestimonialsSectionProps {
  lang: string;
  dict: {
    testimonials: {
      label: string;
      item1Quote: string;
      item1Name: string;
      item1Role: string;
      item2Quote: string;
      item2Name: string;
      item2Role: string;
      item3Quote: string;
      item3Name: string;
      item3Role: string;
      item4Quote: string;
      item4Name: string;
      item4Role: string;
    };
  };
}

export default function TestimonialsSection({ lang, dict }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const isAr = lang === "ar";
  const s = dict.testimonials;

  const testimonials = [
    {
      quote: s.item1Quote,
      name: s.item1Name,
      role: s.item1Role,
    },
    {
      quote: s.item2Quote,
      name: s.item2Name,
      role: s.item2Role,
    },
    {
      quote: s.item3Quote,
      name: s.item3Name,
      role: s.item3Role,
    },
    {
      quote: s.item4Quote,
      name: s.item4Name,
      role: s.item4Role,
    },
  ];

  // Auto-play the slider every 5 seconds, paused when hovered or dragging
  useEffect(() => {
    if (isHovered || isDragging) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isDragging, testimonials.length]);

  // Swipe logic for left/right movements
  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      // Swipe left: next in LTR, previous in RTL
      if (isAr) {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    } else {
      // Swipe right: previous in LTR, next in RTL
      if (isAr) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleSwipe("right");
      } else {
        handleSwipe("left");
      }
    }
    setIsDragging(false);
    setDragStartX(null);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isDragging) {
      setIsDragging(false);
      setDragStartX(null);
    }
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleSwipe("right");
      } else {
        handleSwipe("left");
      }
    }
    setIsDragging(false);
    setDragStartX(null);
  };

  return (
    <section id="testimonials" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Warm peach rounded container matching the user design mockup */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300 select-none cursor-grab active:cursor-grabbing"
      >

        {/* Subtitle / Label */}
        <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase block mb-8 sm:mb-12 pointer-events-none">
          {s.label}
        </span>

        {/* Dynamic quote and profile details container with min height to avoid layout shift */}
        <div className="relative w-full min-h-[320px] sm:min-h-[240px] md:min-h-[220px] lg:min-h-[200px] flex items-center justify-center pointer-events-none">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${idx === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
                }`}
            >
              {/* Testimonial Quote */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-[#1E1E1E] leading-tight max-w-4xl tracking-tight mb-8">
                "{item.quote}"
              </blockquote>

              {/* User profile image */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm shrink-0">
                <Image
                  src="/images/Avatar.svg"
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              {/* User details */}
              <h4 className="text-base font-black text-[#1E1E1E] leading-tight">
                {item.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
                {item.role}
              </p>

              {/* 5 Rating Stars */}
              <div className="flex items-center gap-1 mt-4 text-[#FF5500]">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <svg key={starIdx} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots Indicator - Fixed sizes to match mockup horizontal pills */}
        <div className="flex items-center justify-center gap-2 mt-20 z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              onMouseDown={(e) => e.stopPropagation()} // Prevent drag triggering on dot click
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                ? "w-6 bg-[#FF5500]"
                : "w-4 bg-[#FFD3C0] hover:bg-[#FF9E79]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

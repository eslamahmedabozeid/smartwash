import React from "react";

interface ServiceHandleEverythingSectionProps {
  lang: string;
  dict: any;
}

export default function ServiceHandleEverythingSection({ lang, dict }: ServiceHandleEverythingSectionProps) {
  const s = dict.servicePage;

  const items = [
    { label: s.catWorkwear, img: "/images/service/second/Rectangle20.png" },
    { label: s.catShirts, img: "/images/service/second/Rectangle201.png" },
    { label: s.catTrousers, img: "/images/service/second/Rectangle 202.png" },
    { label: s.catSuits, img: "/images/service/second/Rectangle203.png" },
    { label: s.catDelicates, img: "/images/service/second/Rectangle204.png" },
    { label: s.catOuterwear, img: "/images/service/second/Rectangle205.png" },
    { label: s.catTraditional, img: "/images/service/second/Rectangle206.png" },
    { label: s.catSarees, img: "/images/service/second/Rectangle207.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between shadow-sm relative overflow-hidden transition-all duration-300 w-full">

      {/* Left Column: Title & Category Icons */}
      <div className="flex-1 flex flex-col items-start text-left rtl:text-right w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF5500] leading-tight tracking-tight whitespace-pre-line max-w-lg">
          {s.handleTitle}
        </h2>

        {/* 4x2 Categories Grid */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:gap-x-6 md:gap-y-10 mt-10 w-full justify-items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center select-none group">
              {/* Outer White Card Container */}
              <img
                src={item.img}
                alt={item.label}
                className=" object-contain"
              />

              {/* Category Name Label */}
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-800 text-center mt-3 leading-tight block max-w-[70px] sm:max-w-[100px] min-h-[2rem] overflow-hidden line-clamp-2">
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
            src="/images/service/second/Rectangle24.png"
            alt="Wardrobe Showcase"
            className="w-full object-cover aspect-square sm:aspect-[4/3] lg:aspect-auto"
          />
        </div>
      </div>

    </div>
  );
}

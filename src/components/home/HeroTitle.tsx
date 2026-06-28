"use client";

import React, { useState } from "react";
import Typewriter from "@/components/shared/Typewriter";

interface HeroTitleProps {
  lang: string;
  title1: string;
  title2: string;
  title3: string;
}

export default function HeroTitle({ lang, title1, title2, title3 }: HeroTitleProps) {
  const isAr = lang === "ar";
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E1E1E] leading-tight max-w-4xl tracking-tight min-h-[3.5rem] sm:min-h-[5rem] lg:min-h-[7.5rem]">
      <Typewriter
        text={title1}
        isAr={isAr}
        start={true}
        onComplete={() => setLine1Done(true)}
        speed={isAr ? 300 : 75}
      />
      <span className="block mt-2 sm:mt-3">
        <Typewriter
          text={title2}
          isAr={isAr}
          start={line1Done}
          onComplete={() => setLine2Done(true)}
          speed={isAr ? 300 : 75}
        />
        {" "}
        <Typewriter
          text={title3}
          isAr={isAr}
          start={line2Done}
          className="text-[#FF5500] font-semibold"
          speed={isAr ? 300 : 75}
        />
      </span>
    </h1>
  );
}

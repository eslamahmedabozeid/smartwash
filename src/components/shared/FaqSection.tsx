"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqSectionProps {
  lang: string;
  dict: {
    faqSection: {
      label: string;
      title: string;
      showMore: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
      q5: string;
      a5: string;
      q6: string;
      a6: string;
    };
  };
}

export default function FaqSection({ lang, dict }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const s = dict.faqSection;

  const faqs = [
    { q: s.q1, a: s.a1 },
    { q: s.q2, a: s.a2 },
    { q: s.q3, a: s.a3 },
    { q: s.q4, a: s.a4 },
    { q: s.q5, a: s.a5 },
    { q: s.q6, a: s.a6 },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      {/* Warm peach rounded container matching Mockup */}
      <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-6 sm:p-10 md:p-[2.5rem] flex flex-col lg:flex-row items-start justify-between gap-12 shadow-sm transition-all duration-300">

        {/* Left Column: FAQ title & Call to action */}
        <div className="w-full lg:w-[32%] lg:sticky lg:top-24 lg:self-start flex flex-col items-start text-left rtl:text-right space-y-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-[1.125rem] font-medium text-[#181818] tracking-wider uppercase block">
              {s.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E1E1E] leading-tight tracking-tight">
              {s.title}
            </h2>
          </div>

          {/* Outlined Action Button */}
          <Link
            href="#more-faq"
            className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#FF5500]/30 hover:border-[#FF5500] text-[#FF5500] font-bold rounded-2xl hover:bg-orange-50/50 transition-all text-sm sm:text-base cursor-pointer select-none active:scale-95 shadow-sm"
          >
            <span>{s.showMore}</span>
            <svg
              className="w-4 h-4 rtl:rotate-180 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Right Column: FAQ Accordion Stack */}
        <div className="w-full lg:w-[63%] flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleAccordion(idx)}
                className="w-full bg-white rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300 border border-slate-100/50 shadow-sm hover:shadow-md cursor-pointer text-left rtl:text-right select-none group"
              >
                {/* Accordion Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-[#181818] text-[1.125rem] sm:text-lg flex-1 leading-snug">
                    {faq.q}
                  </h3>

                  {/* Circle Button: X for open, + for closed */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                      ? "bg-[#FFEFEA] text-[#FF5500]"
                      : "bg-[#FF5500] text-white hover:bg-[#E64D00]"
                      }`}
                  >
                    {isOpen ? (
                      // Close (X) SVG
                      <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      // Open (+) SVG
                      <svg className="w-4 h-4 stroke-current animate-fade-in" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Accordion Content Block (Visible when open) */}
                {isOpen && (
                  <p className="text-[#8C8C8C] text-xs sm:text-[1rem] font-normal mt-4 leading-relaxed whitespace-pre-line animate-fade-in">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

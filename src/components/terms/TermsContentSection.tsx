"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import type { SiteSubsection } from "@/types/api";

interface TermsContentSectionProps {
  lang: string;
  isAr: boolean;
  dict: any;
  subsections: SiteSubsection[];
}

export default function TermsContentSection({
  lang,
  isAr,
  dict,
  subsections,
}: TermsContentSectionProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const subsection of subsections) {
        const element = document.getElementById(`terms-${subsection.id}`);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSectionId(subsection.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [subsections]);

  const scrollToSubsection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(`terms-${id}`);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Left Sticky Sidebar (Table of Contents) */}
        <aside className="w-full lg:w-[320px] lg:shrink-0 lg:sticky lg:top-28">
          <ScrollReveal variant="fade-up" delay={150}>
            <div className="bg-[#FFF3ED] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 shadow-sm border border-orange-100/50 text-left rtl:text-right">
              {/* Sidebar Header */}
              <div className="flex items-center gap-3 border-b border-orange-200/50 pb-4">
                <div className="w-9 h-9 rounded-xl bg-[#FF5500] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#181818]">
                    {isAr ? "جدول المحتويات" : "Table of Contents"}
                  </h2>
                  <span className="text-xs text-[#8C8C8C]">
                    {subsections.length} {isAr ? "أقسام قانونية" : "sections"}
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {subsections.map((sub, idx) => {
                  const isActive =
                    activeSectionId === sub.id ||
                    (!activeSectionId && idx === 0);

                  return (
                    <a
                      key={sub.id}
                      href={`#terms-${sub.id}`}
                      onClick={(e) => scrollToSubsection(e, sub.id)}
                      className={`group flex items-center justify-between gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 select-none ${
                        isActive
                          ? "bg-[#FF5500] text-white font-semibold shadow-sm"
                          : "text-[#181818] hover:bg-orange-100/60 hover:text-[#FF5500]"
                      }`}
                    >
                      <span className="line-clamp-1 flex-1">{sub.title}</span>
                      <svg
                        className={`w-4 h-4 rtl:rotate-180 shrink-0 transition-transform ${
                          isActive
                            ? "text-white translate-x-0.5 rtl:-translate-x-0.5"
                            : "text-slate-400 group-hover:text-[#FF5500] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  );
                })}
              </nav>

              {/* Need Help Card */}
              <div className="mt-2 bg-white rounded-2xl p-5 border border-orange-100 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#FF5500] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#181818]">
                    {isAr ? "هل لديك استفسار؟" : "Have questions?"}
                  </h3>
                </div>
                <p className="text-xs text-[#8C8C8C] leading-relaxed">
                  {isAr
                    ? "فريقنا متواجد دائماً لمساعدتك والإجابة على أي تساؤل يخص الشروط والأحكام."
                    : "Our team is here to help you understand our terms and service conditions."}
                </p>
                <Link
                  href={`/${lang}/help`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500] hover:text-orange-600 transition-colors"
                >
                  <span>{isAr ? "تواصل مع الدعم" : "Contact Support"}</span>
                  <svg
                    className="w-3.5 h-3.5 rtl:rotate-180 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </aside>

        {/* Right Main Content Stream */}
        <div className="flex-1 w-full space-y-6">
          {subsections.map((sub, idx) => (
            <ScrollReveal
              key={sub.id}
              variant="fade-up"
              delay={100 + idx * 60}
            >
              <section
                id={`terms-${sub.id}`}
                className="bg-[#FFF3ED]/40 hover:bg-[#FFF3ED]/70 rounded-[2rem] p-6 sm:p-10 md:p-12 border border-slate-100/90 shadow-sm transition-all duration-300 text-left rtl:text-right scroll-mt-28"
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 border-b border-orange-100/80 pb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FF5500] text-white font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#181818] tracking-tight">
                    {sub.title}
                  </h2>
                </div>

                {/* Rich HTML Content */}
                <div
                  className="legal-content-body text-slate-700 text-sm sm:text-base leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: sub.content }}
                />
              </section>
            </ScrollReveal>
          ))}

          {/* Bottom Support CTA Block */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="bg-[#FFF3ED] rounded-[2rem] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-orange-100 text-left rtl:text-right mt-10">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#181818]">
                  {isAr
                    ? "هل لديك أسئلة حول الشروط والأحكام؟"
                    : "Questions about our Terms & Conditions?"}
                </h3>
                <p className="text-xs sm:text-sm text-[#8C8C8C] max-w-xl">
                  {isAr
                    ? "فريق الدعم القانوني والخدمي لدينا متواجد للإجابة على جميع استفساراتك وتوضيح أي تفاصيل."
                    : "Our support and compliance team is available to assist you with any questions or requests."}
                </p>
              </div>
              <Link
                href={`/${lang}/help`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FF5500] text-white font-bold hover:bg-orange-600 active:scale-95 transition-all duration-200 text-sm whitespace-nowrap shadow-sm"
              >
                <span>{isAr ? "تواصل مع الدعم" : "Contact Support"}</span>
                <svg
                  className="w-4 h-4 rtl:rotate-180 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

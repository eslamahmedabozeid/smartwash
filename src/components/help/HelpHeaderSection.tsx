
import React from "react";

interface HelpHeaderSectionProps {
  lang: string;
  dict: any;
}

export default function HelpHeaderSection({ lang, dict }: HelpHeaderSectionProps) {
  const s = dict.helpPage;

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 transition-all duration-300">

      {/* Top Banner (Question Box) */}
      <div className="w-full bg-[#FF5500] rounded-[2.5rem] py-16 px-6 sm:px-12 md:px-16 text-center flex flex-col items-center justify-center gap-3 shadow-md relative overflow-hidden">
        <span className="text-xs sm:text-sm font-bold text-white/80 tracking-wider uppercase block">
          {s.label}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight whitespace-pre-line max-w-3xl">
          {s.title}
        </h1>
      </div>

      {/* Contact Cards Box */}
      <div className="w-full bg-[#FF5500] rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Email Card */}
          <div className="bg-[#FF7E40] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-white/80 text-sm font-semibold">
                {s.emailLabel}
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-black tracking-wide break-all">
                {s.emailValue}
              </p>
              <p className="text-white/60 text-xs font-semibold pt-1">
                {s.emailSub}
              </p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-[#FF7E40] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.923 9.923 0 0 0 4.882 1.28h.005c5.507 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.195 3.002 14.685 2 12.012 2zm5.789 14.148c-.318.892-1.545 1.634-2.136 1.724-.59.09-1.18.158-3.79-.884-3.34-1.329-5.5-4.739-5.666-4.962-.166-.222-1.353-1.802-1.353-3.434 0-1.632.853-2.433 1.156-2.766.303-.333.666-.416.89-.416.223 0 .445.004.64.012.203.009.477-.078.746.568.275.666.942 2.302 1.025 2.468.083.166.138.36.027.58-.11.22-.166.36-.33.553-.166.195-.35.437-.499.587-.166.166-.34.346-.146.677.194.33.864 1.428 1.854 2.309.99.88 1.824 1.154 2.157 1.32.33.167.524.139.719-.083.195-.222.833-.97.105-1.303-.728-.332-2.324-1.054-2.324-1.054s-.222-.111-.388.056c-.166.166-.666.832-.804.998-.138.166-.277.194-.555.056-.278-.139-1.173-.432-2.234-1.378-.824-.735-1.38-1.642-1.542-1.92-.162-.277-.017-.427.122-.566.125-.125.277-.33.416-.499.139-.166.185-.277.277-.46.092-.185.046-.347-.023-.486-.069-.139-.613-1.482-.84-2.032-.22-.53-.443-.458-.607-.466-.153-.008-.33-.01-.508-.01a.98.98 0 0 0-.712.33c-.278.305-1.062 1.037-1.062 2.53 0 1.493 1.085 2.932 1.233 3.13.148.197 2.136 3.262 5.176 4.57.723.311 1.288.497 1.728.637.726.23 1.388.197 1.91.12.583-.087 1.787-.73 2.035-1.436.248-.707.248-1.314.173-1.436-.075-.12-.276-.194-.554-.332z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-white/80 text-sm font-semibold">
                {s.whatsappLabel}
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-black tracking-wide">
                {s.whatsappValue}
              </p>
              <p className="text-white/60 text-xs font-semibold pt-1">
                {s.whatsappSub}
              </p>
            </div>
          </div>

          {/* Call Card */}
          <div className="bg-[#FF7E40] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-white/80 text-sm font-semibold">
                {s.phoneLabel}
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-black tracking-wide">
                {s.phoneValue}
              </p>
              <p className="text-white/60 text-xs font-semibold pt-1">
                {s.phoneSub}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

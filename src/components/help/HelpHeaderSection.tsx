
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
        <span className="text-xs sm:text-[1.125rem] font-medium text-[#BFD1FA] tracking-wider  block mb-3">
          {s.label}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight whitespace-pre-line max-w-3xl">
          {s.title}
        </h1>
      </div>

      {/* Contact Cards Box */}
      <div className="w-full bg-[#FF5500] rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Email Card */}
          <div className="bg-[#fd844c] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
              <img src="/images/icons/mail-02.svg" alt="" />
            </div>
            <div className="space-y-1">
              <p className="text-[#FFF] text-sm font-normal">
                {s.emailLabel}
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide break-all">
                {s.emailValue}
              </p>
              <p className="text-[#fff] text-xs font-normal pt-1">
                {s.emailSub}
              </p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-[#fd844c] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
           <img src="/images/icons/whatsapp.svg" alt="" />
            </div>
            <div className="space-y-1">
              <p className="text-[#FFF] text-sm font-normal">
                {s.whatsappLabel}
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-black tracking-wide direction-ltr">
                {s.whatsappValue}
              </p>
              <p className="text-white/60 text-xs font-semibold pt-1">
                {s.whatsappSub}
              </p>
            </div>
          </div>

          {/* Call Card */}
          <div className="bg-[#fd844c] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
              <img src="/images/icons/customer-service-01.svg" alt="" />
            </div>
            <div className="space-y-1">
              <p className="text-[#FFF] text-sm font-normal">
                {s.phoneLabel}
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-black tracking-wide direction-ltr">
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

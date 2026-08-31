
import React from "react";
import { parseContactContent, sortByOrder } from "@/lib/api/utils";
import type { SiteSection } from "@/types/api";

interface HelpHeaderSectionProps {
  lang: string;
  dict: any;
  heroSection?: SiteSection;
  contactSection?: SiteSection;
}

const fallbackIcons = [
  "/images/icons/mail-02.svg",
  "/images/icons/whatsapp.svg",
  "/images/icons/customer-service-01.svg",
];

export default function HelpHeaderSection({
  lang,
  dict,
  heroSection,
  contactSection,
}: HelpHeaderSectionProps) {
  const s = dict.helpPage;

  const fallbackContacts = [
    {
      label: s.emailLabel,
      value: s.emailValue,
      subtitle: s.emailSub,
      icon: fallbackIcons[0],
      valueClass: "break-all",
      valueWeight: "font-bold",
      subtitleClass: "text-[#fff] text-xs font-normal pt-1",
    },
    {
      label: s.whatsappLabel,
      value: s.whatsappValue,
      subtitle: s.whatsappSub,
      icon: fallbackIcons[1],
      valueClass: "direction-ltr",
      valueWeight: "font-black",
      subtitleClass: "text-white/60 text-xs font-semibold pt-1",
    },
    {
      label: s.phoneLabel,
      value: s.phoneValue,
      subtitle: s.phoneSub,
      icon: fallbackIcons[2],
      valueClass: "direction-ltr",
      valueWeight: "font-black",
      subtitleClass: "text-white/60 text-xs font-semibold pt-1",
    },
  ];

  const contacts = contactSection?.subsections?.length
    ? sortByOrder(contactSection.subsections).map((item, idx) => {
        const parsed = parseContactContent(item.content);
        const fallback = fallbackContacts[idx] ?? fallbackContacts[0];

        return {
          label: item.title,
          value: parsed.value || fallback.value,
          subtitle: parsed.subtitle || fallback.subtitle,
          icon: item.images?.[0]?.url ?? fallback.icon,
          valueClass: fallback.valueClass,
          valueWeight: fallback.valueWeight,
          subtitleClass: fallback.subtitleClass,
        };
      })
    : fallbackContacts;

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 transition-all duration-300">

      {/* Top Banner (Question Box) */}
      <div className="w-full bg-[#FF5500] rounded-[2.5rem] py-16 px-6 sm:px-12 md:px-16 text-center flex flex-col items-center justify-center gap-3 shadow-md relative overflow-hidden">
        <span className="text-xs sm:text-[1.125rem] font-medium text-[#BFD1FA] tracking-wider  block mb-3">
          {heroSection?.title ?? s.label}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight whitespace-pre-line max-w-3xl">
          {heroSection?.content ?? s.title}
        </h1>
      </div>

      {/* Contact Cards Box */}
      <div className="w-full bg-[#FF5500] rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="bg-[#fd844c] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 items-start text-left rtl:text-right border border-white/5 shadow-inner"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={contact.icon}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[#FFF] text-sm font-normal">
                  {contact.label}
                </p>
                <p className={`text-white text-base sm:text-lg md:text-xl tracking-wide ${contact.valueWeight} ${contact.valueClass}`}>
                  {contact.value}
                </p>
                <p className={contact.subtitleClass}>
                  {contact.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

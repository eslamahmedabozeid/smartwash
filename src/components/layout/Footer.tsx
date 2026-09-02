import React from "react";
import Link from "next/link";
import { resolveFooterHref } from "@/lib/api/utils";
import type { SiteFooter } from "@/types/api";

interface FooterProps {
  lang: string;
  dict: {
    footer: {
      desc: string;
      quickLinks: string;
      servicesLabel: string;
      contactLabel: string;
      howItWorks: string;
      reviews: string;
      downloadApp: string;
      washFold: string;
      dryClean: string;
      ironing: string;
      expressService: string;
      address: string;
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
  footerData?: SiteFooter | null;
}

const socialIconMap: Record<string, { src: string; label: string }> = {
  snapchat: { src: "/images/footer/Frame1820550884.svg", label: "Snapchat" },
  facebook: { src: "/images/footer/Frame1820550885.svg", label: "Facebook" },
  twitter: { src: "/images/footer/Frame1820550886.svg", label: "Twitter X" },
};

const contactIconMap: Record<string, string> = {
  location: "/images/icons/location-06.svg",
  phone: "/images/icons/call-02.svg",
  email: "/images/icons/mail-0.svg",
};

const fallbackSocial = [
  { icon: "snapchat", url: "#snapchat" },
  { icon: "facebook", url: "#facebook" },
  { icon: "twitter", url: "#twitter" },
];

export default function Footer({ lang, dict, footerData }: FooterProps) {
  const f = dict.footer;

  const quickLinksGroup = footerData?.linkGroups?.find(
    (group) => group.title.toLowerCase() === "quick links"
  );

  const servicesGroup = footerData?.linkGroups?.find(
    (group) => group.title.toLowerCase() === "services"
  );

  const quickLinkItems = quickLinksGroup?.links?.length
    ? quickLinksGroup.links
    : [
      { label: f.servicesLabel, url: "#services" },
      { label: f.howItWorks, url: "#how-it-works" },
      { label: f.reviews, url: "#testimonials" },
      { label: f.downloadApp, url: "#app-download" },
    ];

  const serviceItems = servicesGroup?.links?.length
    ? servicesGroup.links
    : [
      { label: f.washFold, url: "#services" },
      { label: f.dryClean, url: "#services" },
      { label: f.ironing, url: "#services" },
      { label: f.expressService, url: "#services" },
    ];

  const contactItems = footerData?.contact?.length
    ? footerData.contact
    : [
      { icon: "location", text: f.address },
      { icon: "phone", text: "+971 4 123 4567" },
      { icon: "email", text: "hello@smartwash.com" },
    ];

  const socialItems = footerData?.social?.length ? footerData.social : fallbackSocial;

  const renderContactItem = (
    item: { icon: string; text: string; url?: string },
    idx: number
  ) => {
    const iconSrc = contactIconMap[item.icon] ?? contactIconMap.location;

    const href =
      item.url ??
      (item.icon === "phone" ? `tel:${item.text.replace(/\s/g, "")}` : undefined) ??
      (item.icon === "email" ? `mailto:${item.text}` : undefined);

    if (href) {
      const linkHref = item.url ? resolveFooterHref(href, lang) : href;

      return (
        <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
          <img src={iconSrc} alt="" />
          <Link
            href={linkHref}
            className={`hover:text-[#FF5500] transition-colors${item.icon === "phone" ? " direction-ltr" : ""}`}
            {...(item.url?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {item.text}
          </Link>
        </li>
      );
    }

    return (
      <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
        <img src={iconSrc} alt="" />
        <span>{item.text}</span>
      </li>
    );
  };

  return (
    <footer className="w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-white border-t border-slate-100">
      {/* Footer Wrapper Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 w-full">

        {/* Left Side: Brand Card (Solid Orange) */}
        <div className="w-full lg:w-[35%] bg-[#FF5500] text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-8 lg:gap-54 text-left rtl:text-right shadow-sm">

          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href={`/${lang}`} className="inline-block group">
              <div className="">
                <img src={"/images/Group.svg"} alt="SmartWash Logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <p className="text-white/95 text-sm sm:text-base font-semibold leading-relaxed max-w-sm mb-6 sm:mb-8">
              {f.desc}
            </p>
            <div className="flex items-center gap-1">
              {socialItems.map((item, idx) => {
                const social = socialIconMap[item.icon];
                if (!social) return null;

                return (
                  <Link
                    key={idx}
                    href={item.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.src} alt="" />
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Links & Contact Card (Light Peach) */}
        <div className="w-full lg:w-[63%] bg-[#FFF3ED] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-8 sm:gap-12 text-left rtl:text-right shadow-sm">

          {/* Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#181818] tracking-wide">
                {quickLinksGroup?.title ?? f.quickLinks}
              </h4>
              <ul className="space-y-2.5">
                {quickLinkItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={resolveFooterHref(item.url, lang)}
                      className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#181818] tracking-wide">
                {servicesGroup?.title ?? f.servicesLabel}
              </h4>
              <ul className="space-y-2.5">
                {serviceItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={resolveFooterHref(item.url, lang)}
                      className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#181818] tracking-wide">
                {f.contactLabel}
              </h4>
              <ul className="space-y-3.5">
                {contactItems.map(renderContactItem)}
              </ul>
            </div>

          </div>

          {/* Bottom copyright & legal block */}
          <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-normal text-[#8C8C8C]">
              {footerData?.copyrightText ?? f.copyright}
            </p>
            <div className="flex items-center gap-6">
              {footerData?.legalLinks?.length ? (
                footerData.legalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={resolveFooterHref(link.url, lang)}
                    className="text-xs sm:text-sm font-semibold text-[#181818] hover:text-[#FF5500] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))
              ) : (
                <>
                  <Link
                    href={`/${lang}/privacy`}
                    className="text-xs sm:text-sm font-semibold text-[#181818] hover:text-[#FF5500] transition-colors"
                  >
                    {f.privacy}
                  </Link>
                  <Link
                    href={`/${lang}/terms`}
                    className="text-xs sm:text-sm font-semibold text-[#181818] hover:text-[#FF5500] transition-colors"
                  >
                    {f.terms}
                  </Link>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  lang: string;
  dict: {
    navigation: {
      home: string;
      pricing: string;
      service: string;
      about: string;
      help: string;
    };
    actions: {
      downloadApp: string;
      languageSwitch: string;
    };
    megaMenu?: {
      valuePackages: {
        title: string;
        subtitle: string;
        desc: string;
        items: {
          laundryFold: string;
          laundryIron: string;
          ironOnly: string;
          homeLinens: string;
        };
      };
      perItem: {
        title: string;
        subtitle: string;
        desc: string;
        items: {
          dryCleaning: string;
          washIron: string;
          ironOnly: string;
          blankets: string;
          carpets: string;
          homeLinens: string;
        };
      };
    };
  };
}

export default function Header({ lang, dict }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isAr = lang === "ar";

  const m = dict.megaMenu;

  const valuePackages = [
    {
      name: m?.valuePackages.items.laundryFold || "Laundry & Fold",
      icon: "/images/icons/hugeicons_washing-machine.png",
      href: `/${lang}/services/wash-fold`,
    },
    {
      name: m?.valuePackages.items.laundryIron || "Laundry & Iron",
      icon: "/images/icons/mage_basket.png",
      href: `/${lang}/services/wash-iron`,
    },
    {
      name: m?.valuePackages.items.ironOnly || "Iron Only",
      icon: "/images/icons/streamline-flex_iron.png",
      href: `/${lang}/services/ironing`,
    },
    {
      name: m?.valuePackages.items.homeLinens || "Home Linens",
      icon: "/images/icons/bed-double.png",
      href: `/${lang}/services/home-linens`,
    },
  ];

  const perItem = [
    {
      name: m?.perItem.items.dryCleaning || "Dry Cleaning",
      icon: "/images/icons/hanger.png",
      href: `/${lang}/services/dry-cleaning`,
    },
    {
      name: m?.perItem.items.washIron || "Wash & Iron",
      icon: "/images/icons/hugeicons_washing-machine.png",
      href: `/${lang}/services/wash-iron`,
    },
    {
      name: m?.perItem.items.ironOnly || "Iron Only",
      icon: "/images/icons/streamline-flex_iron.png",
      href: `/${lang}/services/ironing`,
    },
    {
      name: m?.perItem.items.blankets || "Blankets",
      icon: "/images/icons/boxicons_blanket.png",
      href: `/${lang}/services/blankets`,
    },
    {
      name: m?.perItem.items.carpets || "Carpets",
      icon: "/images/icons/prayer-rug-01.png",
      href: `/${lang}/services/carpets`,
    },
    {
      name: m?.perItem.items.homeLinens || "Home Linens",
      icon: "/images/icons/bed-double.png",
      href: `/${lang}/services/home-linens`,
    },
  ];

  // Language toggler logic
  const toggleLanguage = () => {
    const segments = pathname.split("/");
    // segments[0] is empty, segments[1] is the locale
    const newLang = isAr ? "en" : "ar";
    segments[1] = newLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  // Helper to check active tab
  const isActive = (path: string) => {
    // Basic active tab matching for demo
    if (path === "home" && (pathname === `/${lang}` || pathname === `/${lang}/`)) return true;
    return pathname.includes(path);
  };

  return (
    <header className="relative w-full bg-[#FF5500] text-white shadow-md z-50 select-none transition-all duration-300 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left Section: Logo & Navigation links close together */}
        <div className="flex items-center gap-12 lg:gap-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href={`/${lang}`} className="flex items-center gap-2 group">
              {/* Custom SVG logo based on user screenshot */}
              <div className="w-[69px] h-[84px] ">
                <img src={"/images/Group.svg"} alt="SmartWash Logo" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
            {/* Home Link */}
            <div className="relative py-7">
              <Link
                href={`/${lang}`}
                className={`hover:opacity-90 transition-opacity ${isActive("home") ? "text-white" : "text-white/80"
                  }`}
              >
                {dict.navigation.home}
              </Link>
              {isActive("home") && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-white rounded-t-full" />
              )}
            </div>

            {/* Pricing Link */}
            <div className="relative py-7">
              <Link
                href={`/${lang}/pricing`}
                className={`hover:opacity-90 transition-opacity ${isActive("pricing") ? "text-white" : "text-white/80"
                  }`}
              >
                {dict.navigation.pricing}
              </Link>
              {isActive("pricing") && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-white rounded-t-full" />
              )}
            </div>

            {/* Service Dropdown */}
            <div
              className="py-7"
              onMouseEnter={() => setServiceDropdownOpen(true)}
              onMouseLeave={() => setServiceDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 hover:opacity-90 focus:outline-none text-white/80 cursor-default"
              >
                <span>{dict.navigation.service}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${serviceDropdownOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {serviceDropdownOpen && (
                <div
                  className="absolute top-[calc(100%-16px)] left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 xl:left-auto xl:right-auto xl:w-[960px] xl:left-1/2 xl:-translate-x-1/2 pt-4 pb-4 z-50 origin-top animate-fade-in"
                >
                  <div className="bg-white text-gray-800 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-100/80">
                    {/* Left Column: Value Packages */}
                    <div className="bg-[#F5F7FA] rounded-[2rem] p-8 flex flex-col  text-left rtl:text-right">
                      {/* Column Header */}
                      <div className="mb-6">
                        <span className="text-[11px] font-black text-[#FF5500] tracking-wider uppercase block">
                          {m?.valuePackages.title || "VALUE PACKAGES"}
                        </span>
                        <h4 className="text-2xl font-bold text-[#1E1E1E] mt-2">
                          {m?.valuePackages.subtitle || "Save more with bundled services"}
                        </h4>
                        <p className="text-xs text-[#8C8C8C] font-normal mt-1">
                          {m?.valuePackages.desc || "Weekly & monthly subscriptions • Best value"}
                        </p>
                      </div>

                      {/* Column Items Stack */}
                      <div className="space-y-3 mt-0">
                        {valuePackages.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setServiceDropdownOpen(false)}
                            className="flex items-center justify-between p-4 px-6 bg-white rounded-[1.25rem] border border-slate-100 hover:border-[#FF5500]/30 hover:shadow-sm transition-all duration-200 group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] flex items-center justify-center shrink-0">
                                <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                              </div>
                              <span className="font-bold text-[#1E1E1E] text-sm group-hover:text-[#FF5500] transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <svg
                              className={`w-4 h-4 text-slate-400 group-hover:text-[#FF5500] transition-colors duration-200 ${isAr ? "rotate-180" : ""
                                }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Per Item */}
                    <div className="bg-[#F5F7FA] rounded-[2rem]  p-8 flex flex-col justify-between text-left rtl:text-right">
                      {/* Column Header */}
                      <div className="mb-6">
                        <span className="text-[11px] font-black text-[#FF5500] tracking-wider uppercase block">
                          {m?.perItem.title || "PER ITEM"}
                        </span>
                        <h4 className="text-2xl font-bold text-[#1E1E1E] mt-2">
                          {m?.perItem.subtitle || "Pay exactly for what you need"}
                        </h4>
                        <p className="text-xs text-[#8C8C8C] font-normal mt-1">
                          {m?.perItem.desc || "Flexible • No commitment"}
                        </p>
                      </div>

                      {/* Column Items Stack */}
                      <div className="space-y-3">
                        {perItem.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setServiceDropdownOpen(false)}
                            className="flex items-center justify-between p-4 px-6 bg-white rounded-[1.25rem] border border-slate-100 hover:border-[#FF5500]/30 hover:shadow-sm transition-all duration-200 group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] flex items-center justify-center shrink-0">
                                <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                              </div>
                              <span className="font-bold text-[#1E1E1E] text-sm group-hover:text-[#FF5500] transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <svg
                              className={`w-4 h-4 text-slate-400 group-hover:text-[#FF5500] transition-colors duration-200 ${isAr ? "rotate-180" : ""
                                }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
            <div className="relative py-7">
              <Link
                href={`/${lang}/about`}
                className={`hover:opacity-90 transition-opacity ${isActive("about") ? "text-white" : "text-white/80"
                  }`}
              >
                {dict.navigation.about}
              </Link>
              {isActive("about") && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-white rounded-t-full" />
              )}
            </div>

            {/* Help Link */}
            <div className="relative py-7">
              <Link
                href={`/${lang}/help`}
                className={`hover:opacity-90 transition-opacity ${isActive("help") ? "text-white" : "text-white/80"
                  }`}
              >
                {dict.navigation.help}
              </Link>
              {isActive("help") && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-white rounded-t-full" />
              )}
            </div>
          </nav>
        </div>

        {/* Right Section Actions (Language switch + Download button) */}
        <div className="hidden md:flex items-center gap-6">

          {/* Custom Toggle Switch for Language */}
          <button
            onClick={toggleLanguage}
            className="relative w-[84px] h-10 rounded-full bg-white transition-all duration-300 flex items-center justify-between p-1 cursor-pointer focus:outline-none shadow-inner border border-slate-100"
            aria-label="Switch Language"
          >
            {/* Left Circle (ع in English mode, Icon in Arabic mode) */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isAr
                ? "bg-[#FF5500] text-white shadow-md"
                : "bg-white text-[#FF5500] shadow-sm border border-slate-100"
                }`}
            >
              {isAr ? (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A14.37 14.37 0 009 15m0 0a15.644 15.644 0 01-8-4.102L3 9h4.5"
                  />
                </svg>
              ) : (
                <span className="font-black text-sm select-none">ع</span>
              )}
            </div>

            {/* Right Circle (Icon in English mode, EN in Arabic mode) */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isAr
                ? "bg-white text-[#FF5500] shadow-sm border border-slate-100"
                : "bg-[#FF5500] text-white shadow-md"
                }`}
            >
              {isAr ? (
                <span className="font-bold text-xs select-none">EN</span>
              ) : (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A14.37 14.37 0 009 15m0 0a15.644 15.644 0 01-8-4.102L3 9h4.5"
                  />
                </svg>
              )}
            </div>
          </button>

          {/* Download App Outlined Button */}
          <Link
            href="#download"
            className="flex items-center gap-2 px-5 py-2.5 rounded-[0.75rem] border-1 border-[#E0E0E0] text-white font-semibold hover:bg-white hover:text-[#FF5500] active:scale-95 transition-all duration-300"
          >
            {/* Download Icon */}
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>{dict.actions.downloadApp}</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Language Switcher (Simple button for accessibility on mobile) */}
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full border-2 border-white/60 bg-white/10 flex items-center justify-center text-sm font-bold active:scale-90 transition-transform"
          >
            {isAr ? "EN" : "ع"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
          >
            <span className="sr-only">Open Menu</span>
            {mobileMenuOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E64D00] border-t border-white/10 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-white/10"
            >
              {dict.navigation.home}
            </Link>
            <Link
              href={`/${lang}/pricing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-white/10"
            >
              {dict.navigation.pricing}
            </Link>
            {/* Service Toggle Mobile Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-white/10 text-white/80 hover:text-white transition-colors text-left rtl:text-right"
              >
                <span>{dict.navigation.service}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="ps-4 space-y-4 py-2 border-s-2 border-white/20 my-1">
                  {/* Category: Value Packages */}
                  <div className="space-y-1.5">
                    <div className="px-3 text-[10px] font-black text-white/50 tracking-wider uppercase">
                      {m?.valuePackages.title || "VALUE PACKAGES"}
                    </div>
                    {valuePackages.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white font-medium text-sm transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                          <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain" />
                        </div>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Category: Per Item */}
                  <div className="space-y-1.5">
                    <div className="px-3 text-[10px] font-black text-white/50 tracking-wider uppercase">
                      {m?.perItem.title || "PER ITEM"}
                    </div>
                    {perItem.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 text-white font-medium text-sm transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                          <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain" />
                        </div>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href={`/${lang}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-white/10"
            >
              {dict.navigation.about}
            </Link>
            <Link
              href={`/${lang}/help`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold hover:bg-white/10"
            >
              {dict.navigation.help}
            </Link>

            <div className="pt-4 pb-2">
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#FF5500] transition-colors"
              >
                <svg
                  className="w-5 h-5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>{dict.actions.downloadApp}</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS styles for text outline */}
      <style jsx global>{`
        .logo-stroke {
          text-shadow: -1.5px -1.5px 0 #004AAD, 1.5px -1.5px 0 #004AAD, -1.5px 1.5px 0 #004AAD, 1.5px 1.5px 0 #004AAD;
        }
      `}</style>
    </header>
  );
}

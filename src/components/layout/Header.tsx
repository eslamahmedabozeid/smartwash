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
  };
}

export default function Header({ lang, dict }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === "ar";

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
            <div className="relative py-7">
              <button
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                onBlur={() => setTimeout(() => setServiceDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 hover:opacity-90 focus:outline-none text-white/80"
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
                  className={`absolute top-full mt-1 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-100 transition-all duration-200 transform origin-top-left ${isAr ? "right-0" : "left-0"
                    }`}
                >
                  <Link
                    href={`/${lang}/services/dry-cleaning`}
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-[#FF5500] font-medium transition-colors"
                  >
                    Dry Cleaning
                  </Link>
                  <Link
                    href={`/${lang}/services/wash-fold`}
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-[#FF5500] font-medium transition-colors"
                  >
                    Wash & Fold
                  </Link>
                  <Link
                    href={`/${lang}/services/ironing`}
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-[#FF5500] font-medium transition-colors"
                  >
                    Ironing
                  </Link>
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
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isAr
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
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isAr
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
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#FF5500] active:scale-95 transition-all duration-300"
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
            <div className="px-3 py-2 font-semibold text-white/60 text-sm uppercase">
              {dict.navigation.service}
            </div>
            <Link
              href={`/${lang}/services/dry-cleaning`}
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 pr-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10"
            >
              Dry Cleaning
            </Link>
            <Link
              href={`/${lang}/services/wash-fold`}
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 pr-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10"
            >
              Wash & Fold
            </Link>
            <Link
              href={`/${lang}/services/ironing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 pr-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10"
            >
              Ironing
            </Link>
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

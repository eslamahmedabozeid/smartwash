"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileAppSection from "@/components/home/MobileAppSection";
import AboutHowItWorksSection from "@/components/about/AboutHowItWorksSection";
import AboutFeaturesSection from "@/components/about/AboutFeaturesSection";
import AboutPromoSection from "@/components/about/AboutPromoSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";

interface AboutViewProps {
  lang: string;
  dict: any;
}

export default function AboutView({ lang, dict }: AboutViewProps) {
  const isAr = lang === "ar";
  const s = dict.aboutPage;

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-6 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">

        {/* Peach Hero Banner Block */}
        <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col gap-12 lg:gap-16 shadow-sm relative overflow-hidden transition-all duration-300">

          {/* Top Row: Info + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left side text column */}
            <div className="flex flex-col items-start text-left rtl:text-right space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0E1B46] leading-tight tracking-tight max-w-lg">
                {s.title}
              </h1>
              <p className="text-sm sm:text-base text-[#525F8C] font-semibold leading-relaxed max-w-md">
                {s.desc}
              </p>

              <Link
                href="#download-app"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[1.25rem] bg-[#FF5500] text-white font-bold hover:bg-orange-600 active:scale-95 transition-all duration-300 w-fit text-sm shadow-sm"
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
                <span>{s.downloadApp}</span>
              </Link>
            </div>

            {/* Right side Image column */}
            <div className="relative w-full">
              <img src={'/images/about/Rectangle1.png'}
                alt="Hanging Clothes on Rack" />
              {/* <Image
                src="/images/about_hero_right.png"
                alt="Folded Laundry Stack"
                fill
                className="object-cover"
                priority
              /> */}
            </div>

          </div>

          {/* Bottom Row: Wide Image Banner */}
          <div className="relative w-full  ">
            <img src={'/images/about/Rectangle21.png'}
              alt="Hanging Clothes on Rack" />
            {/* <Image
              src="/images/about/Rectangle21.png"
              alt="Hanging Clothes on Rack"
              fill
              className="object-cover"
              priority
            /> */}
          </div>

        </div>

      </main>


      {/* Features Section */}
      <AboutFeaturesSection lang={lang} dict={dict} />

      {/* About Promo Section */}
      <AboutPromoSection lang={lang} dict={dict} />

      {/* How It Works Section */}
      <HowItWorksSection lang={lang} dict={dict} />

      {/* Services Section */}
      <ServicesSection lang={lang} dict={dict} bgClass="bg-[#FFF3ED]" />

      {/* How It Works Section with Stacking Scroll Animation */}
      <AboutHowItWorksSection lang={lang} dict={dict} />


      {/* Mobile App Section */}
      <MobileAppSection lang={lang} dict={dict} />

      {/* Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

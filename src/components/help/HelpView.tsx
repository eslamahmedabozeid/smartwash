import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HelpHeaderSection from "@/components/help/HelpHeaderSection";
import HelpFaqSection from "@/components/help/HelpFaqSection";
import AboutFeaturesSection from "@/components/about/AboutFeaturesSection";
import MobileAppSection from "@/components/home/MobileAppSection";

interface HelpViewProps {
  lang: string;
  dict: any;
}

export default function HelpView({ lang, dict }: HelpViewProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-12 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        {/* Help Banner & Contact Section */}
        <HelpHeaderSection lang={lang} dict={dict} />

        {/* FAQ Tabs & Accordion Section */}
        <HelpFaqSection lang={lang} dict={dict} />

        {/* Features Section */}
        <AboutFeaturesSection lang={lang} dict={dict} />


        {/* Mobile App Section */}
        <MobileAppSection lang={lang} dict={dict} />
      </main>

      {/* Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

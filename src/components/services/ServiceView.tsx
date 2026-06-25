import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileAppSection from "@/components/home/MobileAppSection";
import FaqSection from "@/components/shared/FaqSection";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import ServiceHandleEverythingSection from "@/components/services/ServiceHandleEverythingSection";
import ServiceFeaturesSection from "@/components/services/ServiceFeaturesSection";
import ServiceHowItWorksSection from "@/components/services/ServiceHowItWorksSection";

interface ServiceViewProps {
  lang: string;
  service: string;
  dict: any;
}

export default function ServiceView({ lang, service, dict }: ServiceViewProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-12 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">

        {/* First Section: Service Hero */}
        <ServiceHeroSection lang={lang} dict={dict} />

        {/* Second Section: We Handle Everything You Wear & Use */}
        <ServiceHandleEverythingSection lang={lang} dict={dict} />

        {/* Why Choose Smart Wash Section */}
        <ServiceFeaturesSection lang={lang} dict={dict} />

        <ServiceHowItWorksSection lang={lang} dict={dict} />

        {/* Mobile App Section */}
        <MobileAppSection lang={lang} dict={dict} />

        {/* FAQ Section */}
        <FaqSection lang={lang} dict={dict} />

      </main>

      {/* Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

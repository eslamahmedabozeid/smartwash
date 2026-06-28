import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileAppSection from "@/components/home/MobileAppSection";
import FaqSection from "@/components/shared/FaqSection";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import ServiceHandleEverythingSection from "@/components/services/ServiceHandleEverythingSection";
import ServiceFeaturesSection from "@/components/services/ServiceFeaturesSection";
import ServiceHowItWorksSection from "@/components/services/ServiceHowItWorksSection";
import ScrollReveal from "@/components/shared/ScrollReveal";

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
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <ServiceHeroSection lang={lang} dict={dict} />
        </ScrollReveal>

        {/* Second Section: We Handle Everything You Wear & Use */}
        <ScrollReveal variant="fade-up">
          <ServiceHandleEverythingSection lang={lang} dict={dict} />
        </ScrollReveal>

        {/* Why Choose Smart Wash Section */}
        <ScrollReveal variant="fade-up">
          <ServiceFeaturesSection lang={lang} dict={dict} />
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <ServiceHowItWorksSection lang={lang} dict={dict} />
        </ScrollReveal>

        {/* Mobile App Section */}
        <ScrollReveal variant="fade-up">
          <MobileAppSection lang={lang} dict={dict} />
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal variant="fade-up">
          <FaqSection lang={lang} dict={dict} />
        </ScrollReveal>

      </main>

      {/* Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

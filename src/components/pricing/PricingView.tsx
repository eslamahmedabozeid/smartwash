import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileAppSection from "@/components/home/MobileAppSection";


interface PricingViewProps {
  lang: string;
  dict: any;
}

export default function PricingView({ lang, dict }: PricingViewProps) {
  const isAr = lang === "ar";
  const s = dict.pricingPage;

  const cards = [
    {
      title: s.card1Title,
      desc: s.card1Desc,
      price: s.card1Price,
      image: "/images/price/Rectangle3.png", // Iron
    },
    {
      title: s.card2Title,
      desc: s.card2Desc,
      price: s.card2Price,
      image: "/images/price/Rectangle4.png", // Washing Machine
    },
    {
      title: s.card3Title,
      desc: s.card3Desc,
      price: s.card3Price,
      image: "/images/price/Rectangle5.png", // Folded Clothes
    },
    {
      title: s.card4Title,
      desc: s.card4Desc,
      price: s.card4Price,
      image: "/images/price/Rectangle6.png", // Hanger & Shirt (Missing)
    },
    {
      title: s.card5Title,
      desc: s.card5Desc,
      price: s.card5Price,
      image: "/images/price/Rectangle1.png", // Shoe
    },
    {
      title: s.card6Title,
      desc: s.card6Desc,
      price: s.card6Price,
      image: "/images/price/Rectangle2.png", // Carpet
    },
  ];

  // Helper to render card image or custom SVG fallback
  const renderCardImage = (image: string, title: string) => {
    if (image === "custom-hanger") {
      return (
        <div className="relative w-20 h-20 flex items-center justify-center select-none" pointer-events-none="true">

        </div>
      );
    }

    return (
      <div className="relative w-20 h-20 select-none">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          draggable={false}
        />
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Header lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-6 px-4 sm:px-6 lg:px-8 space-y-12 bg-white">

        {/* Transparent Pricing Orange Banner Block */}
        <div className="max-w-7xl mx-auto bg-[#FF5500] text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300">
          <span className="text-xs sm:text-sm font-bold text-white/80 tracking-wider uppercase block mb-3">
            {s.headerLabel}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight whitespace-pre-line max-w-3xl">
            {s.headerTitle}
          </h1>
        </div>

        {/* Savings Bags Section Panel (Lavender Background) */}
        <div className="max-w-7xl mx-auto bg-[#ECEFFB] rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col shadow-sm transition-all duration-300">

          {/* Header block for section */}
          <div className="text-left rtl:text-right mb-10 max-w-3xl space-y-3">
            <h2 className="text-[#2E41CD] font-black text-3xl sm:text-4xl tracking-tight leading-none">
              {s.sectionTitle}
            </h2>
            <p className="text-[#4F5FB0] font-semibold text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {s.sectionDesc}
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col border border-slate-100/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center items-center justify-between min-h-[340px]"
              >
                {/* Horizontal peach pill shape top container for the icon */}
                <div className="w-full h-28 rounded-[2rem] bg-[#FFF3ED] flex items-center justify-center mb-6 shrink-0 relative overflow-hidden">
                  {renderCardImage(card.image, card.title)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-[#1E1E1E] mb-2 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xs mb-4">
                  {card.desc}
                </p>

                {/* Price block */}
                <div className="flex items-baseline justify-center gap-1 mt-auto">
                  <span className="text-3xl font-black text-slate-800 leading-none">
                    {card.price}
                  </span>
                  <span className="text-xs font-black text-slate-400 leading-none">
                    {s.currency}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>

      {/* Mobile App Section */}
      <MobileAppSection lang={lang} dict={dict} />

      {/* Footer Section */}
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

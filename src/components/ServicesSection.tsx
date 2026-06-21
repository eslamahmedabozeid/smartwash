import React from "react";

interface ServicesSectionProps {
  lang: string;
  dict: {
    home: {
      servicesTitle: string;
      dryClean: string;
      washFold: string;
      ironing: string;
    };
  };
}

export default function ServicesSection({ lang, dict }: ServicesSectionProps) {
  const isAr = lang === "ar";

  const services = [
    {
      emoji: "👔",
      title: dict.home.dryClean,
      desc: isAr
        ? "العناية الخاصة بالملابس الفاخرة والبدلات والأقمشة الحساسة مثل الحرير والصوف"
        : "Specialized chemical treatment for delicate garments and formal suits.",
    },
    {
      emoji: "🧺",
      title: dict.home.washFold,
      desc: isAr
        ? "غسيل يومي وتجفيف دقيق مع طي احترافي لتستلم ملابسك جاهزة مباشرة للخزانة"
        : "Perfect laundry service for everyday clothes, sheets, and activewear.",
    },
    {
      emoji: "💨",
      title: dict.home.ironing,
      desc: isAr
        ? "إزالة التجاعيد بأحدث مكواة بخار احترافية لتبدو ملابسك أنيقة ومنسقة دائماً"
        : "Professional steam pressing to keep your clothes looking crisp and clean.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {dict.home.servicesTitle}
          </h2>
          <p className="text-slate-500 text-base">
            {isAr
              ? "نقدم خدمات غسيل متكاملة بأحدث الأجهزة والتقنيات لتناسب جميع احتياجاتكم اليومية"
              : "Providing complete care for your daily wear using advanced technology."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-orange-50 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF5500] flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                {service.emoji}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

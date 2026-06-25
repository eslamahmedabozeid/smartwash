
"use client";

import React, { useState, useEffect, useRef } from "react";

interface HelpFaqSectionProps {
  lang: string;
  dict: any;
}

export default function HelpFaqSection({ lang, dict }: HelpFaqSectionProps) {
  const isAr = lang === "ar";

  const categories = [
    { id: "getting-started", labelEn: "Getting started", labelAr: "البدء" },
    { id: "cleaning", labelEn: "Cleaning", labelAr: "التنظيف" },
    { id: "clean-press", labelEn: "Clean & Press", labelAr: "التنظيف والكي" },
    { id: "wash-fold", labelEn: "Wash & Fold", labelAr: "الغسيل والطي" },
    { id: "press-only", labelEn: "Press Only", labelAr: "الكي فقط" },
    { id: "bed-bath", labelEn: "Bed & Bath", labelAr: "مستلزمات السرير والحمام" },
    { id: "shoecare", labelEn: "ShoeCare", labelAr: "العناية بالأحذية" },
    { id: "pricing-billing", labelEn: "Pricing & billing", labelAr: "الأسعار والفواتير" },
  ];

  const faqData: Record<string, Array<{ qEn: string; qAr: string; aEn: string; aAr: string }>> = {
    "getting-started": [
      {
        qEn: "How do I place my first order?",
        qAr: "كيف يمكنني تقديم طلبي الأول؟",
        aEn: "Simply download our app, sign up with your phone number, select a service, set a convenient pickup/delivery schedule, and confirm your booking. Our driver will handle the rest!",
        aAr: "ما عليك سوى تنزيل تطبيقنا، والتسجيل باستخدام رقم هاتفك، واختيار الخدمة، وتحديد جدول الاستلام والتوصيل المناسب، وتأكيد الحجز. سيتولى سائقنا الباقي!"
      },
      {
        qEn: "What areas do you serve?",
        qAr: "ما هي المناطق التي تخدمونها؟",
        aEn: "We currently cover all major residential and business areas in Dubai, UAE. You can check if we serve your specific address directly when typing it in the app.",
        aAr: "نغطي حالياً جميع المناطق السكنية والتجارية الرئيسية في دبي، الإمارات العربية المتحدة. يمكنك التحقق مما إذا كنا نخدم عنوانك المحدد مباشرة عند كتابته في التطبيق."
      },
      {
        qEn: "How do I set my pickup location?",
        qAr: "كيف أقوم بتحديد موقع الاستلام؟",
        aEn: "You can pin your exact GPS location on our interactive map or enter your building, villa, or apartment details manually in your profile or checkout flow.",
        aAr: "يمكنك تحديد موقع GPS الدقيق الخاص بك على خريطتنا التفاعلية أو إدخال تفاصيل المبنى أو الفيلا أو الشقة يدوياً في ملفك الشخصي أو أثناء إتمام الطلب."
      }
    ],
    "cleaning": [
      {
        qEn: "What detergents do you use?",
        qAr: "ما هي المنظفات التي تستخدمونها؟",
        aEn: "We use premium eco-friendly, biodegradable detergents and solvents that are tough on stains but gentle on clothes and safe for the environment.",
        aAr: "نستخدم منظفات ومذيبات متميزة وصديقة للبيئة وقابلة للتحلل الحيوي، وهي قوية على البقع ولكنها لطيفة على الملابس وآمنة على البيئة."
      },
      {
        qEn: "Can I request hypoallergenic wash?",
        qAr: "هل يمكنني طلب غسيل مضاد للحساسية؟",
        aEn: "Yes, you can request hypoallergenic or baby-safe unscented detergents in the special instructions section when scheduling your order.",
        aAr: "نعم، يمكنك طلب منظفات غير معطرة ومضادة للحساسية أو آمنة للأطفال في قسم التعليمات الخاصة عند جدولة طلبك."
      }
    ],
    "clean-press": [
      {
        qEn: "How are suits treated?",
        qAr: "كيف يتم التعامل مع البدلات؟",
        aEn: "Suits are inspected for spots, dry-cleaned using delicate solvents, steamed to restore their shape, and returned on hangers with protective dust covers.",
        aAr: "يتم فحص البدلات بحثاً عن البقع، وتُنظف جافاً باستخدام مذيبات لطيفة، وتُكوى بالبخار لاستعادة شكلها، وتُعاد على علاقات مع أغطية واقية من الغبار."
      },
      {
        qEn: "Do you clean silk and delicate items?",
        qAr: "هل تنظفون الحرير والقطع الحساسة؟",
        aEn: "Absolutely. Delicate fabrics like silk, wool, and lace are dry-cleaned separately on a gentle cycle according to their specific care label instructions.",
        aAr: "بالتأكيد. الأقمشة الرقيقة مثل الحرير والصوف والدانتيل يتم تنظيفها جافاً بشكل منفصل في دورة لطيفة وفقاً لتعليمات ملصق العناية الخاص بها."
      }
    ],
    "wash-fold": [
      {
        qEn: "Do you separate lights and darks?",
        qAr: "هل تقومون بفرز الملابس الفاتحة والداكنة؟",
        aEn: "Yes, we always sort light-colored clothes from dark ones prior to washing to prevent color bleeding and keep your garments looking bright.",
        aAr: "نعم، نقوم دائماً بفرز الملابس الفاتحة عن الداكنة قبل الغسيل لمنع بهتان الألوان والحفاظ على مظهر ملابسك زاهياً."
      },
      {
        qEn: "What is the turnaround time?",
        qAr: "ما هي مدة تسليم الملابس？",
        aEn: "Our standard turnaround time is 24 hours. We also offer same-day express service for orders picked up before 10 AM.",
        aAr: "مدة التسليم القياسية لدينا هي 24 ساعة. كما نقدم خدمة سريعة في نفس اليوم للطلبات التي يتم استلامها قبل الساعة 10 صباحاً."
      }
    ],
    "press-only": [
      {
        qEn: "Are clothes returned on hangers?",
        qAr: "هل يتم إرجاع الملابس على علاقات؟",
        aEn: "Yes, all pressed shirts, suits, trousers, and dresses are returned on high-quality hangers to keep them crisp and wrinkle-free.",
        aAr: "نعم، جميع القمصان، البدلات، السراويل، والفساتين المكوية تُعاد على علاقات عالية الجودة للحفاظ عليها مفرودة وخالية من التجاعيد."
      },
      {
        qEn: "Can I request heavy starch?",
        qAr: "هل يمكنني طلب نشا ثقيل؟",
        aEn: "Yes, you can write starch preferences in the custom laundry instructions when booking your order.",
        aAr: "نعم، يمكنك كتابة تفضيلات النشا في تعليمات الغسيل المخصصة عند حجز طلبك."
      }
    ],
    "bed-bath": [
      {
        qEn: "How do you clean large comforters?",
        qAr: "كيف يتم تنظيف الألحفة الكبيرة؟",
        aEn: "Large comforters and duvets are cleaned in commercial-grade high-capacity washers to ensure thorough cleaning, deep sanitization, and fluffiness.",
        aAr: "يتم تنظيف الألحفة والبطانيات الكبيرة في غسالات ذات سعة عالية ومخصصة للاستخدام التجاري لضمان التنظيف الشامل، والتعقيم العميق، والنعومة."
      },
      {
        qEn: "Do you offer linen sanitization?",
        qAr: "هل توفرون خدمة تعقيم المفروشات؟",
        aEn: "Yes, we sanitize linens using high-temperature steam and specialized antibacterial products that kill 99.9% of bacteria and allergens.",
        aAr: "نعم، نقوم بتعقيم المفروشات باستخدام البخار عالي الحرارة ومنتجات مضادة للبكتيريا متخصصة تقضي على 99.9٪ من البكتيريا والمواد المسببة للحساسية."
      }
    ],
    "shoecare": [
      {
        qEn: "Can you clean leather sneakers?",
        qAr: "هل يمكنكم تنظيف الأحذية الرياضية الجلدية؟",
        aEn: "Yes! Our technicians clean leather sneakers by hand using specialized leather cleansers, condition the material, and restore the color where possible.",
        aAr: "نعم! يقوم فنيونا بتنظيف الأحذية الرياضية الجلدية يدوياً باستخدام منظفات جلدية متخصصة، وترطيب المادة، واستعادة اللون حيثما أمكن ذلك."
      },
      {
        qEn: "How long does shoe cleaning take?",
        qAr: "كم من الوقت يستغرق تنظيف الأحذية؟",
        aEn: "Due to the specialized manual cleaning and drying process, shoe cleaning takes between 3 to 5 business days.",
        aAr: "نظراً لعملية التنظيف والتجفيف اليدوية المتخصصة، يستغرق تنظيف الأحذية ما بين 3 إلى 5 أيام عمل."
      }
    ],
    "pricing-billing": [
      {
        qEn: "How does the minimum order charge work?",
        qAr: "كيف يتم احتساب الحد الأدنى للطلب؟",
        aEn: "We require a minimum order value of 30 AED. If your total laundry items amount to less than 30 AED, the base minimum of 30 AED will be charged.",
        aAr: "نطلب حداً أدنى لقيمة الطلب يبلغ 30 درهماً إماراتياً. إذا كانت قيمة قطع الغسيل الإجمالية أقل من 30 درهماً، فسيتم تحصيل الحد الأدنى الأساسي البالغ 30 درهماً."
      },
      {
        qEn: "Are there any hidden fees or delivery charges?",
        qAr: "هل توجد رسوم خفية أو رسوم توصيل؟",
        aEn: "No, we believe in transparent pricing. Delivery is free for all orders meeting the minimum order amount of 30 AED.",
        aAr: "لا، نحن نؤمن بالشفافية في الأسعار. التوصيل مجاني لجميع الطلبات التي تلبي الحد الأدنى لقيمة الطلب البالغ 30 درهماً إماراتياً."
      }
    ]
  };

  const [activeTab, setActiveTab] = useState("getting-started");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setOpenIndex(0);
  };

  const updateScrollButtons = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      const absScrollLeft = Math.abs(scrollLeft);

      if (scrollWidth <= clientWidth) {
        setShowLeftBtn(false);
        setShowRightBtn(false);
        return;
      }

      if (isAr) {
        setShowLeftBtn(absScrollLeft < maxScroll - 5);
        setShowRightBtn(absScrollLeft > 5);
      } else {
        setShowLeftBtn(scrollLeft > 5);
        setShowRightBtn(scrollLeft < maxScroll - 5);
      }
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [isAr]);

  const handleScrollClick = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = 200;
      const offset = direction === "left" ? -scrollAmount : scrollAmount;
      scrollContainer.scrollBy({ left: offset, behavior: "smooth" });
      setTimeout(updateScrollButtons, 300); // Check boundaries after smooth scroll finishes
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[2.5rem] p-6 sm:p-10 md:p-12 flex flex-col gap-8 shadow-sm">

      {/* Categories Tab Bar with navigation slider buttons */}
      <div className="relative w-full flex items-center">

        {/* Left Arrow Slider Button */}
        {showLeftBtn && (
          <button
            onClick={() => handleScrollClick("left")}
            className="absolute left-2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#FF5500] hover:bg-slate-50 transition-colors active:scale-95 cursor-pointer"
            aria-label="Scroll Left"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Categories Tab Container */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-3 overflow-x-auto pb-2 w-full text-left rtl:text-right scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const label = isAr ? cat.labelAr : cat.labelEn;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`px-6 py-3 rounded-[16px] text-sm font-medium whitespace-nowrap transition-all duration-300 select-none cursor-pointer ${isActive
                  ? "bg-[#FC4F00] text-white shadow-sm border border-[#FC4F00]"
                  : "bg-[#FFEDE6] text-[#181818] border border-[#FD7233] hover:border-[#FF5500]/50"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Right Arrow Slider Button */}
        {showRightBtn && (
          <button
            onClick={() => handleScrollClick("right")}
            className="absolute right-2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#FF5500] hover:bg-slate-50 transition-colors active:scale-95 cursor-pointer"
            aria-label="Scroll Right"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

      </div>

      {/* Accordion list */}
      <div className="space-y-4 w-full">
        {faqData[activeTab]?.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const question = isAr ? faq.qAr : faq.qEn;
          const answer = isAr ? faq.aAr : faq.aEn;

          return (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col shadow-sm border border-slate-100/40 w-full transition-all duration-300 text-left rtl:text-right"
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex justify-between items-center w-full cursor-pointer gap-4 text-left rtl:text-right focus:outline-none"
              >
                <h3 className="text-base sm:text-lg font-normal text-[#181818] leading-tight">
                  {question}
                </h3>

                {/* Toggle Button */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                    ? "bg-[#FFF3ED] text-[#FF5500] rotate-90"
                    : "bg-[#FF5500] text-white"
                    }`}
                >
                  {isOpen ? (
                    /* X icon */
                    <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    /* + icon */
                    <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Accordion Content Panel */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base text-[#8C8C8C] font-normal leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

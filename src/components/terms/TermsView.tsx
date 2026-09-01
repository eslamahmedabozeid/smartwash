import React from "react";
import HeaderContainer from "@/components/layout/HeaderContainer";
import FooterContainer from "@/components/layout/FooterContainer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import TermsContentSection from "@/components/terms/TermsContentSection";
import { sortByOrder } from "@/lib/api/utils";
import type { SitePage, SiteSection, SiteSubsection } from "@/types/api";

interface TermsViewProps {
  lang: string;
  dict: any;
  termsPage: SitePage | null;
}

const fallbackTermsDataEn: SitePage = {
  id: "028aa542-f090-4006-8001-000000000001",
  pageName: "terms",
  updatedAt: "2026-07-15T09:49:35.316Z",
  sections: [
    {
      id: "028aa542-f093-4017-8001-000000000001",
      type: "legal",
      title: "Terms & Conditions",
      content:
        "Welcome to Private Care Laundry. By accessing this website and purchasing our services, you agree to be bound by the following Terms & Conditions. Please read them carefully.",
      order: 0,
      subsections: [
        {
          id: "028aa542-f094-4050-8001-000000000001",
          title: "1. Definitions",
          content:
            "<ul><li>“Website” refers to Private Care Laundry and all related services.</li><li>“Customer” refers to any user who browses or purchases from the website.</li><li>“Products” refers to all laundry and related services available on the website.</li></ul>",
          order: 0,
        },
        {
          id: "028aa542-f094-4051-8001-000000000001",
          title: "2. Use of the Website",
          content:
            "<ul><li>You must be at least 18 years old to place an order.</li><li>You agree to provide accurate and complete information when placing orders.</li><li>You may not use the website for any unlawful or unauthorized purpose.</li></ul>",
          order: 1,
        },
        {
          id: "028aa542-f094-4052-8001-000000000001",
          title: "3. Orders & Payment",
          content:
            "<ul><li>All orders are subject to availability and confirmation.</li><li>We reserve the right to cancel or refuse any order due to pricing errors or service availability.</li><li>Payments can be made using the available methods (credit/debit cards, digital wallets, or cash on delivery where applicable).</li></ul>",
          order: 2,
        },
        {
          id: "028aa542-f094-4053-8001-000000000001",
          title: "4. Shipping & Delivery",
          content:
            "<ul><li>Orders are processed within the timeframe specified during checkout or in the app.</li><li>Delivery times may vary depending on location and operational conditions.</li><li>We are not responsible for delays caused by external factors beyond our control.</li></ul>",
          order: 3,
        },
      ],
    },
  ],
};

const fallbackTermsDataAr: SitePage = {
  id: "028aa542-f090-4006-8001-000000000001",
  pageName: "terms",
  updatedAt: "2026-07-15T09:49:35.316Z",
  sections: [
    {
      id: "028aa542-f093-4017-8001-000000000001",
      type: "legal",
      title: "الشروط والأحكام",
      content:
        "مرحباً بكم في برايفيت كير لوندري. من خلال الوصول إلى هذا الموقع وشراء خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.",
      order: 0,
      subsections: [
        {
          id: "028aa542-f094-4050-8001-000000000001",
          title: "1. التعريفات",
          content:
            "<ul><li>يشير \"الموقع الإلكتروني\" إلى برايفيت كير لوندري وجميع الخدمات المرتبطة به.</li><li>يشير \"العميل\" إلى أي مستخدم يتصفح الموقع أو يشتري منه.</li><li>تشير \"المنتجات\" إلى جميع خدمات الغسيل والخدمات المرتبطة المتوفرة على الموقع.</li></ul>",
          order: 0,
        },
        {
          id: "028aa542-f094-4051-8001-000000000001",
          title: "2. استخدام الموقع",
          content:
            "<ul><li>يجب ألا يقل عمرك عن 18 عاماً لتقديم طلب.</li><li>أنت توافق على تقديم معلومات دقيقة وكاملة عند تقديم الطلبات.</li><li>لا يجوز لك استخدام الموقع لأي غرض غير قانوني أو غير مصرح به.</li></ul>",
          order: 1,
        },
        {
          id: "028aa542-f094-4052-8001-000000000001",
          title: "3. الطلبات والدفع",
          content:
            "<ul><li>جميع الطلبات تخضع للتوفر والتأكيد.</li><li>نحتفظ بالحق في إلغاء أو رفض أي طلب بسبب أخطاء في التسعير أو توفر الخدمة.</li><li>يمكن إجراء المدفوعات باستخدام الطرق المتاحة (بطاقات الائتمان/الخصم، المحافظ الرقمية، أو الدفع عند الاستلام حيثما ينطبق ذلك).</li></ul>",
          order: 2,
        },
        {
          id: "028aa542-f094-4053-8001-000000000001",
          title: "4. الشحن والتوصيل",
          content:
            "<ul><li>تتم معالجة الطلبات خلال الإطار الزمني المحدد أثناء الدفع أو في التطبيق.</li><li>قد تختلف أوقات التسليم حسب الموقع والظروف التشغيلية.</li><li>نحن لسنا مسؤولين عن التأخير الناتج عن عوامل خارجية خارجة عن سيطرتنا.</li></ul>",
          order: 3,
        },
      ],
    },
  ],
};

function formatDate(isoString: string, lang: string): string {
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return isoString;
    return date.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return isoString;
  }
}

export default function TermsView({ lang, dict, termsPage }: TermsViewProps) {
  const isAr = lang === "ar";
  const defaultFallback = isAr ? fallbackTermsDataAr : fallbackTermsDataEn;

  const resolvedData =
    termsPage && termsPage.sections && termsPage.sections.length > 0
      ? termsPage
      : defaultFallback;

  const legalSection: SiteSection | undefined =
    resolvedData.sections?.find((sec) => sec.type === "legal") ??
    resolvedData.sections?.[0];

  const subsections: SiteSubsection[] = sortByOrder(
    legalSection?.subsections ?? defaultFallback.sections[0].subsections
  );

  const pageTitle = legalSection?.title ?? (isAr ? "الشروط والأحكام" : "Terms & Conditions");
  const pageSubtitle =
    legalSection?.content ??
    (isAr
      ? "مرحباً بكم في برايفيت كير لوندري. من خلال الوصول إلى هذا الموقع وشراء خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية."
      : "Welcome to Private Care Laundry. By accessing this website and purchasing our services, you agree to be bound by the following Terms & Conditions.");

  const formattedDate = formatDate(
    resolvedData.updatedAt || "2026-07-15T09:49:35.316Z",
    lang
  );

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <HeaderContainer lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-6 px-[10px] sm:px-6 lg:px-8 space-y-8 bg-white">
        {/* Dedicated Terms Hero Banner */}
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <div className="max-w-7xl mx-auto bg-[#FF5500] text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300">
            {/* Background glowing gradient accents */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            {/* Tag Badge */}
            <span className="text-xs sm:text-[1.125rem] font-medium text-[#BFD1FA] tracking-wider block mb-3">
              {isAr ? "البنود القانونية" : "Legal Terms"}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight whitespace-pre-line max-w-4xl">
              {pageTitle}
            </h1>

            {/* Subtitle / Introduction */}
            <p className="text-white/90 text-sm sm:text-lg max-w-3xl mt-4 leading-relaxed font-normal">
              {pageSubtitle}
            </p>


          </div>
        </ScrollReveal>

        {/* Content Section with Sticky Sidebar & Rich Text */}
        <TermsContentSection
          lang={lang}
          isAr={isAr}
          dict={dict}
          subsections={subsections}
        />
      </main>

      {/* Footer Section */}
      <FooterContainer lang={lang} dict={dict} />
    </div>
  );
}

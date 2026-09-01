import React from "react";
import HeaderContainer from "@/components/layout/HeaderContainer";
import FooterContainer from "@/components/layout/FooterContainer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PrivacyContentSection from "@/components/privacy/PrivacyContentSection";
import { sortByOrder } from "@/lib/api/utils";
import type { SitePage, SiteSection, SiteSubsection } from "@/types/api";

interface PrivacyViewProps {
  lang: string;
  dict: any;
  privacyPage: SitePage | null;
}

const fallbackPrivacyDataEn: SitePage = {
  id: "028aa542-f090-4007-8001-000000000001",
  pageName: "privacy",
  updatedAt: "2026-07-15T09:49:35.351Z",
  sections: [
    {
      id: "028aa542-f093-4018-8001-000000000001",
      type: "legal",
      title: "Privacy Policy",
      content:
        "Welcome to Private Care Laundry. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.",
      order: 0,
      subsections: [
        {
          id: "028aa542-f094-4054-8001-000000000001",
          title: "1. Definitions",
          content:
            "<ul><li>“Website” refers to Private Care Laundry and all related services.</li><li>“Customer” refers to any user who browses or purchases from the website.</li><li>“Personal Data” refers to information that identifies you, such as name, phone, email, and address.</li></ul>",
          order: 0,
        },
        {
          id: "028aa542-f094-4055-8001-000000000001",
          title: "2. Data We Collect",
          content:
            "<ul><li>Account and contact details you provide when registering or placing an order.</li><li>Order history, pickup/delivery addresses, and payment-related metadata.</li><li>Device and usage information needed to operate and improve the service.</li></ul>",
          order: 1,
        },
        {
          id: "028aa542-f094-4056-8001-000000000001",
          title: "3. How We Use Your Data",
          content:
            "<ul><li>To process orders, pickups, deliveries, and customer support requests.</li><li>To send service updates, receipts, and important account notices.</li><li>To improve our website, app experience, and operational reliability.</li></ul>",
          order: 2,
        },
        {
          id: "028aa542-f094-4057-8001-000000000001",
          title: "4. Your Rights",
          content:
            "<ul><li>You may request access to, correction of, or deletion of your personal data where applicable.</li><li>You may update profile details from the app or by contacting support.</li><li>Contact us at hello@PCL.com for privacy-related requests.</li></ul>",
          order: 3,
        },
      ],
    },
  ],
};

const fallbackPrivacyDataAr: SitePage = {
  id: "028aa542-f090-4007-8001-000000000001",
  pageName: "privacy",
  updatedAt: "2026-07-15T09:49:35.351Z",
  sections: [
    {
      id: "028aa542-f093-4018-8001-000000000001",
      type: "legal",
      title: "سياسة الخصوصية",
      content:
        "مرحباً بكم في برايفيت كير لوندري. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها عند استخدام موقعنا وخدماتنا.",
      order: 0,
      subsections: [
        {
          id: "028aa542-f094-4054-8001-000000000001",
          title: "1. التعريفات",
          content:
            "<ul><li>يشير \"الموقع الإلكتروني\" إلى برايفيت كير لوندري وجميع الخدمات المرتبطة به.</li><li>يشير \"العميل\" إلى أي مستخدم يتصفح الموقع أو يشتري منه.</li><li>تشير \"البيانات الشخصية\" إلى المعلومات التي تحدد هويتك، مثل الاسم ورقم الهاتف والبريد الإلكتروني والعنوان.</li></ul>",
          order: 0,
        },
        {
          id: "028aa542-f094-4055-8001-000000000001",
          title: "2. البيانات التي نجمعها",
          content:
            "<ul><li>تفاصيل الحساب وبيانات الاتصال التي تقدمها عند التسجيل أو تقديم الطلب.</li><li>سجل الطلبات، عناوين الاستلام/التسليم، وبيانات الدفع الوصفية.</li><li>معلومات الجهاز والاستخدام اللازمة لتشغيل الخدمة وتحسينها.</li></ul>",
          order: 1,
        },
        {
          id: "028aa542-f094-4056-8001-000000000001",
          title: "3. كيف نستخدم بياناتك",
          content:
            "<ul><li>لمعالجة الطلبات وعمليات الاستلام والتوصيل وطلبات دعم العملاء.</li><li>لإرسال تحديثات الخدمة والإيصالات وإشعارات الحساب الهامة.</li><li>لتحسين موقعنا الإلكتروني وتجربة التطبيق والموثوقية التشغيلية.</li></ul>",
          order: 2,
        },
        {
          id: "028aa542-f094-4057-8001-000000000001",
          title: "4. حقوقك",
          content:
            "<ul><li>يمكنك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها حيثما ينطبق ذلك.</li><li>يمكنك تحديث تفاصيل ملفك الشخصي من التطبيق أو عن طريق التواصل مع الدعم.</li><li>تواصل معنا عبر hello@PCL.com للطلبات المتعلقة بالخصوصية.</li></ul>",
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

export default function PrivacyView({
  lang,
  dict,
  privacyPage,
}: PrivacyViewProps) {
  const isAr = lang === "ar";
  const defaultFallback = isAr ? fallbackPrivacyDataAr : fallbackPrivacyDataEn;

  const resolvedData =
    privacyPage && privacyPage.sections && privacyPage.sections.length > 0
      ? privacyPage
      : defaultFallback;

  const legalSection: SiteSection | undefined =
    resolvedData.sections?.find((sec) => sec.type === "legal") ??
    resolvedData.sections?.[0];

  const subsections: SiteSubsection[] = sortByOrder(
    legalSection?.subsections ?? defaultFallback.sections[0].subsections
  );

  const pageTitle = legalSection?.title ?? (isAr ? "سياسة الخصوصية" : "Privacy Policy");
  const pageSubtitle =
    legalSection?.content ??
    (isAr
      ? "مرحباً بكم في برايفيت كير لوندري. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها عند استخدام موقعنا وخدماتنا."
      : "Welcome to Private Care Laundry. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.");

  const formattedDate = formatDate(
    resolvedData.updatedAt || "2026-07-15T09:49:35.351Z",
    lang
  );

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FF5500] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <HeaderContainer lang={lang} dict={dict} />

      {/* Main Content Area */}
      <main className="w-full flex-1 py-6 px-[10px] sm:px-6 lg:px-8 space-y-8 bg-white">
        {/* Dedicated Privacy Hero Banner */}
        <ScrollReveal variant="fade-in" delay={100} duration={800}>
          <div className="max-w-7xl mx-auto bg-[#FF5500] text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-all duration-300">
            {/* Background glowing gradient accents */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            {/* Tag Badge */}
            <span className="text-xs sm:text-[1.125rem] font-medium text-[#BFD1FA] tracking-wider block mb-3">
              {isAr ? "البيانات والخصوصية" : "Data & Privacy"}
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
        <PrivacyContentSection
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

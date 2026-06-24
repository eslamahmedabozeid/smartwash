import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smart Wash",
  description: "Smart Wash - Premium Laundry and Wash Services",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";
  
  return (
    <html
      lang={lang}
      dir={isAr ? "rtl" : "ltr"}
      className={`${inter.variable} ${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${isAr ? 'font-arabic' : 'font-sans'}`}>
        {children}
      </body>
    </html>
  );
}

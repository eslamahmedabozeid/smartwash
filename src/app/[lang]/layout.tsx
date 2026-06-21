import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
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
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-sans ${isAr ? 'font-arabic' : 'font-sans'}`}>
        {children}
      </body>
    </html>
  );
}

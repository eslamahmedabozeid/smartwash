import React from "react";
import Link from "next/link";

interface FooterProps {
  lang: string;
  dict: {
    navigation: {
      about: string;
      help: string;
    };
  };
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-center text-sm font-semibold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white">
          <span className="text-[#FF5500] font-black">SMART WASH</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <Link href={`/${lang}/about`} className="hover:text-white transition-colors">
            {dict.navigation.about}
          </Link>
          <Link href={`/${lang}/help`} className="hover:text-white transition-colors">
            {dict.navigation.help}
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

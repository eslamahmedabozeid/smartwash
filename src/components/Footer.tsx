import React from "react";
import Link from "next/link";

interface FooterProps {
  lang: string;
  dict: {
    footer: {
      desc: string;
      quickLinks: string;
      servicesLabel: string;
      contactLabel: string;
      howItWorks: string;
      reviews: string;
      downloadApp: string;
      washFold: string;
      dryClean: string;
      ironing: string;
      expressService: string;
      address: string;
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
}

export default function Footer({ lang, dict }: FooterProps) {
  const isAr = lang === "ar";
  const f = dict.footer;

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white border-t border-slate-100">
      {/* Footer Wrapper Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 w-full">

        {/* Left Side: Brand Card (Solid Orange) */}
        <div className="w-full lg:w-[35%] bg-[#FF5500] text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between gap-54 text-left rtl:text-right shadow-sm">

          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href={`/${lang}`} className="inline-block group">
              {/* SVG Logo matched from header */}
              <div className="">
                <img src={"/images/Group.svg"} alt="SmartWash Logo" />


              </div>
            </Link>

            <p className="text-white/95 text-sm sm:text-base font-semibold leading-relaxed max-w-sm">
              {f.desc}
            </p>
          </div>

          {/* Social Media Badges */}
          <div className="flex items-center gap-3">
            {/* Snapchat */}
            <Link
              href="#snapchat"
              aria-label="Snapchat"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.016 3a4.722 4.722 0 0 0-4.717 4.721c0 1.258.487 2.19 1.488 3.19-.34.67-.935 1.141-1.921 1.564-.475.204-.51.527-.087.72 1.01.464 2.128.536 3.178.214-.265.485-.295 1.05.111 1.458.558.558 1.636.7 2.378.368.513-.23.633.155.932.482.35.385.7.771 1.638.771 1.02 0 1.34-.386 1.69-.771.299-.327.42-.712.933-.482.742.332 1.82.19 2.378-.368.406-.408.376-.973.111-1.458 1.05.322 2.168.25 3.178-.214.423-.193.388-.516-.087-.72-.986-.423-1.58-.894-1.92-1.564 1.001-1 1.487-1.932 1.487-3.19A4.722 4.722 0 0 0 12.016 3z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="#facebook"
              aria-label="Facebook"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3.7l.5-3H12V6.5A1.5 1.5 0 0 1 13.5 5H16V2h-3A4.5 4.5 0 0 0 8.5 6.5V8H9z" />
              </svg>
            </Link>

            {/* Twitter/X */}
            <Link
              href="#twitter"
              aria-label="Twitter X"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Side: Links & Contact Card (Light Peach) */}
        <div className="w-full lg:w-[63%] bg-[#FFF3ED] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between gap-12 text-left rtl:text-right shadow-sm">

          {/* Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h4 className="text-base font-black text-slate-800 uppercase tracking-wide">
                {f.quickLinks}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#services" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.servicesLabel}
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.howItWorks}
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.reviews}
                  </Link>
                </li>
                <li>
                  <Link href="#download-app" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.downloadApp}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <h4 className="text-base font-black text-slate-800 uppercase tracking-wide">
                {f.servicesLabel}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#services" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.washFold}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.dryClean}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.ironing}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm font-semibold text-slate-500 hover:text-[#FF5500] transition-colors">
                    {f.expressService}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-base font-black text-slate-800 uppercase tracking-wide">
                {f.contactLabel}
              </h4>
              <ul className="space-y-3.5">
                {/* Location */}
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                  <svg className="w-5 h-5 stroke-[#FF5500] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{f.address}</span>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                  <svg className="w-5 h-5 stroke-[#FF5500] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <Link href="tel:+97141234567" className="hover:text-[#FF5500] transition-colors">+971 4 123 4567</Link>
                </li>
                {/* Email */}
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                  <svg className="w-5 h-5 stroke-[#FF5500] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <Link href="mailto:hello@smartwash.com" className="hover:text-[#FF5500] transition-colors">hello@smartwash.com</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom copyright & legal block */}
          <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs sm:text-sm font-semibold text-slate-400">
              {f.copyright}
            </p>
            {/* Links */}
            <div className="flex items-center gap-6">
              <Link href="#privacy" className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-[#FF5500] transition-colors">
                {f.privacy}
              </Link>
              <Link href="#terms" className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-[#FF5500] transition-colors">
                {f.terms}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

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


          </div>
          <div className="">
            <p className="text-white/95 text-sm sm:text-base font-semibold leading-relaxed max-w-sm mb-8">
              {f.desc}
            </p>
            <div className="flex items-center gap-1">
              {/* Snapchat */}
              <Link
                href="#snapchat"
                aria-label="Snapchat"
                className=" "
              >
                <img src="/images/footer/Frame1820550884.svg" alt="" />
              </Link>

              {/* Facebook */}
              <Link
                href="#facebook"
                aria-label="Facebook"
                className=" "
              >
                <img src="/images/footer/Frame1820550885.svg" alt="" />

              </Link>

              {/* Twitter/X */}
              <Link
                href="#twitter"
                aria-label="Twitter X"
                className=" "
              >
                <img src="/images/footer/Frame1820550886.svg" alt="" />

              </Link>

              {/* LinkedIn */}
              <Link
                href="#linkedin"
                aria-label="LinkedIn"
                className=" "
              >
                <img src="/images/footer/Frame1820550887.svg" alt="" />

              </Link>
            </div>
          </div>
          {/* Social Media Badges */}

        </div>

        {/* Right Side: Links & Contact Card (Light Peach) */}
        <div className="w-full lg:w-[63%] bg-[#FFF3ED] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between gap-12 text-left rtl:text-right shadow-sm">

          {/* Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#181818] tracking-wide">
                {f.quickLinks}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#services" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.servicesLabel}
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.howItWorks}
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.reviews}
                  </Link>
                </li>
                <li>
                  <Link href="#download-app" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.downloadApp}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#181818] tracking-wide">
                {f.servicesLabel}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#services" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.washFold}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.dryClean}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.ironing}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm font-normal text-[#181818] hover:text-[#FF5500] transition-colors">
                    {f.expressService}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#181818] tracking-wide">
                {f.contactLabel}
              </h4>
              <ul className="space-y-3.5">
                {/* Location */}
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                  <img src="/images/icons/location-06.svg" alt="" />
                  <span>{f.address}</span>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                  <img src="/images/icons/call-02.svg" alt="" />
                  <Link href="tel:+97141234567" className="hover:text-[#FF5500] transition-colors direction-ltr">+971 4 123 4567</Link>
                </li>
                {/* Email */}
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
                  <img src="/images/icons/mail-0.svg" alt="" />
                  <Link href="mailto:hello@smartwash.com" className="hover:text-[#FF5500] transition-colors">hello@smartwash.com</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom copyright & legal block */}
          <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs sm:text-sm font-normal text-[#8C8C8C]">
              {f.copyright}
            </p>
            {/* Links */}
            <div className="flex items-center gap-6">
              <Link href="#privacy" className="text-xs sm:text-sm font-semibold text-[#181818] hover:text-[#FF5500] transition-colors">
                {f.privacy}
              </Link>
              <Link href="#terms" className="text-xs sm:text-sm font-semibold text-[#181818] hover:text-[#FF5500] transition-colors">
                {f.terms}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

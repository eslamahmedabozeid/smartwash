import React from "react";

interface AboutFeaturesSectionProps {
  lang: string;
  dict: {
    aboutPage: {
      featureStepsTitle: string;
      featureStepsDesc: string;
      featureAirDryTitle: string;
      featureAirDryDesc: string;
      featureSteamPressTitle: string;
      featureSteamPressDesc: string;
    };
  };
}

export default function AboutFeaturesSection({ lang, dict }: AboutFeaturesSectionProps) {
  const isAr = lang === "ar";
  const s = dict.aboutPage;

  return (
    <section id="about-features" className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Left Card: Four Simple Steps To Fresh & Clean (Tall Card) */}
          <div className="bg-[#FFF0EA] rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between min-h-[450px] lg:min-h-full transition-all duration-300 hover:shadow-md border border-[#FFF0EA]">
            {/* Shirt Image */}
            <div className="flex-1 flex items-center justify-items-start py-6">
              <img
                src="/images/about/Rectanglev.png"
                alt="Freshly Cleaned Beige Shirt"
                className="max-h-[260px] w-auto object-contain select-none transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Text details */}
            <div className="text-left rtl:text-right mt-4">
              <h3 className="text-2xl sm:text-3.5xl font-black text-[#FF5500] leading-tight mb-3 whitespace-pre-line">
                {s.featureStepsTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#D04E15] font-semibold leading-relaxed">
                {s.featureStepsDesc}
              </p>
            </div>
          </div>

          {/* Right Cards Column (Two Wide Cards Stacked) */}
          <div className="flex flex-col gap-6 justify-between">

            {/* Top Right Card: Air Dry Technology */}
            <div className="bg-[#FFF0EA] rounded-[2.5rem] p-8 sm:p-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 min-h-[210px] flex-1 transition-all duration-300 hover:shadow-md border border-[#FFF0EA] text-left rtl:text-right">
              {/* Text Info */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#FF5500] leading-tight">
                  {s.featureAirDryTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#D04E15] font-semibold leading-relaxed">
                  {s.featureAirDryDesc}
                </p>
              </div>
              {/* Blue Folded Shirt Image */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center">
                <img
                  src="/images/about/Rectangle.png"
                  alt="Air Dry Blue Shirt"
                  className="max-h-full max-w-full object-contain select-none transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Bottom Right Card: Steam Press Finish */}
            <div className="bg-[#FFF0EA] rounded-[2.5rem] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 min-h-[210px] flex-1 transition-all duration-300 hover:shadow-md border border-[#FFF0EA] text-left rtl:text-right">
              {/* Linen Shirt Image */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center">
                <img
                  src="/images/about/Rectanglec.png"
                  alt="Steam Pressed Linen Shirt"
                  className="max-h-full max-w-full object-contain select-none transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Text Info */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#FF5500] leading-tight">
                  {s.featureSteamPressTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#D04E15] font-semibold leading-relaxed">
                  {s.featureSteamPressDesc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

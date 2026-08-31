import React from "react";
import { sortByOrder } from "@/lib/api/utils";
import type { SiteSection } from "@/types/api";

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
  section?: SiteSection;
}

export default function AboutFeaturesSection({ lang, dict, section }: AboutFeaturesSectionProps) {
  const s = dict.aboutPage;

  const fallbackFeatures = [
    {
      title: s.featureStepsTitle,
      desc: s.featureStepsDesc,
      image: "/images/about/Rectanglev.png",
      alt: "Freshly Cleaned Beige Shirt",
    },
    {
      title: s.featureAirDryTitle,
      desc: s.featureAirDryDesc,
      image: "/images/about/Rectangle.png",
      alt: "Air Dry Blue Shirt",
    },
    {
      title: s.featureSteamPressTitle,
      desc: s.featureSteamPressDesc,
      image: "/images/about/Rectanglec.png",
      alt: "Steam Pressed Linen Shirt",
    },
  ];

  const features = section?.subsections?.length
    ? sortByOrder(section.subsections).map((item, idx) => ({
        title: item.title,
        desc: item.content,
        image: item.images?.[0]?.url ?? fallbackFeatures[idx]?.image ?? "/images/about/Rectanglev.png",
        alt: item.images?.[0]?.alt ?? item.title,
      }))
    : fallbackFeatures;

  const [mainFeature, airDryFeature, steamPressFeature] = [
    features[0] ?? fallbackFeatures[0],
    features[1] ?? fallbackFeatures[1],
    features[2] ?? fallbackFeatures[2],
  ];

  return (
    <section id="about-features" className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Left Card: Four Simple Steps To Fresh & Clean (Tall Card) */}
          <div className="bg-[#FFF0EA] rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between min-h-[450px] lg:min-h-full transition-all duration-300 hover:shadow-md border border-[#FFF0EA]">
            {/* Shirt Image */}
            <div className="flex-1 flex items-center justify-items-start py-6">
              <img
                src={mainFeature.image}
                alt={mainFeature.alt}
                className="max-h-[220px] sm:max-h-[260px] w-auto max-w-[75%] object-contain select-none transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Text details */}
            <div className="text-left rtl:text-right mt-4">
              <h3 className="text-2xl sm:text-[2rem] font-semibold text-[#FC4F00] leading-tight mb-3 whitespace-pre-line">
                {mainFeature.title}
              </h3>
              <p className="text-sm sm:text-[1rem] text-[#FD7233] font-normal leading-relaxed">
                {mainFeature.desc}
              </p>
            </div>
          </div>

          {/* Right Cards Column (Two Wide Cards Stacked) */}
          <div className="flex flex-col gap-6 justify-between">

            {/* Top Right Card: Air Dry Technology */}
            <div className="bg-[#FFF0EA] rounded-[2.5rem] p-8 sm:px-10 sm:py-0 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 min-h-[210px] flex-1 transition-all duration-300 hover:shadow-md border border-[#FFF0EA] text-left rtl:text-right">
              {/* Text Info */}
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl sm:text-[2rem] font-semibold text-[#FC4F00] leading-tight mb-3 whitespace-pre-line">
                  {airDryFeature.title}
                </h3>
                <p className="text-sm sm:text-[1rem] text-[#FD7233] font-normal leading-relaxed">
                  {airDryFeature.desc}
                </p>
              </div>
              {/* Blue Folded Shirt Image */}
              <div className="shrink-0 flex items-center justify-center w-[120px] sm:w-[160px]">
                <img
                  src={airDryFeature.image}
                  alt={airDryFeature.alt}
                  className="max-h-[167px] sm:max-h-[225px] w-auto max-w-full object-contain select-none transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Bottom Right Card: Steam Press Finish */}
            <div className="bg-[#FFF0EA] rounded-[2.5rem] p-8 sm:px-10 sm:py-0 flex flex-col sm:flex-row items-center justify-between gap-6 min-h-[210px] flex-1 transition-all duration-300 hover:shadow-md border border-[#FFF0EA] text-left rtl:text-right">
              {/* Linen Shirt Image */}
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src={steamPressFeature.image}
                  alt={steamPressFeature.alt}
                  className="max-h-full max-w-full object-contain select-none transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Text Info */}
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl sm:text-[2rem] font-semibold text-[#FC4F00] leading-tight mb-3 whitespace-pre-line">
                  {steamPressFeature.title}
                </h3>
                <p className="text-sm sm:text-[1rem] text-[#FD7233] font-normal leading-relaxed">
                  {steamPressFeature.desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

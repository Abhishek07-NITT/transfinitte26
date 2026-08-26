import React, { memo, Suspense } from "react";
import { sponsors } from "../constants";

const SponsorCategory = memo(({ category }) => (
  <div
    key={category.id}
    className="flex w-full flex-col items-start gap-[50px]"
  >
    <div className="text-offwhite text-right font-spacegrotesk text-[2rem] not-italic font-normal leading-8">
      {category.name}
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-[1.25rem] self-stretch flex-wrap sm:gap-[0.625rem]">
      {category.data.map((sponsor) => (
        <div
          key={sponsor.id}
          className="select-none pointer-events-none flex flex-col w-fit items-center justify-center gap-2 self-center sm:self-stretch"
        >
          <img
            src={sponsor.imgurl}
            alt={sponsor.name}
            className="max-w-[120px] sm:max-w-none sm:w-fit sm:h-fit grayscale "
          />
        </div>
      ))}
    </div>
  </div>
));

const SponsorsMobile = memo(() => (
  <div className="block sm:hidden mx-auto bg-black max-w-[91.467%]">
    <div className="flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex h-fit items-start self-stretch">
        <div className="text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[60px] tracking-[-2.56px]">
          Sponsors
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-spacemono text-[18px] not-italic font-normal leading-[28px] ">
          (3)
        </div>
      </div>
      {sponsors.map((category) => (
        <SponsorCategory category={category} />
      ))}
    </div>
  </div>
));

const SponsorsDesktop = memo(() => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex py-9 px-[2.875rem] flex-col items-start gap-[2.875rem] bg-black border-r border-l border-r-edge border-l-edge">
      <div className="flex items-start">
        <div className="text-offwhite font-spacegrotesk text-[4rem] font-normal not-italic leading-[3.75rem] ">
          Sponsors
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-medium not-italic font-spacemono leading-[28px]">
          (3)
        </div>
      </div>
      {sponsors.map((category) => (
        <SponsorCategory category={category} />
      ))}
    </div>
  </div>
));

const Sponsors = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <SponsorsMobile />
        <SponsorsDesktop />
      </Suspense>
    </div>
  );
};

export default Sponsors;

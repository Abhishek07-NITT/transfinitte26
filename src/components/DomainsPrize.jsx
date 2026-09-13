import React, { memo, Suspense } from "react";
import { domains } from "../constants";

const DomainCard = memo(({ domain, index }) => (
  <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-[#D5DAE0] dark:border-[#444] bg-[#E8ECF0] dark:bg-[#1D1D1F] px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 transition-colors duration-300 hover:bg-[#D5DAE0] dark:hover:bg-[#2A2A2F] overflow-hidden">
    <div className="font-spacegrotesk text-base font-bold leading-tight text-[#1D1D1F] dark:text-white sm:text-xl lg:text-2xl flex-shrink-0">
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="font-spacegrotesk text-base font-bold leading-tight text-[#1D1D1F] dark:text-white sm:text-xl lg:text-2xl truncate">
      {domain.name}
    </div>
  </div>
));

const DomainsMobile = memo(() => (
  <div className="block md:hidden mx-auto max-w-[92%] bg-[#FFFFFF] transition-colors duration-300 dark:bg-black">
    <div className="flex flex-col gap-6 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex items-start">
        <div className="text-[#1D1D1F] dark:text-white font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
          Domains
        </div>
        <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
          (2)
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {domains.map((domain, index) => (
          <DomainCard key={domain.id} domain={domain} index={index} />
        ))}
      </div>
    </div>
  </div>
));

const DomainsDesktop = memo(() => (
  <div className="hidden md:block mx-auto max-w-[95%] bg-[#FFFFFF] transition-colors duration-300 dark:bg-black xl:max-w-[93.194%]">
    <div className="flex h-full justify-between gap-8 border-r border-l border-r-edge border-l-edge px-6 py-10 transition-colors lg:gap-12 lg:px-[46px] lg:py-16">
      <div className="flex w-full flex-col gap-8 lg:gap-10 xl:gap-12">
        <div className="flex items-start">
          <div className="text-[#1D1D1F] dark:text-white font-spacegrotesk text-3xl font-normal leading-tight transition-colors lg:text-4xl xl:text-[4rem]">
            Domains
          </div>
          <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
            (2)
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-5">
          {domains.map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
));

const Domains = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <DomainsMobile />
        <DomainsDesktop />
      </Suspense>
    </div>
  );
};

export default Domains;
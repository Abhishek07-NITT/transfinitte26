import React, { memo, Suspense } from "react";
import { domains } from "../constants";

const DomainCard = memo(({ domain }) => (
  <div className="flex items-center justify-between gap-4 rounded-[4px] border border-[#E1E6EB] bg-[#1D1D1F] px-4 py-4 transition-colors duration-300 hover:bg-[#2A2A2F] dark:border-[#E1E6EB] dark:bg-[#FFFFFF] dark:hover:bg-[#DCE3ED]/35 sm:px-5 sm:py-5">
    <div className="flex items-center gap-3">
      <div className="h-2.5 w-2.5 rounded-full bg-[#DCE3ED] opacity-80 dark:bg-[#6B7FA3]" />
      <div className="font-spacegrotesk text-lg font-normal leading-tight text-[#F3F6FA] transition-colors dark:text-[#1D1D1F] sm:text-xl lg:text-2xl">
        {domain.name}
      </div>
    </div>
  </div>
));

const DomainsMobile = memo(() => (
  <div className="block md:hidden mx-auto max-w-[92%] bg-[#F3F6FA] transition-colors duration-300 dark:bg-black">
    <div className="flex flex-col gap-6 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex items-start">
        <div className="text-[#1D1D1F] font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors dark:text-[#EDEDED]">
          Domains
        </div>
        <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] transition-colors dark:text-[#A1A1A1]">
          (2)
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {domains.map((domain) => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </div>
    </div>
  </div>
));

const DomainsDesktop = memo(() => (
  <div className="hidden md:block mx-auto max-w-[95%] bg-[#F3F6FA] transition-colors duration-300 dark:bg-black xl:max-w-[93.194%]">
    <div className="flex h-full justify-between gap-8 border-r border-l border-r-edge border-l-edge bg-[#F3F6FA] px-6 py-10 transition-colors dark:bg-black lg:gap-12 lg:px-[46px] lg:py-16">
      <div className="flex w-full flex-col gap-8 lg:gap-10 xl:gap-12">
        <div className="flex items-start">
          <div className="text-[#1D1D1F] font-spacegrotesk text-3xl font-normal leading-tight transition-colors dark:text-[#EDEDED] lg:text-4xl xl:text-[4rem]">
            Domains
          </div>
          <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] transition-colors dark:text-[#A1A1A1]">
            (2)
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-5">
          {domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
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
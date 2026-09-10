import React, { memo, Suspense } from "react";

const PrizePoolMobile = memo(() => (
  <div className="block md:hidden mx-auto max-w-[92%] bg-[#F3F6FA] transition-colors duration-300 dark:bg-black">
    <div className="flex flex-col gap-4 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex items-start">
        <div className="text-[#1D1D1F] font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors dark:text-[#EDEDED]">
          Prize Pool
        </div>
        <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] transition-colors dark:text-[#A1A1A1]">
          (4)
        </div>
      </div>
      <div className="rounded-[4px] border border-[#E1E6EB] bg-[#FFFFFF] px-4 py-5 transition-colors duration-300 dark:border-[#454545] dark:bg-black">
        <div className="font-spacegrotesk text-[2.5rem] font-normal leading-none tracking-[-0.04em] text-[#1D1D1F] transition-colors dark:text-[#EDEDED]">
          Rs 15 Lakhs+
        </div>
      </div>
    </div>
  </div>
));

const PrizePoolDesktop = memo(() => (
  <div className="hidden md:block mx-auto max-w-[95%] bg-[#F3F6FA] transition-colors duration-300 dark:bg-black xl:max-w-[93.194%]">
    <div className="flex h-full border-r border-l border-r-edge border-l-edge bg-[#F3F6FA] px-6 py-10 transition-colors dark:bg-black lg:px-[46px] lg:py-16">
      <div className="flex w-full flex-col gap-8 lg:gap-10 xl:gap-12">
        <div className="flex items-start">
          <div className="text-[#1D1D1F] font-spacegrotesk text-3xl font-normal leading-tight transition-colors dark:text-[#EDEDED] lg:text-4xl xl:text-[4rem]">
            Prize Pool
          </div>
          <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] transition-colors dark:text-[#A1A1A1]">
            (4)
          </div>
        </div>
        <div className="rounded-[4px] border border-[#E1E6EB] bg-[#FFFFFF] px-6 py-8 transition-colors duration-300 dark:border-[#454545] dark:bg-black lg:px-8 lg:py-10">
          <div className="font-spacegrotesk text-[3rem] font-normal leading-none tracking-[-0.04em] text-[#1D1D1F] transition-colors dark:text-[#EDEDED] sm:text-[3.5rem] lg:text-[4.5rem]">
            Rs 15 Lakhs+
          </div>
        </div>
      </div>
    </div>
  </div>
));

const PrizePool = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <PrizePoolMobile />
        <PrizePoolDesktop />
      </Suspense>
    </div>
  );
};

export default PrizePool;
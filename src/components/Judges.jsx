import React, { memo, Suspense, useState } from "react";
import { judges } from "../constants";

const JudgesList = memo(({ judges, hoveredJudge, setHoveredJudge }) => (
  <div className="flex flex-col items-start gap-3 lg:gap-4 self-stretch">
    {judges.map((judge) => (
      <div
        key={judge.id}
        className={`text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-xl lg:text-2xl xl:text-[32px] not-italic font-normal leading-tight transition-all duration-300 select-none cursor-default ${
          hoveredJudge === judge.id ? "opacity-100 font-medium" : "opacity-40"
        }`}
        onMouseEnter={() => setHoveredJudge(judge.id)}
        onMouseLeave={() => setHoveredJudge(null)}
      >
        {judge.name}
      </div>
    ))}
  </div>
));

const JudgesMobile = memo(({ judges }) => (
  <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] transition-colors duration-300">
    <div className="flex flex-col justify-center items-start gap-4 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex h-fit items-start self-stretch">
        <div className="text-[#1D1D1F] dark:text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors w-fit">
          Past Judges
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-[0.65rem] not-italic font-normal leading-[28px] transition-colors align-super -mt-2">
          (3)
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        {judges.map((judge) => (
          <div
            key={judge.id}
            className="flex flex-col border border-dashed border-[#E6E6E3] dark:border-[#454545] cursor-default p-2 rounded transition-colors"
          >
            <div className="aspect-square w-full overflow-hidden rounded">
              <img
                src={judge.imgurl}
                alt={judge.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-[#1D1D1F] dark:text-offwhite font-spacemono text-[0.75rem] font-normal uppercase text-left pt-2 transition-colors">
              <div className="font-bold truncate">{judge.name}</div>
              <div className="text-[#6B6B6B] dark:text-neutral-400 text-[0.7rem] truncate">{judge.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const JudgesDesktop = memo(({ judges, hoveredJudge, setHoveredJudge }) => (
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] transition-colors duration-300">
    <div className="flex h-full py-10 lg:py-16 px-6 lg:px-[46px] justify-between items-start border-r border-l border-r-edge border-l-edge bg-[#FFFFFF] dark:bg-black transition-colors">
      <div className="flex w-full flex-col md:flex-row justify-between items-start gap-8 lg:gap-14 xl:gap-20">
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-start items-start gap-8 lg:gap-14 flex-shrink-0">
          <div className="flex h-fit items-start self-stretch">
            <div className="text-[#1D1D1F] dark:text-[#EDEDED] font-spacegrotesk text-3xl lg:text-4xl xl:text-[4rem] font-normal leading-tight whitespace-nowrap transition-colors w-fit">
              Past Judges
            </div>
            <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-[0.65rem] not-italic font-normal leading-[28px] transition-colors align-super -mt-2">
              (3)
            </div>
          </div>
          <JudgesList
            judges={judges}
            hoveredJudge={hoveredJudge}
            setHoveredJudge={setHoveredJudge}
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {judges.map((judge) => (
            <div
              key={judge.id}
              className="aspect-square overflow-hidden relative border border-dashed border-[#E6E6E3] dark:border-[#454545] rounded cursor-default transition-colors"
              onMouseEnter={() => setHoveredJudge(judge.id)}
              onMouseLeave={() => setHoveredJudge(null)}
            >
              <img
                src={judge.imgurl}
                alt={judge.name}
                className={`object-cover w-full h-full transition-transform duration-300 ${
                  hoveredJudge === judge.id
                    ? "scale-105"
                    : "grayscale"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent to-black transition-opacity duration-300 ${
                  hoveredJudge === judge.id ? "opacity-85" : "opacity-60"
                }`}
              />
              <div className="text-white font-spacemono text-[0.75rem] lg:text-[0.813rem] font-normal uppercase absolute bottom-0 right-[6px] left-[6px] text-right bg-transparent select-none cursor-default truncate">
                {`${judge.name} | ${judge.company}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
));

const Judges = () => {
  const [hoveredJudge, setHoveredJudge] = useState(null);
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <JudgesMobile judges={judges} />
        <JudgesDesktop
          judges={judges}
          hoveredJudge={hoveredJudge}
          setHoveredJudge={setHoveredJudge}
        />
      </Suspense>
    </div>
  );
};

export default Judges;

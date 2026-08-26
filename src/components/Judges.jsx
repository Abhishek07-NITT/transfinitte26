import React, { memo, Suspense, useState } from "react";
import { judges } from "../constants";

const JudgesList = memo(({ judges, hoveredJudge, setHoveredJudge }) => (
  <div className="flex flex-col items-start gap-4 self-stretch">
    <div className="flex flex-col items-start gap-4 self-stretch">
      {judges.map((judge) => (
        <div
          key={judge.id}
          className={` text-offwhite font-spacegrotesk text-[32px] not-italic font-normal leading-8 transition-opacity duration-300 select-none cursor-default ${
            hoveredJudge === judge.id ? "opacity-100" : "opacity-50"
          }`}
          onMouseEnter={() => setHoveredJudge(judge.id)}
          onMouseLeave={() => setHoveredJudge(null)}
        >
          {judge.name}
        </div>
      ))}
    </div>
  </div>
));

const JudgesMobile = memo(({ judges }) => (
  <div className="block sm:hidden mx-auto bg-black max-w-[91.467%]">
    <div className="flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4 ">
      {/* <div className="flex flex-col items-start gap-6 self-stretch">
        <div className="flex w-full h-auto py-1 px-0 content-center items-center gap-2 self-stretch">
          <div className="text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[36px] tracking-[-1.28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </div>
        </div>
      </div> */}
      <div className="flex h-fit items-start self-stretch">
        <div className="text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[60px] tracking-[-2.56px]">
          Past Judges
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-spacemono text-[1.125rem] not-italic font-normal leading-[28px] ">
          (2)
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-[0.625rem] flex-wrap">
        {judges.map((judge) => (
          <div
            key={judge.id}
            className="flex content-center items-center w-[45%] aspect-square object-cover relative border border-dashed border-[#454545] cursor-default gap-[5px] p-[5px]"
          >
            <div className="flex flex-col justify-start items-start">
              <div>
                <img
                  src={judge.imgurl}
                  alt={judge.name}
                  width="100%"
                  height="100%"
                  className={`object-cover w-full h-full transition-transform duration-300  }`}
                />
              </div>
              <div className="text-offwhite font-spacemono text-[0.813rem] font-normal uppercase text-left bg-transparent select-none cursor-default p-1">
                <div className="flex flex-col gap-[0.3125rem]">
                  <div>{judge.name}</div>
                  <div>{judge.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const JudgesDesktop = memo(({ judges, hoveredJudge, setHoveredJudge }) => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex h-full py-[70px] px-[46px] justify-between items-start content-start gap-y-[92px] flex-wrap border-r border-l border-r-edge border-l-edge bg-black">
      {/* <div className="flex w-full h-auto py-1 px-0 content-center items-center gap-2">
            <div className="text-[#EDEDED] font-spacegrotesk text-[64px] font-normal leading-[64px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </div>
          </div> */}
      <div className="flex w-[86%] justify-start items-start gap-[187.4px] flex-shrink-0 ">
        <div className="flex w-1/4 flex-col justify-start items-start gap-[84px] flex-shrink-0">
          <div className="flex h-fit items-start self-stretch">
            <div className="text-[#EDEDED] font-spacegrotesk text-[4rem] font-normal leading-[60px] whitespace-nowrap">
              Past Judges
            </div>
            <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-geistmono text-[1.125rem] not-italic font-normal leading-[28px] ">
              (2)
            </div>
          </div>
          <JudgesList
            judges={judges}
            hoveredJudge={hoveredJudge}
            setHoveredJudge={setHoveredJudge}
          />
        </div>
        <div className="flex w-3/4 items-start content-start gap-5 flex-shrink-0 flex-wrap">
          {judges.map((judge) => (
            <div
              key={judge.id}
              className="flex content-center items-center w-[30%] aspect-square overflow-hidden object-cover relative border border-dashed border-[#454545] cursor-default"
              onMouseEnter={() => setHoveredJudge(judge.id)}
              onMouseLeave={() => setHoveredJudge(null)}
            >
              <img
                src={judge.imgurl}
                alt={judge.name}
                width="100%"
                height="100%"
                className={`object-cover w-full h-full grayscale transition-transform duration-300 ${
                  hoveredJudge === judge.id
                    ? "grayscale-0 scale-105"
                    : "grayscale"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-300 ${
                  hoveredJudge === judge.id ? "opacity-100" : "opacity-70"
                }`}
              />
              <div className="hidden sm:block text-offwhite font-spacemono text-[0.813rem] font-normal uppercase absolute bottom-0 right-[5px] text-right bg-transparent select-none cursor-default">
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

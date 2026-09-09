import React, { lazy, memo, Suspense } from "react";
import { bubble, bubbleLight, tfhero, tfherosm } from "../assets";

const Flip = lazy(() => import("./Flip"));

const HeroMobile = memo(() => (
  <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] transition-colors duration-300">
    <div className="flex flex-col justify-center items-center flex-shrink-0 border-l border-r border-l-edge border-r-edge py-4 px-2">
      <div className="w-full flex justify-center px-2">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            src={tfherosm}
            className="w-full max-w-sm h-auto dark:invert-0 invert transition-all duration-300"
            alt="Transfinitte"
          />
        </Suspense>
      </div>
      <div className="w-full flex justify-center mt-2 px-1">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            src={bubble}
            className="hidden dark:block w-full max-w-sm h-auto"
            alt="Hero Grid"
          />
          <img
            src={bubbleLight}
            className="block dark:hidden w-full max-w-sm h-auto"
            alt="Hero Grid"
          />
        </Suspense>
      </div>
    </div>
    <div className="py-4 flex justify-center items-center w-full border-l border-r border-b border-b-edge border-l-edge border-r-edge self-stretch">
      <Suspense fallback={<div>Loading...</div>}>
        <Flip />
      </Suspense>
    </div>
  </div>
));

const HeroDesktop = memo(() => (
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] transition-colors duration-300">
    <div className="px-6 lg:px-12 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 lg:py-10 flex flex-col items-center">
      <div className="w-full flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            src={tfhero}
            className="w-full max-w-5xl lg:max-w-6xl h-auto dark:invert-0 invert transition-all duration-300"
            alt="Transfinitte"
          />
        </Suspense>
      </div>
      <div className="w-full mt-2 lg:mt-[-16px] flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            src={bubble}
            className="hidden dark:block w-full max-w-4xl lg:max-w-5xl h-auto"
            alt="Hero Grid"
          />
          <img
            src={bubbleLight}
            className="block dark:hidden w-full max-w-4xl lg:max-w-5xl h-auto"
            alt="Hero Grid"
          />
        </Suspense>
      </div>
    </div>
  </div>
));

const Hero = () => {
  return (
    <div className="select-none pointer-events-none">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroMobile />
        <HeroDesktop />
      </Suspense>
    </div>
  );
};

export default Hero;

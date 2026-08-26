import React, { lazy, memo, Suspense } from "react";
import { bubble, tfgridsm, tfhero, tfherosm } from "../assets";

const Flip = lazy(() => import("./Flip"));

const HeroMobile = memo(() => (
  <div className="block sm:hidden mx-auto bg-black max-w-[91.467%]">
    <div className="max-h-screen flex flex-col justify-center items-center flex-shrink-0 border-l border-r border-l-edge border-r-edge py-2">
      <div className="w-full h-full px-3">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={tfherosm} className="w-full h-full" />
        </Suspense>
      </div>
      <div className="w-full h-full mt-[-7px]">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={tfgridsm} className="w-full h-full" />
        </Suspense>
      </div>
    </div>
    <div className="py-[21px] flex justify-center items-center w-full border-l border-r border-b border-b-edge  border-l-edge border-r-edge self-stretch">
      <Suspense fallback={<div>Loading...</div>}>
        <Flip />
      </Suspense>
    </div>
  </div>
));

const HeroDesktop = memo(() => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="max-h-screen px-12 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-8">
      <div className="flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={tfhero} />
        </Suspense>
      </div>
      <div className="mt-[-28px] flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={bubble} />
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

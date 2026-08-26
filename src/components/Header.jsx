import React, { lazy, memo, Suspense } from "react";
import { arrowbl, arrowwh, numbersvg, tfbadge } from "../assets";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Flip = lazy(() => import("./Flip"));

const Header = memo(() => {
  const handleClick = () => {
    toast("Coming Soon", {
      description: "wednesday, 21 October 2026, 9:00 AM", // Custom style for description
      style: {
        backgroundColor: "#EDEDED",
        color: "#000",
        padding: "16px",
      },
      className: "font-spacemono",
    });
  };

  const RegisterButton = ({ variant, className }) => (
    <Button variant={variant} onClick={handleClick}>
      <div
        className={`flex flex-row gap-1 justify-center items-center bg-offwhite px-2 py-0 rounded-full hover:underline decoration-black ${className}`}
      >
        <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase bg-offwhite">
          REGISTER
        </div>
        <div>
          <img src={arrowbl} className="max-w-none w-fit bg-offwhite" />
        </div>
      </div>
    </Button>
  );

  const InstagramButton = () => (
    <a
      href="https://www.instagram.com/tc_nitt/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline decoration-white"
    >
      <button className="flex flex-row gap-1 justify-center items-center">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
          INSTAGRAM
        </div>
        <div>
          <img src={arrowwh} className="max-w-none w-fit" />
        </div>
      </button>
    </a>
  );

  const HeaderMobile = memo(() => (
    <div className="block sm:hidden relative">
      <div className="flex items-center justify-between bg-black shrink-0 w-full border-b-[#EDEDED26] border-b border-solid py-4 px-8 sticky top-0 shadow-md z-50 content-stretch">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={tfbadge} />
        </Suspense>
        <RegisterButton variant="outline" className="px-[0.5625rem] py-1" />
      </div>
    </div>
  ));

  const HeaderDesktop = memo(() => (
    <div className="hidden sm:flex justify-between items-center h-max py-5 bg-black shrink-0 self-stretch border-b-[#EDEDED26] border-b border-solid pl-12 sticky top-0 shadow-md z-50 content-stretch">
      <div className="w-[15vw]">
        <Suspense fallback={<div>Loading...</div>}>
          <Flip />
        </Suspense>
      </div>
      <div className="flex flex-row flex-grow gap-1 self-stretch items-center justify-center">
        <div className="text-white text-center text-xl font-spacegrotesk items-center font-medium leading-5 tracking-[-0.1px] uppercase">
          Transfinitte
        </div>
        <div>
          <a>
            <img src={numbersvg} alt="24" />
          </a>
        </div>
      </div>
      <div className="w-fit h-fit flex gap-[36px] mr-[3rem] justify-center items-center">
        <InstagramButton />
        <RegisterButton variant="outline" className="px-5 py-2" />
      </div>
    </div>
  ));

  return (
    <div className="sticky top-0 z-50 select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderMobile />
        <HeaderDesktop />
      </Suspense>
    </div>
  );
});

export default Header;

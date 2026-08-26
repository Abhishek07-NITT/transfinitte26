import React from "react";
import { bubble, tfgridsm, tfhero, tfherosm } from "../assets";
import Flip from "./Flip";

const Registration = () => {
  return (
    <div>
      {/* Mobile Version */}
      <div className="block sm:hidden mx-auto bg-black max-w-[91.467%]">
        <div className="max-h-screen flex flex-col justify-center items-center flex-shrink-0 border-l border-r border-l-edge border-r-edge py-2">
          <div className="w-full h-full px-3">
            <img src={tfherosm} className="w-full h-full" />
          </div>
          <div className="w-full h-full mt-[-7px]">
            <img src={tfgridsm} className="w-full h-full" />
          </div>
        </div>
        <div className="py-[21px] flex justify-center items-center w-full border-l border-r border-b border-b-edge  border-l-edge border-r-edge self-stretch">
          <Flip />
        </div>
      </div>
      {/* Desktop Version */}
      <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
        <div className="max-h-screen px-12 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-8">
          <div className="flex items-center justify-center">
            <img src={tfhero} />
          </div>
          <div className="mt-[-28px] flex items-center justify-center">
            <img src={bubble} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

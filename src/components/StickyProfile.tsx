import React from "react";
import { designElements } from "@/lib";

function StickyProfile() {
  return (
    <div className="bg-white w-[344px] h-[640px] px-6 flex flex-col justify-center items-center rounded-2xl sticky pt-7">
      <div className="bg-gradient-to-tr from-orange to-[#9D2200] w-[65%] h-[35%] rounded-2xl">
        <img
          src="./images/Samuel Owolabi.png"
          alt="Samuel Owolabi image"
          className="object-cover w-[100%] h-[100%] rounded-2xl"
        />
      </div>
      <h1 className="text-center font-bold text-[1.75rem] md:text-[2.25rem] leading-8 mt-3">
        Samuel Owolabi
      </h1>

      <div className="absolute -top-1 -left-[0.15rem] w-[150px] h-[70px]">
        <img src={designElements.dottedCircle} className="w-full" />
      </div>

      <div className="overflow-hidden relative -left-12 *:w-[250px] h-[150px]">
        <img src={designElements.dottedFire} className="relative -left-32" />
      </div>

      <p className="text-darkgrey-100 text-center font-medium text-lg">
        Passionate about transforming ideas into impactful, user-centric
        applications.
      </p>
    </div>
  );
}

export default StickyProfile;

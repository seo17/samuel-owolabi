import React from "react";
import { designElements, socialMedia } from "@/lib";
import Link from "next/link";

function StickyProfile() {
  return (
    <div
      id="sticky-profile"
      className="bg-white w-[344px] h-[640px] px-6 flex flex-col justify-center items-center rounded-2xl sticky top-10"
    >
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
        <img
          src={designElements.dottedCircle}
          alt="dotted half circle"
          className="w-full"
        />
      </div>
      <div className="overflow-hidden relative -left-12 *:w-[250px] h-[150px]">
        <img
          src={designElements.dottedFire}
          alt={"dotted half circle with flame icon"}
          className="relative -left-32"
        />
      </div>
      <p className="text-dark-gray text-center font-medium text-lg">
        Passionate about transforming ideas into impactful, user-centric
        applications.
      </p>
      {/* Add social media */}

      <div className=" flex flex-row w-fit justify-start mx-auto">
        {socialMedia.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="p-6 hover:scale-125 rounded-xl text-orange mx-auto"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StickyProfile;

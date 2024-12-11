"use client";

import { stats } from "@/lib";
import React from "react";

import { Section } from "./Section";

function HeroSection() {
  return (
    <Section id="Hero">
      <div className="flex flex-col items-center lg:items-start  gap-y-10">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-center lg:text-start text-white font-bold text-[52px] leading-[45px] md:text-[94px] md:leading-[80px] uppercase">
            Software <span className="text-light-gray/15">Engineer</span>
          </h3>

          <p className="text-base text-center lg:text-start text-dark-gray lg:font-medium md:text-[18px] mx-auto lg:mx-0 lg:w-[70%]">
            Passionate about transforming innovative ideas into impactful,
            user-centric application,crafting scalable and secure web solutions.
          </p>
        </div>

        <div className="flex flex-row flex-wrap  justify-evenly md:justify-center lg:justify-start text-light-gray items-center gap-3 md:gap-x-10 uppercase">
          {stats.map((item, index) => (
            <div key={index} className="text-start">
              <p className="font-semibold md:font-bold text-5xl md:text-7xl">
                {item.figure}
              </p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;

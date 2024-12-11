"use client";

import React from "react";
import { Section } from "./Section";
import { experiences } from "@/lib";

function Experience() {
  return (
    <Section id="experience" className="pt-[80px] md:pt-[120px]">
      <div className="flex flex-col gap-2 md:gap-5">
        <h3 className="text-white text-center lg:text-start font-bold text-[52px] leading-[45px] md:text-[94px] md:leading-[80px] uppercase">
          2 year <span className="text-light-gray/15">Experience</span>
        </h3>

        <div className="flex flex-col space-y-3">
          {experiences.map((item) => (
            <div
              key={item.companyName}
              className="text-base p-6 hover:bg-white/15 rounded-xl text-light-gray"
            >
              <p className="font-bold text-[18px] md:text-4xl text-white ">
                {item.companyName}
              </p>
              <p className="mt-3">{item.summary}</p>
              <p className="mt-3">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;

"use client";

import {
  designElements,
  stats,
  experiences,
  projects,
  socialMedia,
} from "@/lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { motion } from "framer-motion";

import { Section } from "./Section";

function HeroSection() {
  const [animationClass, setAnimationClass] = useState<{
    state: boolean;
    index: null | number;
  }>({ state: false, index: null });
  const handleMouseOver = (index: number) => {
    setAnimationClass({ state: true, index });
  };

  const handleMouseLeave = (index: number) => {
    setAnimationClass({ state: false, index: null });
  };

  return (
    <div id="main" className="w-full lg:w-[50%]">
      {/* Hero Section */}
      <Section id="Hero">
        <div className="flex flex-col items-center lg:items-start  gap-y-10">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-center lg:text-start text-white font-bold text-[52px] leading-[45px] md:text-[94px] md:leading-[80px] uppercase">
              Software <span className="text-light-gray/15">Engineer</span>
            </h3>

            <p className="text-base text-center lg:text-start text-dark-gray lg:font-medium md:text-[16px] mx-auto lg:mx-0 lg:w-[70%]">
              Passionate about transforming innovative ideas into impactful,
              user-centric application,crafting scalable and secure web
              solutions.
            </p>
          </div>

          <div className="flex flex-row flex-wrap  justify-evenly md:justify-center lg:justify-start text-light-gray items-center gap-3 md:gap-x-10 uppercase">
            {stats.map((item) => (
              <div key={item.figure} className="text-start">
                <p className="font-semibold md:font-bold text-5xl md:text-7xl">
                  {item.figure}
                </p>
                <p className="">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
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
                <p className="font-bold text-[16px] md:text-4xl text-white ">
                  {item.companyName}
                </p>
                <p className="mt-3">{item.summary}</p>
                <p className="mt-3">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="pt-[80px] md:pt-[120px]">
        <div>
          <h3 className="text-white text-center lg:text-start font-bold text-[42px] leading-[45px] md:leading-[80px] md:text-[74px] lg:text-[94px] uppercase">
            Featured <br />
            <span className="text-light-gray/15">Projects</span>
          </h3>

          <div className="flex flex-col space-y-3">
            {projects.map((item, index) => (
              <Link
                onMouseOver={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                href={item.link}
                key={item.name}
                target="_blank"
                className="p-6 hover:bg-white/15 rounded-xl text-light-gray"
              >
                <div className="flex flex-row space-x-3 justify-start items-center">
                  <img
                    src={item.image}
                    alt="Project Thumbnail Preview"
                    className="object-cover w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg"
                  />

                  <div className="w-full">
                    <p className="text-white font-semibold text-[16px] md:text-2xl">
                      {item.name}
                    </p>
                    <p className="text-base">{item.description}</p>
                  </div>

                  <motion.div
                    className={`-rotate-45 duration-700  ${
                      animationClass && animationClass.index === index
                        ? "translate-x-4 -translate-y-4"
                        : "translate-x-0 -translate-y-0"
                    }`}
                  >
                    <ArrowRight className="text-orange" />
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pt-[80px] md:pt-[120px]">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h3 className="text-white text-center lg:text-start font-bold text-[42px] leading-[45px] md:leading-[80px] md:text-[74px] lg:text-[94px] uppercase">
            Let Work <span className="text-light-gray/15">Together</span>
          </h3>
          <p className="text-center lg:text-start text-dark-gray md:font-medium  text-base md:text-[16px] ">
            You can connect with me on the following platform. Let&#39;s create
            something together!
          </p>
          <div className="w-full flex flex-row justify-center lg:justify-center items-center space-x-7">
            {socialMedia.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="hover:scale-125 rounded-xl text-orange"
              >
                {item.icon}
              </Link>
            ))}
          </div>{" "}
        </div>
      </Section>
    </div>
  );
}

export default HeroSection;

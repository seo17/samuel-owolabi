"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { projects } from "@/lib";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Project() {
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
                <Image
                  src={item.image}
                  width={112}
                  height={112}
                  alt="Project Thumbnail Preview"
                  className="object-cover w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg"
                />

                <div className="w-full">
                  <p className="text-white font-semibold text-[18px] md:text-2xl">
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
  );
}

export default Project;

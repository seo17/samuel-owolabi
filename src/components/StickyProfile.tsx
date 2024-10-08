"use client";
import React from "react";
import { designElements, socialMedia } from "@/lib";
import Link from "next/link";

import { motion } from "framer-motion";

function StickyProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeIn" }}
      viewport={{ once: true }}
      id="sticky-profile"
      className="bg-white w-full lg:w-[344px] lg:h-[640px]  flex flex-col  items-center rounded-2xl lg:sticky top-10 overflow-hidden"
    >
      <div className="w-full lg:w-[344px] lg:h-full flex flex-col items-center justify-center relative px-5 py-8 gap-5">
        <div className="rotate-12 absolute -top-10 lg:-top-6 left-0 md:left-[185px] lg:-left-10 ">
          <img
            src={designElements.dottedCircle}
            alt="dotted half circle"
            className="w-full"
          />
        </div>
        <div className="bg-gradient-to-tr from-orange to-[#9D2200] w-[250px]  h-[200px] md:w-[240px] md:h-[264px] rounded-2xl">
          <img
            src="./images/Samuel Owolabi.png"
            alt="Samuel Owolabi image"
            className="object-cover w-[100%] h-[100%] rounded-2xl"
          />
        </div>

        <div className="flex flex-col w-full gap-5 lg:gap-[110px]">
          <h1 className="text-center font-bold text-[1.75rem] md:text-[2.25rem] leading-8">
            Samuel Owolabi
          </h1>

          <div className="flex flex-col items-center gap-5">
            <p className="text-dark-gray text-center font-medium text-base md:text-[16px] lg:w-full">
              Passionate about transforming ideas into impactful, user-centric
              applications.
            </p>

            {/* Add social media */}

            <div className="w-full flex flex-row justify-center items-center space-x-7">
              {socialMedia.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  className="hover:scale-125 rounded-xl text-orange"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden absolute -left-52 bottom-28 hidden md:block md:-left-32 md:bottom-[150px]">
          <img
            src={designElements.dottedFire}
            alt={"dotted half circle with flame icon"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default StickyProfile;

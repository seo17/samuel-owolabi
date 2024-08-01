import {
  designElements,
  stats,
  experiences,
  projects,
  socialMedia,
} from "@/lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div id="main" className="w-full lg:w-[50%]">
      {/* Hero Section */}
      <section id="CTA">
        <div className="flex flex-col items-center lg:items-start  gap-y-10">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-center lg:text-start text-white font-bold text-[52px] leading-[45px] md:text-[94px] md:leading-[80px] uppercase">
              Software <span className="text-light-gray/35">Engineer</span>
            </h3>

            <p className="text-center lg:text-start text-dark-gray font-medium text-lg mx-auto lg:mx-0 lg:w-[70%]">
              Passionate about transforming innovative ideas into impactful,
              user-centric application,crafting scalable and secure web
              solutions.
            </p>
          </div>

          <div className="flex flex-row  justify-evenly md:justify-center lg:justify-start text-light-gray items-center space-x-5 md:gap-x-10 uppercase">
            {stats.map((item) => (
              <div key={item.figure} className="text-start">
                <p className="font-bold text-5xl md:text-7xl">{item.figure}</p>
                <p className="">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="pt-[80px] md:pt-[90px]">
        <div className="flex flex-col gap-2 md:gap-5">
          <h3 className="text-white text-center lg:text-start font-bold text-[52px] leading-[45px] md:text-[94px] md:leading-[80px] uppercase">
            Over 1 year <span className="text-light-gray">Experience</span>
          </h3>

          <div className="flex flex-col space-y-3">
            {experiences.map((item) => (
              <div
                key={item.companyName}
                className="p-6 hover:bg-white/15 rounded-xl text-light-gray"
              >
                <p className="font-bold text-4xl text-white ">
                  {item.companyName}
                </p>
                <p className="mt-3">{item.summary}</p>
                <p className="mt-3">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="experience" className="pt-[80px] md:pt-[90px]">
        <div>
          <h3 className="text-white text-center lg:text-start font-bold text-[42px] leading-[45px] md:leading-[80px] md:text-[74px] lg:text-[94px] uppercase">
            Featured <br />
            <span className="text-light-gray">Projects</span>
          </h3>

          <div className="flex flex-col space-y-3">
            {projects.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className="p-6 hover:bg-white/15 rounded-xl text-light-gray"
              >
                <div className="flex flex-row space-x-3 justify-start items-center">
                  <img
                    src={item.image}
                    alt="Project Preview"
                    className="object-cover w-28 h-28 rounded-lg"
                  />

                  <div className="w-full">
                    <p className="text-white font-semibold text-2xl">
                      {item.name}
                    </p>
                    <p className="text-base">{item.description}</p>
                  </div>

                  <div className="">
                    <ArrowRight size={32} className="text-orange" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="experience" className="pt-[80px] md:pt-[90px]">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h3 className="text-white text-center lg:text-start font-bold text-[42px] leading-[45px] md:leading-[80px] md:text-[74px] lg:text-[94px] uppercase">
            Let Work <span className="text-light-gray">Together</span>
          </h3>
          <p className="text-center lg:text-start text-dark-gray font-medium text-lg ">
            You can connect with me on the following platform.
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
      </section>
    </div>
  );
}

export default HeroSection;

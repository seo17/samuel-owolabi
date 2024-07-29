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
    <div id="main" className="w-[50%]">
      {/* Hero Section */}
      <section id="CTA">
        <h3 className="text-white font-bold text-[94px] leading-[80px] uppercase">
          Software <span className="text-light-gray">Engineer</span>
        </h3>

        <div className="absolute z-100 right-16 top-36">
          <img src={designElements.star} alt="star" />
        </div>

        <p className="text-dark-gray font-medium text-lg w-[70%] mt-3">
          Passionate about transforming innovative ideas into impactful,
          user-centric applications. With expertise in MERN and PERN stacks, I
          craft scalable and secure web solutions.
        </p>

        <div className="flex flex-row justify-start text-light-gray items-center space-x-16 uppercase mt-[100px]">
          {stats.map((item) => (
            <div key={item.figure} className="text-start">
              <p className="font-bold text-7xl">{item.figure}</p>
              <p className="">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mt-[200px]">
        <h3 className="text-white text-start font-bold text-[94px] leading-[80px] uppercase">
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
      </section>

      {/* Projects */}
      <section id="experience" className="mt-[200px]">
        <h3 className="text-white text-start font-bold text-[94px] leading-[80px] uppercase">
          Featured <span className="text-light-gray">Projects</span>
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
      </section>

      {/* Contact */}
      <section id="experience" className="mt-[200px]">
        <h3 className="text-white text-start font-bold text-[94px] leading-[80px] uppercase">
          Let's Work <span className="text-light-gray">Together</span>
        </h3>

        <p className="text-dark-gray font-medium text-lg w-[70%] mt-3">
          I am just message away. You can message me on any of these platforms
        </p>

        <div className=" flex flex-row w-fit justify-start mx-auto">
          {socialMedia.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="p-6 hover:bg-white/15 rounded-xl text-orange mx-auto"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

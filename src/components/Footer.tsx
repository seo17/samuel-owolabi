import { socialMedia } from "@/lib";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-10  text-light-gray px-7">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <a
          href="https://www.framer.com/marketplace/template/sawad/"
          className="md:text-base text-sm md:font-normal font-light mb-2 underline"
        >
          Design Credit
        </a>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile, index) => (
            <div
              key={index}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={profile.link}>{profile.icon}</Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

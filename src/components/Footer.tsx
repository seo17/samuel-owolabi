import { socialMedia } from "@/lib";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-[160px] pb-[80px]  text-light-gray px-7">
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-2">
          Coded By{" "}
          <a href="https://github.com/seo17" className="underline">
            Samuel Owolabi
          </a>
        </p>

        <p className="md:text-base text-sm md:font-normal font-light mb-2">
          Designed By{" "}
          <a
            href="https://www.framer.com/marketplace/template/sawad/"
            className="underline"
          >
            Mejed Alkoutaini
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

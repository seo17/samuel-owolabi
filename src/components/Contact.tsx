"use client";
import React from "react";
import { Section } from "./Section";
import { socialMedia } from "@/lib";
import Link from "next/link";
import ContactForm from "./ui/ContactForm";

function Contact() {
  return (
    <Section id="contact" className="pt-[80px] md:pt-[120px]">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h3 className="text-white text-center lg:text-start font-bold text-[42px] leading-[45px] md:leading-[80px] md:text-[74px] lg:text-[94px] uppercase">
          Let Work <span className="text-light-gray/15">Together</span>
        </h3>
        <p className="text-center lg:text-start text-dark-gray md:font-medium  text-base md:text-[18px] ">
          Please feel free to send a message
        </p>
        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;

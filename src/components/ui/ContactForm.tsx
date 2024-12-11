"use client";
import { contactFormInputInfo } from "@/lib";
import React from "react";

function ContactForm() {
  const labelClassName = "text-light-gray";
  const inputClassName =
    "bg-light-gray/15 text-[#FFF] rounded-md w-full h-10 p-3 focus:ring focus:ring-orange focus:border-none focus:outline-none ";
  const textBoxClassName = `${inputClassName} h-28`;

  return (
    <div className="w-full">
      <form>
        <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 justify-between w-full">
          {contactFormInputInfo.map((item, index) => (
            <div
              className={`flex flex-col ${
                item.type === "textbox" ? "w-full" : "w-full sm:w-[46%]"
              }`}
              key={index}
            >
              {item.type !== "textbox" ? (
                <>
                  <label className={labelClassName}>{item.label}</label>
                  <input
                    className={inputClassName}
                    type={item.type}
                    placeholder={item.prompt}
                  />
                </>
              ) : (
                <div className="flex flex-col w-full">
                  <label className={labelClassName}>{item.label}</label>
                  <textarea
                    name="message"
                    className={textBoxClassName}
                    placeholder={item.prompt}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

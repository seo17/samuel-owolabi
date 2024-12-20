"use client";
import { sendMessageByEmailAction } from "@/actions";
import { contactFormInputInfo } from "@/lib";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Spinner from "./Spinner";

function ContactForm() {
  const [buttonText, setButtonText] = useState<"Send" | "Thank You">("Send");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  const handleMessageSubmit = handleSubmit(async (data) => {
    setStartAnimation(true);
    const { name, email, message } = data;

    const result = await sendMessageByEmailAction(name, email, message);

    if (result?.status) setButtonText("Thank You");

    setStartAnimation(false);
    setIsDisabled(true);
  });

  const textClassName = "text-[14px] md:text-base";
  const labelClassName = `text-light-gray ${textClassName} `;
  const inputClassName = `bg-light-gray/15 text-[#FFF] rounded-md w-full h-10 p-3 focus:ring focus:ring-1 focus:ring-orange focus:border-none focus:outline-none ${textClassName}`;
  const textBoxClassName = `${inputClassName} ${textClassName} h-28`;

  return (
    <div className="w-full">
      <form onSubmit={handleMessageSubmit}>
        <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 justify-between w-full">
          {contactFormInputInfo.map((item, index) => (
            <div
              className={`flex flex-col gap-1 ${
                item.type === "textbox" ? "w-full" : "w-full sm:w-[46%]"
              }`}
              key={index}
            >
              {item.type !== "textbox" ? (
                <>
                  <label className={labelClassName}>{item.label}</label>
                  <input
                    {...register(item.name, { required: true })}
                    className={inputClassName}
                    type={item.type}
                    placeholder={item.prompt}
                  />
                </>
              ) : (
                <div className="flex flex-col gap-1 w-full">
                  <label className={labelClassName}>{item.label}</label>
                  <textarea
                    {...register(item.name, { required: true })}
                    className={textBoxClassName}
                    placeholder={item.prompt}
                  />
                </div>
              )}
            </div>
          ))}

          <button
            className={`bg-orange hover:bg-orange/90 h-10 rounded-md w-full font-medium text-[#FFF] ${textClassName}`}
            disabled={isDisabled}
          >
            {startAnimation ? (
              <div className="w-full flex justify-center">
                <Spinner />
              </div>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

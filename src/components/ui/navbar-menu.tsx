"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-2xl   bg-[#1C1A19]  shadow-input flex justify-center space-x-10 px-6 py-[14px]"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  const [isMouseOver, setIsMouseOver] = useState<{
    state: boolean;
    index: null | undefined | number;
  }>({ state: false, index: null });

  const { name, navIndex }: any = { ...rest };

  const handleMouseOver = (index: number) => {
    setIsMouseOver({ state: true, index });
  };

  const handleMouseLeave = () => {
    setIsMouseOver({ state: false, index: null });
  };

  return (
    <div className="flex flex-col items-center">
      <Link
        {...rest}
        onMouseOver={() => handleMouseOver(navIndex)}
        onMouseLeave={handleMouseLeave}
        className="text-white  hover:text-orange z-20"
      >
        {children}
      </Link>

      <div
        className={`z-10 absolute text-[12px] rounded-lg py-px px-3  bg-[#1C1A19] text-white duration-500 ease-in-out ${
          isMouseOver.state && isMouseOver.index === navIndex
            ? "opacity-100 translate-y-10"
            : "opacity-0 translate-y-0"
        }`}
      >
        {name}
      </div>
    </div>
  );
};

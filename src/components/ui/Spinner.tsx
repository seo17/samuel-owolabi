"use client";
import React from "react";
import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 0.35,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className="w-5 h-5 border-[3px] border-[#FFF]/25 border-b-[#FFF] rounded-full"
    ></motion.div>
  );
}

export default Spinner;

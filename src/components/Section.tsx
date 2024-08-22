"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.JSX.Element | React.JSX.Element[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id={id} className={className} ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(-20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

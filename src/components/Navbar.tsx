"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

import { LuHome } from "react-icons/lu";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-fit mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <LuHome size={20} />
        </HoveredLink>
        <HoveredLink href="#experience">
          <RiSuitcaseLine size={20} />
        </HoveredLink>
        <HoveredLink href="#projects">
          <FaRegFolder size={20} />
        </HoveredLink>
        <HoveredLink href="#contact">
          <FaRegMessage size={20} />
        </HoveredLink>
      </Menu>
    </div>
  );
}

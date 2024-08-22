"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[30px]" />
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
        {navItems.map((item, index) => (
          <HoveredLink
            key={item.name}
            navIndex={index}
            name={item.name}
            href={item.link}
          >
            {item.icon}
          </HoveredLink>
        ))}
      </Menu>
    </div>
  );
}

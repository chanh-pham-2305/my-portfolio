import React from "react";
import { navbar_links } from "@/constants";
import Link from "next/link";

const NavBarLinks = () => {
  return (
    <nav className="w-fit h-fit flex items-center justify-end gap-5 px-4 py-4 bg-[#0300145e] rounded-full backdrop-blur-lg">
      {navbar_links.map((nl, index) => {
        return (
          <Link key={index} href={nl.href} className="flex items-center gap-x-2">
            <nl.Icon />
            <p>{nl.title}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBarLinks;

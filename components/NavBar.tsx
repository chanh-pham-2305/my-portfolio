import React from "react";
import Image from "next/image";
import NavBarLinks from "./NavBarLinks";
import Contacts from "./Contacts";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full px-10 gap-4 bg-[#9e9eb317] backdrop-blur-md text-white">
      <Image src="/logo-24.png" alt="logo" width={24} height={24} />
      <NavBarLinks />
      <Contacts />
    </div>
  );
};

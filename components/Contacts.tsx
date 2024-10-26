import { contact_links } from "@/constants";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  return (
    <nav className="w-fit h-full flex items-center justify-end px-2 py-3 gap-2">
      {contact_links.map((cl, index) => {
        return (
          <Link key={index} href={cl.link} className="h-10 w-10 rounded-full border ">
            <cl.Icon className="flex items-center justify-center"/>
          </Link>
        );
      })}
    </nav>
  );
};

export default Contacts;

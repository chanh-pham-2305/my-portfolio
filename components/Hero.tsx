import React from "react";
import HeroContent from "./HeroContent";
import { BackgroundStars } from "@/components/ui/BackgroundStars";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full" id="about-me">
      <BackgroundStars />
      <HeroContent />
    </div>
  );
};

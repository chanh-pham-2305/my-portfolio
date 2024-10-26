"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

// import Scene from "./Scene";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center px-20 mt-40 h-full w-full z-[20]"
    >
      <div className="w-1/2 h-full flex flex-col gap-10 px-4">
        <motion.div variants={slideInFromTop(1)}>
          <p className="text-6xl text-white">Pham Cong Chanh</p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.75)}
          className="flex flex-colmt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Full stack Web
            <br />
            Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m passionate about software development and eager to apply the
          knowledge I&apos;ve gained during my studies to real-world projects.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contact me!
        </motion.a>
      </div>

      {/* <Scene /> */}
    </motion.div>
  );
};

export default HeroContent;

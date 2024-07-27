'use client'

import React from "react";
import Paperplane from "./ui/Paperplane";
import PaperpaneFull from "./ui/PaperpaneFull";
import {motion} from "framer-motion"

const complexFloatingAnimation = {
  y: [0, -20, 0],
  x: [0, 7, 0],
  rotate: [0, 3, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
};

const HomePage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute flex flex-col justify-center items-center inset-0 z-0 h-full">
        <div className="relative flex right-[40%] -top-[400px]">
          <div  className="fixed z-20 ">
          <motion.div animate={complexFloatingAnimation}>
          <PaperpaneFull/>
          </motion.div>
          </div>
          <div className="fixed z-10">
          <Paperplane />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full z-10">
        <div className="relative flex justify-center items-center left-[22.2%]">
          <h1 className="font-highriseConsensed text-[150px] w-[640px] tracking-[17px] leading-[130px] text-right">
            Welcome to FeedbackLoop
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
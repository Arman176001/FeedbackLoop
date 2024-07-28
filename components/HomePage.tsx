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
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="relative" style={{ right: '40%', top: '-400px' }}>
          <div className="absolute z-20">
            <motion.div animate={complexFloatingAnimation}>
              <PaperpaneFull/>
            </motion.div>
          </div>
          <div className="absolute z-10">
            <Paperplane />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="relative" style={{ left: '22.2%' }}>
          <h1 className="font-highriseConsensed text-[150px] w-[640px] tracking-[17px] leading-[130px] text-right">
            Welcome to FeedbackLoop
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
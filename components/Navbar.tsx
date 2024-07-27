'use client'

import React from "react";
import Logo from "./ui/Logo";
import { motion } from "framer-motion";


const underlineVariants = {
    initial: { 
      width: "0%", 
      left: "50%", 
      x: "-50%"
    },
    hover: { 
      width: "100%", 
      left: "50%", 
      x: "-50%"
    }
  };    

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div>
          <a>
            <Logo />
          </a>
        </div>
        <div>
          <ul className="space-x-3">
            <motion.a
              href=""
              className="px-4 font-highriseBold text-[32px] tracking-[2px] py-2 relative"
              whileHover="hover"
              initial="initial"
            >
              Home
              <motion.span
                className=" absolute bottom-0 h-[2px] bg-current"
                variants={underlineVariants}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href=""
              className="px-4 font-highriseBold text-[32px] tracking-[2px] py-2 relative"
              whileHover="hover"
              initial="initial"
            >
              Contacts
              <motion.span
                className="absolute bottom-0 h-[2px] bg-current"
                variants={underlineVariants}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href=""
              className="px-4 font-highriseBold text-[32px] tracking-[2px] py-2 relative"
              whileHover="hover"
              initial="initial"
            >
              Share
              <motion.span
                className="absolute bottom-0 h-[2px] bg-current"
                variants={underlineVariants}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </ul>
        </div>
        <div className="w-[287px] items-center">
          <a href="">
            <button className="px-8 py-2 border-2 border-black bg-transparent text-black relative group transition duration-200 z-10">
              <div className="absolute -bottom-2 -right-2 bg-[#FFE134] h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
              <span className="relative font-highrise text-[32px] tracking-[2px]">
                Sign In
              </span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

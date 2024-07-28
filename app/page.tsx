'use client'

import React, { useRef, useEffect, useState } from 'react';
import HomePage from "@/components/HomePage";
import HomePageBG from "@/components/HomePageBG";
import Navbar from "@/components/Navbar";
import { Playfair_Display } from "next/font/google";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import classNames from 'classnames'

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2; // Adjust this based on the number of pages you have

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: pageIndex * window.innerWidth,
        behavior: 'smooth'
      });
      setCurrentPage(pageIndex);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        if (e.deltaY > 0 && currentPage < totalPages - 1) {
          scrollToPage(currentPage + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
          scrollToPage(currentPage - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
        scrollToPage(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        scrollToPage(currentPage - 1);
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="relative">
      <div 
        ref={scrollRef} 
        className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide"
        style={{ width: '100vw', height: '100vh' }}
      >
        <div className="flex-shrink-0 w-screen h-screen snap-start">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 z-0">
              <HomePageBG />
            </div>
            <div className="absolute top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <HomePage />
          </div>
        </div>
        <div className="flex-shrink-0 w-screen h-screen snap-start">
          <div className="relative w-full h-full">
            <HomePageBG />
            <div className="absolute top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            {/* Add content for the second page here */}
          </div>
        </div>
      </div>
      <div className='fixed bottom-3 right-3 z-50 flex flex-col'>
        <div className='flex justify-around z-50'>
          <div><button onClick={() => scrollToPage((currentPage - 1) % totalPages)} className={classNames("",{
            "invisible":currentPage==0,
          })}><ArrowBackIosNewIcon/></button></div>
          <div><button onClick={() => scrollToPage((currentPage + 1) % totalPages)} className={classNames("",{
            "invisible":currentPage==totalPages-1,
          })}>< ArrowForwardIosIcon/></button></div>
        </div>
        <div><h1 className={`${playfair.className} text-[110px] -mt-8`}><span className='text-[90px]'>*</span>0{currentPage+1}</h1></div>
      </div>
      {/*<button
        className="fixed bottom-8 right-8 z-50 bg-black text-white px-4 py-2 rounded-full"
        onClick={() => scrollToPage((currentPage + 1) % totalPages)}
      >
        Scroll
      </button>*/}
    </div>
  );
}
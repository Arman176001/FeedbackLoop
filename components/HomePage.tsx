import React from "react";
import Paperplane from "./ui/paperplane";

const HomePage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute flex flex-col justify-center items-center inset-0 z-0 h-full">
        <div className="relative flex right-[20%]">
          <Paperplane />
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full z-10">
        <div className="relative flex justify-center items-center left-[20.5%]">
          <h1 className="font-highrise text-[150px] w-[640px] tracking-[17px] leading-[130px] text-right">
            Welcome to FeedbackLoop
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
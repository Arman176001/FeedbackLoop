import React from "react";

const HomePageBG = () => {
  return (
    <div className="-z-10">
      <div className="flex">
        <div className="bg-gradient-to-r from-[#ffffff] to-[#fffac0] w-[65%] h-screen "></div>
        <div className="relative flex flex-col w-[35%] justify-center items-center">
          <div className="relative top-10">
            <div className="relative float-end -top-6 bg-gradient-to-t from-[#ffc14f80] to-[#fca7ff80] w-[92px] h-[92px] rounded-full -z-4"></div>
            <div className="relative bg-gradient-to-t from-[#ffc14f80] to-[#fca7ff80] w-[286px] h-[286px] rounded-full -z-5"></div>
            <div className="relative -top-14 left-1 bg-gradient-to-t from-[#ffc14f80] to-[#fca7ff80] w-[50px] h-[50px] rounded-full -z-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBG;

import Image from "next/image";
import React from "react";

export default function AboutTwo() {
  return (
    <div className="flex min-h-screen relative z-[500]  bg-gradient-to-r  from-[#08071e] to-[#000] w-full  flex-col items-center justify-between  py-24">
      <div className="bg-[url('https://assets.website-files.com/5e18a1cc86ccdc5d5a0d353d/5e208a25817d4eff7143e2c7_line-art-white.svg')] absolute top-0 right-0 left-auto"></div>
      <div className="flex items-start justify-start max-w-[1450px] flex-col lg:flex-row w-full">
        <div className="h-[285px] w-full lg:w-[50%] object-cover">
          <Image
            height={500}
            width={600}
            src="/images/dev-meeting.jpg"
            alt="dev-meeting"
          />
        </div>
        <div className="flex flex-col max-w-[600px] lg:items-start items-center justify-center lg:justify-start ">
          {" "}
          <h1 className="text-[#fff] text-center lg:text-left  lg:text-[50px] text-[36px] mt-[20px] mb-[10px] ">
            WHO WE ARE
          </h1>
          <h1 className="text-[#fff] text-center lg:text-left lg:text-[16px] text-[16px] mt-[20px] mb-[10px] ">
            Custom products need a custom skill-set, which is why we do it all.
            We&apos;re strong in every one of our capabilities from design
            through development. Trust we got you covered!
          </h1>
        </div>
      </div>
    </div>
  );
}

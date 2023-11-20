"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesContainer from "./particles-container";
import { fadeIn } from "@/variants";
import { Button } from "@/components/ui/button";

export default function HeroOne() {
  return (
    <main className="flex min-h-screen bg-[#000] w-full  flex-col items-center justify-between px-[30px] md:px-[100px] py-24 ">
      <video
        className="absolute top-0 hidden lg:flex left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source type="video/mp4" src="/video/ai.mp4" />
      </video>
      <video
        className="absolute top-0 lg:hidden right-0 flex left-0 w-full h-[400px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source type="video/mp4" src="/video/ai-mobile.webm" />
      </video>

      <div className="  top-[50%] lg:translate-y-[10%] w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <div className="lg:w-[500px] mt-[300px] lg:mt-0 ">
          <h1 className="text-[#fff]  mb-[10px] text-center lg:text-left lg:text-[50px] text-[20px] ">
            We imagine, design & build digital products.We are AIPIDATA.
          </h1>
        </div>
        <div className="z-[500000] mt-[95px] w-full flex items-start justify-start">
          <Button className="bg-transparent border w-full lg:w-[200px] border-gray-300 ">
            Skip The Small Talk 😊
          </Button>
        </div>
      </div>

      {/* <div className="w-[1200px] h-full absolute right-0 bottom-0">
       
        <ParticlesContainer />
        
      </div> */}
    </main>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Circles from "./circles";
import Bulb from "./bulb";
import Image from "next/image";

export default function HeroTwo() {
  return (
    <main className="flex min-h-screen pb-[70px]  relative z-[10] py-36 flex-col items-center w-full  px-[30px] md:px-[100px]  ">
      <div className="absolute -left-36 top-[40%]  opacity-[30%] animate-pulse  z-10 w-[200px] xl:w-[260px]">
        <Image
          className="object-cover flex items-center justify-end"
          height={550}
          width={500}
          src="/images/ai-head.png"
          alt="ai-head"
        />
      </div>

      {/* <Bulb /> */}
      <div className=" w-full flex items-center flex-col">
        <div className="w-full flex items-center justify-start">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[25px] lg:text-[28px] text-[#fff] text-left lg:text-left py-[70px] lg:px-[35px] my-[10px] "
          >
            Imagine you were really wow&apos;d by a software experience.
          </motion.h1>
        </div>

        <div className="w-full flex items-center justify-end">
          <motion.h1
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[25px] lg:text-[28px] text-[#fff] text-right lg:text-right py-[70px] lg:px-[35px] my-[10px]"
          >
            With us you don&apos;t need to imagine it
          </motion.h1>
        </div>

        <motion.h1
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[20px]  text-[#fff] mx-auto lg:max-w-[600px] text-center"
        >
          We ❤️ AI. We’ve spent our careers building it. Line by line, code by
          code and project by project. Take a look at our work and you’ll see
          how we are helping our partners lay the groundwork for the future.
        </motion.h1>
      </div>
    </main>
  );
}

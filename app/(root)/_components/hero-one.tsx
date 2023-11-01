"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesContainer from "./particles-container";
import { fadeIn } from "@/variants";

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

      <div className=" translate-y-[80%] top-[50%] lg:translate-y-[50%] w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <motion.h1
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn("up", 0.3)}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[37px] lg:text-[50px] text-center text-[#fff]"
        >
          Welcome to Aipidata.
        </motion.h1>

        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:text-[#fff] my-[10px] text-center lg:text-left text-[#8d8a8a] text-[16px] lg:text-[28px]"
        >
          We specialize in{" "}
          <TypeAnimation
            sequence={[
              "Artificial Intelligence",
              2000,
              "Infection prediction AI",
              2000,
              "Geonomics AI",
              2000,
              "AI gene editing",
              2000,
              "Social Engineering",
              2000,
            ]}
            speed={50}
            className="text-[#F1B324] fint-bold "
            wrapper="span"
            repeat={Infinity}
          />{" "}
        </motion.h1>

        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:text-[#fff] my-[10px] mt-4 text-center lg:text-left text-[#8d8a8a] text-[16px] lg:text-[28px]"
        >
          We also build apps. <br /> You want it? We build it.
        </motion.h1>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
      </div>
    </main>
  );
}

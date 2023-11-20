"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroFive() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#f3f3f3] relative z-[10] lg:px-[100px] px-[30px] justify-center py-[50px] flex-col items-center w-full">
      <div className="flex flex-col items-center max-w-[1200px] w-full lg:flex-row justify-between">
        <div className="lg:w-[30%] w-full ">
          <h1 className="text-[36px] text-center mb-[25px] text-[#000]">
            Our secret sauce
          </h1>
        </div>

        <div className="lg:w-[65%] w-full">
          <h3 className="text-[16px] font-[700]  text-[#000]">
            Planning begins by understanding the right goals
          </h3>
          <p className="text-[14px]  mb-[25px] text-[#000]">
            You name it, we&apos;ve built it. This expertise means we can offer
            initial project planning that finds and then focuses on the core
            strategic needs for your solution.
          </p>

          <h3 className="text-[16px] font-[700]  text-[#000]">
            Delivering on-trend
          </h3>
          <p className="text-[14px]   mb-[25px] text-[#000]">
            We’re digital-first. So our solutions live on the forefront of where
            consumers and technology intersect. Which means we can put the
            freshest, best design principles to work right now in experiences
            that feel meaningful.
          </p>

          <h3 className="text-[16px] font-[700]  text-[#000]">
            Never forgetting the importance “Wow”
          </h3>
          <p className="text-[14px]   mb-[25px] text-[#000]">
            Throughout your project, it’s our mission to find the moments of
            magic (be they big or small) that take the experience from great to
            unforgettable
          </p>

          <Button
            onClick={() => router.push("/contact")}
            className="mt-8 bg-[#2081b8] lg:w-[200px] w-full rounded-[5px] py-[20px] px-[125px]  "
          >
            Get In Touch!
          </Button>
        </div>
      </div>
    </div>
  );
}

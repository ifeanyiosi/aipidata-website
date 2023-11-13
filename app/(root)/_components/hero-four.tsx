"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroFour() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#000] relative z-[10] lg:px-[100px] px-[30px] justify-center py-[50px] flex-col items-center w-full">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-between">
        <div className="w-full">
          <h1 className="text-[36px] mb-[25px] text-[#fff]">
            We help companies make the most of their digital experiences.
          </h1>
          <p className="text-[16px] lg:px-[30px]  mb-[25px] text-[#fff]">
            You’re not looking for a vendor. You’re looking for a partner. One
            who wants to understand your challenges—all of them—in order to make
            your project successful. (And we know that not all of those are
            solved with code). Because you don’t just need a solution. You need
            the best solution.
          </p>

          <Button
            onClick={() => router.push("/about")}
            className="mt-8 bg-[#F1B324] hover:bg-[#F1B324] "
          >
            Learn More About Us
          </Button>
        </div>

        <div className=" flex items-center justify-end animate-pulse  z-10 w-[200px] xl:w-[460px]">
          <Image
            src={"/bulb.png"}
            width={260}
            height={200}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

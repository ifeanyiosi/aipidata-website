"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroFour() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#fff] relative z-[10] lg:px-[100px] px-[30px] justify-center py-[50px] flex-col items-center w-full">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-between">
        <div className="w-full">
          <h1 className="text-[36px] mb-[25px] text-[#000]">
            We help companies make the most of their digital experiences.
          </h1>
          <p className="text-[16px] lg:px-[30px]  mb-[25px] text-[#000]">
            You’re not looking for a vendor. You’re looking for a partner. One
            who wants to understand your challenges—all of them—in order to make
            your project successful. (And we know that not all of those are
            solved with code). Because you don’t just need a solution. You need
            the best solution.
          </p>

          <Button
            onClick={() => router.push("/about")}
            className="mt-8 bg-red hover:bg-red"
          >
            Learn More About Us
          </Button>
        </div>

        <div className="w-full flex items-center justify-end">
          <Image
            className="object-cover flex items-center justify-end"
            height={550}
            width={100000}
            src="/images/ai-head.png"
            alt="ai-head"
          />
        </div>
      </div>
    </div>
  );
}

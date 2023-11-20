"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function WorkTogether() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen px-4 bg-[#fff] relative z-[10] lg:px-[100px]  justify-center py-[50px] flex-col items-center w-full">
      <div className="absolute hidden lg:flex mx-auto mb-[30px] top-0 left-0 right-0 bottom-auto bg-[#000] w-[1px] h-[250px] "></div>
      <h1 className="text-[15px] text-center mt-[28px] mb-[10px] font-[700] text-[#2081b8] ">
        READY TO CREATE SOMETHING AMAZING
      </h1>

      <h1 className="text-[36px] text-center lg:text-[50px] mt-[20px] mb-[10px] text-[#000]">
        Let&apos;s Work Together
      </h1>

      <Button
        onClick={() => router.push("/contact")}
        className="shadow-lg mt-[56px] lg:w-[200px] w-full bg-[#2081b8] rounded-[5px] py-[20px] px-[125px] "
      >
        Get In Touch 😊
      </Button>
    </div>
  );
}

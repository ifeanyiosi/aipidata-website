"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroThree() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen relative z-[10] justify-center pt-36 flex-col items-center w-full ">
      <div className="bg-[#fff] w-full min-h-screen py-[100px] flex items-center justify-center flex-col px-[30px] lg:px-[100px] ">
        <Link className="flex flex-col items-center shadow-md p-4" href="/">
          <Image
            width={650}
            height={500}
            className="object-cover h-[300px]"
            src="/images/piHealth.png"
            alt=""
          />
          <h1 className="text-red text-[25px] font-[700] mt-[20px] mb-[10px] ">
            Pi-Health
          </h1>
          <h3 className="text-[14px] lg:text-[20px] text-[#000] ">
            A remote monitoring tool that uses AI.
          </h3>
        </Link>

        <div className="flex items-center justify-center lg:flex-row flex-col gap-4 mt-8">
          {" "}
          <div className="w-full shadow-md p-4">
            <Image
              width={650}
              height={500}
              className="object-cover h-[300px]"
              src="/images/lektore.png"
              alt=""
            />
            <h1 className="text-red text-[14px] lg:text-[28px] font-[700] mt-[20px] mb-[10px] ">
              Lektore
            </h1>
            <h3 className="text-[14px] lg:text-[20px] text-[#000] ">
              A platform for non-english speakers to learn english.
            </h3>
          </div>
          <div className="w-full shadow-md p-4">
            <Image
              width={650}
              height={500}
              className="object-cover h-[300px]"
              src="/images/cur8.jpg"
              alt=""
            />
            <h1 className="text-red text-[14px] lg:text-[28px] font-[700] mt-[20px] mb-[10px] ">
              Cur-8
            </h1>
            <h3 className="text-[14px] lg:text-[20px] text-[#000] ">
              An app built to help you keep track of your goals.
            </h3>
          </div>
        </div>

        <Button onClick={() => router.push("/work")} className="mt-[50px]">
          See All Our Work 👉
        </Button>
      </div>
    </div>
  );
}

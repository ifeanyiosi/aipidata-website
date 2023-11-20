"use client";

import { Button } from "@/components/ui/button";
import WorkCard from "@/components/work-card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroThree() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen relative bg-[#080e10] z-[10] justify-center pt-36 flex-col items-center w-full ">
      <div className="bg-[#080e10] w-full min-h-screen py-[100px] flex items-center justify-center flex-col px-[30px] lg:px-[100px] ">
        <WorkCard />

        <Button
          onClick={() => router.push("/work")}
          className="mt-[50px] w-full lg:w-[200px] bg-[#2081b8] px-[125px] py-[20px] hover:bg-red"
        >
          See All Our Work 👉
        </Button>
      </div>
    </div>
  );
}

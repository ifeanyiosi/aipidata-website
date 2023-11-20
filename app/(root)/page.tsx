"use client";
import HeroOne from "./_components/hero-one";
import HeroTwo from "./_components/hero-two";
import HeroThree from "./_components/hero-three";
import HeroFour from "./_components/hero-four";
import HeroFive from "./_components/hero-five";
import WorkTogether from "@/components/work-together";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Expertise from "@/components/expertise";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <main className="flex w-full bg-[#000] flex-col ">
      <Navbar />
      <HeroOne />

      {/* <HeroTwo /> */}
      <Expertise />
      {/* <HeroThree /> */}
      <HeroFour />
      <HeroFive />
      <WorkTogether />
    </main>
  );
}

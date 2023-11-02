import Image from "next/image";
import HeroOne from "./_components/hero-one";
import HeroTwo from "./_components/hero-two";
import HeroThree from "./_components/hero-three";
import HeroFour from "./_components/hero-four";
import HeroFive from "./_components/hero-five";
import WorkTogether from "@/components/work-together";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex w-full bg-[#000] flex-col ">
      <Navbar />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <WorkTogether />
    </main>
  );
}

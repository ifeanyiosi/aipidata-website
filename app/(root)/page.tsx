import Image from "next/image";
import HeroOne from "./_components/hero-one";
import HeroTwo from "./_components/hero-two";
import HeroThree from "./_components/hero-three";

export default function Home() {
  return (
    <main className="flex w-full bg-[#000] flex-col ">
      <HeroOne />
      <HeroTwo />
      <HeroThree />
    </main>
  );
}

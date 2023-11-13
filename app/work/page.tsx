import NavbarVariant from "@/components/nav-bar-variant";
import WorkTogether from "@/components/work-together";
import React from "react";
import WorkOne from "./_components/work-one";
import HeroThree from "../(root)/_components/hero-three";

export default function page() {
  return (
    <div className="min-h-screen">
      <NavbarVariant />
      <WorkOne />
      <HeroThree />
      <WorkTogether />
    </div>
  );
}

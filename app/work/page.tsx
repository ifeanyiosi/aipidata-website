import WorkTogether from "@/components/work-together";
import React from "react";
import WorkOne from "./_components/work-one";
import HeroThree from "../(root)/_components/hero-three";
import Navbar from "@/components/navbar";
import NavbarVariant from "@/components/nav-bar-variant";

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

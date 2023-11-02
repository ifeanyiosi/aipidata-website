import NavbarVariant from "@/components/nav-bar-variant";
import React from "react";
import COntactOne from "./_components/contact-one";

export default function page() {
  return (
    <div className="min-h-screen">
      <NavbarVariant />
      <COntactOne />
    </div>
  );
}

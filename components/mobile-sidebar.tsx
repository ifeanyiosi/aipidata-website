import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HiMenuAlt4 } from "react-icons/hi";
import Sidebar from "./sidebar";
import NavbarContent from "./navbar-content";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <HiMenuAlt4 />
      </SheetTrigger>

      <SheetContent side="top" className="p-0 bg-white">
        <NavbarContent />
      </SheetContent>
    </Sheet>
  );
}

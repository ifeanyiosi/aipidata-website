import Link from "next/link";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileSidebar from "./mobile-sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import NavbarContent from "./navbar-content";

export default function NavbarVariant() {
  return (
    <nav className=" top-0 z-[5000000] flex w-full text-white  items-center justify-between   px-[30px]  md:px-[100px] h-[75px]">
      <Link
        href="/"
        className="flex gap-x-2 items-center text-[#000] font-bold text-[20px]"
      >
        Aipidata
      </Link>

      <div className="hidden items-center font-bold md:flex text-[16px] text-[#000] gap-x-8">
        <Link className="hover:text-[#F1B324] " href="/work">
          Work
        </Link>
        <Link className="hover:text-[#F1B324] " href="/about">
          About
        </Link>

        <Link className="hover:text-[#F1B324]" href="/contact">
          Contact
        </Link>
      </div>

      <div className="flex gap-2">
        <MobileSidebar />
        <div className="flex items-center  gap-8">
          {" "}
          <Sheet>
            <SheetTrigger className="md:flex hidden pr-4 hover:opacity-75 transition">
              <HiMenuAlt4 className="text-[#000] text-[25px] " />
            </SheetTrigger>

            <SheetContent side="top" className="p-0 bg-red-500 h-screen w-full">
              <NavbarContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

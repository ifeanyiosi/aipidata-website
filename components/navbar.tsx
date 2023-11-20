import Link from "next/link";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileSidebar from "./mobile-sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import NavbarContent from "./navbar-content";

export default function Navbar() {
  return (
    <nav className=" top-0 z-[50000000] flex w-full text-white items-center justify-between bg-transparent  px-[30px]  md:px-[100px] h-[75px]">
      <Link href="/" className="flex text-[20px] gap-x-2 items-center">
        Aipidata
      </Link>

      <div className="hidden items-center md:flex text-[14px] gap-x-20">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex gap-2">
        <MobileSidebar />
        <div className="flex items-center  gap-8">
          <Sheet>
            <SheetTrigger className="md:flex hidden pr-4 hover:opacity-75 transition">
              <HiMenuAlt4 className="text-[25px] text-[#fff] " />
            </SheetTrigger>

            <SheetContent side="top" className="p-0  h-screen w-full">
              <NavbarContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

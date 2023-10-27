import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">Aipidata</div>

      <div className="flex flex-col items-center justify-center gap-8 w-full text-[26px]">
        <Link href="/">Work</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
}

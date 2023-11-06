import Link from "next/link";
import React from "react";

interface LaundryProps {
  label: string;
}

export default function LaundryItems({ label }: LaundryProps) {
  return (
    <div className="mt-[60px] mb-[80px] lg:pl-[100px] relative ">
      <div className="flex items-center mb-[50px] gap-2">
        <div className="h-[1px] hidden lg:flex w-[25px] bg-[#fff] " />
        <Link
          className="text-[#fff] text-[20px] lg:text-[28px] lg:ml-[20px]"
          href=""
        >
          {label}
        </Link>
      </div>
    </div>
  );
}

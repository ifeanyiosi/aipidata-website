import Link from "next/link";
import React from "react";
import LaundryItems from "./laundry-items";
import { Button } from "@/components/ui/button";

export default function LaundryList() {
  return (
    <div className="bg-gradient-to-r  from-[#08071e] to-[#000] px-[30px] relative h-full max-w-[1450px] py-[100px] lg:px-[50px] mx-auto w-full ">
      <h1 className="text-[#F1B324] font-bold text-[15px]">THE LAUNDRY LIST</h1>

      <LaundryItems label="Data Modelling" />
      <LaundryItems label="App Development" />
      <LaundryItems label="Web Development" />
      <LaundryItems label="Design & UX/UI" />
      <LaundryItems label="Social Engineering" />
      <LaundryItems label="Artificial Intelligence" />

      <LaundryItems label="The Impossible" />

      <Button className="bg-[#F1B324] hover:bg-[#F1B324]  ">
        {" "}
        Check Out Our Projects
      </Button>
    </div>
  );
}

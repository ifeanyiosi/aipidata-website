import React from "react";
import { expertise } from "./constants/dummyData";
import Card from "./card";

export default function Expertise() {
  return (
    <section className="bg-[#000] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-[#fff]">
        <h1 className="text-[30px] text-[#fff] font-bold">Our Expertise</h1>
        <div className="flex flex-col my-[35px] mx-auto items-center justify-center">
          <p className="text-[rgba(255,255,255,0.5)] text-center text-[20px]">
            We have the expertise of a traditional agency with the agility of a
            startup.
          </p>

          <p className="text-[rgba(255,255,255,0.5)] text-center text-[20px]">
            No nonsense. Just great products and great people.
          </p>
        </div>
      </div>

      <div>
        <Card />
      </div>
    </section>
  );
}

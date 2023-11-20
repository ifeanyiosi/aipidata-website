import React from "react";
import { showcase } from "./constants/dummyData";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function WorkCard() {
  return (
    <div className="grid lg:grid-cols-3 w-full grid-cols-1 gap-8 mt-8">
      {showcase.map((cards) => (
        <div
          className="flex flex-col items-center justify-center"
          key={cards.id}
        >
          <div className="mb-[30x]">
            <Image
              className="flex rounded-tr-[50px] h-[300px] rounded-bl-[50px] object-cover"
              width={300}
              height={300}
              src={cards.cover}
              alt="card"
            />
          </div>
          <div className="mt-[30px]">
            <h1 className="text-[22px] text-[#fff]  ">{cards.title}</h1>{" "}
          </div>

          <Link
            className="flex items-center gap-2 mt-[14px] text-blue "
            href="/"
          >
            LEARN MORE <HiOutlineArrowRight />
          </Link>
        </div>
      ))}
    </div>
  );
}

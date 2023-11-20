import React from "react";
import { expertise } from "./constants/dummyData";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Card() {
  return (
    <div className="flex px-4 flex-col lg:flex-row gap-8 mt-8">
      {expertise.map((cards) => (
        <div
          className="flex flex-col items-center justify-center"
          key={cards.id}
        >
          <div className="mb-[30x]">
            <Image
              className="flex rounded-tr-[50px] h-[300px] rounded-bl-[50px] object-cover object-center"
              width={300}
              height={300}
              src={cards.cover}
              alt="card"
            />
          </div>
          <div className="mt-[30px] flex items-center justify-center">
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

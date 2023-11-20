import Link from "next/link";
import React from "react";
import { FcHome, FcPhone } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#f3f3f3] py-[30px] lg:py-[75px] px-[30px] lg:px-[100px] ">
      <div className="flex items-start w-full mx-auto ">
        <div className="hidden lg:flex w-[50%] h-auto float-left flex-col items-start justify-start">
          <Link className="font-bold text-[15px] " href="/">
            Aipidata
          </Link>

          <div className="w-[300px] mt-[25px] h-full  ">
            <div className="flex w-full  gap-2">
              <FcHome />
              <p className="">
                First Floor Swan Buildings <br /> 20 Swan Buildings City Centre{" "}
                <br />
                Manchester M4 5JW
              </p>
            </div>

            <div className="flex mt-8 w-full items-center  gap-2">
              <FcPhone />
              <p>+44 1613121772</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex h-auto lg:float-left justify-end items-stretch">
          <div className="flex flex-col text-[25px] lg:text-right text-center w-[400px] ">
            <Link className="hover:text-[#0e2a4a]" href="/work">
              Work
            </Link>
            <Link className="hover:text-[#0e2a4a]" href="/about">
              About
            </Link>

            <Link className="hover:text-[#0e2a4a]" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col w-[400px] lg:text-right text-center float-right text-[20px]">
            <Link className="hover:text-[#f8b810] font-[100]" href="/">
              Career
            </Link>
            <Link className="hover:text-[#f8b810] font-[100]" href="/">
              Partner
            </Link>
            <Link className="hover:text-[#f8b810] font-[100]" href="/">
              Podcast
            </Link>
            <Link className="hover:text-[#f8b810] font-[100]" href="/">
              Newsletter
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] mt-8 bg-gray-300 "></div>
      <div className="flex flex-col mt-4 items-center lg:flex-row justify-between">
        <div className="flex items-center">
          <p>© Aipidata. All rights reserved</p>
        </div>
        <div className="md:flex items-center hidden text-[15px] gap-2">
          <p className="gap-2  flex">
            Street Cred:{" "}
            <div className="flex items-center text-[#7f7f7f] gap-2">
              <Link className="hover:text-sky-500" href="/">
                Fb
              </Link>
              /
              <Link className="hover:text-sky-500" href="/">
                Ig
              </Link>
              /
              <Link className="hover:text-sky-500" href="/">
                Tw
              </Link>
              /
              <Link className="hover:text-sky-500" href="/">
                Li
              </Link>
              /
              <Link className="hover:text-sky-500" href="/">
                Yt
              </Link>
            </div>
          </p>
        </div>

        <div className="flex lg:hidden mt-8  h-auto  flex-col items-center justify-center">
          <Link className="font-bold text-[15px] " href="/">
            Aipidata
          </Link>

          <div className=" mt-[25px] h-full  ">
            <div className="flex w-full  gap-2">
              <p className="">
                First Floor Swan Buildings <br /> 20 Swan Buildings City Centre{" "}
                <br />
                Manchester M4 5JW
              </p>
            </div>

            <div className="flex mt-8 w-full items-center  gap-2">
              <p>+44 1613121772</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

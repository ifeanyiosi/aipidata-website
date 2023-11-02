import Link from "next/link";
import React from "react";
import { FcHome, FcPhone } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";

export default function NavbarContent() {
  return (
    <div className="flex items-center bg-[#fff] z-[10000] px-[30px] h-screen md:px-[150px] justify-center w-full ">
      <div className="flex flex-row md:flex-col justify-between w-full items-center gap-[30px]">
        <div className="flex flex-row md:flex-col w-full justify-between">
          <div className="flex flex-col md:flex-row items-start w-full justify-between ">
            <div className="flex w-full gap-4 text-[#000] flex-col font-bold text-[45px] items-start justify-center">
              {" "}
              <Link className="hover:text-[#0e2a4a]" href="/work">
                Work
              </Link>
              <Link className="hover:text-[#0e2a4a]" href="/about">
                About
              </Link>
              <Link className="hover:text-[#0e2a4a]" href="/blog">
                Blog
              </Link>
              <Link className="hover:text-[#0e2a4a]" href="/contact">
                Contact
              </Link>
            </div>
            <div className="flex w-full gap-4 flex-col items-start justify-center font-[100] text-[30px]  ">
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

            <div className="w-full hidden gap-8 md:flex flex-col items-start justify-center">
              <div className="flex w-full  gap-2">
                <FcHome />
                <p>
                  First Floor Swan Buildings <br /> 20 Swan Buildings City
                  Centre <br />
                  Manchester M4 5JW
                </p>
              </div>

              <div className="flex w-full items-center  gap-2">
                <FcPhone />
                <p>+44 1613121772</p>
              </div>

              <div className="flex w-full items-center gap-2">
                <IoMdMail />
                <p>+44 1613121772</p>
              </div>
            </div>
          </div>
          <div className="md:flex items-center hidden text-[15px] mt-8 gap-2">
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
        </div>
      </div>
    </div>
  );
}

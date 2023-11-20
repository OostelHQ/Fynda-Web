"use client";

import React, { useState } from "react";

import Image from "next/image";
import Icon from "@/public/assets/icon.svg";
import Icon2 from "@/public/assets/reusable/Frame.svg";
import Button from "./Button";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { BiX } from "react-icons/bi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`flex mt-10 px-[15%] sm:px-[5%] justify-between relative`}>
      <Link href={"/"} className="flex items-center gap-1">
        <Image src={Icon} alt="logo" className="w-[32px] h-[32px]" />
        <p className="text-white text-[26px] font-normal leading-7">Fynda</p>
      </Link>

      <Button
        style={
          " text-sky-800 sm:hidden text-xl font-normal text-center leading-7 px-4 py-3 bg-white rounded justify-start items-start gap-2.5 inline-flex"
        }
        destination={"/get-started"}
      >
        Get Started
      </Button>
      <FaBarsStaggered
        size={"25px"}
        className="hidden sm:block text-white"
        onClick={toggle}
      />

      <div
        className={`sm:flex sm:flex-col z-30 hidden ${
          open ? "sm:block left-0" : "sm:hidden -left-[100%]"
        } fixed overscroll-y-auto top-0 transform ease-linear duration-500 w-[100%] bg-white h-full shadow-md px-[5%] py-[5%]`}
      >
        <div className="flex justify-between items-center">
          <Link href={"/"} className="flex items-center gap-1">
            <Image src={Icon2} alt="logo" className="w-[32px] h-[32px]" />
            <p className="text-mainBlue text-[26px] font-normal leading-7">
              Fynda
            </p>
          </Link>

          <BiX size={"32px"} className="text-black" onClick={toggle} />
        </div>

        <div className="mt-10 flex-col h-[80vh] justify-between flex">
          <Button
            style={
              "w-full py-3 text-center text-white bg-mainBlue rounded-[4px]"
            }
            destination={"/get-started"}
          >
            Get Started
          </Button>

          <p className=" mt-10 text-slate-950 text-base text-center font-normal leading-loose mb-10">
            ©{new Date().getFullYear()} Fynda. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

"use client"

import React from "react";

import Image from "next/image";
import Icon from "@/public/assets/icon.svg";
import Button from "./Button";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {

  const toggle = () => {

  }


  return (
    <div className="flex mt-10 px-[15%] sm:px-[5%] justify-between bg-mainBlue">
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
    </div>
  );
};

export default Nav;

import React from "react";

import Image from "next/image";
import Icon from "@/public/assets/icon.svg";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="flex mt-10 px-[15%] justify-between bg-mainBlue">
      <div className="flex items-center gap-1">
        <Image src={Icon} alt="logo" className="w-[32px] h-[32px]" />
        <p className="text-white text-[26px] font-normal leading-7">Fynda</p>
      </div>

      <Button
        style={
          " text-sky-800 text-xl font-normal text-center leading-7 px-4 py-3 bg-white rounded justify-start items-start gap-2.5 inline-flex"
        }
      >
        Get Started
      </Button>
    </div>
  );
};

export default Nav;

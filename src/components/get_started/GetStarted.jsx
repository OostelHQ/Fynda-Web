"use client"

import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/reusable/Frame.svg";
import Link from "next/link";
import Button from "../reusable/Button";

import LN from "@/public/assets/reusable/Frame 35630.svg";
import IN from "@/public/assets/reusable/Frame 35628.svg";
import TW from "@/public/assets/reusable/Frame 35627.svg";
import FB from "@/public/assets/reusable/Frame 35626.svg";


const linkedInUrl = "";
const instagramUrl = "";
const facebookUrl = "";
const twitterUrl = "";


const GetStarted = () => {
  return (
    <div className="flex">
      <div className="w-[60%] h-[100vh] bg-white pl-[5%] ">
        <Link href={"/"} className="flex items-center gap-1 mt-12">
          <Image src={Icon} alt="logo" className="w-[32px] h-[32px]" />
          <p className="text-mainBlue text-[26px] font-normal leading-7">
            Fynda
          </p>
        </Link>

        <p className="pr-[50%] mt-36 text-slate-950 text-6xl font-bold leading-[78px]">
          We’re Coming Very Soon...
        </p>
        <p className="opacity-80 pr-[40%] text-slate-950 text-xl font-normal mt-5 leading-7">
          Fynda App is arriving soon to redefine your accommodation experience.
          Stay tuned for seamless bookings, secure payments, and tailored
          roommate matching!
        </p>
        <p className="text-slate-950 text-xl font-medium mt-5 leading-7">
          Subscribe to our newsletter
        </p>

        <div className="flex gap-5 mt-3">
          <input
            type="text"
            className="px-3 py-3 w-[20vw] h-[50px] rounded border border-slate-400 focus:border-slate-400 border-opacity-20"
            placeholder="Enter your email"
          />
          <Button
            style={
              " text-white text-xl h-[50px] font-normal text-center leading-7 px-4 py-3 bg-mainBlue rounded justify-start items-start gap-2.5 inline-flex"
            }
            destination={"/get-started"}
          >
            Submit
          </Button>
        </div>

        <div className="flex gap-5 mt-3 cursor-pointer" onClick={() => {
            window.location.href = "/";
        }}>
          <p className="text-sky-800 text-xl font-normal leading-7">Go back</p>
        </div>


        <div className="flex gap-5 mt-24">
          <a href={linkedInUrl} target="_blank">
            <Image src={LN} alt="LinkedIn" />
          </a>
          <a href={instagramUrl} target="_blank">
            <Image src={IN} alt="Instagram" />
          </a>
          <a href={twitterUrl} target="_blank">
            <Image src={TW} alt="Twitter" />
          </a>
          <a href={facebookUrl} target="_blank">
            <Image src={FB} alt="Facebook" />
          </a>
        </div>
      </div>

      <div className="w-[40%] h-[100vh] bg-mainBlue"></div>
    </div>
  );
};

export default GetStarted;

"use client";

import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/reusable/Frame.svg";
import Link from "next/link";
import Button from "../reusable/Button";

import { FaArrowLeft, FaChevronRight } from "react-icons/fa6";

import LN from "@/public/assets/reusable/Frame 35630.svg";
import IN from "@/public/assets/reusable/Frame 35628.svg";
import TW from "@/public/assets/reusable/Frame 35627.svg";
import FB from "@/public/assets/reusable/Frame 35626.svg";

import Splash from "@/public/assets/get_started/main.svg";
import Register from "@/public/assets/get_started/main-1.svg";

import Fynda from "@/public/assets/get_started/Vector.svg";

const linkedInUrl = "";
const instagramUrl = "";
const facebookUrl = "";
const twitterUrl = "";

const fyndaEmail = "oostel.app@gmail.com";
const myEmail = "taiwoluwatobilobafestus@gmail.com";


function sendMail() {
  
}

const GetStarted = () => {
  return (
    <div className="flex bg-white h-[100vh] sm:h-auto md:h-[100vh]">
      <div className="w-[50%] md:w-full md:px-[15%] sm:w-full h-[100vh] sm:h-auto md:h-auto bg-white pl-[5%] sm:px-[5%]">
        <Link href={"/"} className="flex items-center gap-1 mt-12">
          <Image src={Icon} alt="logo" className="w-[32px] h-[32px]" />
          <p className="text-mainBlue text-[26px] font-normal leading-7">
            Fynda
          </p>
        </Link>

        <p className="pr-[25%] md:pr-0 sm:mt-10 md:mt-16 sm:pr-0 sm:text-center md:text-center sm:text-[40px] mt-24 text-slate-950 md:text-[52px] md:leading-[60px] sm:leading-[52px] text-6xl font-bold leading-[72px]">
          We’re Coming Very Soon...
        </p>
        <p className="opacity-80 pr-[40%] md:pr-0 md:text-center sm:text-center sm:pr-0 text-slate-950 text-xl font-normal mt-5 leading-7">
          Fynda App is arriving soon to redefine your accommodation experience.
          Stay tuned for seamless bookings, secure payments, and tailored
          roommate matching!
        </p>
        <p className="text-slate-950 sm:text-center sm:text-[18px] md:text-center text-xl font-medium mt-5 leading-7">
          Subscribe to our newsletter
        </p>

        <div className="flex sm:flex-col md:items-center md:justify-center gap-5 sm:gap-10 mt-3 sm:pr-[5%]">
          <input
            type="text"
            className="px-3 py-3 w-[20vw] sm:w-full md:w-[35vw] h-[50px] focus:outline-none text-slate-950 rounded border border-slate-400 focus:border-slate-400 border-opacity-20"
            placeholder="Enter your email"
          />
          <Button
            style={
              " text-white sm:w-full text-xl h-[50px] sm:px-0 px-7 flex justify-center items-center font-normal text-center leading-7 bg-mainBlue rounded"
            }
            destination={"/get-started"}
          >
            <div className="flex justify-center items-center gap-2">
              <p>Submit</p>
              <FaChevronRight size={"16px"}/>
            </div>
          </Button>
        </div>

        <div
          className="flex sm:justify-center md:justify-center sm:mt-10 items-center gap-2 mt-10 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <FaArrowLeft fill="#064997" />
          <p className="text-sky-800 text-xl font-normal leading-7">Go back</p>
        </div>

        <div className="flex sm:mt-16 md:mt-20 sm:justify-center md:justify-center sm:mb-8 md:mb-8 gap-5 mt-28">
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

      <div className="w-[50%] sm:hidden md:hidden h-[100vh] bg-mainBlue flex justify-center gap-10 items-center relative">
        <Image src={Fynda} alt="Fynda" className="w-[100vw] h-[100vh] absolute top-0 left-0 object-cover"/>
        <Image src={Splash} alt="splash" className="w-[35%] h-auto z-10"/>
        <Image src={Register} alt="register" className="w-[35%] h-auto z-10" />
      </div>
    </div>
  );
};

export default GetStarted;

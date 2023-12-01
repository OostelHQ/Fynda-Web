import React from "react";
import Image from "next/image";
import Icon from "@/public/assets/reusable/Frame.svg";

import LN from "@/public/assets/reusable/Frame 35630.svg";
import IN from "@/public/assets/reusable/Frame 35628.svg";
import TW from "@/public/assets/reusable/Frame 35627.svg";
import FB from "@/public/assets/reusable/Frame 35626.svg";
import Link from "next/link";

const linkedInUrl = "";
const instagramUrl = "https://instagram.com/fyndacare?igshid=OGY3MTU3OGY1Mw==";
const facebookUrl = "https://www.facebook.com/FyndaCare";
const twitterUrl = "https://x.com/FyndaCare?t=JdeAxnmteQ2uh8d6_NPuZA&s=09";

const Footer = () => {
  return (
    <div className="px-[15%] sm:px-[5%]">
      <div className="w-full h-[1px] bg-slate-200 mt-[60px]" />

      <div className="mt-10 mb-10 sm:flex-col md:flex-col flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={Icon} alt="logo" className="w-[32px] h-[32px]" />
          <p className="text-mainBlue text-[26px] font-normal leading-7">
            Fynda
          </p>
        </Link>

        <div className="flex sm:flex-col gap-10 sm:gap-5 md:gap-5 md:mt-10 md:flex sm:mt-10">
          <div className="flex gap-10 sm:gap-5 md:gap-5">
            <p className="text-center text-slate-950 text-[20px] sm:text-[16px] font-medium leading-7 cursor-pointer">
              Testimonial
            </p>
            <p className="text-center text-slate-950 text-[20px] sm:text-[16px] font-medium leading-7 cursor-pointer">
              FAQs
            </p>
            <p className="text-center text-slate-950 text-[20px] sm:text-[16px] font-medium leading-7 cursor-pointer">
              Terms of Service
            </p>
          </div>
          <p className="text-center text-slate-950 text-[20px] sm:text-[16px] font-medium leading-7 cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>

      <div className="flex sm:flex-col md:flex-col justify-between items-center">
        <div className="sm:flex gap-5 hidden md:flex ">
          {/* <a href={linkedInUrl} target="_blank">
            <Image src={LN} alt="LinkedIn" />
          </a> */}
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

        <p className=" mt-10 text-slate-400 sm:text-[16px] sm:leading-[28px] text-base font-normal leading-loose mb-10">
          © {new Date().getFullYear()} Fynda. All rights reserved.
        </p>

        <div className="flex gap-5 sm:hidden md:hidden">
          {/* <a href={linkedInUrl} target="_blank">
            <Image src={LN} alt="LinkedIn" />
          </a> */}
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
    </div>
  );
};

export default Footer;

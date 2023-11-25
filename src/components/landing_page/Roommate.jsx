import React from "react";

import Image from "next/image";

import Uno from "@/public/assets/landing_page/Roommate Image.svg";
import Telescope from "@/public/assets/landing_page/Ranking.svg";
import Message from "@/public/assets/landing_page/Device Message.svg";

import RoomateVector from "@/public/assets/landing_page/Vector Roommate Mobile.svg"

const Roommate = () => {
  return (
    <div className="px-[15%] sm:px-[5%] flex flex-col mb-32 sm:mb-24">
      <p
        className="mt-24 text-slate-950 sm:text-[40px] md:text-[60px] md:text-center sm:leading-[52px] sm:text-center text-[80px] font-bold leading-[88px]"
      >
        Roommate
      </p>
      <p className="opacity-50 text-slate-950 text-[32px] md:text-[28px] md:text-center mt-3 sm:text-center sm:text-[20px] font-semibold sm:leading-[28px] leading-[56px]">
        Compatible room-partner search made easy.
      </p>
      <div className="mt-12 sm:gap-8 flex gap-14 sm:flex-col md:flex-col">
        <div className=" relative flex flex-col items-center rounded-[60px] sm:rounded-[40px] sm:w-full md:w-full h-[600px] sm:h-[450px] pb-36 bg-lightBlue pt-10 w-[80%]">
          <Image
            src={Telescope}
            alt="Telescope"
            className="w-[150px] h-[150px] sm:w-[100px] sm:h-[100px]"
          />
          <p className="text-center px-[12%] sm:px-[10%] sm:text-[16px] sm:leading-[26px] mt-5 text-slate-950 text-[24px] font-semibold leading-9">
            Find the perfect study buddy – Fynda's platform ensures you connect
            with potential room partner who match your vibe and academic goals.
          </p>
          <Image src={RoomateVector} alt=" " className="absolute sm:-bottom-[300px] -bottom-[380px] w-full object-cover md:-bottom-[450px]"/>
        </div>

        <div className="bg-lightGrey sm:w-full sm:h-[400px] flex relative flex-col items-center sm:rounded-[40px] rounded-[60px] h-[600px] sm:pt-8 pt-16 w-full pb-10">
          <Image src={Message} alt="message" className="w-[150px] h-[150px] sm:w-[90px] sm:h-[90px]" />
          <p className="text-center px-[12%] sm:px-[10%] sm:text-[16px] sm:leading-[26px] mt-5 text-slate-950 text-[24px] font-semibold leading-9">
            From matching to messaging- Fynda App does this better for you.
          </p>
          <Image src={Uno} alt="phone" className="w-[60%] sm:w-[65%] sm:mt-9 absolute -bottom-0 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Roommate;

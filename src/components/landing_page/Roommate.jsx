import React from "react";

import Image from "next/image";

import Uno from "@/public/assets/landing_page/Roommate Image.svg";
import Telescope from "@/public/assets/landing_page/Ranking.svg";
import Message from "@/public/assets/landing_page/Device Message.svg";

const Roommate = () => {
  return (
    <div className="px-[15%] bg-white flex flex-col mb-48">
      <p className="mt-32 text-slate-950 text-6xl font-bold leading-[88px]">
        Roommate
      </p>
      <p className="opacity-50 text-slate-950 text-[32px] font-semibold leading-[56px]">
        Compatible room-partner search made easy.
      </p>
      <div className="mt-24 flex gap-32">
        <div className="flex flex-col items-center rounded-[50px] pb-36 bg-lightBlue pt-10 w-[40%]">
          <Image
            src={Telescope}
            alt="Telescope"
            className="w-[150px] h-[150px]"
          />
          <p className="text-center px-[10%] text-slate-950 text-lg font-semibold leading-9">
            Find the perfect study buddy – Fynda's platform ensures you connect
            with potential room partner who match your vibe and academic goals.
          </p>
        </div>

        <div className="bg-lightGrey flex flex-col items-center rounded-[50px] h-[600px] pt-20 w-[75%] pb-10">
          <Image src={Message} alt="message" className="w-[120px] h-[120px]" />
          <p className="text-center px-[15%] mt-4 text-slate-950 text-lg font-semibold leading-9">
            From matching to messaging- Fynda App does this better for you.
          </p>
          <Image src={Uno} alt="phone" className="w-[50%] mt-20 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Roommate;

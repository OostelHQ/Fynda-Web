import React from "react";

import Image from "next/image";

import Uno from "@/public/assets/landing_page/Accomodation Image.svg";
import Telescope from "@/public/assets/landing_page/Microscope.svg";
import Message from "@/public/assets/landing_page/Message.svg";
import Security from "@/public/assets/landing_page/Security Card.svg";

const Accomodation = () => {
  return (
    <div className="px-[15%] sm:px-[5%] flex flex-col">
      <p className="mt-32 text-slate-950 sm:text-[52px] sm:text-center text-6xl font-bold leading-[88px]">
        Accomodation
      </p>
      <p className="opacity-50 text-slate-950 text-[32px] sm:text-center sm:text-[20px] font-semibold leading-[56px]">
        Where comfort meets convenience.
      </p>
      <div className="mt-16 flex sm:flex-col sm:gap-12 gap-24">
        <div className="flex flex-col items-center rounded-[50px] sm:w-full sm:h-[580px] overflow-hidden h-[600px] bg-mainBlue pt-16 w-[50%]">
          <Image
            src={Telescope}
            alt="Telescope"
            className="w-[150px] h-[150px]"
          />
          <p className="text-center px-[12%] text-white text-lg font-semibold leading-9">
            Finding your new home just got easier. Explore a myriad of options
            effortlessly through the Fynda App.
          </p>
          <Image src={Uno} alt="phone" className="w-[50%] mt-28 object-cover"/>
        </div>

        <div className="flex flex-col sm:gap-16 justify-between">
          <div className="bg-deepBlue flex flex-col sm:w-full items-center rounded-[50px] h-[270px] pt-10 w-[90%]">
            <Image
              src={Message}
              alt="message"
              className="w-[120px] h-[120px]"
            />
            <p className="text-center px-[10%] text-white text-lg font-semibold leading-9">
              Direct conversation with Landlords and Agents.
            </p>
          </div>

          <div className="bg-lightPurple flex sm:w-full flex-col items-center rounded-[50px] h-[270px] pt-10 w-[90%]">
            <Image
              src={Security}
              alt="message"
              className="w-[120px] h-[120px]"
            />
            <p className="text-center px-[10%] text-white text-lg font-semibold leading-9">
              Secure hostel payment with generated receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;

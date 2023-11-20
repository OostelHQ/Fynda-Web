"use client";

import React from "react";

import Image from "next/image";

import Uno from "@/public/assets/landing_page/Accomodation Image.svg";
import Telescope from "@/public/assets/landing_page/Microscope.svg";
import Message from "@/public/assets/landing_page/Message.svg";
import Security from "@/public/assets/landing_page/Security Card.svg";

import { motion } from "framer-motion";

const Accomodation = () => {
  return (
    <motion.div className="px-[15%] sm:px-[5%] flex flex-col">
      <motion.p
        animate={{ x: 100 }}
        transition={{ duration: 0.5 }}
        className="mt-24 text-slate-950 sm:text-[40px] sm:leading-[52px] sm:text-center text-[80px] font-bold leading-[88px]"
      >
        Accomodation
      </motion.p>
      <p className="opacity-50 text-slate-950 text-[32px] sm:text-center sm:text-[20px] font-semibold sm:leading-[36px] leading-[56px]">
        Where comfort meets convenience.
      </p>
      <div className="mt-12 flex sm:flex-col sm:gap-8 gap-16">
        <motion.div
          animate={{
            translate: [-100, 0],
          }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center sm:pt-8 rounded-[50px] sm:rounded-[32px] sm:w-full sm:h-[390px] overflow-hidden h-[550px] bg-mainBlue pt-12 w-[50%]"
        >
          <Image
            src={Telescope}
            alt="Telescope"
            className="w-[150px] h-[150px] sm:w-[90px] sm:h-[90px]"
          />
          <p className="text-center px-[12%] sm:px-[10%] sm:text-[16px] sm:leading-[26px] text-white text-lg font-semibold leading-9">
            Finding your new home just got easier. Explore a myriad of options
            effortlessly through the Fynda App.
          </p>
          <Image
            src={Uno}
            alt="phone"
            className="w-[60%] sm:w-[80%] sm:mt-8 mt-20 object-cover"
          />
        </motion.div>

        <div className="flex flex-col sm:gap-8 justify-between">
          <div className="bg-deepBlue flex flex-col sm:w-full sm:rounded-[32px] items-center rounded-[50px] h-[250px] sm:h-[270px] pt-10 w-[100%]">
            <Image
              src={Message}
              alt="message"
              className="sm:w-[120px] sm:h-[120px] h-[90px] w-[90px]"
            />
            <p className="text-center px-[10%] text-white sm:leading-[26px] sm:text-[16px] text-lg font-semibold leading-9">
              Direct conversation with Landlords and Agents.
            </p>
          </div>

          <div className="bg-lightPurple flex sm:w-full flex-col sm:rounded-[32px] items-center rounded-[50px] h-[250px] sm:h-[270px] pt-10 w-[100%]">
            <Image
              src={Security}
              alt="message"
              className="sm:w-[120px] sm:h-[120px] h-[90px] w-[90px]"
            />
            <p className="text-center px-[10%] text-white sm:leading-[26px] sm:text-[16px] text-lg font-semibold leading-9">
              Secure hostel payment with generated receipt.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accomodation;

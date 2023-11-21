"use client"

import React from "react";

import Image from "next/image";
import Duo from "@/public/assets/landing_page/Two Phones.svg";
import Uno from "@/public/assets/landing_page/Main Phone.svg";
import DownloadStores from "./DownloadStores";
import Nav from "../reusable/Nav";
import Apple from "@/public/assets/landing_page/Apple.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore.svg";
import DesktopVector from "@/public/assets/landing_page/Vector Desktop.svg";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-mainBlue relative w-full">
      <Image
        src={DesktopVector}
        alt="desktop vectors"
        className="w-[100vw] h-[100vh] sm:h-[1100px] object-cover"
      />
      <div className="absolute top-0 left-0">
        <Nav />



        <div className="mt-28 sm:mt-20 flex gap-16 justify-between px-[10%] sm:px-[5%] h-[70vh] sm:h-auto sm:flex-col">
          <div className="w-[50%] sm:w-full flex flex-col ">
            <p className=" text-white text-[92px] sm:text-[52px] sm:text-center font-bold sm:leading-[52px] leading-[96px]">
              Relax, Your Comfort Found!
            </p>
            <p className="text-white sm:text-center text-xl font-normal leading-[28px] mt-5 mb-7 pr-[25%] sm:pr-0">
              Say goodbye to hostel-hunting stress! Fynda ensures a hassle-free
              experience in discovering the perfect, budget-friendly living
              space for students.
            </p>
            <div className="flex sm:flex-col gap-5 items-center">
              <DownloadStores
                image={Apple}
                header={"APPLE APP STORE"}
                ratings={"3.9"}
                text={"(200+ ratings)"}
              />
              <DownloadStores
                image={PlayStore}
                header={"GOOGLE PLAY STORE"}
                ratings={"4.6"}
                text={"(200+ ratings)"}
              />
            </div>
          </div>

          <div className="relative sm:w-full w-[30vw] h-auto]">
            <Image src={Duo} alt="duo image" className="z-5 sm:w-[60vw] absolute top-0 h-auto sm:left-[15vw]" />
            <Image
              src={Uno}
              alt="iphone"
              className="absolute w-[17vw] sm:w-[35vw] h-auto left-[6vw] sm:right-24 sm:left-[28vw] z-20 -top-5 sm:z-10"
            />
          </div>


        </div>



      </div>
    </div>
  );
};

export default Banner;

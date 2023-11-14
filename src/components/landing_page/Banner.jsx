import React from "react";

import Image from "next/image";
import Duo from "@/public/assets/landing_page/Two Phones.svg";
import Uno from "@/public/assets/landing_page/Main Phone.svg";
import DownloadStores from "./DownloadStores";
import Nav from '../reusable/Nav'
import Apple from "@/public/assets/landing_page/Apple.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore.svg";

const Banner = () => {
  return (
    <div className="bg-mainBlue">
      <Nav />
      <div className="mt-32 flex gap-16 justify-between px-[15%]  mb-32">
        <div className="w-[50%] flex flex-col">
          <p className=" text-white text-[92px] font-bold leading-[96px]">
            Relax, Your Comfort Found!
          </p>
          <p className="text-white text-xl font-normal leading-7 mt-5 mb-7">
            Say goodbye to hostel-hunting stress! Fynda ensures a hassle-free
            experience in discovering the perfect, budget-friendly living space
            for students.
          </p>
          <div className="flex gap-5 items-center">
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

        <div className="relative w-[40%]">
          <Image src={Duo} alt="duo image" className="h-[70vh] -z-10" />
          <Image
            src={Uno}
            alt="iphone"
            className="absolute h-[70vh] w-[60%] left-24 top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

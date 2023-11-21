import React from "react";
import Image from "next/image";
import Uno from "@/public/assets/landing_page/Download App.svg";
import DownloadStores from "./DownloadStores";
import Apple from "@/public/assets/landing_page/Apple.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore.svg";
import Vector from "@/public/assets/reusable/Vector.svg";

const Download = () => {
  return (
    <div className="bg-mainBlue rounded-[40px] sm:items-center sm:flex-col sm:h-[900px] h-[500px] w-full flex relative">
      <Image src={Vector} alt="vector" className="absolute top-0 left-0 w-full h-full object-cover"/>
      
      <div className="w-[50%] flex flex-col sm:w-[100%] justify-start sm:items-center items-start z-10 sm:pl-0 pl-[5%]">
        <p className="mt-20 sm:mt-16 text-white sm:text-[52px] text-6xl sm:leading-[52px] sm:text-center text-[80px] font-bold leading-[88px]">
          Download App
        </p>
        <p className="text-white text-xl sm:text-[16px] sm:mt-10 sm:text-center sm:leading-[28px] font-normal leading-7 mt-5">
          Join Fynda today and embark on a stress-free adventure in finding your
          ideal student accommodation
        </p>
        <div className="flex sm:flex-col sm:w-full sm:px-[5%] gap-5 sm:mt-10 mt-5 items-center">
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
      <Image src={Uno} alt="phone" className="w-[20vw] h-[400px] sm:h-[350px] sm:bottom-0 z-10 sm:w-[60vw] sm:right-[15vw] bottom-0 absolute right-[5vw]" />
    </div>
  );
};

export default Download;

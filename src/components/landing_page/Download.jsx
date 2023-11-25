import React from "react";
import Image from "next/image";
import Uno from "@/public/assets/landing_page/Download App.svg";
import DownloadStores from "./DownloadStores";
import Apple from "@/public/assets/landing_page/Apple.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore.svg";
import Vector from "@/public/assets/reusable/Vector.svg";

const Download = () => {
  return (
    <div className="bg-deepBlue rounded-[60px] sm:items-center md:items-center md:flex-col sm:flex-col sm:h-[770px] md:h-[900px] h-[500px] w-full flex relative overflow-clip ">
      <Image src={Vector} alt="vector" className="absolute -top-[60vh] left-0 w-[2000px] h-[1000px] object-cover"/>
      
      <div className="w-[80%] flex flex-col sm:w-full md:w-full justify-start sm:items-center items-start z-10 md:px-[15%] px-[10%]">
        <p className="mt-24 sm:mt-16 text-white sm:text-[40px] md:leading-[70px] md:text-center text-[56px] sm:leading-[52px] sm:text-center sm:w-full font-bold leading-[88px]">
          Download App
        </p>
        <p className="text-white md:pr-0 pr-[50%] sm:pr-0 text-xl md:text-center sm:text-[16px] md:mt-8 sm:mt-5 sm:text-center sm:leading-[28px] font-normal leading-7 mt-5">
          Join Fynda today and embark on a stress-free adventure in finding your
          ideal student accommodation
        </p>
        <div className="flex sm:flex-col md:flex-col md:w-full sm:w-full gap-5 mt-10 items-center">
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


      <Image src={Uno} alt="phone" className="w-[30vw] h-[400px] sm:h-[350px] z-10 sm:w-[60vw] md:w-[70vw] md:right-0 sm:right-[15vw] md:-bottom-24 sm:-bottom-16 bottom-0 absolute right-[3%]" />
    </div>
  );
};

export default Download;

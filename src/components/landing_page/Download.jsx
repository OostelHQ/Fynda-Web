import React from "react";
import Image from "next/image";
import Uno from "@/public/assets/landing_page/Main Phone.svg";
import DownloadStores from "./DownloadStores";
import Apple from "@/public/assets/landing_page/Apple.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore.svg";

const Download = () => {
  return (
    <div className="bg-deepBlue rounded-[40px] sm:items-center sm:flex-col sm:h-[1000px] h-[500px] w-full flex relative justify-around">
      <div className="w-[50%] flex flex-col sm:w-full sm:px-[15%]">
        <p className="mt-32 sm:mt-10 text-white sm:text-center sm:text-[52px] text-6xl font-bold leading-[88px]">
          Download App
        </p>
        <p className="text-white text-xl sm:mt-10 sm:text-center sm:text-[20px] font-normal leading-7 mt-5">
          Join Fynda today and embark on a stress-free adventure in finding your
          ideal student accommodation
        </p>
        <div className="flex sm:flex-col gap-5 sm:mt-10 mt-5 items-center">
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
      <Image src={Uno} alt="phone" className="w-[30%] sm:w-[75%]" />
    </div>
  );
};

export default Download;

import React from "react";

import Image from "next/image";
import WhyImage from "@/public/assets/landing_page/Why Image.svg";
import DownloadStores from "./DownloadStores";
import Apple from "@/public/assets/landing_page/Apple Dark.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore Dark.svg";


const Why = () => {
  return (
    <div className="flex sm:flex-col sm:px-[5%] justify-between px-[15%] gap-20">
      <Image src={WhyImage} alt="man" className="w-[50%] sm:hidden h-auto"/>
      <div className="w-[70%] sm:w-full flex flex-col">
        <p className="text-slate-950 text-6xl sm:text-[52px] sm:text-center font-bold leading-[88px]">
          Why Choose Fynda App?
        </p>
        <p className="text-slate-950 sm:text-center sm:text-[20px] text-xl font-normal leading-7 mt-5">
          Book with ease, thanks to our seamless booking, straightforward
          booking process, secure payments, and personalized roommate matching –
          because your journey deserves the best.
        </p>
        <div className="mt-10 sm:flex-col flex items-center gap-5">
          <DownloadStores
            image={Apple}
            header={"APPLE APP STORE"}
            ratings={"3.9"}
            text={"(200+ ratings)"}
            dark={true}
          />
          <DownloadStores
            image={PlayStore}
            header={"GOOGLE PLAY STORE"}
            ratings={"4.6"}
            text={"(200+ ratings)"}
            dark={true}
          />
        </div>
      </div>
      <Image src={WhyImage} alt="man" className="w-full hidden sm:block h-auto"/>
    </div>
  );
};

export default Why;

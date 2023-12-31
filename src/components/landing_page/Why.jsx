import React from "react";

import Image from "next/image";
import WhyImage from "@/public/assets/landing_page/Why Image.svg";
import DownloadStores from "./DownloadStores";
import Apple from "@/public/assets/landing_page/Apple Dark.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore Dark.svg";

const Why = () => {
  return (
    <div className="flex sm:flex-col md:flex-col sm:px-[5%] justify-between px-[15%] gap-20 sm:gap-10">
      <Image
        src={WhyImage}
        alt="man"
        className="w-[50%] sm:hidden h-auto z-10 md:hidden"
      />
      <div className="w-[70%] sm:w-full md:w-full flex flex-col">
        <p className="text-slate-950 sm:text-[40px] md:text-[60px] md:text-center sm:leading-[52px] sm:text-center text-[80px] font-bold leading-[76px]">
          Why Choose Fynda App?
        </p>
        <p className="text-slate-950 md:text-center sm:text-center text-xl sm:text-[16px] md:text-[18px] font-normal leading-[28px] mt-7 mb-7">
          Book with ease, thanks to our seamless booking, straightforward
          booking process, secure payments, and personalized roommate matching –
          because your journey deserves the best.
        </p>
        <div className="mt-5 sm:flex-col flex items-center gap-5">
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
      <Image
        src={WhyImage}
        alt="man"
        className="w-full hidden sm:block md:block h-auto"
      />
    </div>
  );
};

export default Why;

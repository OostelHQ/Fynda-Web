import React from "react";

import Image from "next/image";
import WhyImage from "@/public/assets/landing_page/Why Image.svg";
import DownloadStores from "./DownloadStores";
import Apple from "@/public/assets/landing_page/Apple Dark.svg";
import PlayStore from "@/public/assets/landing_page/PlayStore Dark.svg";


const Why = () => {
  return (
    <div className="flex justify-between px-[15%] gap-20">
      <Image src={WhyImage} alt="man" className="w-[50%] h-auto"/>
      <div className="w-[70%] flex flex-col">
        <p className="text-slate-950 text-6xl font-bold leading-[88px]">
          Why Choose Fynda App?
        </p>
        <p className="text-slate-950 text-xl font-normal leading-7 mt-5">
          Book with ease, thanks to our seamless booking, straightforward
          booking process, secure payments, and personalized roommate matching –
          because your journey deserves the best.
        </p>
        <div className="mt-10 flex items-center gap-5">
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
    </div>
  );
};

export default Why;

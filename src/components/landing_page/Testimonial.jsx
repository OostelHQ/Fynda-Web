import React from "react";

import Image from "next/image";
import WhyImage from "@/public/assets/landing_page/Testimonial.svg";
import Client from "@/public/assets/landing_page/Client Image.svg";
import Stars from "@/public/assets/landing_page/Stars.svg";

import Left from "@/public/assets/landing_page/Left Arrow.svg";
import Right from "@/public/assets/landing_page/Right Arrow.svg";

const Testimonial = () => {
  return (
    <div className="flex sm:flex-col justify-between px-[15%] sm:px-[5%] gap-20 mt-32">
      <div className="w-[70%] sm:w-full flex flex-col">
        <p className="text-slate-950 sm:text-[52px] sm:text-center text-6xl font-bold leading-[88px]">
          Testimonials
        </p>
        <p className="text-slate-950 sm:text-center sm:text-[20px] text-xl font-normal leading-7 mt-5">
          “Explore and effortlessly secure your ideal hostel experience and find
          the perfect accommodation for your journey in just a few clicks.”
        </p>
        <div className="mt-10 sm:flex-col flex gap-3 sm:items-center items-start sm:w-full">
            <Image src={Client} alt="client" className="w-[15%] "/>

            <div className="flex flex-col justify-between sm:items-center items-start">
              <p className="text-center text-slate-950 text-xl font-medium leading-10">
                Emmanuel Babalola
              </p>
              <p className="text-slate-950 text-base font-normal leading-loose">
                FUNAAB APC HOC
              </p>
            </div>
            <Image src={Stars} alt="client" className="w-[30%] sm:w-[20%] sm:mt-3"/>
          </div>

          <div className="mt-[5%]" />

          <div className="flex gap-[20px] sm:justify-center">
            <div>
              <Image src={Left} alt="arrow" className="cursor-pointer" />
            </div>
            <div>
              <Image src={Right} alt="arrow" className="cursor-pointer" />
            </div>
          </div>
      </div>
      <Image src={WhyImage} alt="man" className="w-[50%] sm:w-full h-auto" />
    </div>
  );
};

export default Testimonial;

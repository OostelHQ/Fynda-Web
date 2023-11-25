"use client";

import React, { useState } from "react";

import Image from "next/image";
import WhyImage from "@/public/assets/landing_page/Testimonial.svg";
import Client from "@/public/assets/landing_page/Client Image.svg";
import Stars from "@/public/assets/landing_page/Stars.svg";

import Left from "@/public/assets/landing_page/Left Arrow.svg";
import Right from "@/public/assets/landing_page/Right Arrow.svg";

import { AnimatePresence, motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      text: '"Explore and effortlessly secure your ideal hostel experience and find the perfect accommodation for your journey in just a few clicks."',
      name: "Emmanuel Babalola",
      role: "FUNAAB APC HOC",
      image: Client,
    },
    {
      text: '"Explore and effortlessly secure your ideal hostel experience and find the perfect accommodation for your journey in just a few clicks."',
      name: "Emmanuel Babalola",
      role: "FUNAAB APC HOC",
      image: Client,
    },
    {
      text: '"Explore and effortlessly secure your ideal hostel experience and find the perfect accommodation for your journey in just a few clicks."',
      name: "Emmanuel Babalola",
      role: "FUNAAB APC HOC",
      image: Client,
    },
    {
      text: '"Explore and effortlessly secure your ideal hostel experience and find the perfect accommodation for your journey in just a few clicks."',
      name: "Emmanuel Babalola",
      role: "FUNAAB APC HOC",
      image: Client,
    },
  ];

  const [current, setCurrent] = useState(0);

  const toggle = (val) => {
    let newVal = current + val;
    if (newVal < 0) {
      newVal = 0;
    } else if (newVal >= testimonials.length) {
      newVal = testimonials.length - 1;
    }
    setCurrent(newVal);
  };

  return (
    <div className="flex sm:flex-col md:flex-col justify-between px-[15%] sm:px-[5%] gap-20 sm:gap-10 mt-32 sm:mt-16">
      <div className="w-[70%] sm:w-full md:w-full flex flex-col"> 
        <p className="text-slate-950 text-6xl sm:text-[40px] sm:leading-[52px] sm:text-center md:text-center font-bold leading-[88px]">
          Recommendations
        </p>
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <p className="text-slate-950 sm:text-center md:text-center sm:text-[16px] sm:leading-[26px] text-xl font-normal leading-7 mt-5">
              {testimonials[current].text}
            </p>
            <div className="mt-10 sm:flex-col md:flex-col md:items-center md:w-full flex gap-3 sm:items-center items-start sm:w-full">
              <Image
                src={testimonials[current].image}
                alt="client"
                className="w-[15%]"
              />

              <div className="flex flex-col justify-between sm:items-center md:items-center items-start">
                <p className="text-center text-slate-950 text-xl font-medium leading-10">
                  {testimonials[current].name}
                </p>
                <p className="text-slate-950 text-base sm:text-center md:text-center font-normal leading-loose">
                  {testimonials[current].role}
                </p>
              </div>
              <Image src={Stars} alt="client" className="w-[30%]" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-[5%]" />

        <div className="flex gap-14 sm:justify-center md:justify-center">
          <div onClick={() => toggle(-1)}>
            <Image
              src={Left}
              alt="arrow"
              className={`cursor-pointer ${current == 0 && "opacity-25"}`}
            />
          </div>
          <div onClick={() => toggle(1)}>
            <Image
              src={Right}
              alt="arrow"
              className={`cursor-pointer ${
                current == testimonials.length - 1 && "opacity-25"
              }`}
            />
          </div>
        </div>
      </div>
      <Image src={WhyImage} alt="man" className="w-[50%] sm:w-full md:w-full h-auto" />
    </div>
  );
};

export default Testimonial;

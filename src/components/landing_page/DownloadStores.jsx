import React from "react";

import Image from "next/image";

const DownloadStores = ({ image, header, ratings, text, dark = false }) => {
  return (
    <div className={`px-3 py-2 bg-opacity-5 rounded-md border ${dark ? "border-slate-950" : "border-white"} cursor-pointer flex justify-between items-start gap-1.5 `}>
      <Image src={image} alt="store-image" className="w-[45px] h-[45px]"/>
      <div className="flex flex-col gap-1">
        <p className={`text-xs font-medium leading-tight ${dark ? "text-slate-950" : "text-white"}`}>{header}</p>
        <div className="flex items-center gap-2">
          <p className={`text-xl font-semibold leading-tight ${dark ? "text-slate-950" : "text-white"}`}>
            {ratings}
          </p>
          <p className={`text-[10px] font-normal leading-tight ${dark ? "text-slate-950" : "text-white"}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadStores;

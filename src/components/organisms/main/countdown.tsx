import { CountdownPicture } from "@/assets/home";
import Image from "next/image";
import React from "react";

export default function Countdown() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={CountdownPicture}
        alt="Years Experience"
        layout="fill"
        className="absolute object-cover"
      />

      <div className="container absolute inset-0 z-30 flex flex-col justify-center items-center text-center">
        <div className="text-white leading-snug tracking-wides">
          <h2 className="text-white uppercase text-2xl font-bold">
            UFC 305: DU PLESSIS VS ADESANYA
          </h2>
          <h1 className="text-white uppercase text-[100px] font-extrabold">
            Countdown
          </h1>
          <p className="text-white text-2xl font-semibold">
            Get An All-Access Look At The Stars Of UFC 305 In Perth
          </p>
        </div>

        <div className="flex absolute bottom-10 gap-8">
          <div className="flex items-center justify-center uppercase w-48 h-14 bg-white">
            watch now
          </div>
          <div className="flex items-center justify-center uppercase w-48 h-14 bg-white">
            order ufc 305
          </div>
        </div>
      </div>
    </div>
  );
}

import { News10 } from "@/assets/home/trending/road-title";
import Image from "next/image";
import React from "react";

export default function UpcomingPast() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={News10}
        alt="Years Experience"
        layout="fill"
        className="absolute object-cover"
      />
      <div className="absolute inset-0 bg-dark opacity-35" />

      <div className="container absolute inset-0 z-30 flex flex-col justify-center items-center text-center">
        <div className="text-white leading-snug tracking-wides">
          <h2 className="text-white uppercase text-2xl font-bold">UFC 305</h2>
          <h1 className="text-white uppercase text-[100px] font-extrabold">
            DU PLESSIS VS ADESANYA
          </h1>
          <p className="text-white text-2xl font-semibold">
            Middleweight Title Fight Goes Down in Perth
          </p>
        </div>

        <div className="flex absolute bottom-10 gap-8">
          <div className="flex items-center justify-center uppercase w-48 h-14 bg-white">
            final result
          </div>
        </div>
      </div>
    </div>
  );
}

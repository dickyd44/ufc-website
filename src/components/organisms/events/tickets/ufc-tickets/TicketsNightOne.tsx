"use client";
import React, { useState } from "react";
import { UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";
import TicketsSlideOne from "@/components/molecules/events/tickets-slide/TicketsSlideOne";

type OnSlideChange = (index: number) => void;

const MAGNY_MORALES = [
  {
    name: "MAGNY VS MORALES",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "BORSCHCHEV VS BUZUKJA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "LLONTOP VS MEDINA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "MEERSCHAERT VS REESE",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "SHAHBAZYAN VS SILVA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function TicketsNightOne() {
  const [currentEventOne, setCurrentEventOne] = useState(MAGNY_MORALES[0]);

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventOne(MAGNY_MORALES[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center mt-20">
      <div>
        <Image
          src={UfcFightNight}
          alt="ufc-fight-night"
          width={120}
          height={120}
        />
      </div>
      <div className="w-full col-span-2">
        <TicketsSlideOne onSlideChange={handleSlideChange} />
      </div>
      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventOne.name}</p>
        <p className="text-base font-bold">{currentEventOne.event}</p>
        <p className="text-slate-400">{currentEventOne.location}</p>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-rose-700 cursor-pointer bg-red border border-slate-200 text-sm text-white">
          buy tickets
        </div>
        <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-light cursor-pointer bg-white border border-slate-200 text-sm">
          vip experience
        </div>
      </div>
    </div>
  );
}

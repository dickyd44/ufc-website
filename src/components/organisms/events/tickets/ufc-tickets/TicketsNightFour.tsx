"use client";
import React, { useState } from "react";
import { UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";
import TicketsSlideFour from "@/components/molecules/events/tickets-slide/TicketsSlideFour";

type OnSlideChange = (index: number) => void;

const SUGA_MERAB = [
  {
    name: "SUGA VS MERAB",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "RAUL VS RODRIGUEZ",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "AORIQILENG VS BAHAMONDES",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "BORJAS VS CHAIREZ",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "OSBOURNE VS RIBOVICS",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },

  {
    name: "TORRES VS ZELLHUBNER",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function TicketsNightFour() {
  const [currentEventThree, setCurrentEventThree] = useState(SUGA_MERAB[0]);

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventThree(SUGA_MERAB[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center my-16">
      <div>
        <Image
          src={UfcFightNight}
          alt="ufc-fight-night"
          width={120}
          height={120}
        />
      </div>
      <div className="w-full col-span-2">
        <TicketsSlideFour onSlideChange={handleSlideChange} />
      </div>
      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventThree.name}</p>
        <p className="text-base font-bold">{currentEventThree.event}</p>
        <p className="text-slate-400">{currentEventThree.location}</p>
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

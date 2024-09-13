"use client";
import React, { useState } from "react";
import { Ufc308logo } from "@/assets/upcoming";
import Image from "next/image";
import TicketsSlideSix from "@/components/molecules/events/tickets-slide/TicketsSlideSix";
import ButtonTicketsVIP from "@/components/atoms/events/button-tickets-vip";

type OnSlideChange = (index: number) => void;

const TOPURIA_HOLLOWAY = [
  {
    name: "HOLLOWAY VS TOPURIA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "CHIMAEV VS WHITTAKER",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "ANKALAEV VS RAKIC",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "GANE VS MAGOMEDOV",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "VOLKOV VS BRUNNO",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function TicketsNightSix() {
  const [currentEventThree, setCurrentEventThree] = useState(
    TOPURIA_HOLLOWAY[0]
  );

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventThree(TOPURIA_HOLLOWAY[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center my-16 pb-5">
      <div>
        <Image src={Ufc308logo} alt="ufc-fight-night" width={90} height={90} />
      </div>
      <div className="w-full col-span-2">
        <TicketsSlideSix onSlideChange={handleSlideChange} />
      </div>
      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventThree.name}</p>
        <p className="text-base font-bold">{currentEventThree.event}</p>
        <p className="text-slate-400">{currentEventThree.location}</p>
      </div>

      <ButtonTicketsVIP />
    </div>
  );
}

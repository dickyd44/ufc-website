import React, { useState } from "react";
import FighterSlideOne from "@/components/molecules/upcoming-slide/FighterSlideOne";
import { UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";

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

export default function FightNightOne() {
  const [currentEventOne, setCurrentEventOne] = useState(MAGNY_MORALES[0]);

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventOne(MAGNY_MORALES[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center">
      <div>
        <Image
          src={UfcFightNight}
          alt="ufc-fight-night"
          width={120}
          height={120}
        />
      </div>
      <div className="w-full col-span-2">
        <FighterSlideOne onSlideChange={handleSlideChange} />
      </div>
      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventOne.name}</p>
        <p className="text-base font-bold">{currentEventOne.event}</p>
        <p className="text-slate-400">{currentEventOne.location}</p>
      </div>
      <div>
        <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-light cursor-pointer bg-white border border-slate-200 text-sm">
          how to watch
        </div>
      </div>
    </div>
  );
}

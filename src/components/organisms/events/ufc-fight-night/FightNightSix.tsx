import React, { useState } from "react";
import { Ufc308logo, UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";
import FighterSlideFive from "@/components/molecules/upcoming-slide/FightSlideFive";
import FighterSlideSix from "@/components/molecules/upcoming-slide/FightSlideSix";

type OnSlideChange = (index: number) => void;

const TOPURIA_HOLLOWAY = [
  {
    name: "TOPURIA VS HOLLOWAY",
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

export default function FightNightSix() {
  const [currentEventThree, setCurrentEventThree] = useState(
    TOPURIA_HOLLOWAY[0]
  );

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventThree(TOPURIA_HOLLOWAY[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center my-16">
      <div>
        <Image src={Ufc308logo} alt="ufc-fight-night" width={90} height={90} />
      </div>
      <div className="w-full col-span-2">
        <FighterSlideSix onSlideChange={handleSlideChange} />
      </div>
      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventThree.name}</p>
        <p className="text-base font-bold">{currentEventThree.event}</p>
        <p className="text-slate-400">{currentEventThree.location}</p>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-light cursor-pointer bg-white border border-slate-200 text-sm">
          how to watch
        </div>
        <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-light cursor-pointer bg-white border border-slate-200 text-sm">
          tickets
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";
import FighterSlideThree from "@/components/molecules/upcoming-slide/FightSlideThree";

type OnSlideChange = (index: number) => void;

const ALLEN_CHARRIERE = [
  {
    name: "ALLEN VS CHARRIERE",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "CUNNINGHAM VS CUTABELA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "FREVOLA VS IMAVOV",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "MOICANO VS WAITING",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "DENIS VS ZIAM",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function FightNightThree() {
  const [currentEventThree, setCurrentEventThree] = useState(
    ALLEN_CHARRIERE[0]
  );

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventThree(ALLEN_CHARRIERE[index]);
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
        <FighterSlideThree onSlideChange={handleSlideChange} />
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

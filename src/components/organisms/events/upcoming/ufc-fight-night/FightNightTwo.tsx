import React, { useState } from "react";
import { UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";
import FighterSlideTwo from "@/components/molecules/events/upcoming-slide/FightSlideTwo";

type OnSlideChange = (index: number) => void;

const BURNS_BRADY = [
  {
    name: "BURNS VS BRADY",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "ASHMOUZ VS COSTA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "GARCIA VS NELSON",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "PADILLA VS PEEK",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "SAINT VS SCHNELL",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "SPANN VS ZHU",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function FightNightTwo() {
  const [currentEventTwo, setCurrentEventTwo] = useState(BURNS_BRADY[0]);

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventTwo(BURNS_BRADY[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center mt-16">
      <div>
        <Image
          src={UfcFightNight}
          alt="ufc-fight-night"
          width={120}
          height={120}
        />
      </div>

      <div className="w-full col-span-2">
        <FighterSlideTwo onSlideChange={handleSlideChange} />
      </div>

      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventTwo.name}</p>
        <p className="text-base font-bold">{currentEventTwo.event}</p>
        <p className="text-slate-400">{currentEventTwo.location}</p>
      </div>

      <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-light cursor-pointer bg-white border border-slate-200 text-sm">
        how to watch
      </div>
    </div>
  );
}

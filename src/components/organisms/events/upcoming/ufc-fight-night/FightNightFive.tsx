import React, { useState } from "react";
import { Ufc308logo, UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";
import FighterSlideFive from "@/components/molecules/events/upcoming-slide/FightSlideFive";
import { WatchTickets } from "@/components/atoms/events/button-upcoming-past";

type OnSlideChange = (index: number) => void;

const PEREIRA_ROUNTREE = [
  {
    name: "PEREIRA VS ROUNTREE",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "ALDO VS BAUTISTA",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "BUCKLEY VS DOLIDZE",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "EVLOEV VS HOLLAND",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
  {
    name: "STERLING VS THOMPSON",
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function FightNightFive() {
  const [currentEventThree, setCurrentEventThree] = useState(
    PEREIRA_ROUNTREE[0]
  );

  const handleSlideChange: OnSlideChange = (index: number) => {
    setCurrentEventThree(PEREIRA_ROUNTREE[index]);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 h-auto place-items-center my-16">
      <div>
        <Image src={Ufc308logo} alt="ufc-fight-night" width={90} height={90} />
      </div>
      <div className="w-full col-span-2">
        <FighterSlideFive onSlideChange={handleSlideChange} />
      </div>
      <div>
        {/* i need change name in here */}
        <p className="text-xl font-bold">{currentEventThree.name}</p>
        <p className="text-base font-bold">{currentEventThree.event}</p>
        <p className="text-slate-400">{currentEventThree.location}</p>
      </div>

      <WatchTickets />
    </div>
  );
}

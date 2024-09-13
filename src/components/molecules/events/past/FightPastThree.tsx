"use client";

import Image from "next/image";
import { Allen, Charriere } from "@/assets/upcoming";

const ALLEN_CHARRIERE = [
  {
    name: "ALLEN VS CHARRIERE",
    fighter_one: Allen,
    fighter_two: Charriere,
  },
];

export default function FighterPastThree() {
  return (
    <div>
      {ALLEN_CHARRIERE.map((ac, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={ac.fighter_two}
            alt={ac.name}
            width={230}
            height={230}
            className="absolute left-56 md:left-[30rem]"
          />
          <Image
            src={ac.fighter_one}
            alt={ac.name}
            width={230}
            height={230}
            className="relative right-20 z-10"
          />
        </div>
      ))}
    </div>
  );
}

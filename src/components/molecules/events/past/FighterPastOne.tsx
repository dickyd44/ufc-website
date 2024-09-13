"use client";

import { Magny, Morales } from "@/assets/upcoming";
import Image from "next/image";

const MAGNY_MORALES = [
  {
    name: "MAGNY VS MORALES",
    fighter_one: Magny,
    fighter_two: Morales,
  },
];

export default function FighterPastOne() {
  return (
    <div>
      {MAGNY_MORALES.map((mamo, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={mamo.fighter_two}
            alt={mamo.name}
            width={230}
            height={230}
            className="absolute left-56 md:left-[30rem]"
          />
          <Image
            src={mamo.fighter_one}
            alt={mamo.name}
            width={230}
            height={230}
            className="relative right-20 z-10"
          />
        </div>
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
import { Pereira, Rountree } from "@/assets/upcoming";

const PEREIRA_ROUNTREE = [
  {
    name: "PEREIRA VS ROUNTREE",
    fighter_one: Pereira,
    fighter_two: Rountree,
  },
];

export default function FighterPastFive() {
  return (
    <div>
      {PEREIRA_ROUNTREE.map((pr, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={pr.fighter_two}
            alt={pr.name}
            width={230}
            height={230}
            className="absolute left-56 md:left-[30rem]"
          />
          <Image
            src={pr.fighter_one}
            alt={pr.name}
            width={230}
            height={230}
            className="relative right-20 z-10"
          />
        </div>
      ))}
    </div>
  );
}

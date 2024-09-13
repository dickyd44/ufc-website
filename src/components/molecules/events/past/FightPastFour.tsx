"use client";

import Image from "next/image";
import { Merab, SugaSean } from "@/assets/upcoming";

const SUGA_MERAB = [
  {
    name: "SUGA VS MERAB",
    fighter_one: SugaSean,
    fighter_two: Merab,
  },
];

export default function FighterPastFour() {
  return (
    <div>
      {SUGA_MERAB.map((sm, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={sm.fighter_two}
            alt={sm.name}
            width={230}
            height={230}
            className="absolute left-56 md:left-[30rem]"
          />
          <Image
            src={sm.fighter_one}
            alt={sm.name}
            width={230}
            height={230}
            className="relative right-20 z-10"
          />
        </div>
      ))}
    </div>
  );
}

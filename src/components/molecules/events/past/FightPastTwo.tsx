"use client";

import Image from "next/image";
import { Brady, Burns } from "@/assets/upcoming";

const BURNS_BRADY = [
  {
    name: "BURNS VS BRADY",
    fighter_one: Burns,
    fighter_two: Brady,
  },
];

export default function FighterPastTwo() {
  return (
    <div>
      {BURNS_BRADY.map((bb, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={bb.fighter_two}
            alt={bb.name}
            width={230}
            height={230}
            className="absolute left-56 md:left-[30rem]"
          />
          <Image
            src={bb.fighter_one}
            alt={bb.name}
            width={230}
            height={230}
            className="relative right-20 z-10"
          />
        </div>
      ))}
    </div>
  );
}

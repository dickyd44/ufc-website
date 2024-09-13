"use client";

import Image from "next/image";
import { Holloway, Topuria } from "@/assets/upcoming";

const TOPURIA_HOLLOWAY = [
  {
    name: "HOLLOWAY VS TOPURIA",
    fighter_one: Holloway,
    fighter_two: Topuria,
  },
];

export default function FighterPastSix() {
  return (
    <div>
      {TOPURIA_HOLLOWAY.map((th, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Image
            src={th.fighter_two}
            alt={th.name}
            width={230}
            height={230}
            className="absolute left-56 md:left-[30rem]"
          />
          <Image
            src={th.fighter_one}
            alt={th.name}
            width={230}
            height={230}
            className="relative right-20 z-10"
          />
        </div>
      ))}
    </div>
  );
}

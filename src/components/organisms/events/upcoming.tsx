import React from "react";
import UpcomingPast from "./poster/UpcomingPast";
import { ForSale, Magny, Morales, UfcFightNight } from "@/assets/upcoming";
import Image from "next/image";

const MAGNY_MORALES = [
  {
    name: "MAGNY VS MORALES",
    fighter_one: Magny,
    fighter_two: Morales,
    event: "UFC APEX",
    location: "Las Vegas, NV United States",
  },
];

export default function EventUpcoming() {
  return (
    <section>
      <UpcomingPast />

      <div className="flex flex-col items-center justify-center mt-14">
        <Image src={ForSale} alt="for-sale" width={730} height={730} />
        <p className="text-6xl font-extrabold mt-20">UPCOMING</p>
        <p className="text-sm my-16">8 EVENTS</p>
      </div>
    </section>
  );
}

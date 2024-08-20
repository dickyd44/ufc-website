"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../../app/globals.css";
import { Navigation } from "swiper/modules";

import {
  Borshchev,
  Buzukja,
  Llontop,
  Magny,
  Medina,
  Meerschaert,
  Morales,
  Reese,
  Shahbazyan,
  Silva,
} from "@/assets/upcoming";
import Image from "next/image";

type OnSlideChange = (index: number) => void;

interface FighterSlideProps {
  onSlideChange: OnSlideChange;
}

const MAGNY_MORALES = [
  {
    name: "MAGNY VS MORALES",
    fighter_one: Magny,
    fighter_two: Morales,
  },
  {
    name: "BORSCHCHEV VS BUZUKJA",
    fighter_one: Borshchev,
    fighter_two: Buzukja,
  },
  {
    name: "LLONTOP VS MEDINA",
    fighter_one: Llontop,
    fighter_two: Medina,
  },
  {
    name: "MEERSCHAERT VS REESE",
    fighter_one: Meerschaert,
    fighter_two: Reese,
  },
  {
    name: "SHAHBAZYAN VS SILVA",
    fighter_one: Shahbazyan,
    fighter_two: Silva,
  },
];

export default function FighterSlideOne({ onSlideChange }: FighterSlideProps) {
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at once
      onSlideChange={(swiper) => {
        onSlideChange(swiper.realIndex);
      }}
    >
      {MAGNY_MORALES.map((mamo, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center">
            <Image
              src={mamo.fighter_two}
              alt={mamo.name}
              width={230}
              height={230}
              className="absolute right-10"
            />
            <Image
              src={mamo.fighter_one}
              alt={mamo.name}
              width={230}
              height={230}
              className="relative right-16 z-10"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

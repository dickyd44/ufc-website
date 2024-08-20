"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../../app/globals.css";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import {
  Allen,
  Charriere,
  Cunningham,
  Cutelaba,
  Denis,
  Frevola,
  Imavov,
  Moicano,
  NoProfile,
  Ziam,
} from "@/assets/upcoming";

type OnSlideChange = (index: number) => void;

interface FighterSlideProps {
  onSlideChange: OnSlideChange;
}

const ALLEN_CHARRIERE = [
  {
    name: "ALLEN VS CHARRIERE",
    fighter_one: Allen,
    fighter_two: Charriere,
  },
  {
    name: "CUNNINGHAM VS CUTABELA",
    fighter_one: Cunningham,
    fighter_two: Cutelaba,
  },
  {
    name: "FREVOLA VS IMAVOV",
    fighter_one: Frevola,
    fighter_two: Imavov,
  },
  {
    name: "MOICANO VS WAITING",
    fighter_one: Moicano,
    fighter_two: NoProfile,
  },
  {
    name: "DENIS VS ZIAM",
    fighter_one: Denis,
    fighter_two: Ziam,
  },
];

export default function FighterSlideThree({
  onSlideChange,
}: FighterSlideProps) {
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
      {ALLEN_CHARRIERE.map((ac, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center">
            <Image
              src={ac.fighter_two}
              alt={ac.name}
              width={230}
              height={230}
              className="absolute right-10"
            />
            <Image
              src={ac.fighter_one}
              alt={ac.name}
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

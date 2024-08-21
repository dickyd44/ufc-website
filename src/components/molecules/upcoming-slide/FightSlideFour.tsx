"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import {
  Aoriqileng,
  Bahamondes,
  Borjas,
  Chairez,
  Merab,
  Osbourne,
  Ribovic,
  Rodriguez,
  Rosas,
  SugaSean,
  Torres,
  Zellhubner,
} from "@/assets/upcoming";

type OnSlideChange = (index: number) => void;

interface FighterSlideProps {
  onSlideChange: OnSlideChange;
}

const SUGA_MERAB = [
  {
    name: "SUGA VS MERAB",
    fighter_one: SugaSean,
    fighter_two: Merab,
  },
  {
    name: "RAUL VS RODRIGUEZ",
    fighter_one: Rosas,
    fighter_two: Rodriguez,
  },
  {
    name: "AORIQILENG VS BAHAMONDES",
    fighter_one: Aoriqileng,
    fighter_two: Bahamondes,
  },
  {
    name: "BORJAS VS CHAIREZ",
    fighter_one: Borjas,
    fighter_two: Chairez,
  },
  {
    name: "OSBOURNE VS RIBOVICS",
    fighter_one: Osbourne,
    fighter_two: Ribovic,
  },

  {
    name: "TORRES VS ZELLHUBNER",
    fighter_one: Torres,
    fighter_two: Zellhubner,
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
      {SUGA_MERAB.map((sm, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center">
            <Image
              src={sm.fighter_two}
              alt={sm.name}
              width={230}
              height={230}
              className="absolute right-10"
            />
            <Image
              src={sm.fighter_one}
              alt={sm.name}
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

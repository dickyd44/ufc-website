"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import {
  Ashmouz,
  Brady,
  Burns,
  Costa,
  Garcia,
  Nelson,
  Padilla,
  Peek,
  Saint,
  Schnell,
  Spann,
  Zhu,
} from "@/assets/upcoming";

type OnSlideChange = (index: number) => void;

interface FighterSlideProps {
  onSlideChange: OnSlideChange;
}

const BURNS_BRADY = [
  {
    name: "BURNS VS BRADY",
    fighter_one: Burns,
    fighter_two: Brady,
  },
  {
    name: "ASHMOUZ VS COSTA",
    fighter_one: Ashmouz,
    fighter_two: Costa,
  },
  {
    name: "GARCIA VS NELSON",
    fighter_one: Garcia,
    fighter_two: Nelson,
  },
  {
    name: "PADILLA VS PEEK",
    fighter_one: Padilla,
    fighter_two: Peek,
  },
  {
    name: "SAINT VS SCHNELL",
    fighter_one: Saint,
    fighter_two: Schnell,
  },
  {
    name: "SPANN VS ZHU",
    fighter_one: Spann,
    fighter_two: Zhu,
  },
];

export default function FighterSlideTwo({ onSlideChange }: FighterSlideProps) {
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
      {BURNS_BRADY.map((bb, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center">
            <Image
              src={bb.fighter_two}
              alt={bb.name}
              width={230}
              height={230}
              className="absolute right-0 md:right-10"
            />
            <Image
              src={bb.fighter_one}
              alt={bb.name}
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

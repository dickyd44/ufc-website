"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import {
  Aldo,
  Bautista,
  Buckley,
  Dolidze,
  Evloev,
  Holland,
  Pereira,
  Rountree,
  Sterling,
  Thompson,
} from "@/assets/upcoming";

type OnSlideChange = (index: number) => void;

interface FighterSlideProps {
  onSlideChange: OnSlideChange;
}

const PEREIRA_ROUNTREE = [
  {
    name: "PEREIRA VS ROUNTREE",
    fighter_one: Pereira,
    fighter_two: Rountree,
  },
  {
    name: "ALDO VS BAUTISTA",
    fighter_one: Aldo,
    fighter_two: Bautista,
  },
  {
    name: "BUCKLEY VS DOLIDZE",
    fighter_one: Buckley,
    fighter_two: Dolidze,
  },
  {
    name: "EVLOEV VS HOLLAND",
    fighter_one: Evloev,
    fighter_two: Holland,
  },
  {
    name: "STERLING VS THOMPSON",
    fighter_one: Sterling,
    fighter_two: Thompson,
  },
];

export default function FighterSlideFive({ onSlideChange }: FighterSlideProps) {
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
      {PEREIRA_ROUNTREE.map((pr, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center">
            <Image
              src={pr.fighter_two}
              alt={pr.name}
              width={230}
              height={230}
              className="absolute right-0 md:right-10"
            />
            <Image
              src={pr.fighter_one}
              alt={pr.name}
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

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import {
  Abus,
  Ankalaev,
  Brunno,
  Chimaev,
  Gane,
  Holloway,
  Rakic,
  Topuria,
  Volkov,
  Whittaker,
} from "@/assets/upcoming";

type OnSlideChange = (index: number) => void;

interface FighterSlideProps {
  onSlideChange: OnSlideChange;
}

const TOPURIA_HOLLOWAY = [
  {
    name: "HOLLOWAY VS TOPURIA",
    fighter_one: Holloway,
    fighter_two: Topuria,
  },
  {
    name: "CHIMAEV VS WHITTAKER",
    fighter_one: Whittaker,
    fighter_two: Chimaev,
  },
  {
    name: "ANKALAEV VS RAKIC",
    fighter_one: Rakic,
    fighter_two: Ankalaev,
  },
  {
    name: "GANE VS MAGOMEDOV",
    fighter_one: Gane,
    fighter_two: Abus,
  },
  {
    name: "VOLKOV VS BRUNNO",
    fighter_one: Volkov,
    fighter_two: Brunno,
  },
];

export default function FighterSlideSix({ onSlideChange }: FighterSlideProps) {
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
      {TOPURIA_HOLLOWAY.map((th, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center">
            <Image
              src={th.fighter_two}
              alt={th.name}
              width={230}
              height={230}
              className="absolute right-0 md:right-10"
            />
            <Image
              src={th.fighter_one}
              alt={th.name}
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

"use client";
import UpcomingPast from "./poster/UpcomingPast";
import {
  ForSale,
  NewsUpcomingOne,
  NewsUpcomingTwo,
  UfcFightPass,
} from "@/assets/upcoming";
import Image from "next/image";
import FightNightOne from "./ufc-fight-night/FightNightOne";
import FightNightTwo from "./ufc-fight-night/FightNightTwo";
import FightNightThree from "./ufc-fight-night/FightNightThree";
import FightNightFour from "./ufc-fight-night/FightNightFour";
import { News15 } from "@/assets/trending/road-title";
import FightNightFive from "./ufc-fight-night/FightNightFive";
import FightNightSix from "./ufc-fight-night/FightNightSix";

export default function EventsUpcoming() {
  return (
    <section>
      <UpcomingPast />

      <div className="flex flex-col items-center justify-center mt-14">
        <Image src={ForSale} alt="for-sale" width={730} height={730} />
        <p className="text-6xl font-extrabold mt-20">UPCOMING</p>
        <p className="text-sm my-20">8 EVENTS</p>
      </div>

      <FightNightOne />
      <FightNightTwo />
      <FightNightFour />
      <FightNightThree />
      <FightNightFive />
      <FightNightSix />

      <div className="flex justify-center my-32">
        <div className="flex items-center justify-center uppercase w-52 h-16 shadow hover:bg-light cursor-pointer bg-white border border-slate-200">
          load more
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="relative h-full pb-16 uppercase border border-slate-200 rounded-sm shadow">
          <div className="w-full">
            <Image
              src={NewsUpcomingOne}
              alt="news-10"
              className="object-cover object-top h-full"
            />
          </div>
          <div className="p-5 h-auto flex flex-col justify-center items-center">
            <p className="text-sm font-bold text-red">Announcements</p>
            <p className="text-lg font-bold text-center mt-3">
              Alex Pereira Returns To Headline UFC 307 With Khalil…
            </p>
            <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
              Dana White, Matt Serra and Din Thomas return to Toronto for a cold
              plunge, scale the CN Tower, explore Niagara Falls and Bird
              Kingdom, before a night of action at Unified MMA 55
            </p>
            <div className="absolute bottom-5">
              <div className="text-sm w-32 h-10 border border-slate-200 hover:bg-light cursor-pointer shadow mt-3">
                <div className="flex justify-center items-center h-full">
                  more
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full pb-16 uppercase border border-slate-200 rounded-sm shadow">
          <div className="w-full">
            <Image
              src={NewsUpcomingTwo}
              alt="news-10"
              className="object-cover object-top h-full"
            />
          </div>
          <div className="p-5 h-auto flex flex-col justify-center items-center">
            {/* <p className="text-sm font-bold text-red">Announcements</p> */}
            <Image
              src={UfcFightPass}
              alt="fight-pass"
              width={85}
              height={85}
              className="mb-3"
            />
            <p className="text-lg font-bold text-center mt-3 leading-none">
              Undefeated Champion Callum Walsh Returns To Ireland To…
            </p>
            <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
              Undefeated Champion Callum Walsh Returns To Ireland To… TICKETS GO
              ON SALE AT 10 A.M. BST ON WEDNESDAY, AUGUST 21
            </p>
            <div className="absolute bottom-5">
              <div className="text-sm w-32 h-10 border border-slate-200 hover:bg-light cursor-pointer shadow mt-3">
                <div className="flex justify-center items-center h-full">
                  more
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full pb-16 uppercase border border-slate-200 rounded-sm shadow">
          <div className="w-full">
            <Image
              src={News15}
              alt="news-10"
              className="object-cover object-top h-full"
            />
          </div>
          <div className="p-5 h-auto flex flex-col items-center">
            <p className="text-sm font-bold text-red">Announcements</p>

            <p className="text-lg font-bold text-center mt-3">
              Featherweight Title Fight Headlines UFC 308 In Abu…
            </p>
            <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
              UFC CEO Dana White Announces Exciting Slate Of Fights For October
              26 Pay-Per-View
            </p>
            <div className="absolute bottom-5">
              <div className="text-sm w-32 h-10 border border-slate-200 hover:bg-light cursor-pointer shadow mt-3">
                <div className="flex justify-center items-center h-full">
                  more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

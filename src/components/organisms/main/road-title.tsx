import {
  News10,
  News11,
  News12,
  News13,
  News14,
  News15,
  News16,
  News9,
} from "@/assets/trending/road-title";
import Image from "next/image";
import React from "react";

export default function RoadTitle() {
  return (
    <section>
      <div className="mt-28 relative w-full h-screen">
        <Image
          src={News9}
          alt="road-title"
          layout="fill"
          className="absolute object-cover"
        />

        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center">
          <div className="text-white leading-snug tracking-wides">
            <h2 className="text-white uppercase text-sm font-bold">
              power slap
            </h2>
            <h1 className="text-white uppercase text-[110px] font-extrabold">
              road to the title
            </h1>
            <p className="text-white text-2xl font-semibold">
              Season 3 Is Underway Live And Free On Rumble
            </p>
          </div>

          <div className="flex absolute bottom-20 gap-8">
            <div className="flex items-center justify-center uppercase w-52 h-16 bg-white">
              watch new episode now!
            </div>
            <div className="flex items-center justify-center uppercase w-52 h-16 bg-white">
              season 3 trailer
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full xl:flex uppercase border border-slate-200 rounded-sm shadow">
            <div className="w-full">
              <Image
                src={News10}
                alt="news-10"
                className="object-cover xl:h-full lg:h-48"
              />
            </div>
            <div className="p-5 h-full flex flex-col xl:justify-center lg:justify-start">
              <p className="text-sm font-bold text-red">
                dana white&apos;s contender series
              </p>
              <p className="text-base font-bold">
                week 1 result + scorecards dana white&apos;s contender series...
              </p>
            </div>
          </div>

          <div className="h-full uppercase border border-slate-200 rounded-sm shadow">
            <div className="w-full">
              <Image
                src={News11}
                alt="news-10"
                className="object-cover object-top h-48"
              />
            </div>
            <div className="p-5 h-auto flex flex-col justify-center">
              <p className="text-sm font-bold text-red">
                dana white&apos;s contender series
              </p>
              <p className="text-base font-bold">
                week 1 result + scorecards dana white&apos;s contender series...
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="h-full uppercase border border-slate-200 rounded-sm shadow">
            <div className="w-full">
              <Image
                src={News12}
                alt="news-10"
                className="object-cover object-top h-48"
              />
            </div>
            <div className="p-5 h-auto flex flex-col justify-center">
              <p className="text-sm font-bold text-red">
                dana white&apos;s contender series
              </p>
              <p className="text-base font-bold">
                week 1 result + scorecards dana white&apos;s contender series...
              </p>
            </div>
          </div>

          <div className="h-full flex uppercase border border-slate-200 rounded-sm shadow">
            <div className="p-5 h-auto flex flex-col justify-center">
              <p className="text-sm font-bold text-red">
                dana white&apos;s contender series
              </p>
              <p className="text-base font-bold">
                week 1 result + scorecards dana white&apos;s contender series...
              </p>
            </div>
            <div className="w-full">
              <Image
                src={News13}
                alt="news-10"
                className="object-cover object-top h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center my-20">
          <div className="flex items-center justify-center uppercase w-52 h-16 shadow hover:bg-light cursor-pointer bg-white border border-slate-200">
            view more
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="relative h-full pb-16 uppercase border border-slate-200 rounded-sm shadow">
            <div className="w-full">
              <Image
                src={News14}
                alt="news-10"
                className="object-cover object-top h-full"
              />
            </div>
            <div className="p-5 h-auto flex flex-col justify-center items-center">
              <p className="text-sm font-bold text-red">
                Dana White: Lookin’ For A Fight
              </p>
              <p className="text-lg font-bold text-center mt-3">
                Dana White: Lookin' For A Fight | Toronto...
              </p>
              <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
                Dana White, Matt Serra and Din Thomas return to Toronto for a
                cold plunge, scale the CN Tower, explore Niagara Falls and Bird
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
                src={News15}
                alt="news-10"
                className="object-cover object-top h-full"
              />
            </div>
            <div className="p-5 h-auto flex flex-col justify-center items-center">
              <p className="text-sm font-bold text-red">Announcements</p>
              <p className="text-lg font-bold text-center mt-3 leading-none">
                Featherweight Title Fight Headlines UFC 308 In Abu…
              </p>
              <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
                UFC CEO Dana White Announces Exciting Slate Of Fights For
                October 26 Pay-Per-View
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
                src={News16}
                alt="news-10"
                className="object-cover object-top h-full"
              />
            </div>
            <div className="p-5 h-auto flex flex-col items-center">
              <p className="text-sm font-bold text-red">Embedded</p>
              <p className="text-lg font-bold text-center mt-3">
                UFC 305 Embedded | All Episodes
              </p>
              <p className="capitalized truncate w-full text-sm text-slate-400 mt-3">
                Go Behind The Scenes With The Athletes Fighting At UFC 305: Du
                Plessis vs Adesanya In Perth, Western Australia On August 17,
                2024
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
      </div>
    </section>
  );
}

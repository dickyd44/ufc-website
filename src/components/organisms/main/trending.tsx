import { Adesanya, Plessis, Ufc305 } from "@/assets/trending/match";
import {
  News1,
  News2,
  News3,
  News4,
  News5,
  News6,
  News7,
  News8,
  SponsorBox,
} from "@/assets/trending/trending-now";
import Image from "next/image";
import React from "react";

export default function Trending() {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center border-b border-slate-300 shadow-2xl max-h-[200px]">
        <div className="flex items-center mt-5">
          <Image src={Plessis} alt="Plessis" width={70} />
          <div className="flex flex-col justify-center items-center mx-4">
            <Image src={Ufc305} alt="ufc-305" width={75} />
            <p className="uppercase text-xl font-bold max-w-28 mt-3 text-center leading-tight">
              du plessis vs adesanya
            </p>
          </div>
          <Image src={Adesanya} alt="Adesanya" width={70} />
        </div>
      </div>

      <div className="uppercase flex flex-col justify-center items-center mt-32">
        <h1 className="text-6xl">What&apos;s trending now</h1>
        <p className="text-xs tracking-widest mt-3 text-slate-400">
          sponsored by
        </p>
        <Image src={SponsorBox} alt="sponsor" width={50} className="mt-2" />
      </div>

      <div className="container">
        <div className="md:grid grid-cols-1 md:grid-cols-8 md:gap-4 mt-14">
          <div className="col-span-2 uppercase w-full border border-slate-200 rounded-sm shadow">
            <Image src={News1} alt="news-1" width={1000} />
            <div className="p-5">
              <p className="text-sm font-bold text-red">watch ufc</p>
              <p className="text-base font-bold">
                how to watch and stream match ufc 305: du plessis vs adesanya...
              </p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-4 my-4 md:my-0">
            <div className="h-full md:flex uppercase border border-slate-200 rounded-sm shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full">
                  <Image
                    src={News2}
                    alt="news-1"
                    className="object-cover md:object-center h-full"
                  />
                </div>
                <div className="p-5 h-full flex flex-col justify-center">
                  <p className="text-sm font-bold text-red">
                    dana white&apos;s contender series
                  </p>
                  <p className="text-base font-bold">
                    week 1 result + scorecards dana white&apos;s contender
                    series...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 uppercase w-full h-full">
            <Image
              src={News3}
              alt="news-1"
              width={1000}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <Image
              src={News4}
              alt="news-4"
              width={1000}
              height={1000}
              className="h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark opacity-35" />

            <p className="absolute bottom-0 left-0 p-5 uppercase text-5xl text-white font-bold">
              ufc 305 embedded | episode 2
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="h-full flex uppercase border border-slate-200 rounded-sm shadow">
              <div className="w-full">
                <Image
                  src={News5}
                  alt="news-5"
                  className="object-cover h-full"
                />
              </div>
              <div className="p-5 h-full flex flex-col justify-center">
                <p className="text-sm font-bold text-red">athletes</p>
                <p className="text-base font-bold">
                  coach conversation ufc 305: du plessis vs adesanya...
                </p>
              </div>
            </div>

            <div>
              <Image src={News6} alt="news-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="uppercase w-full border border-slate-200 rounded-sm shadow">
            <Image src={News7} alt="news-1" width={1000} />
            <div className="p-5">
              <p className="text-sm font-bold text-red">interviews</p>
              <p className="text-base font-bold">
                dan hooker fight week interviews ufc 305...
              </p>
            </div>
          </div>
          <div className="uppercase w-full border border-slate-200 rounded-sm shadow">
            <Image src={News8} alt="news-1" width={1000} />
            <div className="p-5">
              <p className="text-sm font-bold text-red">athletes</p>
              <p className="text-base font-bold">
                fighters on the rise | ufc 305
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

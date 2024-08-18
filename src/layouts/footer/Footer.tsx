"use client";
import Image from "next/image";
import UfcLogo from "/public/UFC_Logo.svg";
import ArrowDown from "/public/arrow-down.svg";
import Ultiman from "@/assets/footer/ultiman_logo_75.png";
import { useState } from "react";

const UFC = [
  {
    list: "The Sport",
  },
  {
    list: "UFC Foundation",
  },
  {
    list: "Careers",
  },
  {
    list: "Store",
  },
  {
    list: "UFC Fight Club",
  },
  {
    list: "UFC Video",
  },
  {
    list: "Archive",
  },
];

const SOCIAL_MEDIA = [
  {
    list: "Facebook",
  },
  {
    list: "Instagram",
  },
  {
    list: "TikTok",
  },
  {
    list: "X",
  },
  {
    list: "Youtube",
  },
];

const HELP = [
  {
    list: "Fight Pass FAQ",
  },
  {
    list: "Device",
  },
  {
    list: "Press",
  },
  {
    list: "Credentials",
  },
];

const LEGAL = [
  {
    list: "Terms",
  },
  {
    list: "Privacy Police",
  },
  {
    list: "Ad Choices",
  },
];

const WORLD = [
  {
    country: "Brazil",
  },
  {
    country: "China",
  },
  {
    country: "France",
  },
  {
    country: "Japan",
  },
  {
    country: "Korea",
  },
  {
    country: "Latin America",
  },
  {
    country: "Russia",
  },
  {
    country: "USA Espanol",
  },
  {
    country: "Indonesia",
  },
];

export default function Footer() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className="bg-dark">
      <div className="container flex flex-col md:flex-row items-center md:items-stretch justify-around md:justify-between w-full min-h-[24rem] text-white py-5">
        <div className="uppercase flex flex-col justify-between items-center md:items-start pb-8 border-b border-slate-300 md:border-none md:pb-0 w-full">
          <div className="flex items-center gap-5">
            <Image src={UfcLogo} alt="ufc-logo" width={90} />
            <div className="relative flex items-center gap-1">
              <a href="#" className="text-sm font-bold">
                ufc.com
              </a>{" "}
              -{" "}
              <span
                onClick={toggleDropdown}
                className="cursor-pointer flex gap-1 items-start text-sm font-bold"
              >
                world{" "}
                <Image
                  src={ArrowDown}
                  alt="arrow-down"
                  width={18}
                  height={18}
                />
              </span>
              {/* Country Menu */}
              {dropdownVisible && (
                <div className="absolute left-0 top-full mt-1 w-[15rem] bg-white text-black py-2 px-4 rounded shadow-lg z-50">
                  {WORLD.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-sm hover:bg-gray-200 cursor-pointer p-1 rounded"
                    >
                      {item.country}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Image
            src={Ultiman}
            alt="ultiman"
            width={90}
            className="hidden md:block"
          />
        </div>

        <div className="flex justify-center gap-8 w-full pb-8 border-b border-slate-300 md:border-none md:pb-0">
          <div>
            <h3 className="text-white text-bold">UFC</h3>
            {UFC.map((ufc, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {ufc.list}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-bold">SOCIAL MEDIA</h3>
            {SOCIAL_MEDIA.map((sosmed, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {sosmed.list}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-bold">HELP</h3>
            {HELP.map((help, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {help.list}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-white text-bold">LEGAL</h3>
            {LEGAL.map((legal, idx) => (
              <p
                key={idx}
                className="text-slate-500 font-bold hover:text-white cursor-pointer"
              >
                {legal.list}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

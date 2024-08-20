"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import UfcLogo from "/public/UFC_Logo.svg";
import SearchLogo from "/public/search_logo.svg";
import Xmark from "/public/x.svg";
import Link from "next/link";

// for the navbar
const listFirst = [
  {
    title: "events",
    link: "#",
  },
  {
    title: "rankings",
    link: "#",
  },
  {
    title: "athletes",
    link: "#",
  },
  {
    title: "news",
    link: "#",
  },
];

const listSecond = [
  {
    title: "tuf 32",
    link: "#",
  },
  {
    title: "connect",
    link: "#",
  },
  {
    title: "watch",
    link: "#",
  },
  {
    title: "shop",
    link: "#",
  },
];

// for the fill navbar left
const listEvent = [
  {
    list: "upcoming",
    link: "/events/upcoming",
  },
  {
    list: "past",
  },
  {
    list: "tickets",
  },
  {
    list: "vip experience",
  },
  {
    list: "group sales",
  },
  {
    list: "ufc fight pass invitational",
  },
  {
    list: "road to ufc",
  },
  {
    list: "dana white contender series",
  },
  {
    list: "ufc 303 travel deals",
  },
];

const listAthletes = [
  {
    list: "all athletes",
  },
  {
    list: "hall of fame",
  },
  {
    list: "record book",
  },
];

//for the fill navbar right
const listDwcs = [
  {
    list: "how to watch the ultimate fighter",
  },
];

const listConnect = [
  {
    list: "newsletter",
  },
  {
    list: "ufc fight club",
  },
  {
    list: "ufc apex",
  },
  {
    list: "find a gym",
  },
  {
    list: "ea sport ufc 5",
  },
  {
    list: "betting odds",
  },
];

const listWatch = [
  {
    list: "how to watch",
  },
  {
    list: "find a bar",
  },
  {
    list: "ufc fight pass",
  },
  {
    list: "ufc video archive",
  },
];

const listShop = [
  {
    list: "ufc store",
  },
  {
    list: "ufc collectibles",
  },
  {
    list: "venum fight week",
  },
  {
    list: "ufc strike",
  },
  {
    list: "more",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeIndexFirst, setActiveIndexFirst] = useState(null); // Track active item
  const [activeIndexSecond, setActiveIndexSecond] = useState(null); // Track active item
  const [activeSearch, setActiveSearch] = useState(false);
  const [dropdownVisibleFirst, setDropdownVisibleFirst] = useState(false);
  const [dropdownVisibleSecond, setDropdownVisibleSecond] = useState(false);

  const pathname = usePathname();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  const handleItemClickFirst = (index: any) => {
    setActiveSearch(false);

    if (
      listFirst[index].title === "events" ||
      listFirst[index].title === "athletes"
    ) {
      if (index === activeIndexFirst) {
        setDropdownVisibleFirst(false);
        setTimeout(() => setActiveIndexFirst(null), 300);
      } else {
        setActiveIndexFirst(index);
        setDropdownVisibleFirst(true);
        // Close the second dropdown if it's open
        setActiveIndexSecond(null);
        setDropdownVisibleSecond(false);
      }
    }
  };

  const handleItemClickSecond = (index: any) => {
    setActiveSearch(false);

    if (
      listSecond[index].title === "tuf 32" ||
      listSecond[index].title === "connect" ||
      listSecond[index].title === "watch" ||
      listSecond[index].title === "shop"
    ) {
      if (index === activeIndexSecond) {
        setDropdownVisibleSecond(false);
        setTimeout(() => {
          setActiveIndexSecond(null);
        }, 300);
      } else {
        setActiveIndexSecond(index);
        setDropdownVisibleSecond(true);
        // Close the first dropdown if it's open
        setActiveIndexFirst(null);
        setDropdownVisibleFirst(false);
      }
    }
  };

  const handleClickSearch = () => {
    setActiveSearch((prev) => !prev);
    setActiveIndexFirst(null);
    setDropdownVisibleFirst(false);
    setActiveIndexSecond(null);
    setDropdownVisibleSecond(false);
  };

  return (
    <div className="flex justify-center">
      <nav className="bg-white w-[90%] md:w-[95%] z-50 rounded-t-sm shadow-xl mt-5 max-sm:m-3.5 px-8 max-sm:ps-2 absolute">
        <div className="h-16 xl:h-[4rem] md:h-20 flex justify-between items-center">
          {/* list tab left */}
          <div className="hidden md:flex md:gap-4 items-center text-sm lg:text-base font-head font-medium">
            <div className="hidden h-auto lg:flex items-center md:gap-4 lg:gap-5 lg:text-sm font-body text-black text-sm">
              {listFirst.map((menu, index) => (
                <div key={index}>
                  <Link href={menu.link} className="max-w-full">
                    <p
                      onClick={() => handleItemClickFirst(index)}
                      className={`uppercase border-red hover:border-b-[2px] hover:smooth transition duration-200 max-2xl:text-[13px] ${
                        pathname === menu.link
                          ? "hover:border-red hover:border-b-[2px]"
                          : ""
                      }`}
                    >
                      {menu.title}
                    </p>
                  </Link>

                  {menu.title === "events" && (
                    <div
                      className={`${
                        activeIndexFirst === index && dropdownVisibleFirst
                          ? "opacity-100 visible pointer-events-auto z-40"
                          : "opacity-0 invisible pointer-events-none"
                      } transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
                    >
                      <div className="flex justify-around items-center py-2">
                        {listEvent.map((submenu, subIndex) =>
                          submenu.link ? (
                            <Link
                              key={subIndex}
                              href={submenu.link}
                              onClick={() => {
                                if (submenu.list) {
                                  // Explicitly close the dropdown when "upcoming" is clicked
                                  setDropdownVisibleFirst(false);
                                  setActiveIndexFirst(null);
                                }
                              }}
                            >
                              <p className="uppercase text-slate-400 hover:text-dark">
                                {submenu.list}
                              </p>
                            </Link>
                          ) : (
                            <p
                              key={subIndex}
                              className="uppercase text-slate-400 hover:text-dark"
                            >
                              {submenu.list}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  {menu.title === "athletes" && (
                    <div
                      className={`${
                        activeIndexFirst === index && dropdownVisibleFirst
                          ? "opacity-100 visible pointer-events-auto z-40"
                          : "opacity-0 invisible pointer-events-none"
                      } container transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
                    >
                      <div className="flex justify-start items-center gap-5 py-2">
                        {listAthletes.map((submenu, subIndex) => (
                          <Link key={subIndex} href="#">
                            <p className="uppercase text-slate-400 hover:text-dark">
                              {submenu.list}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* logo middle */}
          <Link
            href="/"
            onClick={() => {
              setActiveIndexFirst(null);
              setDropdownVisibleFirst(false);
              setActiveIndexSecond(null);
              setDropdownVisibleSecond(false);
              setActiveSearch(false);
            }}
            className={`${
              pathname === "/"
                ? "border-none"
                : "hover:border-b hover:border-b-red"
            }`}
          >
            <div
              className={`${
                pathname === "/" ? "border-b-2 border-b-red" : ""
              } pb-2`}
            >
              <Image
                src={UfcLogo}
                alt="shopify-icon"
                width={80}
                className="object-cover z-20 relative"
              />
            </div>
          </Link>

          {/* list tab right */}
          <div className="hidden md:flex md:gap-4 items-center text-sm lg:text-base font-head font-medium">
            <div
              className={`hidden h-auto lg:flex items-center md:gap-4 lg:gap-5 lg:text-sm font-body text-black text-sm`}
            >
              {listSecond.map((menu, index) => (
                <div key={index}>
                  <Link href={menu.link} className="max-w-full">
                    <p
                      onClick={() => handleItemClickSecond(index)}
                      className={`uppercase border-red hover:border-b-[2px] hover:smooth transition duration-200 max-2xl:text-[13px] ${
                        pathname === menu.link
                          ? "hover:border-red hover:border-b-[2px]"
                          : ""
                      }`}
                    >
                      {menu.title}
                    </p>
                  </Link>

                  {menu.title === "tuf 32" && (
                    <div
                      className={`${
                        activeIndexSecond === index && dropdownVisibleSecond
                          ? "opacity-100 visible pointer-events-auto z-40"
                          : "opacity-0 invisible pointer-events-none"
                      } container transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
                    >
                      <div className="flex justify-end items-center py-2">
                        {listDwcs.map((submenu, idx) => (
                          <Link key={idx} href="#">
                            <p className="uppercase text-slate-400 hover:text-dark">
                              {submenu.list}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {menu.title === "connect" && (
                    <div
                      className={`${
                        activeIndexSecond === index && dropdownVisibleSecond
                          ? "opacity-100 visible pointer-events-auto z-40"
                          : "opacity-0 invisible pointer-events-none"
                      } container transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
                    >
                      <div className="flex justify-end items-center gap-5 py-2">
                        {listConnect.map((submenu, idx) => (
                          <Link key={idx} href="#">
                            <p className="uppercase text-slate-400 hover:text-dark">
                              {submenu.list}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {menu.title === "watch" && (
                    <div
                      className={`${
                        activeIndexSecond === index && dropdownVisibleSecond
                          ? "opacity-100 visible pointer-events-auto z-40"
                          : "opacity-0 invisible pointer-events-none"
                      } container transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
                    >
                      <div className="flex justify-end items-center gap-5 py-2">
                        {listWatch.map((submenu, idx) => (
                          <Link key={idx} href="#">
                            <p className="uppercase text-slate-400 hover:text-dark">
                              {submenu.list}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {menu.title === "shop" && (
                    <div
                      className={`${
                        activeIndexSecond === index && dropdownVisibleSecond
                          ? "opacity-100 visible pointer-events-auto z-40"
                          : "opacity-0 invisible pointer-events-none"
                      } container transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
                    >
                      <div className="flex justify-end items-center gap-5 py-2">
                        {listShop.map((submenu, idx) => (
                          <Link key={idx} href="#">
                            <p className="uppercase text-slate-400 hover:text-dark">
                              {submenu.list}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {activeSearch ? (
                <Image
                  onClick={handleClickSearch}
                  src={Xmark}
                  width={20}
                  height={20}
                  alt="search-logo"
                  className="cursor-pointer"
                />
              ) : (
                <Image
                  onClick={handleClickSearch}
                  src={SearchLogo}
                  width={20}
                  height={20}
                  alt="search-logo"
                  className="cursor-pointer"
                />
              )}

              <div
                className={`${
                  activeSearch ? "opacity-100 visible" : "opacity-0 invisible"
                } container transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 rounded-b-sm bg-light`}
              >
                <div className="flex justify-between items-center gap-5 py-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded-sm w-full outline-none"
                  />
                  <Image
                    onClick={handleClickSearch}
                    src={SearchLogo}
                    width={20}
                    height={20}
                    alt="search-logo"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer lg:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full" />
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full" />
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full" />
          </div>
        </div>
      </nav>
    </div>
  );
}

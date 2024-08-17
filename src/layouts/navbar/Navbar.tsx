"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import UfcLogo from "/public/UFC_Logo.svg";
import Link from "next/link";

const listFirst = [
  {
    title: "events",
    link: "/",
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

const listEvent = [
  {
    list: "upcoming",
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null); // Track active item
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  const handleItemClick = (index: any) => {
    if (index === activeIndex) {
      setDropdownVisible(false);
      setTimeout(() => setActiveIndex(null), 300);
    } else {
      setActiveIndex(index);
      setDropdownVisible(true);
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="bg-white w-[90%] md:w-[95%] z-50 rounded-t-sm shadow-xl mt-5 max-sm:m-3.5 px-8 max-sm:ps-2 absolute">
        <div className="h-16 xl:h-[4rem] md:h-20 flex justify-between items-center">
          <div className="hidden md:flex md:gap-4 items-center text-sm lg:text-base font-head font-medium">
            <div className="hidden h-auto lg:flex items-center md:gap-4 lg:gap-5 lg:text-sm font-body text-black text-sm">
              {listFirst.map((menu, index) => (
                <div>
                  <Link
                    key={index}
                    href={menu.link}
                    className={`max-w-full ${
                      pathname === menu.link ? "border-red border-b-[2px]" : ""
                    }`}
                  >
                    <p
                      onClick={() => handleItemClick(index)}
                      className={`uppercase border-red hover:border-b-[2px] hover:smooth transition duration-200 max-2xl:text-[13px] ${
                        pathname === menu.link ? "hover:border-none" : ""
                      }`}
                    >
                      {menu.title}
                    </p>
                  </Link>
                  <div
                    className={`${
                      activeIndex === index && dropdownVisible
                        ? "opacity-100"
                        : "opacity-0"
                    } transition-all duration-300 ease-in-out overflow-hidden absolute place-content-center top-full left-0 w-full h-16 xl:h-[4rem] md:h-20 bg-light`}
                  >
                    <div className="flex justify-around items-center py-2">
                      {listEvent.map((submenu, subIndex) => (
                        <Link key={subIndex} href="#">
                          <p className="uppercase text-slate-400 hover:text-dark">
                            {submenu.list}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="/">
            <Image
              src={UfcLogo}
              alt="shopify-icon"
              width={80}
              className="object-cover z-20 relative"
            />
          </a>

          <div className="hidden md:flex md:gap-4 items-center text-sm lg:text-base font-head font-medium">
            <div
              className={`hidden h-auto lg:flex items-center md:gap-4 lg:gap-5 lg:text-sm font-body text-black text-sm`}
            >
              {listSecond.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.link}
                  className={`max-w-full me-1.5 ${
                    pathname === menu.link ? "border-red border-b-[2px]" : ""
                  }`}
                >
                  <p
                    className={`uppercase border-red hover:border-b-[2px] hover:smooth transition duration-200 max-2xl:text-[13px] ${
                      pathname === menu.link ? "hover:border-none" : ""
                    }`}
                  >
                    {menu.title}
                  </p>
                </Link>
              ))}
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

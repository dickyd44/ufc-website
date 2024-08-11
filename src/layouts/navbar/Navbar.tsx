"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import NavbarDropdown from "./NavbarDropdown";
// import { LogoBsiNavbar } from "@/assets/landing-pages";
import Image from "next/image";
import UfcLogo from "/public/UFC_Logo.svg";
// import { menuList } from "@/constant/menu";
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

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
      window.addEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  //   const isInvoiceTemplate = pathname === "/invoice-template";

  return (
    <div className={`flex justify-center`}>
      <nav className="bg-light w-[90%] md:w-[95%] z-50 rounded-[5px] shadow-xl mt-5 max-sm:m-3.5 px-8 max-sm:ps-2 absolute">
        <div className="relative">
          <div className="h-16 xl:h-[4rem] md:h-20 flex justify-between items-center">
            {/* button */}
            <div className="hidden md:flex md:gap-4 items-center text-sm lg:text-base font-head font-medium">
              {/* menu */}
              <div
                className={`hidden h-auto lg:flex items-center md:gap-4 lg:gap-5 lg:text-sm font-body text-black text-sm`}
              >
                {listFirst.map((menu, index) => (
                  <Link
                    id="nav"
                    key={index}
                    href={menu.link}
                    className={`max-w-full ${
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

            {/* icon */}
            <a href="/">
              <Image
                src={UfcLogo}
                alt="shopify-icon"
                width={80}
                className="object-cover z-20 relative"
              />
            </a>

            <div className="hidden md:flex md:gap-4 items-center text-sm lg:text-base font-head font-medium">
              {/* menu */}
              <div
                className={`hidden h-auto lg:flex items-center md:gap-4 lg:gap-5 lg:text-sm font-body text-black text-sm`}
              >
                {listSecond.map((menu, index) => (
                  <Link
                    id="nav"
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

            {/* humberger */}
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

          {/* navbar mobile menu */}
          {/* <NavbarDropdown isOpen={isOpen} /> */}
        </div>
      </nav>
    </div>
  );
}

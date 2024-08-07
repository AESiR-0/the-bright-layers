"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/vercel.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Service",
    link: "/service",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

interface nav {
  title: string;
  link: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <nav className="w-screen items-center flex justify-between overflow-hidden px-5 md:px-20 h-20 bg-seconday-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            alt="The Bright Layers Logo"
            src={logo}
            width={128}
            height={128}
          />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="bg-secondary fixed flex flex-col justify-center items-center overflow-hidden top-0 left-0 z-50">
              {navItems.map((item: nav, index: number) => {
                return (
                  <Link
                    key={index}
                    className={`group transition-all ${
                      item.link === pathName ? "text-accent" : "text-secondary"
                    }`}
                    href={item.link}
                  >
                    {item.title}
                    <div className="bg-secondary scale-x-0 h-[2px] w-full group-hover:scale-x-100 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div
          className={`hidden md:flex-row md:flex font-sans text-lg text-secondary gap-10 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {navItems.map((item: nav, index: number) => {
            return (
              <Link
                key={index}
                className={`group transition-all  ${
                  item.link === pathName ? "text-accent" : "text-secondary"
                }`}
                href={item.link}
              >
                {item.title}
                <div
                  className={`${
                    item.link === pathName
                      ? "bg-accent scale-x-100 group-hover:scale-x-0 "
                      : "scale-x-0 group-hover:scale-x-100 bg-secondary "
                  }  h-[2px] w-full  transition-all duration-300`}
                ></div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/static/logo/logo.png";
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
    link: "/services",
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

  return (
    <>
      <div className="w-screen flex items-center justify-between px-5 md:px-20 h-28 bg-secondary">
        {/* Logo */}
        <div className="flex   max-md:relative max-md:justify-center   items-center justify-between w-full md:w-auto">
          <div className="flex-col justify-center items-center flex gap-1">
            <Image
              alt="The Bright Layers Logo"
              src={logo}
              width={64}
              height={64}
            />
            <h1 className="text-white font-quicksand text-lg">
              The Bright Layers
            </h1>
          </div>
          {/* Hamburger Button (Mobile View) */}
          .
          <button
            className="md:hidden text-white absolute right-2 z-50"
            onClick={() => setIsOpen(!isOpen)} // Toggle the menu on click
          >
            {/* Hamburger Icon */}
            <div
              className={`w-6 h-0.5 bg-white mb-2 transition-all duration-300 transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white mb-2 transition-all duration-300 transform ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu (hidden on medium and larger screens) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-secondary z-50 transition-transform duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon (X) */}
          <button
            className="absolute top-16 right-5 md:hidden text-white z-50"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item: nav, index: number) => {
              return (
                <Link
                  key={index}
                  className={`group py-3 px-4 text-lg text-white transition-all ${
                    item.link === pathName ? "text-orange-500" : "text-white"
                  }`}
                  href={item.link}
                  onClick={() => setIsOpen(false)} // Close menu when link is clicked
                >
                  {item.title}
                  <div className="bg-orange-500 scale-x-0 h-[2px] w-full group-hover:scale-x-100 transition-all duration-300"></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Menu (hidden on small screens) */}
        <div className="hidden md:flex md:flex-row font-sans text-lg text-secondary gap-10 items-center">
          {navItems.map((item: nav, index: number) => {
            return (
              <Link
                key={index}
                className={`group transition-all ${
                  item.link === pathName ? "text-orange-500" : "text-white"
                }`}
                href={item.link}
              >
                {item.title}
                <div
                  className={`${
                    item.link === pathName
                      ? "bg-orange-500 scale-x-100 group-hover:scale-x-0"
                      : "scale-x-0 group-hover:scale-x-100 bg-white"
                  } h-[2px] w-full transition-all duration-300`}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

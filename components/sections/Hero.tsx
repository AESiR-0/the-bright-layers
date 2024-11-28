import React from "react";
import Image from "next/image";
import heroImage from "@/public/static/home/bg.jpg";
import Link from "next/link";
import overlayImage from "@/public/static/home/overlay.jpeg";

export default function Hero() {
  return (
    <div className="h-screen my-10 flex flex-col-reverse md:flex-row justify-between items-center w-full overflow-hidden px-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col max-md:items-center items-start max-md:justify-center justify-start px-10 md:items-start gap-10 text-center md:text-left">
        <h1 className="font-serif text-3xl md:text-5xl leading-tight">
          Hire Yourself A Social Media Cheerleader.
        </h1>
        <p className="text-lg md:text-xl px-4 md:px-0 max-w-md">
          Trust us to make your brand feel like the ✨main character✨, with creativity, innovation, and strategy at your digital doorstep.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <button className="text-center w-[200px] bg-none border max-w-xs border-secondary text-black text-xl h-10 rounded-lg hover:border-none hover:bg-secondary hover:text-white transition-all">
            <Link href="/services">See our Services</Link>
          </button>
        </div>
      </div>

      {/* Right Section (Images) */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        {/* Overlay Image (Mobile view hidden) */}
        <Image
          src={overlayImage}
          alt="overlay"
          className="absolute top-16 md:left-12 left-10 top-20 md:top-48 hidden md:block"
          height={400}
          width={350}
        />
        <Image
          src={heroImage}
          className="w-full max-w-lg object-cover"
          alt="hero"
          height={600}
          width={550}
        />
        {/* Another Overlay Image */}
        <Image
          src={overlayImage}
          alt="overlay"
          className="absolute left-1/2 top-1/3 transform -translate-x-1/2 hidden md:block"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}

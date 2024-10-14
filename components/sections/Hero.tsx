import React from "react";
import Image from "next/image";
import heroImage from "@/public/static/home/bg.jpg";
import Link from "next/link";
import overlayImage from "@/public/static/home/overlay.jpeg";

export default function Hero() {
  return (
    <>
      <div className="h-[100vh] overflow-hidden max-md:flex-col-reverse max-md:text-center max-md:gap-12 justify-around  flex w-full">
        <div className="w-1/2 max-md:w-full">
          <div className="flex items-center gap-8 px-2  h-full w-full justify-center  flex-col">
            <h1 className="font-serif  w-[400px] leading-[50px]  text-5xl">
              Hire Yourself A Social Media Cheerleader.
            </h1>
            <p className="w-[400px] pr-3">
              Trust us to make your brand feel like the ✨main character✨, with
              creativity, innovation, and strategy at your digital doorstep
            </p>
            <div className="flex justify-start w-[400px] max-md:w-full">
              <button className="text-center w-[200px] bg-none border max-md:w-full max-md:px-2 border-seconday-2 text-accent text-xl h-10 rounded-lg hover:border-none hover:bg-accent hover:text-white transition-all">
                {" "}
                <Link href={"/services"}>See our Services </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full max-md:px-0 max flex justify-end relative ">
          <Image
            src={overlayImage}
            alt="overlay"
            className="absolute  max-md:hidden left-12 top-20"
            height={400}
            width={350}
          />
          <Image
            src={heroImage}
            className="max-md:w-full "
            alt="hero"
            height={600}
            width={550}
          />
          <Image
            src={overlayImage}
            alt="overlay"
            className="absolute max-md:hidden left-64 top-48"
            height={200}
            width={200}
          />
        </div>
      </div>
    </>
  );
}

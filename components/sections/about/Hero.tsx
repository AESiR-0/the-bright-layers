import React from "react";

export default function Hero() {
  return (
    <div className="lg:h-[75vh] max-md:h-[75vh] sm:h-[50vh]  gap-5 pb-20 bg-primary flex flex-col items-center justify-center w-full text-center">
      <h6 className="font-thin text-orange-500 text-md sm:text-md md:text-lg lg:text-xl tracking-wider uppercase">
        We don't gatekeep  knowledge
      </h6>
      <h1 className="font-semibold text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        About Us
      </h1>
    </div>
  );
}

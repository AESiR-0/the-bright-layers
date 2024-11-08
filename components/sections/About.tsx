import React from "react";
import Image from "next/image";
import SecondaryButton from "../SecondaryButton";

export default function About() {
  return (
    <div className="h-full py-20 px-2 bg-secondary text-white flex flex-col items-center justify-center  ">
      <div className="container gap-10  mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image
            src={"./vercel.svg"} // Make sure the path is correct or replace with an actual image URL
            alt="GIF of services"
            width={512}
            height={512}
            className="w-full max-w-[400px] object-contain"
            layout="intrinsic" // Ensures the image maintains its aspect ratio and scales properly
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2  md:pl-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About The Bright Layers</h1>
          <p className="text-lg mb-6">
            We&apos;re a social media agency founded in 2019. We set off pre-pandemic, with a mission to redefine the fusion of creativity & strategy in digital marketing. In the last 5 years, the country has seen trendsetting marketing campaigns — but what&apos;s missing is “the beyonds” of a campaign. Does it end after a post, a hoarding, an ad? So we just want likes & comments? Maybe an app download? No. That can&apos;t be all. There&apos;s more to your brand than this — and we want to bring that to the front too. Beyond just campaigns. Just like our name, we are here to brighten up your social media presence with a layered approach that works exclusively for you.
          </p>
          <SecondaryButton title="Learn More" link="/services" />
        </div>
      </div>
    </div>
  );
}

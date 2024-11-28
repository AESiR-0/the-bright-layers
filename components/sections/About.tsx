import React from "react";
import Image from "next/image";
import SecondaryButton from "../SecondaryButton";

export default function About() {
  return (
    <div className="h-full py-24 px-2 bg-secondary text-white">
      <div className="container gap-16 mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="md:w-5/12 mb-8 md:mb-0 flex justify-center">
          <Image
            src={"./vercel.svg"}
            alt="GIF of services"
            width={512}
            height={512}
            className="w-full max-w-[450px] object-contain rounded-lg shadow-lg"
            layout="intrinsic"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-6/12 space-y-6 md:pl-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About The Bright Layers
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            We&apos;re a social media agency founded in 2019. We set off pre-pandemic, 
            with a mission to redefine the fusion of creativity & strategy in digital 
            marketing.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            In the last 5 years, the country has seen trendsetting marketing campaigns — 
            but what&apos;s missing is "the beyonds" of a campaign. Does it end after 
            a post, a hoarding, an ad? So we just want likes & comments? Maybe an app 
            download? No. That can&apos;t be all.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            There&apos;s more to your brand than this — and we want to bring that to 
            the front too. Beyond just campaigns. Just like our name, we are here to 
            brighten up your social media presence with a layered approach that works 
            exclusively for you.
          </p>
          <div className="pt-4">
            <SecondaryButton title="Learn More" link="/services" />
          </div>
        </div>
      </div>
    </div>
  );
}

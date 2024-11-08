"use client";
import React, { useState } from "react";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Just like algorithms, we are also continually evolving with the social media landscape - and you get to make the most of it. From scouting trends to launching campaigns, our tailored strategy attuned to your brand will help you cut through the noise & stand out!",
  },
  {
    title: "Email Marketing",
    description:
      "Not all emails are skippable & lackluster, we make sure of that. This is where we initiate our strategy-led creativity - to present your brand in a way whose emails are worth giving a shot. From appealing subject lines to automations and newsletters, we think outside the (in)box for each email.",
  },
  {
    title: "Strategy Development",
    description:
      "One size does not fit all. Which is why 'personalisation' is our forte. We're not shooting in the dark with just good designs and great copy - we are putting thought & insight that favors both the long term & short term goals of your brand. We're invested in your brand story - and it shows in the collaterals we create for you.",
  },
  {
    title: "Social Media Advertisements",
    description:
      "Boost is the secret of our energy - and in this case, we're talking about amplifying your social media posts to reach a larger audience. But we don't stop there. We provide maximum support on the backend to manage high-ROI ad campaigns across all social platforms, ensuring your budget is optimized for best impact.",
  },
  {
    title: "Branding",
    description:
      "Whether you're building a brand from ground up or working with established guidelines, we're here to maintain the set standards and bring your brand to life. We understand how crucial branding is in communication - so count on us to ensure your brand essence does not get lost in the clutter.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-center font-serif text-5xl mb-8">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/4 h-64 bg-secondary transition-all duration-300 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <div className="flex-grow flex items-center justify-center px-4 py-2">
              <h2 className="text-white text-xl font-semibold">{service.title}</h2>
            </div>

            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 p-4 text-black text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p>{service.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";

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

const Services = () => {
  return (
    <div className="bg-[#313e51] py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
          Our Professional Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-md leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-primary font-semibold border border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

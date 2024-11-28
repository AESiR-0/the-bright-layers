"use client";

import React from "react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const services = [
  {
    title: "Social Media Marketing",
    description: 
      "Giving your brand the social media oomph it deserves. We handle everything from content strategy to execution, ensuring your social presence aligns perfectly with your brand ethos and goals.",
    icon: "🚀",
    id: "social-media-marketing"
  },
  {
    title: "Email Marketing",
    description:
      "We craft compelling email campaigns that convert. From engaging newsletters to automated sequences, we help your brand be seen, known, and heard all the way from awareness to purchase.",
    icon: "📧",
    id: "email-marketing"
  },
  {
    title: "Strategy Development",
    description:
      "Aesthetic is nothing without substance. We create tailored strategies combining expertise, tools, and creative vision to tell your brand story effectively and achieve measurable results.",
    icon: "📊",
    id: "strategy-development"
  },
  {
    title: "Social Media Advertisements",
    description:
      "Convert, don't confuse - that's our strategy with paid ads. We optimize your ad budget across platforms to ensure maximum ROI and impact, turning viewers into valuable customers.",
    icon: "📱",
    id: "social-media-advertisements"
  },
  {
    title: "Branding",
    description:
      "Whether creating from scratch or working with existing guidelines, we ensure your brand's essence shines through. We build and maintain strong, consistent brand identities that resonate.",
    icon: "✨",
    id: "branding"
  },
];

const Services = () => {
  return (
    <section className="bg-[#313e51] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        <Fade triggerOnce cascade damping={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Elevate your brand with our comprehensive suite of digital marketing solutions
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Slide 
              key={service.id} 
              direction="up" 
              triggerOnce 
              delay={index * 100}
            >
              <div
                className="group bg-white p-8 rounded-2xl 
                           border border-gray-200 hover:border-primary/50
                           transition-all duration-300 ease-out
                           hover:transform hover:-translate-y-2
                           flex flex-col h-full"
              >
                <Fade triggerOnce delay={index * 150}>
                  <div className="mb-6 text-5xl">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/90">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={`/services#${service.id}`}
                    className="inline-flex items-center justify-center
                             text-primary font-medium px-6 py-3 
                             rounded-full border border-primary/30
                             hover:bg-primary hover:text-white
                             transition duration-300 ease-in-out
                             group-hover:border-primary
                             mt-auto self-start mx-auto"
                  >
                    Learn More
                    <svg 
                      className="w-5 h-5 ml-2 -mr-1 transform 
                               group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </Link>
                </Fade>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

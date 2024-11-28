"use client";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const content = {
  title: "Create. Perform. Grow.",
  highlight: "Leave behind the Lorem Ipsums, and hire an agency (us) that transforms your brand communication for good!",
  description: [
    {
      title: "Our Unique Approach",
      text: "Our approach is different - a boutique-style agency that prioritizes understanding our clients as intimately as our own business. This approach has not only made us experts in our field but has allowed us to build genuine partnerships."
    },
    {
      title: "More Than Just an Agency",
      text: "At Hello Media, we're more than just your agency; we're an integral part of your team, invested in your success. Your victories are our celebrations, and together, we aim to not only achieve but surpass your goals. This is our commitment, our ethos, and the driving force behind everything we do."
    }
  ]
};

const MarketingSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <Fade triggerOnce>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {content.title}
              </h2>
            </Fade>

            <Slide direction="up" triggerOnce>
              <p className="text-lg md:text-xl text-orange-600 font-medium max-w-2xl mx-auto">
                {content.highlight}
              </p>
            </Slide>
          </div>

          {/* Content Section */}
          <Fade triggerOnce cascade damping={0.2}>
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {content.description.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-1 bg-orange-500 rounded-full" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-4">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          {/* Bottom Accent */}
          <div className="flex justify-center gap-3 pt-8">
            <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse delay-100" />
            <div className="h-2 w-2 rounded-full bg-orange-300 animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;

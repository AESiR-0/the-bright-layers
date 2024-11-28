"use client";
import React from "react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const FounderSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <Fade triggerOnce>
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium text-lg">Meet Our Visionary</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              The Founder
            </h2>
          </div>
        </Fade>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <Slide direction="left" triggerOnce className="lg:w-1/3">
            <div className="relative">
              <div className="relative h-[400px] w-[300px] rounded-2xl overflow-hidden">
                <Image
                  src=""
                  alt="Founder Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10" />
            </div>
          </Slide>

          {/* Center Content */}
          <Fade triggerOnce className="lg:w-[40%]">
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Pooja Bhadoriya
                </h3>
                <p className="text-orange-600 font-medium">
                  Founder & Creative Director
                </p>
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Full time overthinker and part time Founder, Pooja launched The Bright Layers 
                in 2019 as a tribute to her experience of working in social media - be it as 
                a designer, writer, creative director, or just as a consultant to her uncle 
                who really wanted his mithai business to go viral on Instagram.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                As a business owner herself, she understands the passion that fuels a brand. 
                Her goal is to bring that passion to the forefront, and to make businesses 
                feel more human.
              </p>

              <p className="text-orange-600 italic">
                "Oh also, she's really excited to meet you, fellow business-owner."
              </p>
            </div>
          </Fade>

          {/* Right Image */}
          <Slide direction="right" triggerOnce className="lg:w-1/3">
            <div className="relative">
              <div className="relative h-[400px] w-[300px] rounded-2xl overflow-hidden">
                <Image
                  src=""
                  alt="Founder in Action"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10" />
            </div>
          </Slide>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center gap-3 pt-16">
          <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse delay-100" />
          <div className="h-2 w-2 rounded-full bg-orange-300 animate-pulse delay-200" />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

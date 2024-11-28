"use client";

import React from "react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  title: string;
  content: string;
  number: string;
}

const contentJson = [
  {
    number: "01",
    title: "Explore the bright layers of our services",
    content:
      "Browse through our offerings and see what aligns with your brand's needs. If you're unsure of where to start, we can always get on a free scheduled call to help you out!",
  },
  {
    number: "02",
    title: "Get in touch!",
    content:
      `Fill up the form under our "hire us" tab, and we can take it from there. While we love working for all small & medium businesses, we want to make sure we're the right fit to deliver your brand's core objectives. We'll contact you within 48 hours to schedule our discovery call.`,
  },
  {
    number: "03",
    title: "Take a (discovery) call",
    content:
      "After the discovery call, we'll know whether we're on the same page for this potential partnership. Then, we'll craft a personalized blueprint with tailored solutions for your business. If you're convinced, we're at your service! We'll draw out the contract, process the initial payment, and then make it official.",
  },
];

const AccordionSet = ({ number, title, content }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200 w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="hover:no-underline py-6">
            <div className="flex items-center gap-6 text-left">
              <span className="text-4xl font-bold text-orange-500/20">
                {number}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pl-20">
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const WhyUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <Fade triggerOnce>
              <div className="space-y-4 mb-12">
                <span className="text-orange-500 font-medium">
                  Our Process
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Interested? Curious?{" "}
                  <span className="text-gradient">Here's How It Works.</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  We've simplified our process to make it easy for you to get started
                  with transforming your digital presence.
                </p>
              </div>
            </Fade>

            <Slide direction="up" triggerOnce>
              <div className="space-y-2">
                {contentJson.map((item, index) => (
                  <AccordionSet
                    key={index}
                    number={item.number}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </Slide>
          </div>

          {/* Right Image */}
          <Slide direction="right" triggerOnce className="w-full lg:w-1/3">
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                <Image
                  src="/images/process.jpg" // Add your image
                  alt="Our Process"
                  fill
                  className="object-cover mix-blend-overlay"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10" />
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

export default WhyUs;

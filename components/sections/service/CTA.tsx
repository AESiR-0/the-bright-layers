"use client";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Link from "next/link";
import { ArrowUpRight, Coffee, Users } from "lucide-react";

const CTACard = ({
  icon: Icon,
  label,
  title,
  href,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  href: string;
}) => {
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden bg-primary hover:bg-orange-500 
                 transition-all duration-500 h-[300px] flex flex-col items-center 
                 justify-center px-8"
    >
      <Icon className="w-12 h-12 text-orange-500 group-hover:text-white mb-6 
                      transform group-hover:scale-110 transition-all duration-500" />
      <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4
                      group-hover:text-white transition-colors duration-500">
        {label}
      </span>
      <h3 className="text-4xl lg:text-5xl font-bold text-white text-center mb-6
                     group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
        {title}
      </h3>
      
      <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 
                      transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="font-medium">Learn More</span>
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </Link>
  );
};

export default function CTA() {
  return (
    <section className="bg-primary min-h-screen py-20 flex flex-col items-center justify-center">
      {/* Main Content */}
      <div className="w-full ">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Slide direction="up" triggerOnce>
            <span className="text-orange-500 font-medium mb-4 block">
              Perfect Match
            </span>
            <h2 className="text-3xl md:text-7xl font-bold text-accent mb-16">
              Are You The One?
            </h2>
          </Slide>

          <Fade triggerOnce>
            <p className="text-lg md:text-xl text-accent mb-8">
              Our ideal customer personas are small to medium-sized business
              owners, marketing managers, and ad moguls looking to make their
              brand be seen. They value the power of strategy with creativity, and
              believe in results, rather than buzz.
            </p>
            <p className="text-lg md:text-xl text-accent">
              If you're that persona looking to navigate the digital marketing
              scene and give your brand the visibility it deserves, you're the one
              for us. Hope we're the one for you too.
            </p>
          </Fade>
        </div>

        {/* CTA Cards */}
        <div className="bg-white w-full py-10">
          <div className="flex flex-col md:flex-row justify-center items-stretch -mt-24 w-full max-w-6xl mx-auto gap-0">
            <Slide direction="left" triggerOnce className="w-full md:w-1/2">
              <CTACard
                icon={Coffee}
                label="Tea or Coffee?"
                title="Take the Call"
                href="/contact"
              />
            </Slide>
            
            <Slide direction="right" triggerOnce className="w-full md:w-1/2">
              <CTACard
                icon={Users}
                label="Who are we?"
                title="Know About Us"
                href="/about"
              />
            </Slide>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Fade triggerOnce>
            <p className="text-accent/80">
              Not ready yet? Follow us on{' '}
              <Link href="/social" className="text-orange-500 hover:text-orange-400 font-medium">
                social media
              </Link>
              {' '}for tips and insights.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
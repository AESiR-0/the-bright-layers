"use client"
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    quote: "I have had such an amazing experience working with The Bright Layers for my small business! They have given so much value to my business and I have seen amazing results on all my platforms from utilizing their services.",
    author: "Gunjan Satia",
    role: "Small Business Owner"
  },
  {
    quote: "We've been working with The Bright Layers for several years now, and they've become an integral part of our team. Their expertise and support have been invaluable in helping us grow our brand.",
    author: "Archit Mishra",
    role: "Business Partner"
  },
  {
    quote: "Working with Pooja and her team at The Bright Layers has been a fantastic experience. They are not just service providers, but partners who truly understand our brand.",
    author: "Nitin Shah",
    role: "Client"
  },
  {
    quote: "It's clear that Pooja and her team are passionate about what they do. They go the extra mile to ensure client satisfaction. Their dedication and commitment are truly commendable.",
    author: "Aditi Sharma",
    role: "Client Partner"
  }
];

export function CarouselSize() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <Fade triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our valued clients
            </p>
          </div>
        </Fade>

        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0  md:basis-1/2 lg:basis-1/2 px-4"
              >
                <div className="p-1  h-full">
                  <Card className="h-full  border-[#e9e6e1]">
                    <CardContent className="flex bg-[#313e51] flex-col justify-between p-8 h-full">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <svg
                          className="h-8 w-8 text-orange-400 opacity-60"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                        </svg>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-grow">
                        <p className="text-gray-100 text-lg leading-relaxed mb-6">
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="mt-6">
                        <p className="font-semibold text-gray-300">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <CarouselPrevious className="bg-[#f8f7f4] shadow-lg hover:bg-[#e9e6e1] text-gray-700" />
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <CarouselNext className="bg-[#f8f7f4] shadow-lg hover:bg-[#e9e6e1] text-gray-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

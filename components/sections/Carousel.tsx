import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  return (
    <section className="w-full bg-bg bg-center py-20 flex justify-center items-center">
      <div className="w-full max-w-screen-lg">
        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="flex-shrink-0 md:basis-1/2 lg:basis-1/3 px-4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
            <CarouselPrevious className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all" />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
            <CarouselNext className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

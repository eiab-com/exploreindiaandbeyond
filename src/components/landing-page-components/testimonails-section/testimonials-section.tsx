"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="col-span-12 border rounded-2xl p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-y-4 sm:gap-y-8 relative font-body min-h-[50vh]"
    >
      <div className="w-full absolute top-0 p-4 sm:p-8">
        <p className="text-xs sm:text-sm md:text-base opacity-70">
          / testimonials{" "}
        </p>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Rider Testimonials
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-4 py-2"
            >
              <div className="p-1 h-full">
                <Card className="bg-accent h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full max-h-[300px] ">
                    <span className="text-3xl font-semibold mb-4">
                      {index + 1}
                    </span>
                    <p className="text-center">
                      {`"Life-changing experience! The Indian Himalayas tour was
                      perfectly organized..."`}
                    </p>
                    <p className="mt-4 font-bold">- John D., London</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default TestimonialSection;

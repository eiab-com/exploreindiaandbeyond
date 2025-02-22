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
import { testimonials } from "@/data/content";
import SectionMiniHeader from "@/components/section-header-aesth/section-mini-header";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="col-span-12 mx-16 h-[60vh] p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-y-4 sm:gap-y-8 relative font-body"
    >
      {/* Section Header */}
      <SectionMiniHeader title="testimonials" />
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 z-50">
        What Riders Say
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
        className="w-full  mx-auto z-40"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 w-fit lg:basis-1/3 px-4 py-2"
            >
              <div className="p-1 h-full">
                <Card className="h-full rounded-2xl">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-fit w-fit">
                    <div className="flex gap-1 mb-4 text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i}>★</span>
                        )
                      )}
                    </div>
                    <p className="text-center italic mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="text-center">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
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

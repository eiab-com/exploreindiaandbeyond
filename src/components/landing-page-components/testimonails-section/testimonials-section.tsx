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
import Image from "next/image";
import SectionMiniHeader from "@/components/section-header-aesth/section-mini-header";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="col-span-12 h-screen rounded-2xl p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-y-4 sm:gap-y-8 relative font-body min-h-[50vh]  mx-4 mb-20"
    >
      {/* Section Header */}
      <SectionMiniHeader title="testimonials"  />
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
              className="md:basis-1/2 lg:basis-1/3 px-4 py-2"
            >
              <div className="p-1 h-full">
                <Card className="bg-accent h-full rounded-none">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-[200px]">
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

      <div className="backdrop h-full absolute top-0 w-full z-30">
        <div className="overlay bg-black/90 z-20 h-full w-full relative"></div>
        <Image
          src=" https://images.unsplash.com/photo-1558980664-2cd663cf8dde?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="testimonials"
          fill
          className="object-cover z-10 relative"
        />
      </div>
    </section>
  );
};
export default TestimonialSection;

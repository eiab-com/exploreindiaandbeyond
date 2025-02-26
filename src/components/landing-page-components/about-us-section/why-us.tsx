import React from "react";
import Image from "next/image";
import { whyUsCardData as cardData } from "@/mock-data/content";

const WhyUs = () => {
  return (
    <section className="container col-span-12 mx-auto px-4 md:px-8 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      {/* Content Section */}
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold font-heading  lg:text-5xl">
            We Craft Journeys Beyond
            <span className="text-primary"> Typical Trails</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover experiences curated by travel experts who breathe adventure
            and live to reveal hidden wonders.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" p-2 border border-primary/10 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4 h-full ">
                <div className="shrink-0 h-full  bg-secondary/10 rounded-lg w-1/4">
                  <Image
                    src={card.imageSrc}
                    width={128}
                    height={128}
                    alt={card.altText}
                    className="w-full h-full object-cover rounded-md group-hover:-rotate-12 group-hover:transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2 w-3/4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[5/7] rounded-xl overflow-hidden shadow-xl">
        <Image
          src="https://images.pexels.com/photos/30743692/pexels-photo-30743692/free-photo-of-adventurous-motorcyclist-at-misty-ladakh-pass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Adventurous motorcyclist at misty Ladakh pass"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-background/0" />
      </div>
    </section>
  );
};

export default WhyUs;

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { whyUsCardData as cardData } from "@/data/content";

const WhyUs = () => {
  return (
    <section
      id="about"
      className="col-span-12 mx-auto h-fit lg:h-screen xl:h-screen px-6 lg:px-16 py-16 flex flex-col lg:flex-row md:h-screen items-center gap-10 relative font-body"
    >
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
        <h2 className="text-5xl md:text-6xl leading-snug mb-8">
          We specialize in crafting journeys that go beyond typical tourist
          trails.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="bg-secondary/50 p-2 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              <CardHeader className="flex flex-col items-center gap-4">
                <Image
                  src={card.imageSrc}
                  width={64}
                  height={64}
                  alt={card.altText}
                  className="w-16 h-16"
                />
                <h3 className="text-xl font-bold">{card.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block w-1/2">
        <div className="relative w-full h-screen overflow-hidden rounded-lg shadow-lg">
          <Image
            src="https://images.pexels.com/photos/30743692/pexels-photo-30743692/free-photo-of-adventurous-motorcyclist-at-misty-ladakh-pass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mountains with road"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

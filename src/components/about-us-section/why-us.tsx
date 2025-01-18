import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { whyUsCardData as cardData } from "@/data/content";

const WhyUs = () => {
  return (
    <section
      id="about"
      className="col-span-12 min-h-screen rounded-2xl p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-y-4 sm:gap-y-8 relative font-body"
    >
      {/* Section Header */}
      <div className="w-full absolute top-0 p-4 sm:p-8">
        <p className="text-xs sm:text-sm md:text-base opacity-70">/ why us </p>
      </div>

      {/* Main Heading */}
      <p className="font-body text-3xl sm:text-5xl md:text-6xl text-center w-11/12 sm:w-3/4 leading-snug mb-10">
        We specialize in crafting journeys that go beyond typical tourist
        trails.
      </p>

      {/* Card Container */}
      <div className="card-container w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="w-full border-transparent max-w-xs bg-transparent  h-fit hover:border-primary hover:border-2 hover:shadow-2xl relative hover:-translate-y-2 transition-all duration-500"
          >
            <CardHeader className="flex justify-center items-center p-4 sm:p-6 flex-row gap-3">
              <Image
                src={card.imageSrc}
                width={50}
                height={50}
                alt={card.altText}
                className="w-16  md:w-16 lg:w-16 h-auto flex"
              />
              <h3 className="text-lg w-full sm:text-xl font-bold ">
                {card.title}
              </h3>
            </CardHeader>
            <CardContent className="">
              <p className="text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

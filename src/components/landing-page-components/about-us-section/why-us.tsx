import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { whyUsCardData as cardData } from "@/data/content";
const WhyUs = () => {
  return (
    <section
      id="about"
      className="col-span-12 mx-4 h-screen px-6 sm:px-8 md:px-12 py-8 flex justify-center items-center gap-y-4 sm:gap-y-8 relative font-body"
    >
      <div className="left flex flex-col justify-center items-left w-full h-full">
        <p className="font-body text-3xl sm:text-5xl md:text-6xl text-left w-11/12 leading-snug mb-10 sm:w-full sm:text-center lg:text-left">
          We specialize in crafting journeys that go beyond typical tourist
          trails.
        </p>
        <div className="card-container w-full flex flex-col sm:flex-row flex-wrap justify-start items-left gap-4 sm:gap-8 sm:justify-center lg:justify-start lg:mt-36">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="w-full bg-secondary/50 max-w-sm rounded-2xl  h-fit hover:border-primary hover:border-2 hover:shadow-2xl relative hover:-translate-y-2 transition-all duration-200"
            >
              <CardHeader className="flex justify-center items-center p-4 sm:p-6 flex-row gap-3">
                <Image
                  src={card.imageSrc}
                  width={50}
                  height={50}
                  alt={card.altText}
                  className="w-16 md:w-12 lg:w-14 h-auto flex"
                />
                <h3 className="text-lg w-full sm:text-xl font-bold">
                  {card.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="right h-full hidden w-full rounded-2xl overflow-hidden group md:hidden sm:hidden lg:inline-flex">
        <Image
          src="https://images.unsplash.com/photo-1582092722992-b2f960bafbfb?q=80&w=3447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mountains with road"
          width={500}
          height={500}
          className=" w-full h-full object-cover group-hover:scale-[1.01] transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default WhyUs;

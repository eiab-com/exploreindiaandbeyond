import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { whyUsCardData as cardData } from "@/data/content";

const WhyUs = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background font-body col-span-12"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              We specialize in crafting journeys that go beyond typical tourist
              trails.
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the difference with our curated travel experiences that
              connect you with authentic cultures and breathtaking landscapes.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Image
                      src={card.imageSrc}
                      width={48}
                      height={48}
                      alt={card.altText}
                      className="w-12 h-12 text-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <CardContent className="p-0 text-sm text-muted-foreground text-left">
                      {card.description}
                    </CardContent>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full">
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-background/20 before:via-transparent before:to-background/20">
            <Image
              src="https://images.pexels.com/photos/30743692/pexels-photo-30743692/free-photo-of-adventurous-motorcyclist-at-misty-ladakh-pass.jpeg"
              alt="Adventure travel"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

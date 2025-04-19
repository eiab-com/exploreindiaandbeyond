"use client";

import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { Button } from "@/components/ui/button";
import { bikingAdventuresData } from "@/mock-data/content";
import dayjs from "dayjs";
import { Link } from "next-view-transitions";
import React from "react";

const UpcomingAdventures = () => {
  const upcomingAdventures = bikingAdventuresData
    .filter((adventure) => dayjs(adventure.startDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.startDate).valueOf() - dayjs(b.startDate).valueOf())
    .slice(0, 3);

  return (
    <section className="col-span-12 flex flex-col gap-12 px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">
          Upcoming Adventures
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
          Discover our upcoming biking adventures featuring thrilling motorcycle
          trips across {`India's`} most breathtaking landscapes. Ride the
          towering passes of Ladakh, tackle the rugged trails of Spiti Valley,
          and explore the lush beauty of Northeast India.
        </p>
      </div>

      {/* Adventures Grid */}
      <div className="flex justify-center gap-10 place-items-center flex-wrap">
        {/* Adventure Cards */}
        {upcomingAdventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            title={adventure.title}
            id={adventure.id}
            coverImage={adventure.imageSrc}
            altText={adventure.altText}
            shortDescription={adventure.shortDescription}
            altitude={adventure.highestAltitude}
            distance={adventure.totalDistance}
            startDate={dayjs(adventure.startDate)}
          />
        ))}
      </div>
      {/* Call to Action */}
      <Button variant={"outline"} className="w-full max-w-2xl mx-auto hover:bg-white/20" asChild>
        <Link
          href="/adventures"
          className="flex items-center justify-center w-full h-full"
        >
          <span className="text-lg font-semibold">Explore All Adventures</span>
        </Link>
      </Button>
    </section>
  );
};

export default UpcomingAdventures;

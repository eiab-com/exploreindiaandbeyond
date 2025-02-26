// UpcomingAdventures.tsx
"use client";
import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { Button } from "@/components/ui/button";
import { bikingAdventuresData } from "@/data/content";
import dayjs from "dayjs";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";

const UpcomingAdventures = () => {
  const upcomingAdventures = bikingAdventuresData
    .filter((adventure) => dayjs(adventure.startDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.startDate).valueOf() - dayjs(b.startDate).valueOf())
    .slice(0, 3);
  const router = useTransitionRouter();

  return (
    <section className="py-16 md:py-24 lg:py-32 col-span-12 flex flex-col items-center justify-center font-heading">
      <div className="mx-auto max-w-4xl text-center space-y-6 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Upcoming Adventures
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover our carefully curated selection of upcoming biking adventures
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 mx-auto align-center place-items-center ">
        {upcomingAdventures.map((adventure) => (
          <AdventureCard
            title="Biking Adventure"
            key={adventure.id}
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

      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="text-base"
          onClick={() => router.push("/adventures")}
        >
          View All Adventures
        </Button>
      </div>
    </section>
  );
};

export default UpcomingAdventures;

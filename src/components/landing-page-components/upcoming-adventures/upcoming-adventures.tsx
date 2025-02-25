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
    <section className="col-span-12  flex flex-col justify-center  items-center gap-12 h-[80vh] ">
      <h2 className="text-6xl font-bold text-center  mb-6 uppercase font-heading">
        Upcoming Adventures
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {upcomingAdventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            title={adventure.title}
            coverImage={adventure.imageSrc}
            altText={adventure.altText}
            startDate={dayjs(adventure.startDate)}
            id={adventure.id}
            shortDescription={adventure.shortDescription}
            altitude={adventure.highestAltitude}
            distance={adventure.totalDistance}
          />
        ))}

        {/* Explore More Card using shadcn Card */}
      </div>
      <Button
        className="w-fit bg-card/20 text-xl p-6"
        variant="outline"
        onClick={() => router.push("/adventures")}
      >
        View All Adventures
      </Button>
    </section>
  );
};

export default UpcomingAdventures;

"use client";

import AdventureCard from "@/components/adventures/adventure-card/adventure-card";

import { Card } from "@/components/ui/card";
import { bikingAdventuresData } from "@/mock-data/content";
import dayjs from "dayjs";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

const UpcomingAdventures = () => {
  const upcomingAdventures = bikingAdventuresData
    .filter((adventure) => dayjs(adventure.startDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.startDate).valueOf() - dayjs(b.startDate).valueOf())
    .slice(0, 3);

  return (
    <section className="col-span-12 flex flex-col gap-8 px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}

      <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
        {/* Description Text */}
        <div className="space-y-4 text-muted-foreground">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight  bg-clip-text text-primary">
            Upcoming Adventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover our carefully curated selection of upcoming biking
            adventures
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Discover our upcoming biking adventures featuring thrilling
            motorcycle trips across {`India's`} most breathtaking landscapes.
            Ride the towering passes of Ladakh, tackle the rugged trails of
            Spiti Valley, and explore the lush beauty of Northeast India.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Our expert-guided bike tours offer high-altitude challenges, scenic
            routes, and immersive cultural experiences—perfect for seasoned
            riders and adventure seekers alike.
          </p>
        </div>

        {/* Adventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
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

          {/* More Adventures Card */}
          <Card className="group w-full max-w-md rounded-xl overflow-hidden border border-border rugged-shadow relative flex flex-col items-center justify-center  gap-4 p-8 cursor-pointer lg:h-auto xl:h-auto h-[300px]">
            <Image
              src={
                "https://images.pexels.com/photos/19547824/pexels-photo-19547824/free-photo-of-motorcycle-on-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt={""}
              fill
              className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
            <Link
              className="text-2xl text-center text-primary flex w-full z-30 absolute bottom-2 left-2 h-12  justify-center gap-2"
              href="/adventures"
            >
              <span>More Adventures </span>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingAdventures;

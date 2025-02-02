import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { bikingAdventuresData } from "@/data/content";
import dayjs from "dayjs";
import React from "react";

const page = () => {
  return (
    <div className="col-span-12 flex flex-col items-center justify-start space-y-8 px-6 py-12 bg-background">
      <h1 className="text-4xl font-bold text-primary">
        Explore Our Adventures
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl text-center">
        Discover breathtaking biking trails and unforgettable experiences.
      </p>

      <div className="flex gap-6 justify-center items-center w-full flex-wrap">
        {bikingAdventuresData.map((adventure, index) => (
          <AdventureCard
            key={index}
            title={adventure.title}
            coverImage={adventure.imageSrc}
            altText={adventure.altText}
            startDate={dayjs(adventure.startDate)}
            id={adventure.id}
            shortDescription={adventure.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

"use client";
import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { bikingAdventuresData } from "@/mock-data/content";
import dayjs from "dayjs";
import React from "react";

const Page = () => {
  // const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Extract unique years from adventure dates
  // const availableYears = Array.from(
  //   new Set(
  //     bikingAdventuresData.map((adventure) => dayjs(adventure.startDate).year())
  //   )
  // ).sort();

  // Filter & Sort adventures
  // const filteredAdventures = bikingAdventuresData.filter((adventure) =>
  //   selectedYear ? dayjs(adventure.startDate).year() === selectedYear : true
  // );

  return (
    <section className="w-full lg:px-24 px-6 py-8 col-span-12 mt-32 sm:h-fit ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 font-heading">
          Explore Our Adventures
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Discover breathtaking biking trails and unforgettable experiences.
        </p>

        {/* Horizontal Navigation */}
        <div className="flex justify-center items-center gap-6 flex-wrap max-w-4xl mx-auto">
          {/* <button
            className={`px-6 py-2 rounded-full transition-all ${
              !selectedYear
                ? "bg-primary text-background"
                : "bg-background text-foreground hover:bg-primary/10"
            }`}
            onClick={() => setSelectedYear(null)}
          >
            Discover
          </button> */}

          {/* {availableYears.map((year) => (
            <button
              key={year}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedYear === year
                  ? "bg-primary text-background "
                  : "bg-background text-foreground hover:bg-primary/10 border"
              }`}
              onClick={() =>
                setSelectedYear(selectedYear === year ? null : year)
              }
            >
              {year}
            </button>
          ))} */}
          {/* <div className="flex items-center gap-2">
            <Label htmlFor="sort-order" className="text-sm">
              {sortOrder === "asc" ? "Earliest First" : "Latest First"}
            </Label>
            <Switch
              id="sort-order"
              checked={sortOrder === "desc"}
              onCheckedChange={(checked) =>
                setSortOrder(checked ? "desc" : "asc")
              }
            />
          </div> */}
        </div>
      </div>

      {/* Adventures Grid */}
      <div className="flex gap-12 px-0  justify-center items-center w-full  flex-wrap">
        {bikingAdventuresData.length > 0 ? (
          bikingAdventuresData.map((adventure, index) => (
            <AdventureCard
              key={index}
              title={adventure.title}
              coverImage={adventure.imageSrc}
              altText={adventure.altText}
              startDate={dayjs(adventure.startDate)}
              id={adventure.id}
              shortDescription={adventure.shortDescription}
              altitude={adventure.highestAltitude}
              distance={adventure.totalDistance}
              disabled={adventure.disabled}
            />
          ))
        ) : (
          <p className="text-lg text-muted-foreground">
            No adventures available for the selected filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default Page;

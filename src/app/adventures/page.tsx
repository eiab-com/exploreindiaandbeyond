"use client";
import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bikingAdventuresData } from "@/data/content";
import dayjs from "dayjs";
import React, { useState } from "react";

const Page = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order
  const [selectedYear, setSelectedYear] = useState<number | null>(null); // Year filter state

  // Extract unique years from adventure dates
  const availableYears = Array.from(
    new Set(
      bikingAdventuresData.map((adventure) => dayjs(adventure.startDate).year())
    )
  ).sort(); // Sort years in ascending order

  // Filter & Sort adventures
  const filteredAdventures = bikingAdventuresData
    .filter((adventure) =>
      selectedYear ? dayjs(adventure.startDate).year() === selectedYear : true
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? dayjs(a.startDate).valueOf() - dayjs(b.startDate).valueOf()
        : dayjs(b.startDate).valueOf() - dayjs(a.startDate).valueOf()
    );

  return (
    <React.Fragment>
      {/* Sidebar Controls with Sorting & Year Filter */}
      <div className="sidebar-controls h-[30vh] top-32 rounded-xl col-span-2 col-start-1 overflow-hidden bg-card sticky p-4 flex flex-col gap-4">
        {/* Sorting Dropdown */}
        <div>
          <Label
            htmlFor="sortOrder"
            className="text-base  text-foreground block mb-2"
          >
            Sort by Date
          </Label>
          <Select
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value)}
          >
            <SelectTrigger className="w-full border border-muted-foreground bg-background text-foreground px-3 py-2 rounded-lg">
              <SelectValue placeholder="Select Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Earliest First</SelectItem>
              <SelectItem value="desc">Latest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Year Filter Badges */}
        <div>
          <span className="text-lg  text-foreground block mb-2">
            Filter by Year
          </span>
          <div className="flex flex-wrap gap-2">
            {availableYears.map((year) => (
              <Badge
                key={year}
                className={` text-sm  cursor-pointer rounded-full border transition-all ${
                  selectedYear === year
                    ? "bg-primary text-background border-primary"
                    : "border-muted-foreground text-foreground bg-background hover:bg-primary/20"
                }`}
                onClick={() =>
                  setSelectedYear(selectedYear === year ? null : year)
                }
              >
                {year}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Adventures List */}
      <div className="col-span-10 flex flex-col items-center justify-center space-y-8 px-6 py-12 bg-background">
        <h1 className="text-4xl font-bold text-primary">
          Explore Our Adventures
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl text-center">
          Discover breathtaking biking trails and unforgettable experiences.
        </p>

        {/* Display Adventures */}
        <div className="flex gap-12 px-0 mx-auto justify-center items-center w-full flex-wrap">
          {filteredAdventures.length > 0 ? (
            filteredAdventures.map((adventure, index) => (
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
              />
            ))
          ) : (
            <p className="text-lg text-muted-foreground">
              No adventures available for the selected filters.
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;

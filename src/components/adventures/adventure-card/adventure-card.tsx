import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { Dayjs } from "dayjs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Mountain, Route } from "lucide-react";

interface AdventureCardProps {
  title: string;
  coverImage: string;
  altText: string;
  id: string;
  startDate: Dayjs;
  shortDescription: string;
  altitude: string;
  distance: string;
  location?: string;
  difficulty?: "Easy" | "Moderate" | "Hard" | "Expert";
  disabled?: boolean;
}

const AdventureCard = ({
  title,
  coverImage,
  altText,
  id,
  startDate,
  shortDescription,
  altitude,
  distance,
  location,
  difficulty = "Moderate",
  disabled,
}: AdventureCardProps) => {
  const constructedLink = `/adventures/${id}`;

  // Map difficulty to theme colors
  const difficultyColor = {
    Easy: "bg-secondary/30 text-secondary",
    Moderate: "bg-primary/30 text-primary",
    Hard: "bg-accent/30 text-accent",
    Expert: "bg-destructive/30 text-destructive",
  }[difficulty];

  return (
    <Card className="group w-full max-w-md rounded-xl overflow-hidden border border-border rugged-shadow relative bg-black">
      {/* Background Image */}
      <div className="relative w-full h-80">
        <Image
          src={coverImage}
          alt={altText}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>

        {/* Difficulty Badge */}
        <div
          className={`absolute top-4 right-4 z-10 ${difficultyColor} px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide backdrop-blur-lg shadow-lg`}
        >
          {difficulty}
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-lg text-white px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1 shadow-md">
          <Calendar className="w-4 h-4 text-primary" />
          {startDate.format("MMMM,YYYY")}
        </div>

        {/* Location Badge */}
        {location && (
          <div className="absolute bottom-4 left-4 flex items-center text-white text-sm font-medium gap-1 bg-black/60 backdrop-blur-lg rounded-md px-3 py-1 shadow-md">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <CardTitle className="text-xl font-heading font-bold text-white">
          {title}
        </CardTitle>

        <CardDescription className="text-sm text-gray-300 line-clamp-2">
          {shortDescription}
        </CardDescription>

        <CardContent className="px-0 py-3">
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant="outline"
              className="flex items-center gap-1.5 text-xs py-1 border-border bg-black/50 text-gray-300"
            >
              <Mountain className="w-3 h-3 text-secondary" /> {altitude}
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1.5 text-xs py-1 border-border bg-black/50 text-gray-300"
            >
              <Route className="w-3 h-3 text-secondary" /> {distance}
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="p-0 ">
          <Button
            className="w-full p-0 font-medium bg-primary hover:bg-primary/90 text-primary-foreground  transition-all duration-300 rounded-md flex items-center justify-center gap-2"
            disabled={disabled}
          >
            <Link className="p-0 font-bold" href={constructedLink}>
              Explore Adventure
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default AdventureCard;

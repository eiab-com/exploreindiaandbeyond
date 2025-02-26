import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { Dayjs } from "dayjs";
import { Badge } from "@/components/ui/badge";

interface AdventureCardProps {
  title: string;
  coverImage: string;
  altText: string;
  id: string;
  startDate: Dayjs;
  shortDescription: string;
  altitude: string;
  distance: string;
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
}: AdventureCardProps) => {
  const constructedLink = `/adventures/${id}`;

  return (
    <Card className="bg-card group w-[90%] xs:w-[80%]  md:max-w-md rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-primary/10 flex flex-col h-fit">
      <div className="relative">
        {/* Date Overlay */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm font-medium shadow-md backdrop-blur-sm">
          {startDate.format("MMM YYYY")}
        </div>

        <CardHeader className="p-0 overflow-hidden">
          <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 w-full">
            <Image
              src={coverImage}
              alt={altText}
              fill
              className="object-cover rounded-t-md group-hover:scale-105 transition-all duration-300 ease-in-out"
              sizes="full"
            />
          </div>
        </CardHeader>
      </div>

      <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 flex-grow">
        <CardTitle className="text-base sm:text-lg md:text-xl font-bold leading-tight">
          {title}
        </CardTitle>

        <CardDescription className="text-sm sm:text-base line-clamp-2 text-muted-foreground">
          {shortDescription}
        </CardDescription>

        <CardContent className="px-0 py-1 sm:py-2">
          <div className="flex gap-1 sm:gap-2 flex-wrap">
            <Badge
              variant="secondary"
              className="flex items-center gap-1 text-xs sm:text-sm"
            >
              <span className="text-xs">🏔️</span> {altitude}
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 text-xs sm:text-sm"
            >
              <span className="text-xs">🚏</span> {distance}
            </Badge>
          </div>
        </CardContent>
      </div>

      <CardFooter className="lg:p-2 sm:p-4 md:p-5 pt-0 mt-auto">
        <Button
          className="w-full text-sm sm:text-sm md:text-base lg:text-lg font-medium hover:bg-primary/90 transition-colors"
          asChild
          size="sm"
        >
          <Link href={constructedLink}>Explore Adventure</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdventureCard;

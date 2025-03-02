import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { Dayjs } from "dayjs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mountain, Calendar } from "lucide-react";

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
  return (
    <Card className="group h-full flex flex-col overflow-hidden rounded-lg border border-primary/10 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        {/* Date Overlay */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm">
          <Calendar className="h-3 w-3" />
          {startDate.format("MMM YYYY")}
        </div>

        {/* Fixed aspect ratio container for image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={altText}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <CardTitle className="line-clamp-1 mb-2 text-lg font-bold">
          {title}
        </CardTitle>

        <CardDescription className="line-clamp-2 mb-3 text-sm text-muted-foreground">
          {shortDescription}
        </CardDescription>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="secondary"
              className="flex items-center gap-1 text-xs"
            >
              <Mountain className="h-3 w-3" /> {altitude}
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 text-xs"
            >
              <MapPin className="h-3 w-3" /> {distance}
            </Badge>
          </div>

          <Button
            className="w-full rounded-md font-medium transition-colors hover:bg-primary/90"
            asChild
            size="sm"
          >
            <Link href={`/adventures/${id}`}>Explore Adventure</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AdventureCard;

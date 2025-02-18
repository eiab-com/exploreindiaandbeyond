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
    <Card className=" bg-card group   sm:w-96 rounded-2xl overflow-hidden font-body shadow-none hover:shadow-xl transition-all">
      <CardHeader className=" p-1 overflow-hidden ">
        <Image
          src={coverImage}
          alt={altText}
          height={250}
          width={400}
          className="object-cover w-full h-48 sm:h-56 aspect-video rounded-xl group-hover:scale-105 transition-all duration-200"
        />
      </CardHeader>

      <div className="p-4 space-y-3">
        <CardTitle className="text-lg font-semibold  leading-tight flex justify-between items-center">
          {title}
          <p className="text-sm text-muted-foreground/80">
            {startDate.format("MMMM, YYYY")}
          </p>
        </CardTitle>

        <CardContent className="px-0 py-2 flex gap-2 justify-between items-center">
          <div className="flex gap-2">
            <Badge variant="outline"> 🏔️ {altitude}</Badge>
            <Badge variant="outline"> 🚏 {distance}</Badge>
          </div>
        </CardContent>

        <CardDescription className="text-base text-muted-foreground">
          {shortDescription}
        </CardDescription>
      </div>

      <CardFooter className="p-4">
        <Button
          className="w-full text-sm font-body font-black  uppercase"
          asChild
        >
          <Link href={constructedLink}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdventureCard;

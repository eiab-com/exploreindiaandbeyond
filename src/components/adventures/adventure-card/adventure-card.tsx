import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { Dayjs } from "dayjs";

interface AdventureCardProps {
  title: string;
  coverImage: string;
  altText: string;
  id: string;
  startDate: Dayjs;
  shortDescription: string;
}

const AdventureCard = ({
  title,
  coverImage,
  altText,
  id,
  startDate,
}: AdventureCardProps) => {
  const constructedLink = `/adventures/${id}`;

  return (
    <Card className="max-w-[350px] h-fit overflow-hidden font-body bg-secondary border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image
          src={coverImage}
          alt={altText}
          height={100}
          width={400}
          className="object-cover rounded-t-lg"
        />
        <CardTitle className="p-4 text-xl font-heading text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="px-4 text-lg text-muted-foreground">
        {startDate.format("MMMM, YYYY")}
      </CardDescription>

      <CardFooter className="p-4">
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/80"
          asChild
        >
          <Link href={constructedLink}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdventureCard;

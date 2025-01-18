import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";
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
    <Card className="max-w-[350px] h-fit overflow-hidden scale-90 font-body">
      <CardHeader className="p-0">
        <Image src={coverImage} alt={altText} height={100} width={400} />
        <CardTitle className="p-2 text-xl font-heading">{title}</CardTitle>
      </CardHeader>
      <CardDescription className="pl-2 text-lg">
        {startDate.format("MMMM, YYYY")}
      </CardDescription>

      <CardFooter className="p-2">
        <Button className="w-full" asChild>
          <Link href={constructedLink}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdventureCard;

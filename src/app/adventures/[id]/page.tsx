import React from "react";
import Image from "next/image";
import { MapPin, Mountain, Gauge, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bikingAdventuresData } from "@/data/content";
import Link from "next/link";
import DetailCard from "@/components/adventures/detail-card";
import InfoItem from "@/components/adventures/info-item";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const adventure = bikingAdventuresData.find((a) => a.id.trim() === id.trim());

  if (!adventure) {
    return (
      <div className="col-span-12 text-center py-20 border-2">
        <h1 className="text-3xl font-bold mb-4">Adventure Not Found</h1>
        <p className="text-muted-foreground">
          {`The requested journey doesn't exist in our archives`}
        </p>
        <Button className="mt-6" asChild>
          <Link href="/adventures">Explore All Adventures</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="col-span-12 max-w-screen-xl min-w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <Link href="/adventures" className="hover:text-primary">
          Adventures
        </Link>{" "}
        / {adventure.title}
      </nav>

      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {adventure.title}
        </h1>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={adventure.imageSrc}
            alt={adventure.altText}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Adventure Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DetailCard
          icon={Mountain}
          title="Highest Altitude"
          value={adventure.highestAltitude}
        />
        <DetailCard
          icon={Gauge}
          title="Total Distance"
          value={adventure.totalDistance}
        />
        <DetailCard
          icon={Calendar}
          title="Duration"
          value={adventure.rideDuration}
        />
        <DetailCard
          icon={Users}
          title="Difficulty"
          value={adventure.difficultyLevel}
        />
        <DetailCard
          icon={MapPin}
          title="Starting Point"
          value={adventure.startingPoint}
        />
        <DetailCard icon={Users} title="Group Size" value="4-12 Riders" />
      </div>

      {/* Description Section */}
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <SectionHeading title="Adventure Overview" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            {adventure.longDescription}
          </p>
          <SectionHeading title="Experience Highlights" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adventure.keyHighlights?.map((highlight, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-primary">✓</span>
                <span className="flex-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Booking Card */}
        <div className="w-full max-w-xs lg:max-w-sm mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-sm border space-y-6">
            <h3 className="text-xl font-semibold">Plan Your Journey</h3>
            <div className="space-y-4">
              <InfoItem title="Next Departure" value="September 15, 2024" />
              <InfoItem
                title="Accommodation"
                value={adventure.accommodationType}
              />
              <InfoItem title="Pickup Point" value={adventure.pickupPoint} />
            </div>
            <Button className="w-full" size="lg">
              Reserve Your Spot
            </Button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="space-y-6">
        <SectionHeading title="Route Map" />
        <div className="aspect-video bg-muted rounded-xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground">Route map coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionHeading = ({ title }: { title: string }) => (
  <h2 className="text-2xl font-bold border-b pb-2">{title}</h2>
);

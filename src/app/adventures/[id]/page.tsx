"use server";
import Image from "next/image";
import {
  MapPin,
  Mountain,
  Gauge,
  Calendar,
  Users,
  CalendarPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { bikingAdventuresData } from "@/mock-data/content";
import Link from "next/link";
import DetailCard from "@/components/adventures/detail-card";
import InfoItem from "@/components/adventures/info-item";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/adventures/adventure-enquiry-form";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";
import dayjs from "dayjs";
import PhotoViewer from "@/components/adventures/photo-gallery";

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

  const formattedStartDate = dayjs(adventure.startDate).format("MMMM D, YYYY");
  const formattedEndDate = dayjs(adventure.endDate).format("MMMM D, YYYY");

  const highlightsList = (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {adventure.keyHighlights?.map((highlight, index) => (
        <li key={index} className="flex items-start space-x-3">
          <span className="text-primary">✓</span>
          <span className="flex-1">{highlight}</span>
        </li>
      ))}
    </ul>
  );

  const itineraryList = (
    <Accordion type="single" collapsible className="w-full">
      {adventure.itinerary?.map((day) => (
        <AccordionItem key={day.day} value={`day-${day.day}`}>
          <AccordionTrigger className="hover:no-underline hover:bg-primary/20 p-4 font-semibold">
            Day {day.day}: {day.title}
          </AccordionTrigger>
          <AccordionContent className="px-6 py-2 bg-muted/10 rounded-lg">
            {day.distance && (
              <p className="text-sm text-muted-foreground font-medium">
                Distance: {day.distance}
              </p>
            )}
            <ul className="list-decimal list-inside mt-2 text-muted-foreground">
              {day.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <Dialog>
      <div className="col-span-12 mt-20 px-4 sm:px-6 lg:px-8 space-y-12 max-w-screen-2xl mx-auto w-full ">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground col-span-12">
          <Link href="/adventures" className="hover:text-primary">
            Adventures
          </Link>{" "}
          / {adventure.title}
        </nav>

        {/* Hero Section */}
        <div className="space-y-6 col-span-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {adventure.title}
          </h1>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={adventure.imageSrc}
              alt={adventure.altText}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>

        {/* Adventure Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 col-span-12">
          {[
            {
              icon: Mountain,
              title: "Highest Altitude",
              value: adventure.highestAltitude,
            },
            {
              icon: Gauge,
              title: "Total Distance",
              value: adventure.totalDistance,
            },
            {
              icon: Calendar,
              title: "Duration",
              value: adventure.rideDuration,
            },
            {
              icon: Users,
              title: "Difficulty",
              value: adventure.difficultyLevel,
            },
            {
              icon: MapPin,
              title: "Starting Point",
              value: adventure.startingPoint,
            },
            { icon: Users, title: "Group Size", value: "6-12 Riders" },
          ].map((item, index) => (
            <MemoizedDetailCard
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 col-span-12">
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 space-y-8">
            <MemoizedSectionHeading title="Adventure Overview" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {adventure.longDescription}
            </p>

            <MemoizedSectionHeading title="Experience Highlights" />
            {highlightsList}

            {adventure.photoGallery && (
              <PhotoViewer
                images={adventure.photoGallery}
                title={adventure.title}
              />
            )}

            <MemoizedSectionHeading title="Detailed Itinerary" />
            {itineraryList}
          </div>

          {/* Right Column (Booking Card) */}
          <div className="lg:col-span-4">
            <div className="bg-card rounded-lg p-6 shadow-sm border space-y-6 sticky top-28">
              <h3 className="text-xl font-semibold">Plan Your Journey</h3>
              <div className="space-y-4">
                <MemoizedInfoItem
                  title="Start Date"
                  value={formattedStartDate}
                />
                <MemoizedInfoItem title="End Date" value={formattedEndDate} />
                <MemoizedInfoItem
                  title="Accommodation"
                  value={adventure.accommodationType}
                />
                <MemoizedInfoItem
                  title="Pickup Point"
                  value={adventure.pickupPoint}
                />
              </div>
              <DialogTrigger asChild>
                <Button className="w-full  font-bold" size="lg">
                  Enquire More
                </Button>
              </DialogTrigger>
              <MemoizedGoogleCalendarButton
                link={adventure.googleCalendarLink}
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-12">
          <ContactForm adventureTitle={adventure.title} />
        </div>
      </div>
    </Dialog>
  );
}

// Memoized Components
const MemoizedDetailCard = React.memo(DetailCard);
const MemoizedInfoItem = React.memo(InfoItem);
// eslint-disable-next-line react/display-name
const MemoizedSectionHeading = React.memo(({ title }: { title: string }) => (
  <h2 className="text-2xl font-bold border-b pb-2">{title}</h2>
));

// eslint-disable-next-line react/display-name
const MemoizedGoogleCalendarButton = React.memo(
  ({ link }: { link: string }) => {
    if (!link) return null;
    return (
      <div className="text-center">
        <Button
          asChild
          variant="outline"
          className="flex items-center gap-2 p-6"
        >
          <Link href={link} target="_blank">
            <CalendarPlus className="w-10 h-10" />
            Add to Google Calendar
          </Link>
        </Button>
      </div>
    );
  }
);

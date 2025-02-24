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
import { bikingAdventuresData } from "@/data/content";
import Link from "next/link";
import DetailCard from "@/components/adventures/detail-card";
import InfoItem from "@/components/adventures/info-item";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/adventures/contact-form/contact-form";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";
import dayjs from "dayjs";

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

  // Format the startDate for display
  const formattedStartDate = dayjs(adventure.startDate).format("MMMM D, YYYY");

  // ✅ Precompute lists before JSX to improve readability and performance
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
      <div className="col-span-12 mt-28 max-w-screen-xl min-w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
          <div className="relative aspect-video overflow-hidden shadow-lg rounded-lg h-[50vh] w-full">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <MemoizedDetailCard
            icon={Mountain}
            title="Highest Altitude"
            value={adventure.highestAltitude}
          />
          <MemoizedDetailCard
            icon={Gauge}
            title="Total Distance"
            value={adventure.totalDistance}
          />
          <MemoizedDetailCard
            icon={Calendar}
            title="Duration"
            value={adventure.rideDuration}
          />
          <MemoizedDetailCard
            icon={Users}
            title="Difficulty"
            value={adventure.difficultyLevel}
          />
          <MemoizedDetailCard
            icon={MapPin}
            title="Starting Point"
            value={adventure.startingPoint}
          />
          <MemoizedDetailCard
            icon={Users}
            title="Group Size"
            value="4-12 Riders"
          />
        </div>

        {/* Description & Highlights */}
        <div className="grid lg:grid-cols-3 gap-6 justify-between">
          <div className="lg:col-span-2 space-y-8">
            <MemoizedSectionHeading title="Adventure Overview" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {adventure.longDescription}
            </p>

            <MemoizedSectionHeading title="Experience Highlights" />
            {highlightsList}

            {/* Itinerary Section with Accordion */}
            <MemoizedSectionHeading title="Detailed Itinerary" />
            {itineraryList}
          </div>

          {/* Booking Card */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="bg-card rounded-lg p-6 shadow-sm border space-y-6">
              <h3 className="text-xl font-semibold">Plan Your Journey</h3>
              <div className="space-y-4">
                <MemoizedInfoItem
                  title="Next Departure"
                  value={formattedStartDate}
                />
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
                <Button className="w-full font-body font-bold" size="lg">
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
        <ContactForm adventureTitle={adventure.title} />
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

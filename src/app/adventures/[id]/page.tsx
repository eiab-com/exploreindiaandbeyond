// pages/adventures/[id]/page.tsx

import { bikingAdventuresData } from "@/data/content";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Wait for the params to resolve and extract the id
  const { id } = await params;

  // Log the id to debug
  console.log("Requested Adventure ID (from URL):", id);

  // Log the IDs from bikingAdventuresData for comparison
  bikingAdventuresData.forEach((adventure) =>
    console.log("Adventure ID in data:", adventure.id)
  );

  // Find the adventure by its id (trim both if necessary)
  const adventure = bikingAdventuresData.find(
    (adventure) => adventure.id.trim() === id.trim()
  );

  // Log the found adventure for debugging
  console.log("Found Adventure:", adventure);

  if (!adventure) {
    return <div>Adventure not found</div>;
  }

  return (
    <div className=" flex items-start justify-start">
      <h1>{adventure.title}</h1>
      <img src={adventure.imageSrc} alt={adventure.altText} />
      <p>{adventure.longDescription}</p>
      <p>
        <strong>Trek Duration:</strong> {adventure.trekDuration}
      </p>
      <p>
        <strong>Highest Altitude:</strong> {adventure.highestAltitude}
      </p>
      <p>
        <strong>Suitable For:</strong> {adventure.suitableFor}
      </p>
      <p>
        <strong>Total Distance:</strong> {adventure.totalDistance}
      </p>
      <p>
        <strong>Basecamp:</strong> {adventure.basecamp}
      </p>
      <p>
        <strong>Accommodation Type:</strong> {adventure.accommodationType}
      </p>
      <p>
        <strong>Pickup Point:</strong> {adventure.pickupPoint}
      </p>
    </div>
  );
}


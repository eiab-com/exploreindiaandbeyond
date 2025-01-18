import dayjs, { Dayjs } from "dayjs";

interface BikingAdventure {
  id: string;
  title: string;
  googleCalendarLink: string;
  imageSrc: string;
  altText: string;
  shortDescription: string; // Added short description field
  longDescription: string;
  startDate: Dayjs | Date; // Changed to Dayjs type
  endDate: Dayjs | Date; // Changed to Dayjs type
  keyHighlights: string[];
  trekDuration: string;
  highestAltitude: string;
  suitableFor: string;
  totalDistance: string;
  basecamp: string;
  accommodationType: string;
  pickupPoint: string;
  photoGallery: string[];
}

const whyUsCardData = [
  {
    title: "Unique Routes",
    description:
      "‘Tuned’ and perfected for over a decade to provide unforgettable travel experiences.",
    imageSrc: "/assets/routes-2.svg",
    altText: "Unique Routes Icon",
  },
  {
    title: "The Best Fleet",
    description:
      "Royal Enfield Himalayan (450 & 411), KTM 390 Adventure & 500cc Royal Enfield Bullet Trials.",
    imageSrc: "/assets/bike.svg",
    altText: "Best Fleet Icon",
  },
  {
    title: "Seamless Travel",
    description:
      "Enjoy stress-free adventures with our 24/7 dedicated support team with ready Medpacks.",
    imageSrc: "/assets/support.svg",
    altText: "Seamless Travel Icon",
  },
];

const bikingAdventuresData: BikingAdventure[] = [
  {
    id: "1",
    title: "Leh - Ladakh Biking Adventure",
    googleCalendarLink: "google.com/calendar/ics-link",
    imageSrc:
      "https://images.pexels.com/photos/5273240/pexels-photo-5273240.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Leh - Ladakh Biking Adventure",
    shortDescription:
      "Epic 4-month motorcycle journey through the stunning landscapes of northern India, from Chandigarh to Manali.",
    longDescription:
      "Join us on an amazing motorbike adventure through northern India's rocky terrain, from Chandigarh to Srinagar, Leh, Turtuk, Pangong Tso, and Manali, concluding in a memorable experience. Begin your journey in Chandigarh, where nature and modernism coexist together. Experience the charming Dal Lake and the lively marketplaces as you ride towards Srinagar, navigating through the enchanted landscapes.",
    startDate: dayjs("2025-09-10T07:00:00"),
    endDate: dayjs("2026-01-02T01:30:00"),
    keyHighlights: [
      "Motorbike ride through rugged terrain from Chandigarh to Manali.",
      "Scenic views of Dal Lake in Srinagar.",
      "Experience the beauty of Pangong Tso and Turtuk.",
      "End the trip in the vibrant city of Manali.",
    ],
    trekDuration: "4 months",
    highestAltitude: "18,380 ft",
    suitableFor: "20 to 50 years",
    totalDistance: "2,500 kms",
    basecamp: "Chandigarh",
    accommodationType: "Hotels and Tents",
    pickupPoint: "Chandigarh Railway Station",
    photoGallery: [
      "/assets/gallery/photo1.jpg",
      "/assets/gallery/photo2.jpg",
      "/assets/gallery/photo3.jpg",
      "/assets/gallery/photo4.jpg",
    ],
  },
  {
    id: "2",
    title: "Spiti Valley Biking Adventure",
    googleCalendarLink: "google.com/calendar/ics-link",
    imageSrc:
      "https://images.pexels.com/photos/5273240/pexels-photo-5273240.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Spiti Valley Biking Adventure",
    shortDescription:
      "One-day intense ride through the mystical Spiti Valley, featuring ancient monasteries and Himalayan vistas.",
    longDescription:
      "Experience the rugged beauty of Spiti Valley. This adventure combines challenging terrains, ancient monasteries, and breathtaking views of the Himalayas. The biking trip is filled with cultural immersion and pure adventure.",
    startDate: dayjs("2026-01-03T00:30:00"),
    endDate: dayjs("2026-01-03T01:30:00"),
    keyHighlights: [
      "Exploration of ancient monasteries in the Spiti Valley.",
      "Ride through rocky landscapes and picturesque villages.",
      "Incredible views of the snow-covered Himalayas.",
    ],
    trekDuration: "1 day",
    highestAltitude: "14,400 ft",
    suitableFor: "18 to 55 years",
    totalDistance: "250 kms",
    basecamp: "Kaza",
    accommodationType: "Guesthouses and Tents",
    pickupPoint: "Shimla Railway Station",
    photoGallery: [
      "/assets/gallery/photo5.jpg",
      "/assets/gallery/photo6.jpg",
      "/assets/gallery/photo7.jpg",
      "/assets/gallery/photo8.jpg",
    ],
  },
  {
    id: "3",
    title: "North-East India Biking Adventure",
    googleCalendarLink: "google.com/calendar/ics-link",
    imageSrc:
      "https://images.pexels.com/photos/5273240/pexels-photo-5273240.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "North-East India Biking Adventure",
    shortDescription:
      "One-day cultural expedition through North-East India's diverse landscapes and wildlife sanctuaries.",
    longDescription:
      "Discover the hidden gems of North-East India, a region rich in culture, stunning landscapes, and diverse wildlife. This biking trip will take you through charming towns, lush forests, and serene lakes.",
    startDate: dayjs("2026-01-04"),
    endDate: dayjs("2026-01-04"),
    keyHighlights: [
      "Ride through picturesque towns in North-East India.",
      "Explore lush forests and serene lakes.",
      "Get a glimpse of diverse wildlife and vibrant culture.",
    ],
    trekDuration: "1 day",
    highestAltitude: "10,000 ft",
    suitableFor: "18 to 60 years",
    totalDistance: "350 kms",
    basecamp: "Shillong",
    accommodationType: "Hotels and Resorts",
    pickupPoint: "Guwahati Railway Station",
    photoGallery: [
      "/assets/gallery/photo9.jpg",
      "/assets/gallery/photo10.jpg",
      "/assets/gallery/photo11.jpg",
      "/assets/gallery/photo12.jpg",
    ],
  },
];


export { whyUsCardData, bikingAdventuresData };

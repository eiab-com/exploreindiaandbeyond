import dayjs, { Dayjs } from "dayjs";

interface BikingAdventure {
  id: string;
  title: string;
  googleCalendarLink: string;
  imageSrc: string;
  altText: string;
  shortDescription: string;
  longDescription: string;
  startDate: Dayjs | Date;
  endDate: Dayjs | Date;
  keyHighlights: string[];
  rideDuration: string; // Changed from trekDuration
  highestAltitude: string;
  suitableFor: string;
  totalDistance: string;
  startingPoint: string; // Changed from basecamp
  accommodationType: string;
  pickupPoint: string;
  photoGallery: string[];
  bikeModels: string[]; // Added bike models
  difficultyLevel: string; // Added difficulty
  averageDailyRide: string; // Added daily distance
}

const bikingAdventuresData: BikingAdventure[] = [
  {
    id: "1",
    title: "Leh - Ladakh Biking Expedition",
    googleCalendarLink: "google.com/calendar/ics-link",
    imageSrc:
      "https://images.pexels.com/photos/5273240/pexels-photo-5273240.jpeg",
    altText: "Leh - Ladakh Biking Expedition",
    shortDescription:
      "Epic 4-month motorcycle journey through the stunning landscapes of northern India",
    longDescription:
      "Join us on an amazing motorbike adventure through northern India's rocky terrain...",
    startDate: dayjs("2025-09-10T07:00:00"),
    endDate: dayjs("2026-01-02T01:30:00"),
    keyHighlights: [
      "Challenging high-altitude mountain passes",
      "Royal Enfield Himalayan riding experience",
      "Explore remote Himalayan villages",
      "Professional riding support team",
    ],
    rideDuration: "14 days riding",
    highestAltitude: "18,380 ft",
    suitableFor: "Intermediate to advanced riders",
    totalDistance: "2,500 km",
    startingPoint: "Chandigarh",
    accommodationType: "Biker-friendly hotels & camps",
    pickupPoint: "Chandigarh Railway Station",
    photoGallery: ["/assets/gallery/photo1.jpg", "/assets/gallery/photo2.jpg"],
    bikeModels: ["Royal Enfield Himalayan 450", "KTM 390 Adventure"],
    difficultyLevel: "Challenging",
    averageDailyRide: "180-220 km",
  },
  {
    id: "2",
    title: "Spiti Valley Ride Challenge",
    googleCalendarLink: "google.com/calendar/ics-link",
    imageSrc:
      "https://images.pexels.com/photos/5273240/pexels-photo-5273240.jpeg",
    altText: "Spiti Valley Biking Adventure",
    shortDescription:
      "High-altitude motorcycle challenge through the mystical Spiti Valley",
    longDescription:
      "Experience the rugged beauty of Spiti Valley on two wheels...",
    startDate: dayjs("2026-01-03T00:30:00"),
    endDate: dayjs("2026-01-03T01:30:00"),
    keyHighlights: [
      "World's highest motorable roads",
      "Technical riding through river crossings",
      "Stay in traditional Himalayan homestays",
      "Expert mechanic support throughout",
    ],
    rideDuration: "10 days riding",
    highestAltitude: "14,400 ft",
    suitableFor: "Experienced riders",
    totalDistance: "800 km",
    startingPoint: "Manali",
    accommodationType: "Homestays",
    pickupPoint: "Manali Bus Stand",
    photoGallery: ["/assets/gallery/photo5.jpg", "/assets/gallery/photo6.jpg"],
    bikeModels: ["Royal Enfield Himalayan 411", "KTM 390 Adventure"],
    difficultyLevel: "Advanced",
    averageDailyRide: "80-120 km",
  },
];


// Why Us Section - Updated with biking focus
const whyUsCardData = [
  {
    title: "Curated Riding Routes",
    description: "Routes perfected over a decade for the ultimate biking experience",
    imageSrc: "/assets/routes-2.svg",
    altText: "Curated Routes Icon"
  },
  {
    title: "Premium Adventure Bikes",
    description: "Royal Enfield Himalayan 450, KTM 390 Adventure & BMW GS models",
    imageSrc: "/assets/bike.svg",
    altText: "Adventure Bikes Icon"
  },
  {
    title: "Rider Support",
    description: "24/7 support with expert mechanics, medical backup & riding guides",
    imageSrc: "/assets/support.svg",
    altText: "Rider Support Icon"
  }
];



  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: "London",
      text: "The Rajasthan Desert Dash was absolutely incredible! The support team made everything seamless from start to finish. Can't wait for my next Indian adventure!",
      rating: 5,
    },
    {
      id: 2,
      name: "James Wilson",
      location: "Manchester",
      text: "Best motorcycle experience of my life. The Himalayan routes took my breath away, and the local guides were true experts. Highly recommend to UK riders!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Carter",
      location: "Birmingham",
      text: "As a solo female rider, I felt completely safe and supported throughout the Kerala Coastal ride. The cultural experiences were as amazing as the riding!",
      rating: 4,
    },
    {
      id: 4,
      name: "Mohammed Ali",
      location: "Leeds",
      text: "Perfect mix of challenging rides and authentic Indian hospitality. The bike maintenance crew was always on point. Will definitely ride with them again!",
      rating: 5,
    },
    {
      id: 5,
      name: "Lucy Bennett",
      location: "Glasgow",
      text: "From visa assistance to route planning, every detail was handled. The Spiti Valley route is a must-do for any serious adventure rider!",
      rating: 5,
    },
  ];


export { whyUsCardData, bikingAdventuresData, testimonials };

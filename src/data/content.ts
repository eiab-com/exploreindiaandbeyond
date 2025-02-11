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
  region: string;
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
    region: "North",
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
    region: "North",
  },
  {
    id: "3",
    title: "Rajasthan Desert Ride",
    googleCalendarLink: "google.com/calendar/rajasthan",
    imageSrc:
      "https://images.pexels.com/photos/4625460/pexels-photo-4625460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Thar Desert biking adventure",
    shortDescription:
      "Sun-soaked journey through golden deserts and ancient forts",
    longDescription: "Experience the magic of Rajasthan's desert landscape...",
    startDate: dayjs("2026-02-15T06:00:00"),
    endDate: dayjs("2026-02-28T18:00:00"),
    keyHighlights: [
      "Ride through Thar Desert",
      "Visit Jaisalmer Fort",
      "Camel safari experience",
      "Evening desert camps",
    ],
    rideDuration: "10 days riding",
    highestAltitude: "1,722 ft",
    suitableFor: "All skill levels",
    totalDistance: "1,200 km",
    startingPoint: "Jaipur",
    accommodationType: "Heritage hotels & desert camps",
    pickupPoint: "Jaipur Airport",
    photoGallery: ["/assets/gallery/raj1.jpg", "/assets/gallery/raj2.jpg"],
    bikeModels: ["Royal Enfield Classic 350", "Bajaj Dominar 400"],
    difficultyLevel: "Moderate",
    averageDailyRide: "100-150 km",
    region: "West",
  },
  {
    id: "4",
    title: "Kerala Backwaters Cruise",
    googleCalendarLink: "google.com/calendar/kerala",
    imageSrc:
      "https://images.pexels.com/photos/739047/pexels-photo-739047.jpeg",
    altText: "Kerala backwaters biking",
    shortDescription: "Lush green landscapes and coastal routes of South India",
    longDescription:
      "Combine biking with houseboat stays in tropical paradise...",
    startDate: dayjs("2026-03-01T05:30:00"),
    endDate: dayjs("2026-03-10T15:00:00"),
    keyHighlights: [
      "Western Ghats mountain roads",
      "Backwater houseboat stay",
      "Tea plantation visits",
      "Coastal riding routes",
    ],
    rideDuration: "7 days riding",
    highestAltitude: "7,000 ft",
    suitableFor: "Beginner to intermediate",
    totalDistance: "800 km",
    startingPoint: "Kochi",
    accommodationType: "Resorts & houseboats",
    pickupPoint: "Kochi Port",
    photoGallery: ["/assets/gallery/ker1.jpg", "/assets/gallery/ker2.jpg"],
    bikeModels: ["TVS Apache RTR 200", "Jawa Perak"],
    difficultyLevel: "Easy-Moderate",
    averageDailyRide: "80-120 km",
    region: "South",
  },
  {
    id: "5",
    title: "Eastern Himalayas Explorer",
    googleCalendarLink: "google.com/calendar/east-himalayas",
    imageSrc:
      "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg",
    altText: "Eastern Himalayas biking",
    shortDescription: "Discover hidden Buddhist monasteries and alpine forests",
    longDescription:
      "Ride through the less-explored eastern Himalayan ranges...",
    startDate: dayjs("2026-04-10T04:00:00"),
    endDate: dayjs("2026-04-20T12:00:00"),
    keyHighlights: [
      "Tea garden routes",
      "Visit Tawang Monastery",
      "Sela Pass challenge",
      "Tribal culture experiences",
    ],
    rideDuration: "8 days riding",
    highestAltitude: "13,800 ft",
    suitableFor: "Intermediate riders",
    totalDistance: "900 km",
    startingPoint: "Guwahati",
    accommodationType: "Eco-lodges & guest houses",
    pickupPoint: "Guwahati Railway Station",
    photoGallery: ["/assets/gallery/east1.jpg", "/assets/gallery/east2.jpg"],
    bikeModels: ["Hero Xpulse 200", "Suzuki V-Strom 650"],
    difficultyLevel: "Moderate",
    averageDailyRide: "100-130 km",
    region: "East",
  },
  {
    id: "6",
    title: "Konkan Coastal Challenge",
    googleCalendarLink: "google.com/calendar/konkan",
    imageSrc:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
    altText: "Konkan coast biking",
    shortDescription: "Scenic coastal highways and beachside camping",
    longDescription: "Ride along India's western coastline with ocean views...",
    startDate: dayjs("2026-05-05T06:30:00"),
    endDate: dayjs("2026-05-12T17:00:00"),
    keyHighlights: [
      "Coastal cliff roads",
      "Fresh seafood cuisine",
      "Beachside camping",
      "Waterfall visits",
    ],
    rideDuration: "6 days riding",
    highestAltitude: "2,000 ft",
    suitableFor: "All skill levels",
    totalDistance: "700 km",
    startingPoint: "Mumbai",
    accommodationType: "Beach resorts & camps",
    pickupPoint: "Mumbai Airport",
    photoGallery: ["/assets/gallery/kon1.jpg", "/assets/gallery/kon2.jpg"],
    bikeModels: ["Yamaha MT-15", "KTM Duke 390"],
    difficultyLevel: "Easy",
    averageDailyRide: "100-120 km",
    region: "West",
  },
  {
    id: "7",
    title: "Uttarakhand Himalayan Quest",
    googleCalendarLink: "google.com/calendar/uttarakhand",
    imageSrc:
      "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
    altText: "Uttarakhand mountain biking",
    shortDescription: "Spiritual and adventurous ride through Dev Bhumi",
    longDescription: "Combine temple visits with thrilling mountain rides...",
    startDate: dayjs("2026-06-01T05:00:00"),
    endDate: dayjs("2026-06-10T14:00:00"),
    keyHighlights: [
      "Char Dham circuit",
      "Whitewater rafting combo",
      "Forest reserve trails",
      "Yoga retreat experience",
    ],
    rideDuration: "8 days riding",
    highestAltitude: "11,500 ft",
    suitableFor: "Intermediate riders",
    totalDistance: "1,000 km",
    startingPoint: "Dehradun",
    accommodationType: "Mountain lodges",
    pickupPoint: "Dehradun Airport",
    photoGallery: ["/assets/gallery/utt1.jpg", "/assets/gallery/utt2.jpg"],
    bikeModels: ["Royal Enfield Scram 411", "Honda CB500X"],
    difficultyLevel: "Moderate-Challenging",
    averageDailyRide: "120-150 km",
    region: "North",
  },
  {
    id: "8",
    title: "Western Ghats Thrill",
    googleCalendarLink: "google.com/calendar/west-ghats",
    imageSrc:
      "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg",
    altText: "Western Ghats biking adventure",
    shortDescription: "Misty mountains and coffee plantations of South India",
    longDescription: "Navigate through 36 hairpin bends and lush greenery...",
    startDate: dayjs("2026-07-10T06:00:00"),
    endDate: dayjs("2026-07-17T16:00:00"),
    keyHighlights: [
      "Ooty hill station routes",
      "Coffee plantation stays",
      "Wildlife sanctuary crossing",
      "Waterfall rappelling",
    ],
    rideDuration: "6 days riding",
    highestAltitude: "8,600 ft",
    suitableFor: "Intermediate riders",
    totalDistance: "850 km",
    startingPoint: "Bengaluru",
    accommodationType: "Plantation bungalows",
    pickupPoint: "Bengaluru Central",
    photoGallery: ["/assets/gallery/ghat1.jpg", "/assets/gallery/ghat2.jpg"],
    bikeModels: ["KTM 250 Adventure", "BMW G 310 GS"],
    difficultyLevel: "Moderate",
    averageDailyRide: "130-160 km",
    region: "South",
  },
];

// Why Us Section - Updated with biking focus
const whyUsCardData = [
  {
    title: "Curated Riding Routes",
    description:
      "Routes perfected over a decade for the ultimate biking experience",
    imageSrc: "/assets/routes-2.svg",
    altText: "Curated Routes Icon",
  },
  {
    title: "Premium Adventure Bikes",
    description:
      "Royal Enfield Himalayan 450, KTM 390 Adventure & BMW GS models",
    imageSrc: "/assets/bike.svg",
    altText: "Adventure Bikes Icon",
  },
  {
    title: "Rider Support",
    description:
      "24/7 support with expert mechanics, medical backup & riding guides",
    imageSrc: "/assets/support.svg",
    altText: "Rider Support Icon",
  },
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

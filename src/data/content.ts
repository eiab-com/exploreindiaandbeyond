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
  rideDuration: string;
  highestAltitude: string;
  suitableFor: string;
  totalDistance: string;
  startingPoint: string;
  accommodationType: string;
  pickupPoint: string;
  photoGallery: string[];
  bikeModels: string[];
  difficultyLevel: string;
  averageDailyRide: string;
  region: string;
  itinerary: {
    day: number;
    title: string;
    distance?: string;
    highlights: string[];
  }[]; // New Itinerary Field
}

const bikingAdventuresData: BikingAdventure[] = [
  {
    id: "1",
    title: "Leh - Ladakh Bike Trip",
    googleCalendarLink: "google.com/calendar/leh-ladakh",
    imageSrc:
      "https://images.pexels.com/photos/5201944/pexels-photo-5201944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Leh - Ladakh Biking Expedition",
    shortDescription:
      "Embark on an unforgettable 11-day motorcycle journey through the breathtaking landscapes of Ladakh, conquering some of the world's highest motorable roads.",
    longDescription:
      "This 11-day Leh-Ladakh biking adventure is the ultimate test of endurance, skill, and passion for motorcycling. Ride through high-altitude passes, explore remote valleys, and immerse yourself in Ladakh’s rich culture and history...",
    startDate: dayjs("2025-09-09T07:00:00"),
    endDate: dayjs("2025-09-19T17:00:00"),
    keyHighlights: [
      "Ride through Khardung La (5,359m) & Umling La (5,883m) – Highest motorable passes",
      "Explore remote Zanskar Valley, Padum, and Hanle",
      "Marvel at the surreal beauty of Pangong Lake and Nubra Valley",
      "Visit historic Buddhist monasteries: Lamayuru, Karsha, and Tawang",
      "Witness the confluence of the Indus & Zanskar Rivers",
      "Experience desert dunes and double-humped camels in Nubra",
      "Backup vehicle, mechanic support, and expert tour captain",
    ],
    rideDuration: "11 days riding",
    highestAltitude: "19,024 ft (Umling La Pass)",
    suitableFor: "Intermediate to advanced riders",
    totalDistance: "1400 miles",
    startingPoint: "Leh",
    accommodationType: "Hotels,Homestays & Camps",
    pickupPoint: "Leh Airport",
    photoGallery: [
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/11.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/16.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/37.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/41.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/31.jpg",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 350/500 or similar",
    ],
    difficultyLevel: "Moderate",
    averageDailyRide: "150-250 km",
    region: "North",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Acclimatization",
        highlights: [
          "Explore Leh Market",
          "Visit Shanti Stupa",
          "Acclimatize to high altitude",
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        highlights: [
          "Visit Leh Palace & Magnetic Hill",
          "See Indus-Zanskar Sangam",
          "Explore Rancho School",
        ],
      },
      {
        day: 3,
        title: "Leh → Kargil",
        distance: "135 miles",
        highlights: [
          "Ride through Namika La & Fotu La",
          "Visit Kargil War Memorial",
        ],
      },
      {
        day: 4,
        title: "Kargil → Padum",
        distance: "190 miles",
        highlights: [
          "Cross Pensi La Pass (4,400m)",
          "Explore stunning Zanskar Valley",
        ],
      },
      {
        day: 5,
        title: "Padum Local Sightseeing",
        highlights: ["Visit Karsha Monastery", "Explore Zangla Fort"],
      },
      {
        day: 6,
        title: "Padum → Lamayuru",
        distance: "125 miles",
        highlights: [
          "Ride through 'Moonland' terrain",
          "Visit Lamayuru Monastery",
        ],
      },
      {
        day: 7,
        title: "Lamayuru → Nubra Valley",
        distance: "175 miles",
        highlights: [
          "Cross Khardung La (5,359m)",
          "Enjoy sand dunes & camel safari",
        ],
      },
      {
        day: 8,
        title: "Nubra Valley → Pangong Lake",
        distance: "170 miles",
        highlights: [
          "Ride along the Shyok River",
          "Camp under the stars at Pangong",
          "You'll pass through world's second highest motorable road Khardungla Pass",
        ],
      },
      {
        day: 9,
        title: "Pangong Lake → Hanle",
        distance: "200 miles",
        highlights: [
          "Visit Hanle Monastery",
          "Experience the astronomical observatory",
        ],
      },
      {
        day: 10,
        title: "Hanle → Umling La → Hanle",
        distance: "130 miles (round trip)",
        highlights: [
          "Ride to Umling La (5,883m) - Highest motorable road in the world",
        ],
      },
      {
        day: 11,
        title: "Hanle → Leh",
        distance: "200 miles",
        highlights: [
          "Scenic ride back to Leh",
          "Reflect on an unforgettable journey",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Spiti Valley Adventure",
    googleCalendarLink: "google.com/calendar/spiti-valley",
    imageSrc:
      "https://images.pexels.com/photos/23522680/pexels-photo-23522680/free-photo-of-key-gompa-monastery-in-mountains-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Spiti Valley Biking Expedition",
    shortDescription:
      "An exhilarating 9-day motorcycle expedition through the raw beauty of Spiti Valley.",
    longDescription:
      "The Spiti Valley bike trip is a perfect blend of adventure and scenic landscapes. This 9-day journey takes you through the rugged mountains of Himachal Pradesh, covering the last inhabited village near the Indo-Tibetan border, ancient monasteries, and high-altitude passes. \n\n\
      Riders will experience the thrill of navigating through narrow mountain roads, river crossings, and high-altitude passes such as Kunzum La. Along the way, they'll witness the serene beauty of Chandra Taal (Moon Lake) and ride across Asia’s highest suspension bridge at Chicham. \n\n\
      Whether you're looking for an adrenaline rush or a peaceful retreat amidst nature, Spiti Valley offers the best of both worlds. With expert guidance, backup vehicle support, and well-planned accommodations, this journey ensures a hassle-free and unforgettable adventure.",
    startDate: dayjs("2025-08-22T06:00:00"),
    endDate: dayjs("2025-09-01T17:00:00"),
    keyHighlights: [
      "Ride through the majestic Kinnaur & Spiti Valleys",
      "Visit Chitkul, India's last village near the Indo-Tibetan border",
      "Explore ancient monasteries: Tabo & Dhankar",
      "Cross Asia's highest suspension bridge at Chicham",
      "Witness the pristine beauty of Chandra Taal Lake",
      "Conquer the Kunzum Pass (4,590m)",
      "Backup vehicle, professional trip captain & mechanic support",
    ],
    rideDuration: "9 days riding",
    highestAltitude: "14000 ft (Kunzum Pass)",
    suitableFor: "Intermediate to experienced riders",
    totalDistance: "800 miles",
    startingPoint: "Chandigarh",
    accommodationType: "Hotels, Guesthouses & Camps",
    pickupPoint: "Chandigarh Airport",
    photoGallery: [
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/24.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/33.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/34.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/35.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/36.jpg",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 500/350 or similar",
    ],
    difficultyLevel: "Challenging",
    averageDailyRide: "130-200 km",
    region: "North",
    itinerary: [
      {
        day: 0,
        title: "Arrival in Chandigarh",
        highlights: [
          "Meet the crew and fellow riders",
          "Bike inspection and preparations",
        ],
      },
      {
        day: 1,
        title: "Chandigarh → Chail",
        distance: "70 miles",
        highlights: [
          "Scenic mountain views and lush greenery",
          "Visit Chail Palace",
        ],
      },
      {
        day: 2,
        title: "Chail → Sangla",
        distance: "150 miles",
        highlights: [
          "Ride through the mesmerizing Kinnaur Valley",
          "See the beautiful Baspa River",
        ],
      },
      {
        day: 3,
        title: "Sangla → Chitkul → Kalpa",
        distance: "65 miles",
        highlights: [
          "Visit Chitkul, the last Indian village near the border",
          "Spectacular views of Kinner Kailash range",
        ],
      },
      {
        day: 4,
        title: "Kalpa → Tabo",
        distance: "110 miles",
        highlights: [
          "Drive through Spiti’s rocky terrains",
          "Explore the 1,000-year-old Tabo Monastery",
        ],
      },
      {
        day: 5,
        title: "Tabo → Dhankar → Kaza → Chicham",
        distance: "55 miles",
        highlights: [
          "Visit Dhankar Monastery with stunning valley views",
          "Cross the famous Chicham Suspension Bridge",
        ],
      },
      {
        day: 6,
        title: "Chicham → Langza → Hikkim → Chicham",
        distance: "30 miles",
        highlights: [
          "See Langza’s Giant Buddha Statue",
          "Send a postcard from the world’s highest post office in Hikkim",
        ],
      },
      {
        day: 7,
        title: "Chicham → Chandra Taal → Manali",
        distance: "130 miles",
        highlights: [
          "Ride through the challenging Kunzum Pass (14,931 ft)",
          "Camp beside Chandra Taal ( 12,000 ft ), the 'Moon Lake'",
        ],
      },
      {
        day: 8,
        title: "Manali Local Sightseeing",
        highlights: [
          "Explore Hadimba Temple & Mall Road",
          "Relax at Vashisht Hot Springs",
        ],
      },
      {
        day: 9,
        title: "Manali → Chandigarh",
        distance: "170 miles",
        highlights: [
          "Scenic ride through the Beas River valley",
          "End of an unforgettable journey",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Northeast India Motorcycle Expedition",
    googleCalendarLink: "google.com/calendar/northeast-india",
    imageSrc:
      "https://images.pexels.com/photos/6058267/pexels-photo-6058267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Northeast India Biking Expedition",
    shortDescription:
      "An epic 10-day ride through the lush hills, waterfalls, and cultural wonders of Northeast India.",
    longDescription:
      "The Northeast India Motorcycle Expedition takes you on a thrilling journey through some of the most scenic and culturally rich regions of the country. Over 10 days, you'll ride through the misty hills of Meghalaya, the dense forests of Kaziranga, and the spiritual heights of Tawang. \n\n\
      Expect a mix of winding mountain roads, serene valleys, and encounters with vibrant tribal cultures. Ride across breathtaking locations like the Umngot River in Dawki, the famous Kaziranga National Park, and the high-altitude Bumla Pass near the Indo-China border. \n\n\
      With expert guides, backup vehicle support, and carefully curated accommodations, this expedition offers the perfect balance of adventure, relaxation, and cultural immersion.",
    startDate: dayjs("2025-10-10T06:00:00"),
    endDate: dayjs("2025-10-20T17:00:00"),
    keyHighlights: [
      "Visit the ancient Kamakhya Temple in Guwahati",
      "Explore Meghalaya's waterfalls & caves: Nohkailikai, Elephant Falls, and Limestone Cave",
      "Experience the crystal-clear Umngot River in Dawki",
      "Ride through the cleanest village in Asia - Mawlynnong",
      "Kaziranga National Park (One-horned Rhino sightings)",
      "Cross the stunning Sangti & Tenga Valleys",
      "Visit India's largest monastery - Tawang Monastery",
      "Ride to Bumla Pass near the Indo-China border",
      "Backup vehicle, professional guide, and mechanic support",
    ],
    rideDuration: "10 days riding",
    highestAltitude: "15,200 ft (Bumla Pass)",
    suitableFor: "Intermediate to experienced riders",
    totalDistance: "850 miles",
    startingPoint: "Guwahati",
    accommodationType: "Hotels, homestays & guesthouses",
    pickupPoint: "Guwahati Airport",
    photoGallery: [
      "https://images.pexels.com/photos/2815093/pexels-photo-2815093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2682181/pexels-photo-2682181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/11752865/pexels-photo-11752865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/14916663/pexels-photo-14916663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 350/500 or similar",
    ],
    difficultyLevel: "Moderate-Challenging",
    averageDailyRide: "100-150 miles",
    region: "Northeast",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        highlights: [
          "Visit Kamakhya Temple",
          "Explore Guwahati’s vibrant local markets",
        ],
      },
      {
        day: 2,
        title: "Guwahati → Cherrapunji",
        distance: "100 miles",
        highlights: [
          "Stop by Umiam Lake for scenic photography",
          "Explore Elephant Falls & Mawdok Dympep Valley",
          "Visit Nohkailikai Falls, India's highest plunge waterfall",
        ],
      },
      {
        day: 3,
        title: "Cherrapunji → Shillong",
        distance: "40 miles",
        highlights: [
          "Ride to Dawki’s crystal-clear Umngot River",
          "Visit Mawlynnong - the cleanest village in Asia",
          "Explore Shillong’s famous cafes and night markets",
        ],
      },
      {
        day: 4,
        title: "Shillong → Tezpur (via Kaziranga)",
        distance: "160 miles",
        highlights: [
          "Optional visit to Kaziranga National Park",
          "Explore Mahabhairab Temple & Agnigarh Hill in Tezpur",
        ],
      },
      {
        day: 5,
        title: "Tezpur → Dirang",
        distance: "120 miles",
        highlights: [
          "Scenic ride through Sangti Valley",
          "Explore Tippi Orchid Centre",
        ],
      },
      {
        day: 6,
        title: "Dirang → Tawang",
        distance: "90 miles",
        highlights: [
          "Visit India's largest monastery - Tawang Monastery",
          "Explore Tawang Museum & local markets",
        ],
      },
      {
        day: 7,
        title: "Tawang Sightseeing & Bumla Pass",
        distance: "35 miles",
        highlights: [
          "Ride to Bumla Pass (15,200 ft) near Indo-China border",
          "Visit Madhuri Lake and serene mountain lakes",
        ],
      },
      {
        day: 8,
        title: "Tawang → Bomdilla",
        distance: "120 miles",
        highlights: [
          "Stop at Urgelling Monastery - birthplace of the 6th Dalai Lama",
          "Visit Tawang War Memorial",
        ],
      },
      {
        day: 9,
        title: "Bomdilla → Guwahati",
        distance: "180 miles",
        highlights: [
          "Enjoy scenic Himalayan valley roads",
          "Relish traditional Assamese cuisine",
        ],
      },
      {
        day: 10,
        title: "Departure from Guwahati",
        highlights: [
          "Morning city tour or shopping",
          "Drop-off at Guwahati Airport",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Leh - Ladakh Bike Trip",
    googleCalendarLink: "google.com/calendar/leh-ladakh",
    imageSrc:
      "https://images.pexels.com/photos/5201944/pexels-photo-5201944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Leh - Ladakh Biking Expedition",
    shortDescription:
      "Embark on an unforgettable 11-day motorcycle journey through the breathtaking landscapes of Ladakh, conquering some of the world's highest motorable roads.",
    longDescription:
      "This 11-day Leh-Ladakh biking adventure is the ultimate test of endurance, skill, and passion for motorcycling. Ride through high-altitude passes, explore remote valleys, and immerse yourself in Ladakh’s rich culture and history...",
    startDate: dayjs("2026-09-09T07:00:00"),
    endDate: dayjs("2026-09-19T17:00:00"),
    keyHighlights: [
      "Ride through Khardung La (5,359m) & Umling La (5,883m) – Highest motorable passes",
      "Explore remote Zanskar Valley, Padum, and Hanle",
      "Marvel at the surreal beauty of Pangong Lake and Nubra Valley",
      "Visit historic Buddhist monasteries: Lamayuru, Karsha, and Tawang",
      "Witness the confluence of the Indus & Zanskar Rivers",
      "Experience desert dunes and double-humped camels in Nubra",
      "Backup vehicle, mechanic support, and expert tour captain",
    ],
    rideDuration: "11 days riding",
    highestAltitude: "19,024 ft (Umling La Pass)",
    suitableFor: "Intermediate to advanced riders",
    totalDistance: "1400 miles",
    startingPoint: "Leh",
    accommodationType: "Hotels,Homestays & Camps",
    pickupPoint: "Leh Airport",
    photoGallery: [
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/11.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/16.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/37.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/41.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-ladakh/31.jpg",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 350/500 or similar",
    ],
    difficultyLevel: "Moderate",
    averageDailyRide: "150-250 km",
    region: "North",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Acclimatization",
        highlights: [
          "Explore Leh Market",
          "Visit Shanti Stupa",
          "Acclimatize to high altitude",
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        highlights: [
          "Visit Leh Palace & Magnetic Hill",
          "See Indus-Zanskar Sangam",
          "Explore Rancho School",
        ],
      },
      {
        day: 3,
        title: "Leh → Kargil",
        distance: "135 miles",
        highlights: [
          "Ride through Namika La & Fotu La",
          "Visit Kargil War Memorial",
        ],
      },
      {
        day: 4,
        title: "Kargil → Padum",
        distance: "190 miles",
        highlights: [
          "Cross Pensi La Pass (4,400m)",
          "Explore stunning Zanskar Valley",
        ],
      },
      {
        day: 5,
        title: "Padum Local Sightseeing",
        highlights: ["Visit Karsha Monastery", "Explore Zangla Fort"],
      },
      {
        day: 6,
        title: "Padum → Lamayuru",
        distance: "125 miles",
        highlights: [
          "Ride through 'Moonland' terrain",
          "Visit Lamayuru Monastery",
        ],
      },
      {
        day: 7,
        title: "Lamayuru → Nubra Valley",
        distance: "175 miles",
        highlights: [
          "Cross Khardung La (5,359m)",
          "Enjoy sand dunes & camel safari",
        ],
      },
      {
        day: 8,
        title: "Nubra Valley → Pangong Lake",
        distance: "170 miles",
        highlights: [
          "Ride along the Shyok River",
          "Camp under the stars at Pangong",
          "You'll pass through world's second highest motorable road Khardungla Pass",
        ],
      },
      {
        day: 9,
        title: "Pangong Lake → Hanle",
        distance: "200 miles",
        highlights: [
          "Visit Hanle Monastery",
          "Experience the astronomical observatory",
        ],
      },
      {
        day: 10,
        title: "Hanle → Umling La → Hanle",
        distance: "130 miles (round trip)",
        highlights: [
          "Ride to Umling La (5,883m) - Highest motorable road in the world",
        ],
      },
      {
        day: 11,
        title: "Hanle → Leh",
        distance: "200 miles",
        highlights: [
          "Scenic ride back to Leh",
          "Reflect on an unforgettable journey",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Snow white Spiti",
    googleCalendarLink: "google.com/calendar/spiti-valley",
    imageSrc:
      "https://images.pexels.com/photos/23522680/pexels-photo-23522680/free-photo-of-key-gompa-monastery-in-mountains-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Spiti Valley Biking Expedition",
    shortDescription:
      "An exhilarating 9-day motorcycle expedition through the raw beauty of Spiti Valley.",
    longDescription:
      "The Spiti Valley bike trip is a perfect blend of adventure and scenic landscapes. This 9-day journey takes you through the rugged mountains of Himachal Pradesh, covering the last inhabited village near the Indo-Tibetan border, ancient monasteries, and high-altitude passes. \n\n\
      Riders will experience the thrill of navigating through narrow mountain roads, river crossings, and high-altitude passes such as Kunzum La. Along the way, they'll witness the serene beauty of Chandra Taal (Moon Lake) and ride across Asia’s highest suspension bridge at Chicham. \n\n\
      Whether you're looking for an adrenaline rush or a peaceful retreat amidst nature, Spiti Valley offers the best of both worlds. With expert guidance, backup vehicle support, and well-planned accommodations, this journey ensures a hassle-free and unforgettable adventure.",
    startDate: dayjs("2026-04-17T06:00:00"),
    endDate: dayjs("2026-04-27T17:00:00"),
    keyHighlights: [
      "Ride through the majestic Kinnaur & Spiti Valleys",
      "Visit Chitkul, India's last village near the Indo-Tibetan border",
      "Explore ancient monasteries: Tabo & Dhankar",
      "Cross Asia's highest suspension bridge at Chicham",
      "Witness the pristine beauty of Chandra Taal Lake",
      "Conquer the Kunzum Pass (4,590m)",
      "Backup vehicle, professional trip captain & mechanic support",
    ],
    rideDuration: "9 days riding",
    highestAltitude: "14000 ft (Kunzum Pass)",
    suitableFor: "Intermediate to experienced riders",
    totalDistance: "800 miles",
    startingPoint: "Chandigarh",
    accommodationType: "Hotels, Guesthouses & Camps",
    pickupPoint: "Chandigarh Airport",
    photoGallery: [
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/24.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/33.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/34.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/35.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/36.jpg",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 500/350 or similar",
    ],
    difficultyLevel: "Challenging",
    averageDailyRide: "130-200 km",
    region: "North",
    itinerary: [
      {
        day: 0,
        title: "Arrival in Chandigarh",
        highlights: [
          "Meet the crew and fellow riders",
          "Bike inspection and preparations",
        ],
      },
      {
        day: 1,
        title: "Chandigarh → Chail",
        distance: "70 miles",
        highlights: [
          "Scenic mountain views and lush greenery",
          "Visit Chail Palace",
        ],
      },
      {
        day: 2,
        title: "Chail → Sangla",
        distance: "150 miles",
        highlights: [
          "Ride through the mesmerizing Kinnaur Valley",
          "See the beautiful Baspa River",
        ],
      },
      {
        day: 3,
        title: "Sangla → Chitkul → Kalpa",
        distance: "65 miles",
        highlights: [
          "Visit Chitkul, the last Indian village near the border",
          "Spectacular views of Kinner Kailash range",
        ],
      },
      {
        day: 4,
        title: "Kalpa → Tabo",
        distance: "110 miles",
        highlights: [
          "Drive through Spiti’s rocky terrains",
          "Explore the 1,000-year-old Tabo Monastery",
        ],
      },
      {
        day: 5,
        title: "Tabo → Dhankar → Kaza → Chicham",
        distance: "55 miles",
        highlights: [
          "Visit Dhankar Monastery with stunning valley views",
          "Cross the famous Chicham Suspension Bridge",
        ],
      },
      {
        day: 6,
        title: "Chicham → Langza → Hikkim → Chicham",
        distance: "30 miles",
        highlights: [
          "See Langza’s Giant Buddha Statue",
          "Send a postcard from the world’s highest post office in Hikkim",
        ],
      },
      {
        day: 7,
        title: "Chicham → Chandra Taal → Manali",
        distance: "130 miles",
        highlights: [
          "Ride through the challenging Kunzum Pass (14,931 ft)",
          "Camp beside Chandra Taal ( 12,000 ft ), the 'Moon Lake'",
        ],
      },
      {
        day: 8,
        title: "Manali Local Sightseeing",
        highlights: [
          "Explore Hadimba Temple & Mall Road",
          "Relax at Vashisht Hot Springs",
        ],
      },
      {
        day: 9,
        title: "Manali → Chandigarh",
        distance: "170 miles",
        highlights: [
          "Scenic ride through the Beas River valley",
          "End of an unforgettable journey",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Spiti Valley Adventure",
    googleCalendarLink: "google.com/calendar/spiti-valley",
    imageSrc:
      "https://images.pexels.com/photos/23522680/pexels-photo-23522680/free-photo-of-key-gompa-monastery-in-mountains-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Spiti Valley Biking Expedition",
    shortDescription:
      "An exhilarating 9-day motorcycle expedition through the raw beauty of Spiti Valley.",
    longDescription:
      "The Spiti Valley bike trip is a perfect blend of adventure and scenic landscapes. This 9-day journey takes you through the rugged mountains of Himachal Pradesh, covering the last inhabited village near the Indo-Tibetan border, ancient monasteries, and high-altitude passes. \n\n\
      Riders will experience the thrill of navigating through narrow mountain roads, river crossings, and high-altitude passes such as Kunzum La. Along the way, they'll witness the serene beauty of Chandra Taal (Moon Lake) and ride across Asia’s highest suspension bridge at Chicham. \n\n\
      Whether you're looking for an adrenaline rush or a peaceful retreat amidst nature, Spiti Valley offers the best of both worlds. With expert guidance, backup vehicle support, and well-planned accommodations, this journey ensures a hassle-free and unforgettable adventure.",
    startDate: dayjs("2026-08-22T06:00:00"),
    endDate: dayjs("2026-09-01T17:00:00"),
    keyHighlights: [
      "Ride through the majestic Kinnaur & Spiti Valleys",
      "Visit Chitkul, India's last village near the Indo-Tibetan border",
      "Explore ancient monasteries: Tabo & Dhankar",
      "Cross Asia's highest suspension bridge at Chicham",
      "Witness the pristine beauty of Chandra Taal Lake",
      "Conquer the Kunzum Pass (4,590m)",
      "Backup vehicle, professional trip captain & mechanic support",
    ],
    rideDuration: "9 days riding",
    highestAltitude: "14000 ft (Kunzum Pass)",
    suitableFor: "Intermediate to experienced riders",
    totalDistance: "800 miles",
    startingPoint: "Chandigarh",
    accommodationType: "Hotels, Guesthouses & Camps",
    pickupPoint: "Chandigarh Airport",
    photoGallery: [
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/24.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/33.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/34.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/35.jpg",
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/spiti/36.jpg",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 500/350 or similar",
    ],
    difficultyLevel: "Challenging",
    averageDailyRide: "130-200 km",
    region: "North",
    itinerary: [
      {
        day: 0,
        title: "Arrival in Chandigarh",
        highlights: [
          "Meet the crew and fellow riders",
          "Bike inspection and preparations",
        ],
      },
      {
        day: 1,
        title: "Chandigarh → Chail",
        distance: "70 miles",
        highlights: [
          "Scenic mountain views and lush greenery",
          "Visit Chail Palace",
        ],
      },
      {
        day: 2,
        title: "Chail → Sangla",
        distance: "150 miles",
        highlights: [
          "Ride through the mesmerizing Kinnaur Valley",
          "See the beautiful Baspa River",
        ],
      },
      {
        day: 3,
        title: "Sangla → Chitkul → Kalpa",
        distance: "65 miles",
        highlights: [
          "Visit Chitkul, the last Indian village near the border",
          "Spectacular views of Kinner Kailash range",
        ],
      },
      {
        day: 4,
        title: "Kalpa → Tabo",
        distance: "110 miles",
        highlights: [
          "Drive through Spiti’s rocky terrains",
          "Explore the 1,000-year-old Tabo Monastery",
        ],
      },
      {
        day: 5,
        title: "Tabo → Dhankar → Kaza → Chicham",
        distance: "55 miles",
        highlights: [
          "Visit Dhankar Monastery with stunning valley views",
          "Cross the famous Chicham Suspension Bridge",
        ],
      },
      {
        day: 6,
        title: "Chicham → Langza → Hikkim → Chicham",
        distance: "30 miles",
        highlights: [
          "See Langza’s Giant Buddha Statue",
          "Send a postcard from the world’s highest post office in Hikkim",
        ],
      },
      {
        day: 7,
        title: "Chicham → Chandra Taal → Manali",
        distance: "130 miles",
        highlights: [
          "Ride through the challenging Kunzum Pass (14,931 ft)",
          "Camp beside Chandra Taal ( 12,000 ft ), the 'Moon Lake'",
        ],
      },
      {
        day: 8,
        title: "Manali Local Sightseeing",
        highlights: [
          "Explore Hadimba Temple & Mall Road",
          "Relax at Vashisht Hot Springs",
        ],
      },
      {
        day: 9,
        title: "Manali → Chandigarh",
        distance: "170 miles",
        highlights: [
          "Scenic ride through the Beas River valley",
          "End of an unforgettable journey",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Northeast India Motorcycle Expedition",
    googleCalendarLink: "google.com/calendar/northeast-india",
    imageSrc:
      "https://images.pexels.com/photos/6058267/pexels-photo-6058267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Northeast India Biking Expedition",
    shortDescription:
      "An epic 10-day ride through the lush hills, waterfalls, and cultural wonders of Northeast India.",
    longDescription:
      "The Northeast India Motorcycle Expedition takes you on a thrilling journey through some of the most scenic and culturally rich regions of the country. Over 10 days, you'll ride through the misty hills of Meghalaya, the dense forests of Kaziranga, and the spiritual heights of Tawang. \n\n\
      Expect a mix of winding mountain roads, serene valleys, and encounters with vibrant tribal cultures. Ride across breathtaking locations like the Umngot River in Dawki, the famous Kaziranga National Park, and the high-altitude Bumla Pass near the Indo-China border. \n\n\
      With expert guides, backup vehicle support, and carefully curated accommodations, this expedition offers the perfect balance of adventure, relaxation, and cultural immersion.",
    startDate: dayjs("2025-10-10T06:00:00"),
    endDate: dayjs("2025-10-20T17:00:00"),
    keyHighlights: [
      "Visit the ancient Kamakhya Temple in Guwahati",
      "Explore Meghalaya's waterfalls & caves: Nohkailikai, Elephant Falls, and Limestone Cave",
      "Experience the crystal-clear Umngot River in Dawki",
      "Ride through the cleanest village in Asia - Mawlynnong",
      "Kaziranga National Park (One-horned Rhino sightings)",
      "Cross the stunning Sangti & Tenga Valleys",
      "Visit India's largest monastery - Tawang Monastery",
      "Ride to Bumla Pass near the Indo-China border",
      "Backup vehicle, professional guide, and mechanic support",
    ],
    rideDuration: "10 days riding",
    highestAltitude: "15,200 ft (Bumla Pass)",
    suitableFor: "Intermediate to experienced riders",
    totalDistance: "850 miles",
    startingPoint: "Guwahati",
    accommodationType: "Hotels, homestays & guesthouses",
    pickupPoint: "Guwahati Airport",
    photoGallery: [
      "https://images.pexels.com/photos/2815093/pexels-photo-2815093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2682181/pexels-photo-2682181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/11752865/pexels-photo-11752865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/14916663/pexels-photo-14916663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bikeModels: [
      "Royal Enfield Himalayan 450/411 or similar",
      "Royal Enfield Bullet 350/500 or similar",
    ],
    difficultyLevel: "Moderate-Challenging",
    averageDailyRide: "100-150 miles",
    region: "Northeast",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        highlights: [
          "Visit Kamakhya Temple",
          "Explore Guwahati’s vibrant local markets",
        ],
      },
      {
        day: 2,
        title: "Guwahati → Cherrapunji",
        distance: "100 miles",
        highlights: [
          "Stop by Umiam Lake for scenic photography",
          "Explore Elephant Falls & Mawdok Dympep Valley",
          "Visit Nohkailikai Falls, India's highest plunge waterfall",
        ],
      },
      {
        day: 3,
        title: "Cherrapunji → Shillong",
        distance: "40 miles",
        highlights: [
          "Ride to Dawki’s crystal-clear Umngot River",
          "Visit Mawlynnong - the cleanest village in Asia",
          "Explore Shillong’s famous cafes and night markets",
        ],
      },
      {
        day: 4,
        title: "Shillong → Tezpur (via Kaziranga)",
        distance: "160 miles",
        highlights: [
          "Optional visit to Kaziranga National Park",
          "Explore Mahabhairab Temple & Agnigarh Hill in Tezpur",
        ],
      },
      {
        day: 5,
        title: "Tezpur → Dirang",
        distance: "120 miles",
        highlights: [
          "Scenic ride through Sangti Valley",
          "Explore Tippi Orchid Centre",
        ],
      },
      {
        day: 6,
        title: "Dirang → Tawang",
        distance: "90 miles",
        highlights: [
          "Visit India's largest monastery - Tawang Monastery",
          "Explore Tawang Museum & local markets",
        ],
      },
      {
        day: 7,
        title: "Tawang Sightseeing & Bumla Pass",
        distance: "35 miles",
        highlights: [
          "Ride to Bumla Pass (15,200 ft) near Indo-China border",
          "Visit Madhuri Lake and serene mountain lakes",
        ],
      },
      {
        day: 8,
        title: "Tawang → Bomdilla",
        distance: "120 miles",
        highlights: [
          "Stop at Urgelling Monastery - birthplace of the 6th Dalai Lama",
          "Visit Tawang War Memorial",
        ],
      },
      {
        day: 9,
        title: "Bomdilla → Guwahati",
        distance: "180 miles",
        highlights: [
          "Enjoy scenic Himalayan valley roads",
          "Relish traditional Assamese cuisine",
        ],
      },
      {
        day: 10,
        title: "Departure from Guwahati",
        highlights: [
          "Morning city tour or shopping",
          "Drop-off at Guwahati Airport",
        ],
      },
    ],
  },
];

export default bikingAdventuresData;

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
    name: "Vinayak and Samarth",
    location: "Chester and Oxford",
    text: "As the co-founders of this motorcycle tour company, we have a passion for riding that spans over 8 years. With this experience, we create unique and unforgettable biking journeys that showcase the best of India.",
    rating: 5,
    imageSrc:
      "https://images.pexels.com/photos/1915149/pexels-photo-1915149.jpeg?auto=compress&cs=tinysrgb&w=1200", // Update path
  },
  {
    id: 6,
    name: "Julian Withers",
    location: "Northwich",
    text: "An extraordinary first experience in India! The team's historical insights and problem-solving made our challenging off-road adventure unforgettable. The Royal Enfield 450s handled beautifully.",
    rating: 5,
    imageSrc:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets//WhatsApp%20Image%202025-02-25%20at%208.58.57%20PM.jpeg", // Update path
  },
  {
    id: 7,
    name: "Brent Jackson",
    location: "Oxford",
    text: "My best motorcycle tour yet! Flawless execution with authentic experiences like home-cooked family dinners. Expert guides revealed hidden gems in every city we explored.",
    rating: 5,
    imageSrc:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets//e7f560a0-8f07-49fa-99f9-5ccccfaf1468.jpeg", // Update path
  },
];

export { whyUsCardData, bikingAdventuresData, testimonials };

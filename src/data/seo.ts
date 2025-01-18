import { Metadata } from "next/types";

export const seo: Metadata = {
  metadataBase: new URL("https://www.exploreindiaandbeyond.com/"),
  title: "Explore India and Beyond | Premium Motorcycle Tours",
  description:
    "Explore India and Beyond offers thrilling motorcycle tours across India, blending adventure with cultural authenticity. Ride through royal palaces, hidden Himalayan monasteries, and scenic routes with expert guidance from Samarth and Vinayak.",
  keywords:
    "Explore India and Beyond, India motorcycle tours, Royal Enfield tours, Himalayan motorcycle rides, adventure biking India, guided bike tours, luxury bike tours India, cultural motorcycle journeys, Samarth and Vinayak, biking adventures India, KTM 390 Adventure tours, offbeat travel India, authentic Indian biking experiences",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://www.exploreindiaandbeyond.com/",
  },
  openGraph: {
    type: "website",
    title: "Explore India and Beyond | Premium Motorcycle Tours",
    description:
      "Embark on unforgettable motorcycle adventures across India with Explore India and Beyond. Experience the thrill of biking through majestic landscapes, from royal palaces to hidden Himalayan trails.",
    url: "https://www.exploreindiaandbeyond.com",
    siteName: "Explore India and Beyond",
  },
  twitter: {
    title: "Explore India and Beyond | Premium Motorcycle Tours",
    card: "summary_large_image",
    site: "@exploreindiabeyond",
    creator: "@exploreindiabeyond",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["./apple-touch-icon.png"],
    shortcut: ["./apple-touch-icon.png"],
  },
  manifest: "./site.webmanifest",
};

import AboutUsSection from "@/components/landing-page-components/about-us-section/why-us";
import HeroSection from "@/components/landing-page-components/hero-section/hero-section";
import TestimonialSection from "@/components/landing-page-components/testimonails-section/testimonials-section";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutUsSection />
      <TestimonialSection />
    </React.Fragment>
  );
}

import HeroSection from "@/components/hero-section/hero-section";
// import { ModeToggle } from "@/components/mode-toggle"
import GridContainer from "@/components/ui/grid-container";

export default function Home() {
  return (
    <GridContainer className="items-start justify-center row-gap-0 -space-y-6">
     
      <HeroSection />
     
      {/* <ModeToggle /> */}
    </GridContainer>
  );
}

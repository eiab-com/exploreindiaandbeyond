"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../../ui/button";
import { useTransitionRouter } from "next-view-transitions";
import VideoPlayer from "@/components/video-player";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const imageRef = useRef(null);

  const router = useTransitionRouter();

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useGSAP(() => {
    if (leftCurtain.current && rightCurtain.current) {
      gsap.to(leftCurtain.current, {
        x: "-100%",
        duration: 2.5,
        ease: "power4.inOut",
      });

      gsap.to(rightCurtain.current, {
        x: "100%",
        duration: 2.5,
        ease: "power4.inOut",
      });
    }
  }, []);

  useGSAP(() => {
    if (isImageLoaded && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 2 },
        { scale: 1, duration: 2.5, ease: "power4.inOut" }
      );
    }
  }, [isImageLoaded]);
 const heroVideoAddresses = [
   "/assets/backdrop-videos/Back 1.mp4",
   "/assets/backdrop-videos/Back 2.mp4",
   "/assets/backdrop-videos/Back 3.mp4",
 ];

  return (
    <section
      id="home-section"
      className="col-span-12 h-[calc(100vh-2rem)] mx-auto relative overflow-hidden w-full"
    >
      {/* Curtains */}
      <div
        ref={leftCurtain}
        className="absolute inset-0 bg-background z-40"
      ></div>
      <div
        ref={rightCurtain}
        className="absolute inset-0 bg-background z-40"
      ></div>

      {/* Hero Image */}
      <VideoPlayer
        className="absolute top-0 left-0 w-full h-full z-10"
        sources={heroVideoAddresses}
        onLoad={handleImageLoad}
      />

      {/* Overlay and Content */}
      <div className="overlay bg-gradient-to-t from-black/80 via-black/50 to-transparent h-full w-full gap-6 relative z-30 flex items-center justify-center px-4 md:px-8 lg:px-12">
        <div className="absolute bottom-0 left-0  space-y-6 text-left z-30 p-4 sm:p-6 md:p-8 lg:p-16  md:bg-transparent w-full ">
          {/* Tagline - Small text above headline */}

          {/* Headline - Larger and more prominent */}
          <h1 className="font-heading  text-4xl md:text-5xl lg:text-6xl font-bold text-white  w-full lg:w-2/5 ">
            {`Motorcycle Your Way Through India's Top Scenic Roads`}
          </h1>

          {/* Subheading - More concise and visually distinct */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 w-full md:max-w-lg backdrop-blur-sm bg-black/20 p-3 sm:p-4 border-l-2 sm:border-l-4 border-primary">
            {` Discover India's soul on two wheels. Navigate challenging terrains,
            experience authentic culture, and create lasting memories with our
            expert-guided tours.`}
          </p>

          {/* Action buttons - Primary and secondary options */}
          <div className="flex flex-col lg:flex-row xs:flex-row gap-3 sm:gap-4 pt-2">
            <Button
              onClick={() => router.push("/adventures")}
              className="w-full xs:w-full lg:w-fit bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="uppercase">Reserve Your Adventure</span>
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push("/adventure-stories")}
              className="w-full xs:w-full lg:w-fit border-white/80 text-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300"
            >
              <span>Read Rider Stories</span>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 z-30 animate-bounce">
          <ChevronDown className="text-white w-12 h-12 " />
        </div> */}

        {/* Separators */}
        <div className="seperators hidden md:flex justify-evenly items-center w-full h-full absolute z-10 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border-r border-white/50 h-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

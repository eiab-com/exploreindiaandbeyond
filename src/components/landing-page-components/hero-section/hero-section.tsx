"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../../ui/button";
import { ChevronDown } from "lucide-react";
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
    "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/backdrop-videos/Back%201.mp4",
    "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/backdrop-videos/Back%202.mp4",
    "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/backdrop-videos/Back%203.mp4",
    "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-videos/LEH-LADAKH.mp4",
    "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-videos/Nubra%20.mp4",
    "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/photogallery-assets/leh-videos/Pangong.mp4",
  ];
  // Randomly select a video address
  const randomVideoAddress =
    heroVideoAddresses[Math.floor(Math.random() * heroVideoAddresses.length)];

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
        src={randomVideoAddress}
        onLoad={handleImageLoad}
      />

      {/* Overlay and Content */}
      <div className="overlay bg-gradient-to-t from-black/80 via-black/50 to-transparent h-full w-full gap-6 relative z-30 flex items-center justify-center px-4 md:px-8 lg:px-12">
        <div className="space-y-8 lg:space-y-16 w-full relative flex flex-col items-center justify-center">
          {/* Headline */}
          <h1 className="font-heading text-4xl text-center sm:text-5xl md:text-6xl font-bold lg:text-[120px] text-white w-full md:w-4/5 lg:w-3/4 leading-[1.15] tracking-tight uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            {`Motorcycle Your Way Through India's Top Scenic Roads`}
          </h1>

          {/* CTA Button */}
          <Button
            onClick={() => router.push("/adventures")}
            className="w-fit inline-flex  bg-foreground px-6 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8 text-base sm:text-lg lg:text-xl font-bold transition-all z-30 duration-300 items-center gap-2 sm:gap-3 shadow-lg sm:shadow-xl hover:shadow-2xl group"
          >
            <span className="uppercase text-sm sm:text-base lg:text-lg">
              Reserve Your Adventure
            </span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 z-30 animate-bounce">
          <ChevronDown className="text-white w-12 h-12 " />
        </div>

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

"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { CompassIcon } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";

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

  return (
    <section
      id="home-section"
      className="col-span-12 -mt-6  rounded-2xl h-[calc(100vh-10rem)] relative overflow-hidden"
    >
      <div
        ref={leftCurtain}
        className="absolute inset-0 bg-background z-40"
      ></div>
      <div
        ref={rightCurtain}
        className="absolute inset-0 bg-background z-40"
      ></div>

      <Image
        src="https://images.unsplash.com/photo-1505934833128-2efeaa8be018?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ref={imageRef}
        layout="fill"
        alt="Hero image"
        className="rounded-2xl relative z-[20] object-cover"
        onLoad={handleImageLoad}
      />

      <div className="overlay bg-black/40 h-full w-full gap-6 relative z-30 flex space-between  items-end px-4 md:px-8 lg:px-12">
        <div className="space-y-6 w-full relative bottom-10">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold lg:text-8xl text-white  w-full md:w-4/5 lg:w-full leading-[1.5] relative z-20 uppercase">
           {` Motorcycle Your Way Through India's Top Scenic Roads`}
          </h1>
        </div>
        <Button
          onClick={() => router.push("/adventures")}
          className="mt-4 rounded-full w-fit bg-white dark:bg-white  sm:px-5  sm:py-7 relative bottom-10   text-base sm:text-lg font-extrabold transition-all z-30 duration-200 flex justify-center gap-4 sm:gap-4 shadow-lg group"
        >
          <span className="text-black">Reserve Your Adventure</span>
          <CompassIcon className=" scale-150 sm:scale-[1.75] text-black  transition-transform duration-200 group-hover:block group-hover:scale-[1.80] group-hover:-rotate-45  " />
        </Button>
        <div className="seperators hidden md:flex justify-evenly items-center w-full h-full absolute z-10 opacity-[10%]">
          <div className="seperator border border-r border-white  h-full"></div>
          <div className="seperator border border-r border-white  h-full"></div>
          <div className="seperator border border-r border-white  h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

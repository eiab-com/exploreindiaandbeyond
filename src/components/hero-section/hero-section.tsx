"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const imageRef = useRef(null);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set image loaded flag when image is ready
  };

  useEffect(() => {
    if (leftCurtain.current && rightCurtain.current) {
      // Left curtain animation
      gsap.fromTo(
        leftCurtain.current,
        { x: "0%" }, // Start off-screen from the left
        {
          x: "-100%",
          duration: 2.5,
          ease: "power4.inOut", // Smooth easing
        }
      );

      // Right curtain animation
      gsap.fromTo(
        rightCurtain.current,
        { x: "0%" }, // Start off-screen from the right
        {
          x: "100%",
          duration: 2.5,
          ease: "power4.inOut", // Smooth easing
        }
      );
    }

    if (isImageLoaded && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 2 },
        { scale: 1, duration: 2.5, ease: "power4.inOut" }
      );
    }
  }, [isImageLoaded]); // Trigger image animation once it's loaded

  return (
    <section className="col-span-12 text-yellow-600 rounded-2xl h-[calc(100vh-4rem)] mt-10 relative overflow-hidden">
      {/* Curtain layer */}
      <div
        ref={leftCurtain}
        className="absolute inset-0 bg-background  z-40 "
      ></div>

      <div
        ref={rightCurtain}
        className="absolute inset-0 bg-background  z-40 "
      ></div>

      {/* Background image */}
      <Image
        src={"https://images.unsplash.com/photo-1559194128-0cfbb39ee73c"}
        ref={imageRef}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Hero image"
        className="rounded-2xl relative z-[20]"
        onLoad={handleImageLoad}
      />

      <div className="overlay bg-black/70 h-full w-full gap-6 relative z-30 flex flex-col justify-center items-center ">
        <h1
          className={` font-heading text-8xl text-white text-center w-3/5 leading-[1.3] relative z-20  `}
        >
          Motorcycle Your Way Through{" "}
          <span className="italic ">{`India's Top Scenic Roads`}</span>
        </h1>
        <p
          className={`text-white text-2xl text-center w-2/4  relative z-20 font-body `}
        >
          Experience the thrill of riding through the most scenic routes in
          India with our guided tours.
        </p>
        <div className="seperators flex justify-evenly items-center w-full h-full absolute z-10  opacity-[8%] ">
          <div className="seperator border border-r border-primary bg-white h-full"></div>
          <div className="seperator border border-r border-primary bg-white h-full"></div>
          <div className="seperator border border-r border-primary bg-white h-full"></div>
        </div>

        <Button className="mt-4 px-6 py-8 relative rounded-full   w-auto text-lg font-extrabold transition-all z-30 duration-200 inline-flex gap-4 shadow-lg group ">
          <span>Reserve Your Adventure</span>
          <ArrowRight className="flex-1 scale-[1.75] border rounded-full transition-transform duration-200 group-hover:block group-hover:scale-[1.80]  group-hover:-rotate-45 group-hover:bg-green-600 group-hover:text-white" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, PhoneIcon } from "lucide-react";
import { Button } from "../button";
import { ModeToggle } from "@/components/mode-toggle";

const Footer = () => {
  return (
    // the width of the footer should be full width 24px  w-[calc(100%-24px)]
    <footer className=" p-6 bg-accent text-primary-foreground col-span-12 rounded-t-2xl relative mt-auto mx-auto w-[calc(100%-48px)]  ">
      <div className="top flex flex-col md:flex-row justify-between gap-6">
        <div className="left space-y-4">
          <h1 className="text-primary text-center font-heading text-xl md:text-2xl lg:text-left lg:text-3xl font-bold">
            Explore India and Beyond
          </h1>
          <p className="text-foreground">
            <span className="font-bold text-center  lg:text-left">
              EIAB.com
            </span>{" "}
            is a platform dedicated to helping travelers discover and explore
            the vibrant culture.
          </p>
        </div>

        <div className="right space-y-6">
          <div className="flex gap-4 items-center justify-center text-foreground">
            <Button
              variant={"ghost"}
              className="border-2 border-primary rounded-full text-base font-extrabold transition-all inline-flex gap-2 sm:gap-4 shadow-lg group"
            >
              <span>Contact Us</span>
              <PhoneIcon className="transition-transform" />
            </Button>
            <Link href="https://facebook.com">
              <Facebook size={20} strokeWidth={1} />
            </Link>
            <Link href="https://twitter.com">
              <Twitter size={20} strokeWidth={1} />
            </Link>
            <Link href="https://instagram.com">
              <Instagram size={20} strokeWidth={1} />
            </Link>
            <Link href="https://youtube.com">
              <Youtube size={20} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-4 text-accent-foreground/60 text-center">
        © {new Date().getFullYear()} Explore India and Beyond. All rights
        reserved.
      </p>
      <ModeToggle />
    </footer>
  );
};

export default Footer;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Youtube, PhoneIcon, Instagram } from "lucide-react";
import { Button } from "../button";
import { ModeToggle } from "@/components/mode-toggle";
import { useTransitionRouter } from "next-view-transitions";

const Footer = () => {
  const router = useTransitionRouter();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("visitorCount");
    const newCount = count ? parseInt(count, 10) + 1 : 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <footer className="mt-20 p-6 border border-1 col-span-12 rounded-t-2xl relative mx-auto w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-accent-foreground/20">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-4">
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              Explore India and Beyond
            </h1>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              EIAB.com is a premium platform dedicated to helping adventurers
              discover vibrant cultures and breathtaking landscapes through
              curated motorcycle journeys.
            </p>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 md:col-start-11 text-foreground">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col space-y-4">
              <Button
                variant={"outline"}
                className="w-fit bg-transparent border-primary hover:bg-primary/10 hover:scale-105 transition-transform"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Contact Us
                <PhoneIcon className="mr-2 h-4 w-4" />
              </Button>

              <div className="flex space-x-4">
                {[
                  {
                    icon: Youtube,
                    href: "https://www.youtube.com/@Exploreindiaandbeyond",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/exploreindiaandbeyond/",
                  },
                ].map(({ icon: Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-foreground/60 text-center">
            © {new Date().getFullYear()} Explore India and Beyond. All rights
            reserved.
          </p>
          <p className="text-sm text-accent-foreground/60 text-center">
            Visitor Count: {visitorCount}
          </p>
          <div className="flex space-x-4 text-foreground">
            <ModeToggle />
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

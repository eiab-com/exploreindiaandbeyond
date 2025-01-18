import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="col-span-12 lg:h-64 rounded-2xl p-6 flex gap-6 bg-white h-auto flex-wrap">
      <div className="left w-full border flex flex-col gap-6">
        <div className="top">
          <h1 className="logo text-primary font-heading text-xl md:text-2xl lg:text-4xl font-bold w-full">
            Explore India and Beyond
          </h1>
        </div>
        <div className="bottom-socials flex gap-4">
          <Link
            href="https://www.facebook.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Facebook className="h-5 w-5 text-primary" />
            <span>Facebook</span>
          </Link>
          <Link
            href="https://www.twitter.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5 text-primary" />
            <span>Twitter</span>
          </Link>
          <Link
            href="https://www.instagram.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5 text-primary" />
            <span>Instagram</span>
          </Link>
          <Link
            href="https://www.youtube.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Youtube className="h-5 w-5 text-primary" />
            <span>Youtube</span>
          </Link>
        </div>
      </div>
      <div className="right w-full border"></div>
    </footer>
  );
};

export default Footer;

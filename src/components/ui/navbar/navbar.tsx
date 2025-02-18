"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "next-view-transitions";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    if (navbarRef.current) {
      gsap.from(navbarRef.current, {
        y: "-100%",
        duration: 1,
        delay: 2,
        ease: "power4.inOut",
      });
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={navbarRef}
      className="h-20  rounded-b-sm p-4 md:p-6 col-span-12 flex justify-between items-center sticky top-0 z-[10000] bg-background/60 backdrop-blur-md"
    >
      <Link
        href="/"
        className="logo text-primary font-heading text-xl md:text-2xl lg:text-3xl font-bold w-full"
      >
        EIAB.com
      </Link>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-background/90 backdrop-blur-md md:static md:flex md:gap-8 md:bg-transparent md:backdrop-blur-none md:items-center `}
      >
        <ul className="flex flex-col md:flex-row font-body gap-4 p-4 md:p-0 md:ml-auto">
          <li>
            <Link className="uppercase font-bold  text-sm" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="uppercase font-bold text-sm" href="/adventures">
              ADVENTURES
            </Link>
          </li>
          <li>
            <Link className="uppercase font-bold text-sm" href="/contact">
              About us
            </Link>
          </li>
          <li>
            <Link className="uppercase font-bold text-sm" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden text-3xl text-primary focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
};

export default Navbar;

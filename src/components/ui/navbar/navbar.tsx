"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "next-view-transitions";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      setIsVisible(currentScrollY < lastScrollY);

      // Check if at the top
      setIsAtTop(currentScrollY === 0);

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed lg:p-10 top-0 left-0 w-full h-28 z-[10000] rounded-b-sm md:p-6 flex justify-between items-center transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-md shadow-md"
      }`}
    >
      <Link
        href="/"
        className="logo text-primary font-heading text-xl md:text-2xl lg:text-3xl font-bold"
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
            <Link className="uppercase font-bold text-sm" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="uppercase font-bold text-sm" href="/adventures">
              ADVENTURES
            </Link>
          </li>
          <li>
            <Link className="uppercase font-bold text-sm" href="/team">
              Team
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

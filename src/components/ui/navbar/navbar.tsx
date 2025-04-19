"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "next-view-transitions";
import { Menu, X } from "lucide-react";
import Logo from "../logo";

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
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);

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
      className={`fixed top-0 left-0 w-full h-28 z-50 px-4 md:p-6 lg:px-12 flex justify-between items-center transition-all duration-300  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <Logo />
      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-24 left-0 w-full bg-background/95 backdrop-blur-md md:static md:flex md:gap-8 md:bg-transparent md:backdrop-blur-none md:items-center md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row gap-6 p-6 md:p-0 md:ml-auto font-bold">
          {[
            { name: "Home", href: "/" },
            { name: "Adventures", href: "/adventures" },
            { name: "Stories", href: "/adventure-stories" },
            { name: "Team", href: "/team" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                className="uppercase font-black text-lg text-foreground transition-colors duration-300 relative group"
                href={item.href.toString()}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-3xl  focus:outline-none p-2 hover:text-foreground transition-colors duration-300"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X /> : <Menu strokeWidth="3" />}
      </button>
    </header>
  );
};

export default Navbar;

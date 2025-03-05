"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiHome4Line,
  RiUser3Line,
  RiCodeSSlashLine,
  RiBriefcase4Line,
  RiMenu4Fill,
  RiCloseLine,
} from "react-icons/ri";
import { scrollToElement } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "#",
      sectionId: "",
      icon: <RiHome4Line className="mr-1" />,
    },
    {
      name: "About",
      href: "#about",
      sectionId: "about",
      icon: <RiUser3Line className="mr-1" />,
    },
    {
      name: "Experience",
      href: "#experience",
      sectionId: "experience",
      icon: <RiBriefcase4Line className="mr-1" />,
    },
    {
      name: "Projects",
      href: "#projects",
      sectionId: "projects",
      icon: <RiCodeSSlashLine className="mr-1" />,
    },
  ];

  // Handle navigation click with smooth scrolling
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    if (sectionId === "") {
      // For the "Home" link, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // For other links, scroll to the section
      scrollToElement(sectionId);
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-indigo-500/20 py-3"
          : "bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-500/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-white group relative"
            onClick={(e) => handleNavClick(e, "")}
          >
            <span
              className="flex items-center text-white"
              style={{
                fontFamily:
                  "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 mr-2"
              >
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
                Portfolio
              </span>
            </span>

            {/* Decorative element */}
            <motion.div
              className="absolute -top-1 -right-4 w-3 h-3 bg-yellow-300 rounded-full hidden md:block"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <nav className="flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [-1, 1, -1, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="text-white font-medium hover:text-yellow-200 transition-colors flex items-center px-3 py-2 rounded-xl hover:bg-white/10 border-2 border-white/20"
                    style={{
                      fontFamily:
                        "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                      transform: `rotate(${
                        index % 2 === 0 ? "1deg" : "-1deg"
                      })`,
                      boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
                    }}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              className="text-white focus:outline-none bg-white/10 p-2 rounded-xl hover:bg-white/20 transition-colors border-2 border-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
              }}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenu4Fill className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white hover:text-yellow-200 transition-colors py-2 px-3 rounded-xl hover:bg-white/10 flex items-center border-2 border-white/20"
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      style={{
                        fontFamily:
                          "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        transform: `rotate(${
                          index % 2 === 0 ? "1deg" : "-1deg"
                        })`,
                        boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
                      }}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

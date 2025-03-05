"use client";

import React from "react";
import Link from "next/link";
// import portfolioData from "@/data/portfolio-data";

export default function Footer() {
  // const { name, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
          </div>

          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks
              .filter((link) => link.platform !== "GitHub")
              .map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.platform}
                </a>
              ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}

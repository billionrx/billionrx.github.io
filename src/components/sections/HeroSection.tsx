"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Button from "../ui/Button";
import portfolioData, { SocialLink } from "@/data/portfolio-data";

export default function HeroSection() {
  const { name, title, bio, socialLinks } = portfolioData;

  // Helper function to find social links by platform
  const getSocialLink = (platform: string): string | undefined => {
    const link = socialLinks.find(
      (link: SocialLink) =>
        link.platform.toLowerCase() === platform.toLowerCase()
    );
    return link?.url;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Bouncing animation for cartoon effect
  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Get social links
  const linkedinUrl = getSocialLink("LinkedIn");

  return (
    <section className="relative min-h-screen overflow-hidden bg-blue-50 dark:bg-indigo-950">
      {/* Cartoon background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-10 h-10 bg-pink-400 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-purple-300 rounded-full opacity-50 animate-bounce"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen pt-20 pb-32 px-4">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="px-6 py-3 bg-indigo-400 text-white rounded-full text-sm inline-block mb-4 shadow-md transform -rotate-2">
                Welcome to my Portfolio!
              </span>
            </motion.div>

            <motion.div
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              className="mb-6"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 text-indigo-600 dark:text-indigo-300"
                style={{
                  textShadow:
                    "2px 2px 0px #6366F1, 4px 4px 0px rgba(99, 102, 241, 0.5)",
                  fontFamily:
                    "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                }}
              >
                Hi, I&apos;m {name}
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="h-2 w-32 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto my-6 rounded-full"></div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-purple-600 dark:text-purple-300 mb-8 font-bold"
              style={{
                fontFamily:
                  "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
              }}
            >
              {title}
            </motion.h2>

            <motion.div
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              className="mb-8"
            >
              <motion.p
                variants={itemVariants}
                className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto bg-white dark:bg-indigo-900/50 p-5 rounded-2xl shadow-md border-2 border-indigo-200 dark:border-indigo-700"
                style={{
                  fontFamily:
                    "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                }}
              >
                {bio.short}
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center mb-12"
            >
              <Button variant="primary" size="lg" href="#projects" showArrow>
                View My Work
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4 mt-8"
            >
              {linkedinUrl && (
                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors p-3 bg-white dark:bg-indigo-900 rounded-full hover:shadow-lg transform hover:rotate-6"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RiLinkedinBoxFill size={28} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Cartoon-style scroll indicator */}
          <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              className="w-10 h-10 text-indigo-500 dark:text-indigo-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                filter: "drop-shadow(0 2px 2px rgba(99, 102, 241, 0.5))",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

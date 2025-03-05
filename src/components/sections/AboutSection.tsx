"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations/variants";
import portfolioData from "@/data/portfolio-data";
import ClientOnly from "@/components/ui/ClientOnly";

export default function AboutSection() {
  const { bio } = portfolioData;

  // Animation for cartoon elements
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-pink-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950"
    >
      {/* Decorative cartoon elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-green-300 dark:bg-green-700 opacity-60"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-orange-300 dark:bg-orange-700 opacity-60"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-purple-300 dark:bg-purple-700 opacity-50"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-lg bg-purple-300 dark:bg-purple-600 text-purple-900 dark:text-white px-6 py-2 rounded-full inline-block transform -rotate-1 shadow-md mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            style={{
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            Let me introduce myself!
          </motion.span>

          <h2
            className="text-3xl md:text-5xl font-bold text-purple-600 dark:text-purple-300 mb-4"
            style={{
              textShadow:
                "2px 2px 0px #8B5CF6, 4px 4px 0px rgba(139, 92, 246, 0.3)",
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            About Me
          </h2>
          <div className="w-32 h-3 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Skills Column */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-6"
              style={{
                fontFamily:
                  "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                textShadow: "1px 1px 0px #6366F1",
              }}
            >
              My Super Powers
            </h3>

            <ClientOnly>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & React Native",
                  "Node.js & Express",
                  "Next.js",
                  "TypeScript",
                  "MongoDB & PostgreSQL",
                  "REST API Design",
                  "Web3.js & Ethers.js",
                  "GraphQL",
                  "AWS & Cloud Services",
                  "Docker & Kubernetes",
                  "CI/CD Pipelines",
                  "TailwindCSS",
                  "Smart Contracts",
                  "Microservices",
                  "Redis & Caching",
                  "System Architecture",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-indigo-900/50 p-4 rounded-xl shadow-md border-2 border-indigo-100 dark:border-indigo-700 transform rotate-1"
                    initial={{
                      opacity: 0,
                      y: 10,
                      rotate: index % 2 === 0 ? 1 : -1,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.05,
                      rotate: index % 2 === 0 ? 2 : -2,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className="font-bold text-indigo-600 dark:text-indigo-300"
                      style={{
                        fontFamily:
                          "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                      }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ClientOnly>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-6"
              style={{
                fontFamily:
                  "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                textShadow: "1px 1px 0px #6366F1",
              }}
            >
              My Story
            </h3>

            <div className="prose dark:prose-invert max-w-none">
              <motion.div
                className="bg-white dark:bg-indigo-900/50 p-6 rounded-2xl shadow-lg border-2 border-indigo-100 dark:border-indigo-700 transform -rotate-1"
                whileHover={{ rotate: 1 }}
              >
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                >
                  {bio.long}
                </p>

                <p
                  className="text-gray-700 dark:text-gray-300"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                >
                  As a full stack developer, I bring a comprehensive approach to
                  every project, handling everything from database design and
                  server architecture to responsive frontends. I enjoy taking
                  complex problems and turning them into elegant solutions with
                  clean, maintainable code in both frontend and backend
                  environments.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

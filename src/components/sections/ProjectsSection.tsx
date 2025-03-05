"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import portfolioData from "@/data/portfolio-data";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  // Animation variants for cartoon-style effects
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      rotate: [-1, 1, -1],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 0.3,
          repeatType: "mirror",
        },
        y: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-indigo-50 to-pink-50 dark:from-indigo-950 dark:to-purple-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-3">
            <motion.span
              className="text-lg bg-yellow-300 dark:bg-yellow-500 text-indigo-800 dark:text-indigo-950 px-6 py-2 rounded-full inline-block transform -rotate-2 shadow-md"
              initial={{ rotate: 0 }}
              animate={{ rotate: [-2, 2, -2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{
                fontFamily:
                  "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
              }}
            >
              Check these out!
            </motion.span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-4"
            style={{
              textShadow:
                "2px 2px 0px #6366F1, 4px 4px 0px rgba(99, 102, 241, 0.3)",
              fontFamily:
                "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
            }}
          >
            My Fun Projects
          </h2>

          <div className="w-32 h-3 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>

          <p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            style={{
              fontFamily:
                "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
            }}
          >
            Here are some of my favorite projects. Each one was a new adventure
            and taught me something cool!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => !project.id.startsWith("mobile"))
            .map((project, idx) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-indigo-900/70 rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-100 dark:border-indigo-700 hover:shadow-xl relative"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: idx * 0.1 }}
                style={{ transformOrigin: "center" }}
              >
                {/* Stars decoration */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full z-10 shadow-md"></div>
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transform rotate-3 z-10">
                    <span className="block">✨ Featured ✨</span>
                  </div>
                )}

                <div className="h-48 relative">
                  {project.imageUrl ? (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 flex items-center justify-center">
                      <span
                        className="text-xl font-bold text-indigo-700 dark:text-indigo-300"
                        style={{
                          fontFamily:
                            "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        }}
                      >
                        {project.title}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                      <span
                        style={{
                          fontFamily:
                            "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-2"
                    style={{
                      fontFamily:
                        "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"
                    style={{
                      fontFamily:
                        "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 rounded-full px-3 py-1 font-medium transform rotate-1"
                        style={{
                          fontFamily:
                            "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} size="sm" isExternal>
                        See it Live
                      </Button>
                    )}
                    {project.sourceUrl && (
                      <Button
                        href={project.sourceUrl}
                        variant="outline"
                        size="sm"
                        isExternal
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Mobile Apps Section */}
        <motion.div
          className="text-center mt-24 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-3">
            <motion.span
              className="text-lg bg-green-300 dark:bg-green-500 text-indigo-800 dark:text-indigo-950 px-6 py-2 rounded-full inline-block transform rotate-2 shadow-md"
              initial={{ rotate: 0 }}
              animate={{ rotate: [2, -2, 2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{
                fontFamily:
                  "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
              }}
            >
              Mobile Magic!
            </motion.span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-4"
            style={{
              textShadow:
                "2px 2px 0px #6366F1, 4px 4px 0px rgba(99, 102, 241, 0.3)",
              fontFamily:
                "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
            }}
          >
            Mobile Apps
          </h2>

          <div className="w-32 h-3 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full"></div>

          <p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            style={{
              fontFamily:
                "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
            }}
          >
            Cross-platform mobile applications that I&apos;ve developed for iOS
            and Android!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.id.startsWith("mobile"))
            .map((project, idx) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-indigo-900/70 rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-100 dark:border-indigo-700 hover:shadow-xl relative"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: idx * 0.1 }}
                style={{ transformOrigin: "center" }}
              >
                {/* Mobile icon decoration */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full z-10 shadow-md"></div>

                <div className="h-48 relative">
                  {project.imageUrl ? (
                    <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-800 flex items-center justify-center">
                      <span
                        className="text-xl font-bold text-indigo-700 dark:text-indigo-300"
                        style={{
                          fontFamily:
                            "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        }}
                      >
                        {project.title}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                      <span
                        style={{
                          fontFamily:
                            "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-2"
                    style={{
                      fontFamily:
                        "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"
                    style={{
                      fontFamily:
                        "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-900/40 dark:to-blue-900/40 text-indigo-700 dark:text-indigo-300 rounded-full px-3 py-1 font-medium transform rotate-1"
                        style={{
                          fontFamily:
                            "&apos;Comic Sans MS&apos;, &apos;Chalkboard SE&apos;, &apos;Comic Neue&apos;, sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} size="sm" isExternal>
                        Download App
                      </Button>
                    )}
                    {project.sourceUrl && (
                      <Button
                        href={project.sourceUrl}
                        variant="outline"
                        size="sm"
                        isExternal
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom } from "@/lib/animations/variants";
import Button from "@/components/ui/Button";
import portfolioData from "@/data/portfolio-data";
import ClientOnly from "@/components/ui/ClientOnly";

export default function ContactSection() {
  const { socialLinks } = portfolioData;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950"
    >
      {/* Cartoon decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-green-400 dark:bg-green-800 clip-wave"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 rounded-tl-full transform rotate-45 dark:bg-yellow-600 opacity-60"></div>
      <div className="absolute top-20 left-10 w-16 h-16 bg-pink-300 rounded-full opacity-60 animate-pulse dark:bg-pink-800"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-lg bg-blue-300 dark:bg-blue-600 text-blue-900 dark:text-white px-6 py-2 rounded-full inline-block transform rotate-1 shadow-md mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            style={{
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            Say Hello!
          </motion.span>

          <h2
            className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-4"
            style={{
              textShadow:
                "2px 2px 0px #3B82F6, 4px 4px 0px rgba(59, 130, 246, 0.3)",
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            Get In Touch
          </h2>

          <div className="w-32 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>

          <p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            style={{
              fontFamily:
                "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
            }}
          >
            Have a project in mind or want to chat? Feel free to reach out
            through any of these platforms!
          </p>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ClientOnly>
              <div className="flex items-center justify-center space-x-4">
                {socialLinks
                  .filter((link) => link.platform !== "GitHub")
                  .map((link, index) => (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 shadow-lg hover:shadow-xl dark:hover:bg-indigo-800 transition-all border-2 border-blue-100 dark:border-blue-800"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: index % 2 === 0 ? 10 : -10,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        fontFamily:
                          "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                      }}
                    >
                      <span className="sr-only">{link.platform}</span>
                      <div className="text-2xl font-bold">
                        {/* Simple placeholder for social icons */}
                        {link.platform === "LinkedIn" && "IN"}
                        {link.platform === "Twitter" && "TW"}
                      </div>
                    </motion.a>
                  ))}
              </div>
            </ClientOnly>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-indigo-900/60 rounded-3xl shadow-xl p-8 border-2 border-blue-100 dark:border-blue-800 transform rotate-1"
            variants={slideInFromBottom}
            whileHover={{ rotate: -1 }}
          >
            <h3
              className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6"
              style={{
                fontFamily:
                  "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                textShadow: "1px 1px 0px rgba(59, 130, 246, 0.5)",
              }}
            >
              Send me a message
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-blue-700 dark:text-blue-300 mb-2"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-blue-200 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-white"
                  placeholder="What should I call you?"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-blue-700 dark:text-blue-300 mb-2"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-blue-200 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-white"
                  placeholder="Where can I reply to you?"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-blue-700 dark:text-blue-300 mb-2"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-blue-200 dark:border-blue-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-gray-900 dark:text-white"
                  placeholder="What's on your mind?"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif",
                  }}
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .clip-wave {
          clip-path: polygon(
            0% 0%,
            25% 15%,
            50% 0%,
            75% 15%,
            100% 0%,
            100% 100%,
            0% 100%
          );
        }
      `}</style>
    </section>
  );
}

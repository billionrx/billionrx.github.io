"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Snowflake {
  id: number;
  size: number;
  x: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
  blurAmount: number;
  shape: "circle" | "star" | "sparkle";
}

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Only run on client-side to avoid hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const generateSnowflakes = () => {
      const numFlakes = Math.floor(window.innerWidth / 20); // Slightly reduce density
      const flakes: Snowflake[] = [];

      // Pastel colors for snowflakes
      const colors = [
        "#FFFFFF", // White
        "#E6F2FF", // Light blue
        "#F0E6FF", // Light purple
        "#FFE6F2", // Light pink
        "#E6FFF0", // Light mint
      ];

      // Shapes for variation
      const shapes: ("circle" | "star" | "sparkle")[] = [
        "circle",
        "star",
        "sparkle",
      ];

      for (let i = 0; i < numFlakes; i++) {
        flakes.push({
          id: i,
          size: Math.random() * 12 + 5, // Size between 5px and 17px
          x: Math.random() * window.innerWidth,
          delay: Math.random() * 10, // Random delay for start
          duration: Math.random() * 10 + 15, // Fall duration between 15-25s
          opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3 and 1
          color: colors[Math.floor(Math.random() * colors.length)],
          blurAmount: Math.random() * 2,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }

      setSnowflakes(flakes);
    };

    generateSnowflakes();
  }, [windowSize, isMounted]);

  // If not mounted yet (server-side), don't render anything
  if (!isMounted) return null;

  const renderSnowflake = (flake: Snowflake) => {
    if (flake.shape === "circle") {
      return (
        <motion.div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            left: `${flake.x}px`,
            top: "-20px",
            backgroundColor: flake.color,
            boxShadow: `0 0 ${flake.size / 2}px ${flake.color}`,
            filter: `blur(${flake.blurAmount}px)`,
          }}
          animate={{
            y: [0, windowSize.height + 50],
            x: [0, Math.random() * 100 - 50], // Random horizontal movement
            rotate: [0, Math.random() * 360], // Random rotation
            scale: [1, Math.random() * 0.2 + 0.9, 1], // Subtle pulsing
          }}
          transition={{
            duration: flake.duration,
            ease: "linear",
            delay: flake.delay,
            repeat: Infinity,
            repeatType: "loop",
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      );
    } else if (flake.shape === "star") {
      return (
        <motion.div
          key={flake.id}
          className="absolute star-shape"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            left: `${flake.x}px`,
            top: "-20px",
            backgroundColor: flake.color,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          animate={{
            y: [0, windowSize.height + 50],
            x: [0, Math.random() * 100 - 50], // Random horizontal movement
            rotate: [0, 360], // Full rotation
            scale: [1, 1.2, 1], // Subtle pulsing
          }}
          transition={{
            duration: flake.duration,
            ease: "linear",
            delay: flake.delay,
            repeat: Infinity,
            repeatType: "loop",
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      );
    } else {
      // Sparkle shape
      return (
        <motion.div
          key={flake.id}
          className="absolute sparkle"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            left: `${flake.x}px`,
            top: "-20px",
            position: "absolute",
          }}
          animate={{
            y: [0, windowSize.height + 50],
            x: [0, Math.random() * 100 - 50], // Random horizontal movement
            rotate: [0, 360], // Full rotation
          }}
          transition={{
            duration: flake.duration,
            ease: "linear",
            delay: flake.delay,
            repeat: Infinity,
            repeatType: "loop",
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <motion.span
            className="block absolute w-full h-full"
            style={{
              background: flake.color,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
            animate={{ rotate: 45, scale: [1, 0.8, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => renderSnowflake(flake))}
    </div>
  );
}

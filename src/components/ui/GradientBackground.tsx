"use client";

import React from "react";
import { motion } from "framer-motion";

type GradientBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "purple" | "blue" | "indigo" | "dark";
};

export default function GradientBackground({
  children,
  className = "",
  variant = "indigo",
}: GradientBackgroundProps) {
  // Define the gradient variations
  const gradients = {
    purple: "bg-gradient-to-br from-gray-900 via-purple-900/40 to-gray-900",
    blue: "bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900",
    indigo: "bg-gradient-to-br from-gray-900 via-indigo-900/40 to-gray-900",
    dark: "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950",
  };

  // Generate random positions for the orbs
  const orbPositions = [
    { x: "10%", y: "20%", size: "300px", delay: 0 },
    { x: "70%", y: "60%", size: "400px", delay: 0.5 },
    { x: "40%", y: "80%", size: "250px", delay: 0.3 },
  ];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 ${gradients[variant]}`} />

      {/* Animated orbs/glows */}
      {orbPositions.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background:
              variant === "dark"
                ? "radial-gradient(circle, rgba(79,70,229,0.3) 0%, rgba(17,24,39,0) 70%)"
                : `radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(17,24,39,0) 70%)`,
          }}
          initial={{ opacity: 0.1 }}
          animate={{
            opacity: [0.15, 0.2, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: orb.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

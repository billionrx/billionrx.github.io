"use client";

import React from "react";
import { motion } from "framer-motion";

type WaveEffectProps = {
  position?: "top" | "bottom";
  inverted?: boolean;
  className?: string;
  fill?: string;
  animated?: boolean;
};

export default function WaveEffect({
  position = "bottom",
  inverted = false,
  className = "",
  fill = "fill-gray-900",
  animated = true,
}: WaveEffectProps) {
  // Animation for the wave
  const pathVariants = {
    initial: {
      pathLength: 0,
      pathOffset: inverted ? 1 : 0,
    },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Determine the orientation
  const flipY = position === "top";
  const flipX = inverted;

  const transform = `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`;

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        transform,
        height: "150px",
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-full ${fill}`}
      >
        {animated ? (
          <motion.path
            initial="initial"
            animate="animate"
            variants={pathVariants}
            d="M0,0 C150,90 300,120 450,90 C600,60 750,90 900,120 C1050,150 1200,120 1200,90 L1200,0 L0,0 Z"
          />
        ) : (
          <path d="M0,0 C150,90 300,120 450,90 C600,60 750,90 900,120 C1050,150 1200,120 1200,90 L1200,0 L0,0 Z" />
        )}
      </svg>
    </div>
  );
}

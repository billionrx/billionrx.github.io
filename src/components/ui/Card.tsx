"use client";

import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  borderGlow?: boolean;
};

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  glassEffect = true,
  borderGlow = false,
}: CardProps) {
  return (
    <motion.div
      className={`
        rounded-lg 
        ${glassEffect ? "bg-gray-900/40 backdrop-blur-md" : "bg-gray-900"}
        ${borderGlow ? "ring-1 ring-indigo-500/20" : "border border-gray-800"}
        ${
          hoverEffect
            ? "hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            : ""
        }
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

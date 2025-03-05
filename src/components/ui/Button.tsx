"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gradient";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
  isExternal?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  disabled = false,
  icon,
  showArrow = false,
  isExternal = false,
  type = "button",
}: ButtonProps) {
  // Define variant styles for cartoon theme
  const variantStyles = {
    primary:
      "bg-indigo-500 text-white border-indigo-600 border-b-4 hover:border-b-2 hover:mb-0.5 hover:bg-indigo-400",
    secondary:
      "bg-purple-500 text-white border-purple-600 border-b-4 hover:border-b-2 hover:mb-0.5 hover:bg-purple-400",
    outline:
      "bg-transparent text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-900/30",
    ghost:
      "bg-transparent text-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 border-transparent",
    gradient:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-b-4 border-indigo-700 hover:border-b-2 hover:mb-0.5",
  };

  // Define size styles
  const sizeStyles = {
    sm: "py-1.5 px-4 text-xs",
    md: "py-2 px-5 text-sm",
    lg: "py-3 px-7 text-base",
  };

  // Common styles for all buttons - cartoon style
  const buttonStyles = `
    inline-flex items-center justify-center rounded-xl font-bold transition-all
    duration-200 shadow-md focus:outline-none
    ${disabled ? "opacity-60 cursor-not-allowed" : ""} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `;

  // Button content with optional icon and arrow
  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <RiArrowRightLine className="ml-1 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  // If href is provided, render as a Link
  if (href) {
    // External link
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={`group ${buttonStyles}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonContent}
        </motion.a>
      );
    }

    // Internal link - Use Next.js Link directly
    return (
      <Link href={href} legacyBehavior={false}>
        <motion.span
          className={`group ${buttonStyles} inline-block`}
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          onClick={onClick}
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <motion.button
      type={type}
      className={`group ${buttonStyles}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
}

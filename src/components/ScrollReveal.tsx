"use client";

import React from "react";
import { motion, UseInViewOptions } from "framer-motion";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewport?: UseInViewOptions;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.65,
  distance = 35,
  className = "",
  viewport = { once: true, margin: "-60px" },
}: ScrollRevealProps) {
  const getInitial = () => {
    switch (variant) {
      case "fade-up":
        return { opacity: 0, y: distance };
      case "fade-down":
        return { opacity: 0, y: -distance };
      case "fade-left":
        return { opacity: 0, x: distance };
      case "fade-right":
        return { opacity: 0, x: -distance };
      case "zoom-in":
        return { opacity: 0, scale: 0.93 };
      case "fade":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (variant) {
      case "zoom-in":
        return { opacity: 1, scale: 1 };
      case "fade":
        return { opacity: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealStagger({
  children,
  className = "",
  staggerChildren = 0.12,
  delayChildren = 0,
  viewport = { once: true, margin: "-60px" },
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  viewport?: UseInViewOptions;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className = "",
  variant = "fade-up",
  distance = 35,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  distance?: number;
}) {
  const getInitial = () => {
    switch (variant) {
      case "fade-up":
        return { opacity: 0, y: distance };
      case "fade-down":
        return { opacity: 0, y: -distance };
      case "fade-left":
        return { opacity: 0, x: distance };
      case "fade-right":
        return { opacity: 0, x: -distance };
      case "zoom-in":
        return { opacity: 0, scale: 0.93 };
      case "fade":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (variant) {
      case "zoom-in":
        return { opacity: 1, scale: 1 };
      case "fade":
        return { opacity: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getInitial(),
        show: {
          ...getAnimate(),
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

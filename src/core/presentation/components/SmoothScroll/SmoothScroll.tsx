"use client";

import React, { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

export default function SmoothScroll({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Slightly raised position
      whileInView={{ opacity: 1,  y: 0 }} // Return to the original position
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        // Adjust the easing function for a smoother rise
      }}
    >
      {children}
    </motion.div>
  );
}

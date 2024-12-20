"use client";

import React from "react";

import { motion } from "framer-motion";

export default function AnimatedInView({
  children,
  delay = 0,
  animate,
  className,
}) {
  const mergedVariants = {
    ...animate,
    animate: {
      ...animate?.animate,
      transition: {
        ...animate?.animate?.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={mergedVariants}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

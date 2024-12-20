"use client";

import React from "react";

import { motion } from "motion/react";
import { opacity, slideInUp } from "../animations";

function splitText(text, type) {
  if (type === "words") return text.split(" ").map((word) => word + "\u00A0");
  if (type === "chars")
    return text.split("").map((char) => (char === " " ? "\u00A0" : char));

  return [text];
}

export default function SplitTextAnimated({ children, splitType, delay }) {
  const splitArray = splitText(children, splitType);

  const maxStagger = 0.3;
  const staggerChildren = Math.max(maxStagger / splitArray.length, 0.03);

  return (
    <motion.span
      className="relative inline-block overflow-hidden"
      initial="initial"
      whileInView="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren,
            delayChildren: delay || 0,
          },
        },
      }}
      viewport={{ once: true }}
    >
      {/* for screen reader */}
      <span className="sr-only">{children}</span>

      {splitArray.map((part, index) => (
        <motion.span
          key={index}
          className="inline-block"
          aria-hidden="true"
          variants={splitType === "words" ? opacity : slideInUp}
        >
          {part}
        </motion.span>
      ))}
    </motion.span>
  );
}

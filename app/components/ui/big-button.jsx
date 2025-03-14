"use client";

import { motion } from "motion/react";

import React from "react";
import Link from "next/link";
import SplitTextAnimated from "./split-text-animated";

export default function BigButton({ href, text1, text2 }) {
  return (
    <Link
      target="_blank"
      href={href}
      className="group/button w-fit text-title-base uppercase"
    >
      <div className="relative w-fit overflow-hidden">
        <SplitTextAnimated splitType="chars">{text1}</SplitTextAnimated>

        <motion.span
          className="absolute bottom-0 left-0 h-[0.07em] w-full bg-black transition-transform duration-700 ease-ease-in-quint group-hover/button:translate-x-[130%]"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: { delay: 0.8 },
          }}
          viewport={{ once: true }}
        />
        <motion.span className="absolute bottom-0 left-0 h-[0.07em] w-full translate-x-[-130%] bg-black transition-transform duration-700 ease-ease-in-quint group-hover/button:translate-x-0" />
      </div>

      {text2 && (
        <div className="relative w-fit overflow-hidden">
          <SplitTextAnimated splitType="chars">{text2}</SplitTextAnimated>

          <motion.span
            className="absolute bottom-0 left-0 h-[0.07em] w-full bg-black transition-transform duration-700 ease-ease-in-quint group-hover/button:translate-x-[130%]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{
              clipPath: "inset(0 0 0 0)",
              transition: { delay: 0.8 },
            }}
            viewport={{ once: true }}
          />
          <motion.span className="absolute bottom-0 left-0 h-[0.07em] w-full translate-x-[-130%] bg-black transition-transform duration-700 ease-ease-in-quint group-hover/button:translate-x-0" />
        </div>
      )}
    </Link>
  );
}

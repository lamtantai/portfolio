"use client";

import Image from "next/image";

import { useScroll, motion, useTransform } from "motion/react";

import { useRef } from "react";

export default function ParallaxImage({ src }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "15%"]);

  return (
    <div className="shimmer-bg relative h-full w-full overflow-hidden">
      <motion.div
        className="relative h-[135%] w-full"
        ref={ref}
        style={{
          y,
        }}
      >
        <Image
          src={src}
          alt="project image"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
}

"use client";

import React, { useRef } from "react";

import Image from "next/image";

import { useScroll, useTransform, motion } from "motion/react";

import SplitTextAnimated from "../../ui/split-text-animated";
import LinkUnderlineStyle from "@/app/ui/link-underline-style";
import { clippathInUp, opacity } from "@/app/animations";
import AnimatedInView from "@/app/ui/animated-in-view";

export default function ProjectDetailSection({ project, onClick }) {
  const sectionRef = useRef(null);
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    container: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(project.images.length - 1) * 100}%`],
  );

  return (
    <motion.article
      initial="initial"
      animate="animate"
      exit="exit"
      variants={clippathInUp}
      className="fixed inset-0 z-[999] overflow-auto bg-black text-light-grey"
      style={{ scrollbarWidth: "none", WebkitScrollbarWidth: "none" }}
      ref={sectionRef}
    >
      <header className="fixed top-0 z-10 w-full px-layout-padding text-light-grey">
        <div className="flex justify-between pt-8 text-paragraph-text">
          <p className="uppercase">{project.name}</p>

          <button aria-label="Close project details" onClick={onClick}>
            Close
          </button>
        </div>
      </header>

      {/* Desktop View: Images */}
      <section className="relative hidden h-[300vh] lg:block" ref={divRef}>
        <div className="sticky top-0 flex h-screen overflow-clip">
          <div className="relative flex flex-nowrap items-center gap-x-layout-padding pl-layout-padding">
            {project.images.map((image, index) => (
              <motion.div
                className="shimmer-bg relative h-[75vh] w-[65vw]"
                key={index}
                style={{
                  x,
                }}
              >
                <Image
                  src={image}
                  fill
                  alt="project image"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-layout-padding pb-16 pt-32 lg:bg-light-grey lg:pt-16 lg:text-black">
        <p className="text-paragraph-text-lg">
          <SplitTextAnimated splitType="words" stagger={0.03} delay={0.6}>
            {project.description}
          </SplitTextAnimated>
        </p>

        <AnimatedInView animate={opacity} delay={0.8}>
          <div className="mb-20 mt-6 flex flex-col gap-y-4 text-paragraph-text uppercase">
            <LinkUnderlineStyle
              href={project.liveDemo}
              label="View live site"
            />
            <LinkUnderlineStyle href={project.repository} label="View code" />
          </div>

          <div className="space-y-10 text-paragraph-text">
            <h4 className="text-title-xs uppercase">project info</h4>

            <hr className="lg:border-black" />

            <div className="flex justify-between">
              <p>Year</p>
              <p>{project.year}</p>
            </div>

            <hr className="lg:border-black" />

            <div className="flex justify-between capitalize">
              <p>Type</p>
              <p>{project.type}</p>
            </div>

            <hr className="lg:border-black" />
          </div>
        </AnimatedInView>
      </section>

      {/* Mobile View: Images */}
      <section className="mb-8 space-y-4 px-layout-padding lg:hidden">
        {project.images.map((image) => (
          <div className="shimmer-bg relative aspect-[4/3] w-full" key={image}>
            <Image
              src={image}
              fill
              alt="project image"
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </motion.article>
  );
}

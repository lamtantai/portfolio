"use client";

import React, { useState } from "react";

import { projects } from "@/app/lib/data";

import { opacity } from "@/app/animations";

import Cursor from "./cursor";

import BigButton from "@/app/components/ui/big-button";
import ParallaxImage from "../ui/parallax-image";
import AnimatedInView from "@/app/components/ui/animated-in-view";
import SectionContainer from "../ui/section-container";
import SplitTextAnimated from "../ui/split-text-animated";
import Link from "next/link";

export default function ProjectSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <SectionContainer id="projects" title="projects">
      <div className="space-y-10 lg:space-y-20">
        {projects.map((project) => (
          <div className="relative grid gap-10 lg:grid-cols-2" key={project.id}>
            <div className="h-fit space-y-6 lg:sticky lg:top-section-vertical-padding">
              <h2
                className="w-fit cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <BigButton href={project.href} text1={project.name} />
              </h2>

              <p className="text-paragraph-text-lg">
                <SplitTextAnimated splitType="words">
                  {project.shortDescription}
                </SplitTextAnimated>
              </p>

              <AnimatedInView animate={opacity}>
                <ul className="flex flex-wrap gap-2 lg:text-lg">
                  {project.techs.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-black px-4 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </AnimatedInView>
            </div>

            <Link
              href={project.href}
              className="relative aspect-[4/5] w-full cursor-pointer lg:h-[130vh]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center lg:hidden">
                <span className="rounded-full border border-black bg-white p-10 text-center text-paragraph-text text-black">
                  See
                  <br /> more
                </span>
              </div>

              <ParallaxImage src={project.thumbnail} />
            </Link>
          </div>
        ))}
      </div>

      <Cursor isHovering={isHovering} />
    </SectionContainer>
  );
}

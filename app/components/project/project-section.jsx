"use client";

import React, { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import { projects } from "@/app/lib/data";

import { AnimatePresence } from "motion/react";

import BigButton from "@/app/ui/big-button";
import ParallaxImage from "../../ui/parallax-image";
import SectionTitle from "@/app/ui/section-title";
import ProjectDetailSection from "./project-detail-section";
import AnimatedInView from "@/app/ui/animated-in-view";
import { opacity } from "@/app/animations";
import Cursor from "./cursor";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const bodyRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector("body");

    bodyRef.current = body;

    if (selectedProject) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <section id="project" className="pb-section-vertical-padding">
        <SectionTitle number="02">recent projects</SectionTitle>

        <div className="space-y-10 lg:space-y-20">
          {projects.map((project) => (
            <div
              className="relative grid gap-y-10 lg:grid-cols-2"
              key={project.id}
            >
              <div className="h-fit lg:sticky lg:top-section-vertical-padding">
                <h2
                  className="w-fit cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <BigButton>{project.name}</BigButton>
                </h2>

                <AnimatedInView animate={opacity} delay={0.9}>
                  <p className="mt-4 w-3/4 max-w-96 text-balance text-paragraph-text">
                    {project.shortDescription}
                  </p>
                </AnimatedInView>
              </div>

              <div
                className="relative aspect-[4/5] w-full cursor-pointer lg:h-[130vh]"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0 z-10 flex items-center justify-center lg:hidden">
                  <span className="rounded-full bg-white p-10 text-center text-paragraph-text text-black">
                    See
                    <br /> more
                  </span>
                </div>

                <ParallaxImage src={project.thumbnail} />
              </div>
            </div>
          ))}
        </div>

        <Cursor isHovering={isHovering} />
      </section>

      {bodyRef.current &&
        createPortal(
          <AnimatePresence mode="wait">
            {selectedProject && (
              <ProjectDetailSection
                project={selectedProject}
                onClick={() => setSelectedProject(null)}
                key="project-detail"
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

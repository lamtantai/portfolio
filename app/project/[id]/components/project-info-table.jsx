import React from "react";

import Link from "next/link";

import { clippathInUp } from "@/app/animations";
import AnimatedInView from "@/app/components/ui/animated-in-view";

export default function ProjectInfoTable({ project }) {
  return (
    <AnimatedInView animate={clippathInUp}>
      <div className="flex flex-wrap justify-between text-lg font-semibold xl:text-2xl">
        <Row title="year">
          <p>{project.year}</p>
        </Row>

        <Row title="duration">
          <p>{project.duration} working days</p>
        </Row>

        <Row title="type">
          <p>{project.type}</p>
        </Row>

        <Row title="techs">
          <ul className="flex flex-col">
            {project.techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Row>

        <Row title="live">
          <Link href={project.liveDemo}>View live</Link>
        </Row>

        <Row title="code">
          <Link href={project.repository}>View code</Link>
        </Row>
      </div>
    </AnimatedInView>
  );
}

function Row({ title, children }) {
  return (
    <div className="mt-6 w-[45%] border-b-2 border-black pb-6">
      <h4 className="text-sm font-medium capitalize opacity-65 xl:text-lg">
        {title}
      </h4>
      {children}
    </div>
  );
}

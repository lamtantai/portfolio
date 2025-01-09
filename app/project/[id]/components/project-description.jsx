import SplitTextAnimated from "@/app/components/ui/split-text-animated";
import Link from "next/link";
import React from "react";

export default function ProjectDescription({ project }) {
  return (
    <>
      <h3 className="mb-4 text-title-sm font-medium uppercase opacity-65">
        <SplitTextAnimated splitType="chars">Description</SplitTextAnimated>
      </h3>
      <p className="text-paragraph-text lg:max-w-[90%]">
        <SplitTextAnimated splitType="words">
          {project.description}
        </SplitTextAnimated>
      </p>

      <div className="mt-4 flex gap-3">
        <Link
          target="_blank"
          href={project.repository}
          className="bg-black px-4 py-2 text-title-xs text-white transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
        >
          View code
        </Link>
        <Link
          target="_blank"
          href={project.liveDemo}
          className="bg-black px-4 py-2 text-title-xs text-white transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
        >
          View live
        </Link>
      </div>
    </>
  );
}

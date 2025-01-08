import React from "react";

import Image from "next/image";

import { projects } from "@/app/lib/data";
import { notFound } from "next/navigation";
import SectionContainer from "@/app/components/ui/section-container";
import ProjectInfoTable from "./components/project-info-table";
import SplitTextAnimated from "@/app/components/ui/split-text-animated";
import ProjectImageGallery from "./components/project-image-gallery";
import Link from "next/link";

export default async function ProjectPage({ params }) {
  const param = (await params).id;

  const currentProject = projects.find((project) => project.id === param);

  if (!currentProject) {
    notFound();
  }

  const currentIndex = projects.indexOf(currentProject);
  const nextIndex = currentIndex == projects.length - 1 ? 0 : currentIndex + 1;
  const prevIndex = currentIndex == 0 ? projects.length - 1 : currentIndex - 1;

  const nextProject = projects[nextIndex];
  const prevProject = projects[prevIndex];

  return (
    <SectionContainer title={currentProject.name}>
      <div className="flex flex-col gap-y-10 lg:flex-row">
        <div className="lg:w-2/5">
          <ProjectInfoTable project={currentProject} />
        </div>

        <div className="lg:order-first lg:w-3/5">
          <h3 className="mb-4 text-title-sm font-medium uppercase opacity-80">
            <SplitTextAnimated splitType="chars">Description</SplitTextAnimated>
          </h3>
          <p className="text-paragraph-text lg:max-w-[90%]">
            <SplitTextAnimated splitType="words">
              {currentProject.description}
            </SplitTextAnimated>
          </p>
        </div>
      </div>

      <ul className="mt-section-vertical-padding space-y-4 border-b-2 border-black pb-10 lg:space-y-10">
        {currentProject.images.map((image, i) => (
          <li key={i}>
            <div className="shimmer-bg relative aspect-[5/4] bg-gray-300 lg:aspect-[3/2]">
              <Image
                src={image}
                alt="project image"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="my-10 flex justify-between">
        <Link
          href={prevProject.href}
          className="transition-transform duration-300 hover:scale-110"
        >
          <p className="text-title-xs">Previous</p>
          <p className="text-title-sm font-black uppercase">
            {prevProject.name}
          </p>
        </Link>

        <Link
          href={nextProject.href}
          className="transition-transform duration-300 hover:scale-110"
        >
          <p className="text-end text-title-xs">Next</p>
          <p className="text-title-sm font-black uppercase">
            {nextProject.name}
          </p>
        </Link>
      </div>
    </SectionContainer>
  );
}

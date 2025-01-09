import React from "react";

import { projects } from "@/app/lib/data";
import { notFound } from "next/navigation";
import SectionContainer from "@/app/components/ui/section-container";
import ProjectInfoTable from "./components/project-info-table";
import AnotherProject from "./components/another-project";
import ProjectImageGallery from "./components/project-image-gallery";
import ProjectDescription from "./components/project-description";

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
          <ProjectDescription project={currentProject} />
        </div>
      </div>

      <ProjectImageGallery project={currentProject} />

      <AnotherProject prevProject={prevProject} nextProject={nextProject} />
    </SectionContainer>
  );
}

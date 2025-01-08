import Image from "next/image";
import React from "react";

export default function ProjectImageGallery({ project }) {
  return (
    <ul className="mt-section-vertical-padding space-y-4 lg:space-y-10">
      {project.images.map((image, i) => (
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
  );
}

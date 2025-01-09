"use client";

import Link from "next/link";
import React from "react";

export default function AnotherProject({ prevProject, nextProject }) {
  return (
    <div className="my-10 flex justify-between">
      <Link
        href={prevProject.href}
        className="transition-transform duration-300 hover:scale-110 active:scale-100"
      >
        <p className="text-title-xs">Previous</p>
        <p className="text-title-sm font-black uppercase">{prevProject.name}</p>
      </Link>

      <Link
        href={nextProject.href}
        className="transition-transform duration-300 hover:scale-110 active:scale-100"
      >
        <p className="text-end text-title-xs">Next</p>
        <p className="text-title-sm font-black uppercase">{nextProject.name}</p>
      </Link>
    </div>
  );
}

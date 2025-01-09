"use client";

import Link from "next/link";

import React from "react";

const NAV_LIST = [
  { name: "about", href: "/#about" },
  { name: "projects", href: "/#projects" },
  { name: "contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 animate-slide-in-down text-light-grey opacity-0 mix-blend-difference">
      <div className="flex justify-between pt-8 text-paragraph-text">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-110 active:scale-100"
        >
          Tan Tai
        </Link>

        <div className="hidden lg:block">
          <p>* Available for job</p>
        </div>

        <nav className="flex gap-x-3 capitalize lg:gap-x-12">
          {NAV_LIST.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="group/link relative w-fit"
            >
              {item.name}

              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-right scale-x-0 bg-light-grey mix-blend-difference transition-transform duration-500 group-hover/link:origin-left group-hover/link:scale-x-100" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

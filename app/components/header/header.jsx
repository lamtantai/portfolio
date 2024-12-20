import Link from "next/link";

import React, { Fragment } from "react";

import LinkUnderlineStyle from "@/app/ui/link-underline-style";

const NAV_LIST = [
  { name: "about", href: "#about" },
  { name: "project", href: "#project" },
  { name: "contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 animate-slide-in-down text-light-grey opacity-0 mix-blend-difference">
      <div className="flex justify-between pt-8 text-paragraph-text">
        <Link href="/" className="">
          Tan Tai
        </Link>

        <div className="hidden lg:block">
          <p>* Available for job</p>
        </div>

        <nav className="capitalize">
          {NAV_LIST.map((item, index) => (
            <Fragment key={item.name}>
              <LinkUnderlineStyle href={item.href} label={item.name} />
              {index < NAV_LIST.length - 1 && ", "}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}

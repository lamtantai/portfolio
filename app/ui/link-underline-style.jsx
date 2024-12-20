import Link from "next/link";

import React from "react";

export default function LinkUnderlineStyle({ href, label }) {
  return (
    <Link href={href} className="group/link relative w-fit">
      {label}

      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-right scale-x-0 bg-light-grey mix-blend-difference transition-transform duration-500 group-hover/link:origin-left group-hover/link:scale-x-100" />
    </Link>
  );
}

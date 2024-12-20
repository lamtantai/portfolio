import React from "react";

import LinkUnderlineStyle from "@/app/ui/link-underline-style";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between gap-y-4 pb-8 lg:text-paragraph-text">
        <p>
          <span className="text-xs">&copy;</span> Code by Tan Tai
        </p>

        <LinkUnderlineStyle
          href="https://github.com/lamtantai"
          label="GitHub"
        />
      </div>
    </footer>
  );
}

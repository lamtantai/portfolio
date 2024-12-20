import React from "react";

import SplitTextAnimated from "./split-text-animated";

export default function SectionTitle({ number, children }) {
  return (
    <div className="mb-16 flex gap-x-10 pt-section-vertical-padding text-title-xs uppercase">
      <h4 className="">{number}/</h4>
      <h4 className="">
        <SplitTextAnimated splitType="chars" stagger={0.015}>
          {children}
        </SplitTextAnimated>
      </h4>
    </div>
  );
}

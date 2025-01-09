import React from "react";
import SplitTextAnimated from "./split-text-animated";

export default function SectionContainer({ title, id, children }) {
  return (
    <section id={id} className="pt-section-vertical-padding">
      <h4
        className="mb-10 font-sans text-[clamp(3.5rem,1.3181rem+9.5645vw,10.5rem)] font-black uppercase tracking-wide text-light-grey lg:mb-20"
        style={{
          textShadow:
            "0 0 2px black, 2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black",
        }}
      >
        <SplitTextAnimated splitType="chars">{title}</SplitTextAnimated>
      </h4>

      {children}
    </section>
  );
}

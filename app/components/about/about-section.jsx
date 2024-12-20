import React from "react";

import SectionTitle from "@/app/ui/section-title";
import ParallaxImage from "../../ui/parallax-image";

import SplitTextAnimated from "../../ui/split-text-animated";

export default function AboutSection() {
  return (
    <section id="about" className="pb-section-vertical-padding">
      <SectionTitle number="01">about me</SectionTitle>

      <div className="grid gap-10 text-balance lg:grid-cols-9 lg:grid-rows-2">
        <p className="text-paragraph-text-lg uppercase lg:col-span-5">
          <SplitTextAnimated splitType="words" stagger={0.05}>
            I'm a passionate and self-taught front-end developer. I enjoy
            turning creative ideas into visually attractive, user-friendly web
            experiences.
          </SplitTextAnimated>
        </p>

        <div className="aspect-[4/5] max-w-[30rem] lg:col-span-full lg:col-start-6 lg:row-span-full lg:h-full lg:max-w-full">
          <ParallaxImage src="/bin.jpg" />
        </div>

        <div className="space-y-6 text-paragraph-text lg:col-span-5 lg:row-start-2 lg:self-end">
          <p>
            <SplitTextAnimated splitType="words" stagger={0.05}>
              While I may not have professional experience, I've worked on
              several personal projects that demonstrate my ability to build
              interactive and functional web applications.
            </SplitTextAnimated>
          </p>
          <p>
            <SplitTextAnimated splitType="words" stagger={0.05} delay={1}>
              I'm actively seeking an internship or entry-level position where I
              can contribute my skills, collaborate with a talented team, and
              continue growing as a developer.
            </SplitTextAnimated>
          </p>
        </div>
      </div>
    </section>
  );
}

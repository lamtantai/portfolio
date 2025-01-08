import React from "react";
import SplitTextAnimated from "./ui/split-text-animated";
import ParallaxImage from "./ui/parallax-image";
import SectionContainer from "./ui/section-container";

export default function AboutSection() {
  return (
    <SectionContainer id="about" title="about">
      <div className="grid gap-10 text-balance uppercase lg:grid-cols-9 lg:grid-rows-2">
        <p className="text-paragraph-text-lg lg:col-span-5">
          <SplitTextAnimated splitType="words">
            I'm a passionate and self-taught front-end developer. I enjoy
            turning creative ideas into intuitive and immersive user interfaces
            that works!
          </SplitTextAnimated>
        </p>

        <div className="aspect-[4/5] max-w-[30rem] lg:col-span-full lg:col-start-6 lg:row-span-full lg:h-full lg:max-w-full">
          <ParallaxImage src="/my-image-4.jpg" />
        </div>

        <div className="space-y-6 text-paragraph-text lg:col-span-5 lg:row-start-2 lg:self-end">
          <p>
            <SplitTextAnimated splitType="words">
              I've recently finished on several projects that demonstrate my
              ability to build interactive and functional web application
              interfaces.
            </SplitTextAnimated>
          </p>
          <p>
            <SplitTextAnimated splitType="words" delay={0.5}>
              I'm actively seeking an opportunity to contribute my skills,
              collaborate with a talented team, and continue growing as a
              professional developer.
            </SplitTextAnimated>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

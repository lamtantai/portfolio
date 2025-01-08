import React from "react";
import BigButton from "./ui/big-button";
import SectionContainer from "./ui/section-container";

export default function ContactSection() {
  return (
    <SectionContainer id="contact" title="contact">
      <div className="grid gap-y-10 pb-10 lg:pb-16">
        <BigButton href="https://github.com/lamtantai" text1="github" />

        <BigButton
          href="mailto:lltai.dev@gmail.com"
          text1="lttai.dev"
          text2="@gmail.com"
        />

        <BigButton href="tel:+84384724567" text1="0384 724 567" />
      </div>
    </SectionContainer>
  );
}

import Link from "next/link";

import React from "react";

import SectionTitle from "@/app/ui/section-title";
import BigButton from "@/app/ui/big-button";

export default function ContactSection() {
  return (
    <section id="contact" className="pb-section-vertical-padding">
      <SectionTitle number="03">let's work together</SectionTitle>

      <div className="grid gap-y-10 lg:gap-y-20">
        <Link href="mailto:lltai.dev@gmail.com" className="group/button w-fit">
          <BigButton>lltai.dev</BigButton>
          <br />
          <BigButton>@gmail.com</BigButton>
        </Link>

        <Link href="tel:+84384724567" className="w-fit">
          <BigButton>0384 724 567</BigButton>
        </Link>
      </div>
    </section>
  );
}

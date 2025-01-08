"use client";

import React from "react";

import Image from "next/image";

import { clippathInUp } from "../animations";

import AnimatedInView from "./ui/animated-in-view";
import SplitTextAnimated from "./ui/split-text-animated";

export default function HeroSection() {
  return (
    <section className="pb-section-vertical-padding">
      <div className="flex min-h-[calc(100vh-var(--header-height))] flex-col justify-end gap-y-4 uppercase lg:gap-y-6">
        <h2 className="text-title-base">
          <SplitTextAnimated splitType="chars">Hi, i'm</SplitTextAnimated>
          <br />
          <SplitTextAnimated splitType="chars">Lam Tan Tai</SplitTextAnimated>
        </h2>

        <p className="mb-4 max-w-72 text-paragraph-text lg:hidden">
          <SplitTextAnimated splitType="words" delay={1}>
            I love being creative with code and put a lot of effort into every
            project.
          </SplitTextAnimated>
        </p>

        <AnimatedInView animate={clippathInUp} delay={0.8}>
          <div className="shimmer-bg relative aspect-[1.5/1] max-h-64 w-full md:max-w-[35rem]">
            <Image
              src="/my-image-1.jpg"
              alt="my image"
              fill
              className="object-cover object-[0%_0%]"
            />
          </div>
        </AnimatedInView>

        <div className="flex items-end justify-between lg:gap-x-10">
          <h2 className="text-title-base lg:order-last lg:flex-1 lg:text-right">
            <SplitTextAnimated splitType="chars">front-end</SplitTextAnimated>
            <br />
            <SplitTextAnimated splitType="chars">developer</SplitTextAnimated>
          </h2>

          <span className="animate-slide-in-down text-title-base opacity-0">
            ↓
          </span>

          <p className="hidden max-w-72 text-paragraph-text lg:block">
            <SplitTextAnimated splitType="words" delay={1.25}>
              I love being creative with code and put a lot of effort into every
              project.
            </SplitTextAnimated>
          </p>
        </div>
      </div>
    </section>
  );
}

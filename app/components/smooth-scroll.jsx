"use client";

import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    if (!locomotiveInstance.current) {
      locomotiveInstance.current = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    }

    return () => {
      locomotiveInstance.current?.destroy();
      locomotiveInstance.current = null;
    };
  }, []);

  return <div data-scroll-container>{children}</div>;
}

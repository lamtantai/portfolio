import { motion, useSpring, AnimatePresence } from "motion/react";
import React, { useEffect } from "react";

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export default function Cursor({ isHovering }) {
  const cursorSize = 30;

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    function onMouseMove(e) {
      const { clientX, clientY } = e;
      const targetX = clientX - cursorSize / 2;
      const targetY = clientY - cursorSize / 2;
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const { x, y } = mousePosition;

  return (
    <AnimatePresence mode="wait">
      {isHovering && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="pointer-events-none fixed left-0 top-0 z-[400] flex cursor-none items-center justify-center"
          style={{ x, y, width: cursorSize, height: cursorSize }}
        >
          <span className="rounded-full border border-black bg-white p-10 text-center text-paragraph-text text-black">
            View
            <br /> live
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

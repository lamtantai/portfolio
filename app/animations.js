export const slideInUp = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: { duration: 0.8, ease: [0.62, 0.05, 0.01, 0.99] },
  },
};

export const slideInDown = {
  initial: { y: "-100%" },

  animate: {
    y: 0,
    transition: { duration: 0.8, ease: [0.62, 0.05, 0.01, 0.99] },
  },
};

export const clippathInUp = {
  initial: { clipPath: "inset(100% 0 0 0)" },

  animate: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.8, ease: [0.62, 0.05, 0.01, 0.99] },
  },

  exit: {
    clipPath: "inset(100% 0 0 0)",
    transition: { duration: 0.8, ease: [0.62, 0.05, 0.01, 0.99] },
  },
};

export const opacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.62, 0.05, 0.01, 0.99] },
  },
};

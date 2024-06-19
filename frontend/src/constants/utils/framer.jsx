export const slideup = {
  initial: {
    opacity: 0,
    y: "45px",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0",
    transition: { duration: 0.4, delay: i * 0.03 },
  }),
  exit: {
    opacity: 0,
    y: "45px",
    transition: { duration: 0.5 },
  },
};

export const smallslideup = {
  initial: {
    opacity: 0,
    y: "32px",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0",
    transition: { duration: 0.6, delay: i * 0.16 },
  }),
  exit: {
    opacity: 0,
    y: "32px",
    transition: { duration: 0.5 },
  },
};

export const slideup2 = {
  initial: {
    opacity: 0,
    y: "150px",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0",
    transition: { duration: 0.6, delay: i * 0.16 },
  }),
  exit: {
    opacity: 0,
    y: "150px",
    transition: { duration: 0.5 },
  },
};

export const clipPathRight = {
  initial: {
    opacity: 0,
    // clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  animate: (i) => ({
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 1.2 },
  }),
  exit: {
    opacity: 0,
    transition: {duration: 0.5},
    // clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
};

export const clipPathLeft = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    // clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  animate: (i) => ({
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 1.2, delay: i * 0.4 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    // clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    transition: { duration: 1.2, delay: i * 0.1 },
  }),
  exit: {
    opacity: 0,
  },
};

export const scaleAnimations = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const preloaderAnimations = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 4 },
  },
};

export const slidingAnimations = {
  initial: {
    height: "100vh",
  },
  enter: {
    height: "0",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    height: "0",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectiveAnimations = {
  initial: {
    scale: 0,
    y: 0,
    opacity: 0,
  },
  enter: {
    scale: 0,
    y: 0,
    opacity: 0,
  },
  exit: {
    scale: 0.9,
    y: 100,
    opacity: 0.8,
    transition: { duration: 3, ease: [0.76, 0, 0.24, 1] },
  },
};
export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity1 = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

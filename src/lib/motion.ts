import type { Transition, Variants } from "motion/react";

/** Easing curves. See DESIGN.md §5. */
export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const spring = {
  soft: { type: "spring", stiffness: 260, damping: 30 } satisfies Transition,
  snap: { type: "spring", stiffness: 400, damping: 28 } satisfies Transition,
};

export const dur = { fast: 0.25, base: 0.55, slow: 0.9 } as const;

/** Standard viewport config — reveal once, slightly before the element is centred. */
export const viewportOnce = { once: true, margin: "-15%" } as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: ease.out },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: dur.base, ease: ease.out } },
};

/** Parent for staggered lists. Children should use `revealUp`. */
export const stagger = (step = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren } },
});

/** Per-line mask reveal for the hero headline. Wrap each line in an overflow-hidden parent. */
export const lineMask: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: dur.slow, ease: ease.out } },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: dur.fast, ease: ease.out } },
  exit: { opacity: 0, y: -8, transition: { duration: dur.fast, ease: ease.inOut } },
};

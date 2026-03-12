import type { Easing, Variants } from "motion/react";

const ease: Easing = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.25,
};

export function fadeUp(reducedMotion: boolean, y = 18): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.16 : 0.48,
      },
    },
  };
}

export function staggerContainer(
  reducedMotion: boolean,
  staggerChildren = 0.12,
  delayChildren = 0.04
): Variants {
  return {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0.04 : staggerChildren,
        delayChildren: reducedMotion ? 0 : delayChildren,
      },
    },
  };
}

export function staggerItem(reducedMotion: boolean): Variants {
  return fadeUp(reducedMotion, 14);
}

export function cardHover(reducedMotion: boolean) {
  if (reducedMotion) {
    return {};
  }

  return {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.24,
      ease,
    },
  };
}

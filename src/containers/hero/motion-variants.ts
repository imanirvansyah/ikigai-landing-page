import { Variants } from "motion/react";

export const logoVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotate: "180deg"
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: "0deg",
    transition: {
      duration: 0.6
    }
  }
}
export const titleVariant: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .2,
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: "easeIn"
    }
  }
}
export const characterVariant: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const romajiVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: "easeOut"
    }
  }
}
export const subTitleVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
      ease: "easeOut"
    }
  }
}
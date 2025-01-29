"use client"
import { IkigaiSymbol } from "@/components/symbol";
import { AnimatePresence, motion } from "motion/react";
import { characterVariant, logoVariant, romajiVariant, subTitleVariant, titleVariant } from "./motion-variants";
import styles from "./styles.module.scss"

const title = "生き甲斐";


export const Hero = () => {
  const splittedTitle = title.split("")

  return (
    <div className="wrapper">
      <motion.div
        variants={logoVariant}
        initial="hidden"
        animate="visible"
      >
        <IkigaiSymbol size={100} />
      </motion.div>
      <div className={styles.title}>
        <AnimatePresence>
          <motion.h1
            key="title"
            variants={titleVariant}
            initial="hidden"
            animate="visible"
            style={{ display: "flex" }}
          >
            {splittedTitle.map((character, idx) => <motion.span key={idx} variants={characterVariant}>{character}</motion.span>)}
          </motion.h1>
          <motion.h3
            key="subtitle"
            variants={romajiVariant}
            initial="hidden"
            animate="visible"
          >
            (ikigai)
          </motion.h3>
        </AnimatePresence>
      </div>
      <motion.p
        key="subtitle"
        variants={subTitleVariant}
        initial="hidden"
        animate="visible"
        className={styles.subtitle}>
        Understand the Japanese art of finding your purpose and how it can transform your life.
      </motion.p>
    </div>
  )
}
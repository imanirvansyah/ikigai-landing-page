"use client"
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import styles from "./style.module.scss";

export const Closing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  console.log(isInView);
  return (
    <motion.div ref={ref} className={styles.closing}>
      <p className="means">Congratulations! You&apos;ve taken a meaningful step toward uncovering your Ikigai. Remember, it&apos;s a journey, not a destination. Embrace your passions, align with your purpose, and live a fulfilling life.</p>
      <p className={styles.bold}> May your Ikigai bring you endless joy and purpose.</p >
    </motion.div>
  )
}
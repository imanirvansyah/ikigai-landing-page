"use client"
import { IkigaiSymbol } from "@/components/symbol"
import styles from "./styles.module.css"

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <IkigaiSymbol size={100} />
      <div className={styles.title}>
        <h1>生き甲斐</h1>
        <h3>(ikigai)</h3>
      </div>
      <p className={styles.subtitle}>Understand the Japanese art of finding your purpose and how it can transform your life.</p>
    </div>
  )
}
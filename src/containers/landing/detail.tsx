"use client"

import { IkigaiSymbol } from "@/components/symbol"
import useScreenSize from "@/helper/responsive"
import styles from "./styles.module.css"

export const Detail = () => {
  const screenWidth = useScreenSize();
  return (
    <div className={styles.wrapper}>
      <p className={styles.means}>Ikigai is found at the heart of four interconnected elements. These elements guide you to live a life that is fulfilling, purposeful, and balanced. Let’s explore each one.</p>
      <div style={{ marginTop: "50px" }}>
        <IkigaiSymbol size={!!screenWidth && screenWidth < 900 ? 150 : 200} showLabel />
      </div>
    </div>
  )
}
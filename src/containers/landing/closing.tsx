import { Fragment } from "react"
import styles from "./styles.module.css"

export const Closing = () => {
  return (
    <Fragment>

      <div className={styles.wrapper}>
        <p className={styles.means}>Congratulations! You&apos;ve taken a meaningful step toward uncovering your Ikigai. Remember, it&apos;s a journey, not a destination. Embrace your passions, align with your purpose, and live a fulfilling life.</p>
        <button>Explore Resources</button>
      </div>
      <div className={styles.wrapper}>
        <h2> May your Ikigai bring you endless joy and purpose.</h2>
      </div>
    </Fragment>
  )
}
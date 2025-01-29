import styles from "./styles.module.css";

export const PassionSymbol: React.FC<{ size?: number, showLabel?: boolean }> = ({ size = 100, showLabel = false }) => {
  return (
    <div className={`${styles.sphere}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {showLabel && <span>Passion</span>}
    </div>
  )
}

export const MissionSymbol: React.FC<{ size?: number, showLabel?: boolean }> = ({ size = 100, showLabel = false }) => {
  return (
    <div className={`${styles.sphere} ${styles.mission}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {showLabel && <span>Mission</span>}
    </div>
  )
}
export const ProfessionSymbol: React.FC<{ size?: number, showLabel?: boolean }> = ({ size = 100, showLabel = false }) => {
  return (
    <div className={`${styles.sphere} ${styles.profession}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {showLabel && <span>Profession</span>}
    </div>
  )
}
export const VocationSymbol: React.FC<{ size?: number, showLabel?: boolean }> = ({ size = 100, showLabel = false }) => {
  return (
    <div className={`${styles.sphere} ${styles.vocation}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {showLabel && <span>Vocation</span>}
    </div>
  )
}

export const IkigaiSymbol: React.FC<{ size?: number, showLabel?: boolean }> = ({ size = 200, showLabel = false }) => {

  return (
    <div className={styles.ikigai} style={{ width: `${size}px`, height: `${size}px` }}>
      <PassionSymbol size={size} showLabel={showLabel} />
      <MissionSymbol size={size} showLabel={showLabel} />
      <ProfessionSymbol size={size} showLabel={showLabel} />
      <VocationSymbol size={size} showLabel={showLabel} />
    </div>
  )
}

import { motion, MotionValue, useTransform } from "motion/react";

export const Word: React.FC<{
  range: number[]
  children: React.ReactNode;
  progress: MotionValue<number>
}> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}
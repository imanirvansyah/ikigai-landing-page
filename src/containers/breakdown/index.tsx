"use client"

import { MissionSymbol, PassionSymbol, ProfessionSymbol, VocationSymbol } from "@/components/symbol"
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import styles from "../styles.module.css"

export const Breakdown = () => {
  const container = useRef<HTMLDivElement>(null);
  const ranges = [0, 0.25, 0.5, 0.75, 1];
  const textValues = [
    {
      title: "Passion",
      subtitle: "Passion is what you love doing. It’s what brings you joy and makes you feel alive.",
      prompt: "What activities make you lose track of time?"
    },
    {
      title: "Mission",
      subtitle: "Mission is what the world needs. It’s how you can make a meaningful impact on others.",
      prompt: "What problems in the world inspire you to take action?"
    },
    {
      title: "Vocation",
      subtitle: "Vocation is what you can be paid for. It’s how you sustain yourself financially while aligning with your values.",
      prompt: "What skills do you have that others value?"
    },
    {
      title: "Profession",
      subtitle: "Profession is what you are good at. It’s where your skills and expertise shine.",
      prompt: "What do others often ask you for help with?"
    },

  ]
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const [currentText, setCurrentText] = useState(textValues[0]);
  const [prevIndex, setPrevIndex] = useState(0);

  const opacityA = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const opacityB = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
  const opacityC = useTransform(scrollYProgress, [0.5, 0.75], [0, 1])
  const opacityD = useTransform(scrollYProgress, [0.75, 1], [0, 1])

  const rotationAnimation = {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const index = ranges.findIndex((range, i) => value >= range && value < ranges[i + 1]);
      if (index !== prevIndex && index !== -1) {
        setCurrentText(textValues[index]);
        setPrevIndex(index);
      }
    });

    return () => unsubscribe(); // Cleanup the listener
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress, prevIndex, textValues]);

  return (
    <div ref={container} className={styles.containerSticky}>
      <div style={{ position: "sticky", top: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentText.title} // Unique key to trigger re-render for animations
            initial={{ opacity: 0, y: 20 }} // Initial fade-in state
            animate={{ opacity: 1, y: 0 }} // Final fade-in state
            exit={{ opacity: 0, y: -20 }} // Exit animation (fade out)
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {currentText.title}
          </motion.h1>
          <motion.p
            key={currentText.subtitle} // Unique key to trigger re-render for animations
            initial={{ opacity: 0, y: 20 }} // Initial fade-in state
            animate={{ opacity: 1, y: 0 }} // Final fade-in state
            exit={{ opacity: 0, y: -20 }} // Exit animation (fade out)
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {currentText.subtitle}
          </motion.p>
          <motion.span
            key={currentText.prompt} // Unique key to trigger re-render for animations
            initial={{ opacity: 0, y: 20 }} // Initial fade-in state
            animate={{ opacity: 1, y: 0 }} // Final fade-in state
            exit={{ opacity: 0, y: -20 }} // Exit animation (fade out)
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ marginTop: "50px" }}
          >
            &quot;{currentText.prompt} &quot;
          </motion.span>
        </AnimatePresence>
        <div className={styles.ikigaiWrapper}>
          <motion.div style={{ opacity: opacityA }} {...rotationAnimation}>
            <PassionSymbol showLabel size={300} />
          </motion.div>
          <motion.div style={{ opacity: opacityB }} {...rotationAnimation}>
            <MissionSymbol showLabel size={300} />
          </motion.div>
          <motion.div style={{ opacity: opacityC }} {...rotationAnimation}>
            <VocationSymbol showLabel size={300} />
          </motion.div>
          <motion.div style={{ opacity: opacityD }} {...rotationAnimation}>
            <ProfessionSymbol showLabel size={300} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
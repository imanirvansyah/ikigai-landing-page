"use client"
import { Word } from "@/components/word"
import { useScroll } from "motion/react"
import { useRef } from "react"

const paragraph = "Ikigai (生き甲斐) is a Japanese concept that means'a reason for being. It is the intersection of what you love, what you are good at, what the world needs, and what you can be paid for. Rooted in Japanese culture, Ikigai emphasizes finding joy, purpose, and balance in life."
const paragraph2 = "Ikigai is found at the heart of four interconnected elements. These elements guide you to live a life that is fulfilling, purposeful, and balanced. Let's explore each one."

export const Explanation = () => {
  const text = useRef(null)
  const splittedParagraph = paragraph.split(" ");
  const splittedParagraph2 = paragraph2.split(" ");

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "start 0.9"]
  })

  const { scrollYProgress: scroll2 } = useScroll({
    target: text,
    offset: ["start 0.9", "start start"]
  })

  return (
    <div className="wrapper">
      <p ref={text} className="means">
        {splittedParagraph.map((paragraph, index) => {
          const start = index / splittedParagraph.length;
          const end = start + (1 / splittedParagraph.length)
          return (<Word key={index} range={[start, end]} progress={scrollYProgress}>{paragraph}</Word>)
        })}
      </p>
      <p ref={text} className="means" style={{ marginTop: "50px" }}>
        {splittedParagraph2.map((paragraph, index) => {
          const start = index / splittedParagraph.length;
          const end = start + (1 / splittedParagraph.length)
          return (<Word key={index} range={[start, end]} progress={scroll2}>{paragraph}</Word>)
        })}
      </p>
    </div>
  )
}


"use client"
import { Closing } from "./closing"
import { Detail } from "./detail"
import { Explanation } from "./explanation"
import { Hero } from "./hero"
import { Breakdown } from "./breakdown"
export const LandingContainer = () => {


  return (
    <>
      <Hero />
      <Explanation />
      <Detail />
      <Breakdown />
      <Closing />
    </>
  )
}


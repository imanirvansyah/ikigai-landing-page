import { Breakdown } from "@/containers/breakdown";
import { Closing } from "@/containers/closing";
import { Explanation } from "@/containers/explanations";
import { Hero } from "@/containers/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Explanation />
      <Breakdown />
      <Closing />
    </Fragment>
  )
}

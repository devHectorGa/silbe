import React from "react";
import { AboutUs } from "src/components/AboutUs";
import { Social } from "src/components/Social";
import { Hero, LatestProperties, Services } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestProperties />
      <AboutUs />
      <Services />
      <Social />
    </>
  );
}

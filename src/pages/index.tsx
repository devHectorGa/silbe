import React from "react";
import { AboutUs } from "src/components/AboutUs";
import { Hero, LatestProperties } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestProperties />
      <AboutUs />
    </>
  );
}

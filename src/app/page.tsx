import Countdown from "@/components/organisms/main/countdown";
import RoadTitle from "@/components/organisms/main/road-title";
import Trending from "@/components/organisms/main/trending";
import React from "react";

export default function Home() {
  return (
    <main>
      <Countdown />
      <Trending />
      <RoadTitle />
    </main>
  );
}

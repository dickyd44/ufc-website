import Main from "@/components/organisms/main";
import RoadTitle from "@/components/organisms/main/road-title";
import Trending from "@/components/organisms/main/trending";
import React from "react";

export default function Home() {
  return (
    <main>
      <Main />
      <Trending />
      <RoadTitle />
    </main>
  );
}

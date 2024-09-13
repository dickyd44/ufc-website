import React from "react";
import TicketsNightOne from "./TicketsNightOne";
import TicketsNightTwo from "./TicketsNightTwo";
import TicketsNightThree from "./TicketsNightThree";
import TicketsNightFour from "./TicketsNightFour";
import TicketsNightFive from "./TicketsNightFive";
import TicketsNightSix from "./TicketsNightSix";

export default function AllTickets() {
  return (
    <div>
      <TicketsNightOne />
      <TicketsNightTwo />
      <TicketsNightThree />
      <TicketsNightFour />
      <TicketsNightFive />
      <TicketsNightSix />
    </div>
  );
}

import React from "react";
import AllTickets from "./ufc-tickets";

export default function EventsTickets() {
  return (
    <section>
      <div className="h-[30rem] flex justify-center items-center border-b border-slate-300 shadow-xl">
        <h1 className="font-bold text-7xl">TICKETS</h1>
      </div>

      <AllTickets />
    </section>
  );
}

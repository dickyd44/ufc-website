import React from "react";

export default function ButtonTicketsVIP() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-rose-700 cursor-pointer bg-red border border-slate-200 text-sm text-white">
        buy tickets
      </div>
      <div className="flex items-center justify-center uppercase w-44 h-14 shadow hover:bg-light cursor-pointer bg-white border border-slate-200 text-sm">
        vip experience
      </div>
    </div>
  );
}

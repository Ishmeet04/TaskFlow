import React from "react";
export default function TaskCard({ rank, title, priority, urgency, active }) {
  const percent = priority;

  return (
    <div className="relative flex-shrink-0 w-[220px] h-[330px] group">

      {/* BIG RANK NUMBER (never clipped) */}
        <div className="absolute -left-14 bottom-0 text-[160px] font-black text-purple-500/50 select-none pointer-events-none z-0">
          {rank}
      </div>

      {/* GLOW + SCALE LAYER */}
      <div
        className={`relative w-full h-full transition-all duration-300
        ${active ? "scale-105 z-10" : "scale-100"}
        hover:scale-105 hover:z-20`}
      >

        {/* INNER CARD (this one clips) */}
        {/* ADDED: hover:shadow and hover:border-purple-500 for the glow effect */}
        <div className={`relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 to-black border border-purple-500/30 
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:border-purple-500 scrollbar-hidden`}>

          {/* Glow (Active State) */}
          {active && (
            <div className="absolute inset-0 shadow-[0_0_80px_#a855f7] pointer-events-none" />
          )}

          {/* Priority ring */}
          <div className="absolute top-3 left-3 w-12 h-12 z-10">
            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1e293b"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray={`${percent}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
              {priority}
            </div>
          </div>

          {/* Urgency badge */}
          <div
            className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold
            ${
              urgency === "critical"
                ? "bg-red-500"
                : urgency === "high"
                ? "bg-orange-500"
                : urgency === "medium"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          >
            {urgency}
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 hover:opacity-100 transition" />

          {/* Content */}
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="font-semibold">{title}</h3>
            {/* <button className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-sm"> */}
            <button className="mt-3 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg text-sm">
              Open Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

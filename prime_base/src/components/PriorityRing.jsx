import React from "react";

export default function PriorityRing({ score }) {
  // score: 0–10
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;

  const getColor = () => {
    if (score >= 8) return "stroke-red-400";
    if (score >= 6) return "stroke-yellow-400";
    return "stroke-green-400";
  };

  return (
    <div className="absolute top-3 right-3">
      <svg width="50" height="50">
        {/* background ring */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="transparent"
          strokeWidth="4"
          className="stroke-white/20"
        />
        {/* progress ring */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="transparent"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className={`${getColor()} transition-all duration-500`}
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        {score}
      </span>
    </div>
  );
}

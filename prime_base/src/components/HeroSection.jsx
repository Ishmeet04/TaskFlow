import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-[85vh] flex items-center px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]"></div>

      <div className="relative z-10 max-w-xl">
        <span className="text-purple-400 text-sm uppercase">
          Today’s Focus
        </span>

        <h1 className="text-6xl font-bold mt-4 leading-tight">
          Build the <span className="text-purple-500">AI Dashboard</span>
        </h1>

        <p className="text-gray-400 mt-6">
          You have 3 high-priority tasks due today. Stay focused and keep shipping.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-purple-600 px-8 py-3 rounded-xl hover:bg-purple-700 transition">
            Start Task
          </button>
          <button className="bg-white/10 px-8 py-3 rounded-xl hover:bg-white/20 transition">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}


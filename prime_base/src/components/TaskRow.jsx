import React from "react";
import TaskCard from "./TaskCard";

const tasks = [
  { title: "Design Homepage", priority: 92, urgency: "critical" },
  { title: "Fix API", priority: 80, urgency: "high" },
  { title: "Client Presentation", priority: 70, urgency: "medium" },
  { title: "Write Docs", priority: 60, urgency: "low" },
  { title: "Testing", priority: 50, urgency: "low" },
  { title: "Release", priority: 40, urgency: "medium" },
];

export default function TaskRow() {
  return (
    <div className="relative overflow-visible">
      <h2 className="text-white text-2xl font-semibold px-10">
        Top Priority Tasks
      </h2>

        {/* Glow space */}
        <div className="relative overflow-visible">
      <div className="flex items-start gap-14 overflow-x-scroll py-20 px-10 scrollbar-hide">
        {tasks.map((t, i) => (
          <TaskCard
            key={i}
            rank={i + 1}
            title={t.title}
            priority={t.priority}
            urgency={t.urgency}
          />
        ))}
      </div>
    </div>
    </div>    
  );
}

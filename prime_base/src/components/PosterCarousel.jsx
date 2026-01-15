import { tasks } from "../data/tasks";
import TaskPoster from "./TaskPoster";
import React from "react";

export default function PosterCarousel() {
  const high = tasks.filter(t => t.priority === "High");

  return (
    <div className="absolute right-20 top-40 flex gap-6">
      {high.map(task => (
        <TaskPoster key={task.id} task={task} />
      ))}
    </div>
  );
}

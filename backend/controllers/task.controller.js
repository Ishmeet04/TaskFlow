import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id }).sort({ priorityScore: -1 });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user.id
  });
  res.status(201).json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ message: "Task deleted" });
};

export const getStats = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });

  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === "Pending").length,
    completed: tasks.filter(t => t.status === "Completed").length,
    highPriority: tasks.filter(t => t.priority === "High").length
  };

  res.json(stats);
};

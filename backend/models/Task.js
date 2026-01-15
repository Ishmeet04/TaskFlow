import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,

  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium"
  },

  priorityScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
  },

  urgency: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    default: "medium"
  },

  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending"
  },

  dueDate: Date,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

export default mongoose.model("Task", taskSchema);

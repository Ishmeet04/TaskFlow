import React, { useState, useEffect } from "react";

export default function TaskModal({ isOpen, onClose, taskToEdit, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "", // Added description
    priorityScore: 50,
    urgency: "medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (taskToEdit) {
      const formattedDate = taskToEdit.dueDate 
        ? new Date(taskToEdit.dueDate).toISOString().split('T')[0] 
        : "";
      setFormData({ ...taskToEdit, dueDate: formattedDate });
    } else {
      setFormData({
        title: "",
        description: "",
        priorityScore: 50,
        urgency: "medium",
        status: "Pending",
        dueDate: "",
      });
    }
  }, [taskToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-purple-500/30 w-full max-w-2xl p-6 rounded-2xl shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">
          {taskToEdit ? "Mission Details" : "New Mission"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-purple-300 text-xs uppercase font-bold mb-2">Task Title</label>
            <input
              required
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-purple-500 outline-none text-lg font-semibold"
              placeholder="Operation Name..."
            />
          </div>

          {/* Description - Crucial for "Reading the details" */}
          <div>
            <label className="block text-purple-300 text-xs uppercase font-bold mb-2">Description / Briefing</label>
            <textarea
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-slate-800 text-gray-300 p-3 rounded-lg border border-slate-700 focus:border-purple-500 outline-none resize-none"
              placeholder="Enter mission objectives and details..."
            />
          </div>

          {/* Grid for Status/Urgency/Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-400 text-xs mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className={`w-full p-3 rounded-lg border border-slate-700 outline-none font-medium
                  ${formData.status === 'In Progress' ? 'bg-blue-900/20 text-blue-400' : 'bg-slate-800 text-white'}`}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-1">Urgency</label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 outline-none"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-1">Deadline</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 outline-none"
              />
            </div>
          </div>

          {/* Priority Slider */}
          <div>
            <div className="flex justify-between text-gray-400 text-xs mb-2">
              <span>Priority Score</span>
              <span className="text-purple-400 font-bold">{formData.priorityScore}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.priorityScore}
              onChange={(e) => setFormData({...formData, priorityScore: Number(e.target.value)})}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-lg mt-4 transition shadow-lg shadow-purple-500/20"
          >
            {taskToEdit ? "Update Mission" : "Initiate Mission"}
          </button>
        </form>
      </div>
    </div>
  );
}
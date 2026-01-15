import React from "react";

export default function TopNavbar() {
  return (
    <div className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-gradient-to-b from-black/80 to-black/20 backdrop-blur-lg">
      <div className="text-purple-500 font-bold text-2xl">TaskFlow</div>

      <div className="flex gap-6 text-gray-300 text-sm">
        <span className="hover:text-white cursor-pointer">Home</span>
        <span className="hover:text-white cursor-pointer">Tasks</span>
        <span className="hover:text-white cursor-pointer">Analytics</span>
        <span className="hover:text-white cursor-pointer">Team</span>
      </div>

      <div className="flex gap-4 items-center">
        <input
          className="bg-white/10 px-4 py-2 rounded-full text-sm outline-none w-64"
          placeholder="Search tasks..."
        />
        <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center">
          I
        </div>
      </div>
    </div>
  );
}

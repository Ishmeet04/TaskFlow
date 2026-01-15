import React from "react";
import TopNavbar from "../components/TopNavbar";
import HeroSection from "../components/HeroSection";
import TaskRow from "../components/TaskRow";

const Home=()=> {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <TopNavbar />
      <HeroSection />

      <div className="px-12 mt-16 space-y-14">
        <TaskRow title="High Priority" />
        <TaskRow title="Due Today" />
        <TaskRow title="In Progress" />
        <TaskRow title="Completed" />
      </div>
    </div>
  );
}
export default Home;

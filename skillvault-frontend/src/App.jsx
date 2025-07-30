import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SkillForm from "./components/SkillForm";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import RoadmapForm from "./components/RoadmapForm";
import StepForm from "./components/StepForm";
import StepList from "./components/StepList";
import RoadmapList from "./components/RoadmapList";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <header>
        <h1>SkillVault</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/users">User Form</Link>
          <Link to="/roadmaps">Roadmap Form</Link>
          <Link to="/steps">Step Form</Link>
          <Link to="/step-list">Step List</Link>
          <Link to="/skills">SkillForm</Link>
          <Link to="/roadmap-list">Roadmap List</Link>
        </nav>
      </header>

      {/* Page Routes */}
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserForm />} />
        <Route path="/roadmaps" element={<RoadmapForm />} />
        <Route path="/steps" element={<StepForm />} />
        <Route path="/step-list" element={<StepList />} />
        <Route path="/skills" element={<SkillForm />} />
        <Route path="/roadmap-list" element={<RoadmapList />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;

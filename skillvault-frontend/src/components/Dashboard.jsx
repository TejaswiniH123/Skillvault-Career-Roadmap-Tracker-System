import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to SkillVault</h1>
      <div className="dashboard-links">
        <Link to="/users" className="dashboard-link">Create User</Link>
        <Link to="/roadmaps" className="dashboard-link">Create Roadmap</Link>
        <Link to="/steps" className="dashboard-link">Create Step</Link>
        <Link to="/step-list" className="dashboard-link">View Steps</Link>
        <Link to="/roadmap-list" className="dashboard-link">View Roadmaps</Link>
      </div>
    </div>
  );
}

export default Dashboard;

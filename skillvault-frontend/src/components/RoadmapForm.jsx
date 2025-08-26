import React, { useState } from "react";
import api from "../api";
import axios from "axios";

function RoadmapForm() {
  const [roadmapData, setRoadmapData] = useState({
    career_title: "",
    description: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoadmapData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:8080/api/roadmaps", {
      careerTitle: roadmapData.title,          // ✅ must be camelCase
      description: roadmapData.description,
      user: { id: Number(roadmapData.userId) } // ✅ backend expects user object
    });
    alert("✅ Roadmap added successfully!");
    setRoadmapData({
      title: "",
      description: "",
      userId: "",
    });
  } catch (error) {
    console.error("❌ Error adding roadmap:", error.response?.data || error.message);
    alert("Failed to add roadmap.");
  }
};


  return (
    <div className="form-container">
      <h2>Add New Roadmap</h2>
      <form onSubmit={handleSubmit}>
        <label>Career_title:</label>
        <input
          type="text"
          name="career_title"
          value={roadmapData.career_title}
          onChange={handleChange}
          placeholder="Enter roadmap title"
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={roadmapData.description}
          onChange={handleChange}
          placeholder="Enter roadmap description"
          required
        />

        <label>User ID:</label>
        <input
          type="number"
          name="user_id"
          value={roadmapData.user_id}
          onChange={handleChange}
          placeholder="Enter user ID"
          required
        />

        <button type="submit">Add Roadmap</button>
      </form>
    </div>
  );
}

export default RoadmapForm;

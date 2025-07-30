import React, { useState } from "react";
import axios from "axios";

function RoadmapForm() {
  const [roadmapData, setRoadmapData] = useState({
    title: "",
    description: "",
    userId: "",
  });

  const handleChange = (e) => {
    setRoadmapData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/roadmaps", {
        ...roadmapData,
        userId: parseInt(roadmapData.userId),
      });
      alert("Roadmap added successfully!");
      setRoadmapData({
        title: "",
        description: "",
        userId: "",
      });
    } catch (error) {
      console.error("Error adding roadmap:", error);
      alert("Failed to add roadmap.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Roadmap</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={roadmapData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={roadmapData.description}
          onChange={handleChange}
          required
        />

        <label>User ID:</label>
        <input
          type="number"
          name="userId"
          value={roadmapData.userId}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Roadmap</button>
      </form>
    </div>
  );
}

export default RoadmapForm;

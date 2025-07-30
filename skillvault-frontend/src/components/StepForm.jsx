import React, { useState } from "react";
import axios from "axios";

function StepForm() {
  const [stepData, setStepData] = useState({
    title: "",
    content: "",
    orderIndex: "",
    roadmapId: "",
  });

  const handleChange = (e) => {
    setStepData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/steps", {
        ...stepData,
        orderIndex: parseInt(stepData.orderIndex),
        roadmapId: parseInt(stepData.roadmapId),
      });
      alert("Step added successfully!");
      setStepData({
        title: "",
        content: "",
        orderIndex: "",
        roadmapId: "",
      });
    } catch (error) {
      console.error("Error adding step:", error);
      alert("Failed to add step.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Step</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={stepData.title}
          onChange={handleChange}
          required
        />

        <label>Content:</label>
        <textarea
          name="content"
          value={stepData.content}
          onChange={handleChange}
          required
        />

        <label>Order Index:</label>
        <input
          type="number"
          name="orderIndex"
          value={stepData.orderIndex}
          onChange={handleChange}
          required
        />

        <label>Roadmap ID:</label>
        <input
          type="number"
          name="roadmapId"
          value={stepData.roadmapId}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Step</button>
      </form>
    </div>
  );
}

export default StepForm;

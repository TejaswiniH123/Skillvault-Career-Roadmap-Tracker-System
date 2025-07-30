import React, { useState } from "react";
import axios from "axios";

function SkillForm() {
  const [skillData, setSkillData] = useState({
    name: "",
    category: "",
    level: "",
  });

  const handleChange = (e) => {
    setSkillData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/skills", skillData);
      alert("Skill added successfully!");
      setSkillData({
        name: "",
        category: "",
        level: "",
      });
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Skill</h2>
      <form onSubmit={handleSubmit}>
        <label>Skill Name:</label>
        <input
          type="text"
          name="name"
          value={skillData.name}
          onChange={handleChange}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={skillData.category}
          onChange={handleChange}
          required
        />

        <label>Level:</label>
        <input
          type="text"
          name="level"
          value={skillData.level}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default SkillForm;

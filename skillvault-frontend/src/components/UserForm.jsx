import React, { useState } from "react";
import axios from "axios";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:8080/api/users/register", formData);
    alert("User created successfully!");
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    alert("Failed to create user.");
  }
};

  return (
    <div className="form-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default UserForm;

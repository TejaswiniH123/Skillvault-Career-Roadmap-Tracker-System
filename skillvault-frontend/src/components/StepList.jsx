import React, { useEffect, useState } from "react";
import api from "../api"; // ✅ use api.js instead of raw axios

function StepList() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    api
      .get("/steps")
      .then((response) => {
        setSteps(response.data);
      })
      .catch((error) => {
        console.error("Error fetching steps:", error);
      });
  }, []);

  return (
    <div className="form-container">
      <h2>All Steps</h2>
      {steps.length === 0 ? (
        <p>No steps found.</p>
      ) : (
        <ul className="list">
          {steps.map((step) => (
            <li key={step.id} className="list-item">
              <strong>Order:</strong> {step.orderIndex} <br />
              <strong>Title:</strong> {step.title} <br />
              <strong>Content:</strong> {step.content} <br />
              <strong>Roadmap ID:</strong>{" "}
              {step.roadmap ? step.roadmap.id : "N/A"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StepList;

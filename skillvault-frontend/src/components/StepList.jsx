import React, { useEffect, useState } from "react";
import axios from "axios";

function StepList() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/steps")
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
              <strong>Title:</strong> {step.title} <br />
              <strong>Description:</strong> {step.description} <br />
              <strong>Skill:</strong> {step.skill} <br />
              <strong>Roadmap ID:</strong> {step.roadmapId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StepList;

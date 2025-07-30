import React, { useEffect, useState } from "react";
import axios from "axios";

function RoadmapList() {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/roadmaps")
      .then((response) => {
        setRoadmaps(response.data);
      })
      .catch((error) => {
        console.error("Error fetching roadmaps:", error);
      });
  }, []);

  return (
    <div className="form-container">
      <h2>All Roadmaps</h2>
      {roadmaps.length === 0 ? (
        <p>No roadmaps available.</p>
      ) : (
        <ul className="list">
          {roadmaps.map((roadmap) => (
            <li key={roadmap.id} className="list-item">
              <strong>Title:</strong> {roadmap.title} <br />
              <strong>Description:</strong> {roadmap.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RoadmapList;

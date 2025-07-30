import React from 'react';
import RoadmapForm from '../components/RoadmapForm';
import RoadmapList from '../components/RoadmapList';

function Roadmaps() {
  const userId = 1; // Hardcoded for testing — replace with login system later

  return (
    <div>
      <RoadmapForm userId={userId} />
      <RoadmapList userId={userId} />
    </div>
  );
}

export default Roadmaps;

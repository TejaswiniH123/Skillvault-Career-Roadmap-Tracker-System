import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>SkillVault</h1>
      <Link to="/register">Register User</Link><br/>
      <Link to="/roadmaps">Manage Roadmaps</Link>
    </div>
  );
}

export default Home;

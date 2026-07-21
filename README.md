SkillVault – Career Roadmap Tracker 

SkillVault is a full-stack web application that helps users plan and track their learning journey with structured roadmaps, steps, and skill categories.

Technologies Used

Frontend 
- React.js (Vite)  
- Axios  
- Tailwind CSS  

Backend:  
- Java with Spring Boot  
- REST API  
- MySQL Database  

How to Run the Project

1. Backend (Spring Boot)
- Open your Spring Boot project in your IDE (like IntelliJ or Eclipse)
- Set up MySQL database (use name: `skillvault`)
- Run the application

The backend runs at:  
http://localhost:8080

2. Frontend (React with Vite)
Open terminal and run:
cd skillvault-frontend
npm install
npm run dev

The frontend runs at:
http://localhost:5173

Sample API Endpoints
POST /api/users/register – Register a new user
GET /api/roadmaps – Get all roadmaps
POST /api/steps – Create new step

Database Tables
User: id, name, email, password, role
Roadmap: id, title, description, user_id
Step: id, title, content, orderIndex, roadmap_id
Skill: id, name, level, category


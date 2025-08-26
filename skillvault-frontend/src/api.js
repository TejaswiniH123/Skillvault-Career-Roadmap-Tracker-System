import axios from "axios";

// Create an axios instance that points to your backend
const api = axios.create({
  baseURL: "http://localhost:8080", // backend URL
});

export default api;

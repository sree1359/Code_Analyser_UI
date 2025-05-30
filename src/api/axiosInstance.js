import axios from "axios";

// DO NOT set manual CORS headers in frontend
// They must be server-side only

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  },
  withCredentials: false, // unless using auth/cookies
});

export default axiosInstance;

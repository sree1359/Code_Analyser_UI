import { useState } from "react";
import axiosInstance from "./api/axiosInstance";
import CodeExplorer from "./components/CodeExplorer";
import axios, { Axios } from "axios";

const API_URL = "http://127.0.0.1:8000";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Please enter a valid path or URL.");
      return;
    }

    setLoading(true);
    setError("");

    const payload = {
      repo_url: trimmedInput, // Replace with dynamic input if needed
    };

    try {
      const response = await fetch("http://localhost:8000/analyseJson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Analysis Success:", data.insights);
        // Handle successful response (e.g., update UI with data.insights)
        setData(data.insights); // <-- This displays the results
      } else {
        console.error("❌ Analysis Failed:", data.detail);
        // Handle server error
      }
    } catch (error) {
      console.error("⚠️ Network Error:", error);
      // Handle network or unexpected errors
      console.error(err);
      setError("Analysis failed. Please check the backend or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Codebase Analyzer</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Git repo URL"
          className="px-4 py-2 border border-gray-300 rounded w-full"
        />
        <br />
        <div className="button-container">
          <button
            onClick={handleAnalyze}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Code"}
          </button>
        </div>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      <CodeExplorer data={data} />
    </main>
  );
}

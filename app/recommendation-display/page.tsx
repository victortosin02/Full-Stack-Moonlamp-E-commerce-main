"use client"
import React, { useState, useEffect } from "react";
import RecommendationPage from "../components/recommendation-page";

interface Recommendation {
  "Job Title": string;
  "Qualifications (Certifications)": string;
  "Qualifications (Education)": string;
  "Soft Skills": string;
  "Technical Skills": string;
}

const RecommendationDisplay: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  // Fetch recommendations from the Flask server
  const fetchRecommendations = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/recommendations");
      if (response.ok) {
        const data = await response.json();
        setRecommendations(data.recommended_jobs || []); // Assuming data is an object with a key 'recommended_jobs'
      } else {
        console.error("Error fetching recommendations:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  useEffect(() => {
    // Fetch recommendations when the component mounts
    fetchRecommendations();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Career Path Recommendations
        </h1>
        {recommendations.length === 0 ? (
          <p className="text-gray-600">No recommendations available.</p>
        ) : (
          <div>
            {recommendations.map((recommendation, index) => (
              <div
                key={index}
                className="mb-6 p-4 bg-blue-50 rounded-md border border-blue-200"
              >
                <h2 className="text-xl font-bold mb-2">
                  {recommendation["Job Title"]}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Certifications:</span>{" "}
                  {recommendation["Qualifications (Certifications)"]}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Education:</span>{" "}
                  {recommendation["Qualifications (Education)"]}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Soft Skills:</span>{" "}
                  {recommendation["Soft Skills"]}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Technical Skills:</span>{" "}
                  {recommendation["Technical Skills"]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationDisplay;

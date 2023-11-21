// RecommendationPage.tsx
import React from "react";

interface Recommendation {
  "Job Title": string;
  "Qualifications (Certifications)": string;
  "Qualifications (Education)": string;
  "Soft Skills": string;
  "Technical Skills": string;
}

interface RecommendationPageProps {
  recommendations: Recommendation[];
}

const RecommendationPage: React.FC<RecommendationPageProps> = ({ recommendations }) => {
  // Ensure that recommendations is provided
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">No Recommendations Available</h1>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Recommended Jobs:</h1>
      {recommendations.map((job, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
          <h2 className="text-lg font-bold mb-2">{job["Job Title"]}</h2>
          <p>
            <strong>Certifications:</strong> {job["Qualifications (Certifications)"]}
          </p>
          <p>
            <strong>Education:</strong> {job["Qualifications (Education)"]}
          </p>
          <p>
            <strong>Soft Skills:</strong> {job["Soft Skills"]}
          </p>
          <p>
            <strong>Technical Skills:</strong> {job["Technical Skills"]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationPage;
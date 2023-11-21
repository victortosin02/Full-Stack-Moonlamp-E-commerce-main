// instructions.tsx
"use client"
import React from "react";
import Link from "next/link";

const InstructionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          How the Recommendation Engine Works
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Category 1: Career Paths</h2>
          <p className="text-gray-700 mb-4">
            This recommendation category takes into account the skills and
            interests of respondents. It generates five career paths for each
            respondent, including details on education, soft skills, and
            certifications.
          </p>
          {/* Use passHref to pass href prop to the underlying <a> */}
          <Link href="/survey" passHref className="text-blue-500 hover:underline">
              Take the survey to get career path recommendations
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Category 2: Career Transition</h2>
          <p className="text-gray-700 mb-4">
            This recommendation category is for individuals looking to transition
            to a new career. If you are considering a career change, take the
            survey to provide information about your current skills and the
            career you want to transition to.
          </p>
          {/* Use passHref to pass href prop to the underlying <a> */}
          <Link href="/survey-transition" passHref className="text-blue-500 hover:underline">
              Take the survey for career transition recommendations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;

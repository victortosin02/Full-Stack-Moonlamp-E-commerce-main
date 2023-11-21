"use client";
import React, { useState, useEffect, SetStateAction } from "react";
import ResponsesPage from "../ResponsesPage/page";
import { useRouter } from "next/navigation";

export default function Transition() {
  // Define state variables
  const [userSkills, setUserSkills] = useState("");
  const [careerPath, setCareerPath] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendations, setRecommendations] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const router = useRouter();

  // Array of questions
  const questions = [
    "How would describe the skills you currently possess based on your prevoius and current career path?",
    "Which career path would you want to transition to?",
  ];

  // Function to handle changes in user skills input
  const handleSkillsChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserSkills(event.target.value);
  };

  // Function to handle changes in career path input
  const handleCareerPathChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCareerPath(event.target.value);
  };

  // Function to handle the "Next" button click
  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      await handleSubmit();
      setShowConfetti(true);

      // Use setTimeout to navigate to the recommendation-display page after 4 seconds
      setTimeout(() => {
        router.push("/recommendation-display");
      }, 4000);
    }
  };

  // Function to handle the "Back" button click
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setShowRecommendation(true);
    setLoading(true);

    // Prepare data for API request
    const data = {
      user_skills: userSkills.trim(),
      career_path: careerPath.trim(),
    };

    try {
      // Make API request to Flask server
      const response = await fetch(
        "http://localhost:8080/api/transition_recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // Parse the response JSON
        const responseData = await response.json();

        // Log the recommendations to the console
        console.log("Recommendations:", responseData);

        // Set recommendations in the state
        setRecommendations(responseData);
      } else {
        console.error("Error during API request:", response.statusText);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000); // Confetti shows for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <section className="flex flex-col justify-center items-center p-20">
      <section className="shadow-2xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-200">
        <h4 className="mb-4 text-center text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl text-blue-600 dark:text-blue-500">
          {questions[currentQuestion]}
        </h4>
        <div className="flex flex-wrap justify-center w-full my-20">
          <textarea
            value={currentQuestion === 0 ? userSkills : careerPath}
            onChange={
              currentQuestion === 0
                ? handleSkillsChange
                : handleCareerPathChange
            }
            className="w-full h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder={
              currentQuestion === 0
                ? "Type your skills here"
                : "Type your preferred career here"
            }
          />
        </div>

        <div className="flex justify-between w-full mb-4">
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={
              currentQuestion === 0
                ? userSkills.trim() === ""
                : careerPath.trim() === ""
            }
            className={`${
              currentQuestion === 0
                ? userSkills.trim() === ""
                : careerPath.trim() === ""
                ? "opacity-50 cursor-not-allowed"
                : ""
            } bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow`}
          >
            {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </section>

      {showRecommendation && !loading && (
        <ResponsesPage loading={loading} recommendations={recommendations} />
      )}
    </section>
  );
}

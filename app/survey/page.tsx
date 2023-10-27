"use client";
import { cn } from "@/lib/utils";
import { useQuizConfig } from "@/store";
import { useRouter } from 'next/router';
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Skeleton } from "@/app/components/u_i/skeleton";
import { Player } from "@lottiefiles/react-lottie-player";

const questions = [
  {
    id: 1,
    question: "Please choose the career path that best aligns with your preferences. You may select only one option from the provided list.",
    options: ["Software Engineer", "Product Designer", "Frontend Engineer", "Backend Engineer", "Data Engineer", "Data Analyst"],
  },
  {
    id: 2,
    question: "Identify the industry to which the chosen career belongs.",
    options: ["Information Technology", "Design and Creatives", "Human Resource", "Construction", "Sales and Marketing", "Banking and Finance"],
  },
  {
    id: 3,
    question: "What is your highest educational level?",
    options: ["10th or lesser", "12th  Graduation", "Diploma", "Bachelors Degree", "Post Graduate Diploma", "Masters Degree", "Doctor of Philosophy"],
  },
  {
    id: 4,
    question: "Which degree do you wish to pursue?",
    options: ["Diploma", "Bachelors Degree", "Post Graduate Diploma", "Masters Degree", "Doctor of Philosophy"],
  },
  {
    id: 5,
    question: "Do you have any internship experience?",
    options: ["Yes", "No"],
  },
  {
    id: 6,
    question: "If yes, is the internship experience in your field of study?",
    options: ["Yes", "No"],
  },
  {
    id: 7,
    question: "Do you currently have any professional certifcation?",
    options: ["Yes", "No"],
  },
  // Add more questions as needed
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const changeStatus = useQuizConfig((state: any) => state.changeStatus);
  const config = useQuizConfig((state: any) => state.config);
  const setScore = useQuizConfig((state: any) => state.setScore);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestion].options[0]) {
        setScore();
      }
      setSelectedOption("");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating loading time for demo
  }, []);

  return (
    <section className="flex flex-col justify-center items-center p-20">
      {questions.length > 0 && currentQuestion < questions.length && (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Question No <span className="text-blue-600 dark:text-blue-500">{currentQuestion + 1}</span>.
        </h1>
      )}

      {loading && (
        <div className="flex flex-col">
          <Skeleton className="w-[600px] h-[60px] my-10 rounded-sm" />
          <Skeleton className="w-[600px] h-[500px] rounded-sm" />
        </div>
      )}

      {/* {!loading && questions.length > 0 && (
        <p className="text-2xl">Thanks for providing information based on your skills and educational background. Kindly wait as recommendations based on the information provided is curently being generated </p>
      )} */}

      {questions.length === 0 && !loading && (
        <div className="flex flex-col justify-center items-center">
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json"
            className="player"
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
          <h1 className="mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {config.score}
            </span>
          </h1>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-white hover:bg-gray-100 my-10 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
          >
            Start Over
          </button>
        </div>
      )}

      {questions.length > 0 && currentQuestion < questions.length && (
        <section className="shadow-2xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-200">
          <h4 className="mb-4 text-center text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl text-blue-600 dark:text-blue-500">
            {questions[currentQuestion].question}
          </h4>
          <div className="flex justify-evenly items-center w-full my-20 flex-wrap">
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={cn(
                    "w-[40%] my-4 bg-white hover:bg-blue-600 hover:text-gray-100 text-gray-800 font-semibold py-4 px-4 shadow-blue-200 rounded-lg shadow-2xl",
                    {
                      "bg-blue-600": selectedOption === option,
                      "hover:bg-blue-600": selectedOption === option,
                      "text-gray-200": selectedOption,
                    }
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
          >
            Next
          </button>
        </section>
      )}
      {questions.length > 0 && currentQuestion === questions.length && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Responses Received!
          </h1>
          <p className="text-2xl">Recommendation is being generated based on your responses.</p>
          <div className="animate-spin rounded-full mt-6 h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </section>
  );
}

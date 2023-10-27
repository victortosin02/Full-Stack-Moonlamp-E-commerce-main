"use client";

import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function FAQComponent() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "How does the Career Guidance System work?",
      answer: "The system works by collecting and analyzing various data points such as your skills, educational background, interests, and career goals. It then processes this information using complex algorithms to generate tailored career recommendations that align with your profile.",
    },
    {
      id: 2,
      question: "Is the system suitable for all career stages?",
      answer: "Yes, our Career Guidance System caters to individuals at various stages of their career journey. Whether you're a student exploring options or a professional seeking a career change, the system provides relevant recommendations."
    },
    {
      id: 3,
      question: "How accurate are the system's recommendations?",
      answer: "The accuracy of the recommendations is a top priority. Our system is designed to provide highly relevant and personalized suggestions. However, it's important to note that individual preferences and goals may vary, so we encourage users to review and consider the recommendations thoughtfully.",
    },
    {
      id: 4,
      question: "Are the recommended guidance based on current job market trends?",
      answer: "Yes, the system takes into account current job market trends, industry demands, and emerging fields to provide recommendations that are aligned with the evolving job landscape.",
    },
    {
      id: 5,
      question: "Can I update my profile information for more accurate recommendations?",
      answer: "Absolutely. You can update your profile at any time to reflect changes in your skills, qualifications, or career aspirations. This ensures that the system continues to provide you with the most relevant recommendations.",
    },
  ];

  return (
    <div id="faq" className="w-full py-5">
      <div className="bg-[#e0e1dd] p-8 rounded-lg shadow-md w-[89%] max-w-[1400px] m-auto">
        <h2 className="text-2xl mb-6 font-semibold">Frequently Asked Questions</h2>

        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="faq-question w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
            >
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinusCircle className="text-xl text-primary" />
              ) : (
                <FaPlusCircle className="text-xl text-primary" />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;

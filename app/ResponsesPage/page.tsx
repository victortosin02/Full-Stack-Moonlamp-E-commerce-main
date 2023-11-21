// ResponsesPage.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";

interface ResponsesPageProps {
  loading: boolean;
  recommendations: Record<string, any>; // Adjust the type based on your recommendations structure
}

const ResponsesPage: React.FC<ResponsesPageProps> = ({ loading, recommendations }) => {
  const [showRecommendation, setShowRecommendation] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (showRecommendation) {
      const timer = setTimeout(() => {
        setShowRecommendation(false);
        // Redirect to RecommendationDisplay after 4 seconds
        router.push("/recommendation-display");
      }, 4000); // Redirect after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [showRecommendation, router]);

  return (
    <section className="flex flex-col justify-center items-center p-20">
      {showRecommendation && <Confetti recycle={false} />}
      <section className="flex flex-col justify-center items-center">
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Responses Received!
        </h3>
        <p className="text-2xl">
          Recommendation is being generated based on your responses.
        </p>
        {loading && (
          <div className="animate-spin rounded-full mt-6 h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        )}
      </section>
    </section>
  );
};

export default ResponsesPage;
import { useState, useMemo } from "react";
import { recommendationData } from "../data/movies";
import RecommendationCard from "./RecommendationCard";

const recommendationTabs = ["Adventure", "Fantasy", "Romance", "Sci-fi", "War"];

function RecommendationSection() {
  const [activeTab, setActiveTab] = useState("Adventure");

  const filteredMovies = useMemo(() => {
    if (!activeTab) {
      return recommendationData;
    }
    return recommendationData.filter(
      (movie) => movie.genres && movie.genres.includes(activeTab)
    );
  }, [activeTab]);

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Recommendation</h2>
      </div>

      <div className="flex items-center justify-between mb-4 p-2 bg-zinc-900/50 rounded-[4px]">
        {recommendationTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-15 py-1.5 rounded-[4px] text-sm font-semibold transition-colors duration-200 ${
              activeTab === tab
                ? "bg-zinc-700 text-white"
                : "text-gray-400 hover:bg-zinc-700/50 hover:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {filteredMovies.map((movie) => (
          <RecommendationCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}

export default RecommendationSection;

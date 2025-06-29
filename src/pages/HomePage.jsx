// src/pages/HomePage.jsx

import MovieCard from "../components/MovieCard";
import { popularToday, latestRelease } from "../data/movies";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/layout/Sidebar";

import RecommendationSection from "../components/RecommendationSection";
import LatestBlogSection from "../components/LatestBlogSection";

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:flex-1">
        <HeroSection />

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-white">Popular Today</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-5 align-items-start">
            {popularToday.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-white">Latest Release</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-5 align-items-start">
            {latestRelease.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>

        <RecommendationSection />
        <LatestBlogSection />
      </div>

      <Sidebar />
    </div>
  );
}

export default HomePage;

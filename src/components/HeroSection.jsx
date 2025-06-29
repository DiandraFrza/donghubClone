import { useState, useEffect } from "react";
import { heroSlides } from "../data/movies";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === heroSlides.length - 1 ? 0 : prevSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section
      className="h-[450px] w-full rounded-lg relative bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${activeSlide.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg flex items-center justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl md:text-4xl font-bold line-clamp-1">
              {activeSlide.title}
            </h1>
            <p className="text-gray-300 mt-3 text-sm md:text-base line-clamp-2">
              {activeSlide.description}
            </p>
          </div>
          <button className="bg-white/90 text-black font-bold text-lg px-8 py-3 rounded-lg hover:bg-white transition-colors flex-shrink-0">
            Watch Now
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 rounded-full transition-colors"
      >
        <FaChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 rounded-full transition-colors"
      >
        <FaChevronRight className="text-white" />
      </button>

      <div className="absolute top-5 right-5 flex gap-2">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;

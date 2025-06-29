import { useParams, Link } from "react-router-dom";
import { allMovies } from "../data/movies";
import { FaPlay, FaBookmark } from "react-icons/fa";

function MovieDetailPage() {
  const { id } = useParams();
  const movie = allMovies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-white">
          404 - Film Tidak Ditemukan
        </h2>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const Background = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${movie.imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg"></div>
    </div>
  );

  const Content = () => (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div className="md:col-span-1">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-auto aspect-[2/3] object-cover rounded-lg shadow-2xl shadow-black/50"
        />
      </div>
      <div className="md:col-span-2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {movie.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 my-4">
          <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-full">
            {movie.status || "Ongoing"}
          </span>
          <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-full">
            {movie.episode || "Sub"}
          </span>
          {movie.tags?.map((tag) => (
            <span
              key={tag.text}
              className={`px-3 py-1 ${tag.color} text-white text-xs font-semibold rounded-full`}
            >
              {tag.text}
            </span>
          ))}
        </div>
        <p className="text-gray-300 text-base leading-relaxed">
          {movie.description ||
            "No synopsis available for this title. Please check back later for more details."}
        </p>
        <div className="flex items-center gap-4 mt-8">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
            <FaPlay />
            <span>Watch Now</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-700/50 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors">
            <FaBookmark />
            <span>Bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Background />
      <Content />
    </div>
  );
}

export default MovieDetailPage;

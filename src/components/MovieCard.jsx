import { Link } from "react-router-dom";
import { FaFire, FaPlay } from "react-icons/fa";
function MovieCard({ id, imageUrl, title, type, episode, isSubbed }) {
  return (
    <Link to={`/movie/${id}`} className="block group">
      <div className="bg-[#181818] rounded-lg overflow-hidden relative">
        <img
          className="w-full h-auto object-cover group-hover:scale-105"
          src={imageUrl}
          alt={`Poster of ${title}`}
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaPlay className="text-white text-5xl" />
        </div>

        <div className="p-3 bg-[#313A4B]">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2">
            <div className="flex justify-between items-start">
              <div className="bg-[#DD3333] p-1.5 rounded-full backdrop-blur-sm">
                <FaFire className="text-white text-base" />
              </div>
              {isSubbed && (
                <div className="bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded">
                  Sub
                </div>
              )}
            </div>
          </div>{" "}
          <h3
            className="text-white font-semibold text-base truncate"
            title={title}
          >
            {title}
          </h3>
          <div className="flex justify-between items-center text-gray-400 text-sm mt-1">
            <span className="text-yellow-600">{type}</span>
            <span className="text-sky-600">{episode}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

import { Link } from "react-router-dom";
import { FaFire, FaPlay } from "react-icons/fa";

function RecommendationCard({ id, imageUrl, title, status, episode, tags }) {
  return (
    <Link
      to={`/movie/${id}`}
      className="block group rounded-md overflow-hidden"
    >
      <div className="relative">
        <div className="overflow-hidden">
          <img
            className="w-full h-auto object-cover aspect-[2/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaPlay className="text-white text-5xl" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-2">
          <div className="flex justify-between items-start">
            <div className="bg-black/60 p-1.5 rounded-full backdrop-blur-sm">
              <FaFire className="text-orange-500 text-base" />
            </div>
            <div className="flex flex-col items-end gap-y-1">
              {tags &&
                tags.map((tag) => (
                  <div
                    key={tag.text}
                    className={`${tag.color} text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm`}
                  >
                    {tag.text}
                  </div>
                ))}
            </div>
          </div>
          <div className="relative z-10 flex justify-between items-end">
            <span className="text-white text-xs font-bold">{status}</span>
            <span className="bg-yellow-500 text-black text-[11px] font-bold px-1.5 py-0.5 rounded-sm">
              {episode}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3
          className="text-white font-semibold text-center text-sm truncate"
          title={title}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default RecommendationCard;

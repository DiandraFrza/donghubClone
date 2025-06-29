import { useState } from "react";
import { sidebarData } from "../../data/movies";
import { FaChevronRight } from "react-icons/fa";

function OngoingListItem({ item }) {
  return (
    <>
      <a
        href="#"
        className="flex items-center justify-between group py-[5px] px-[12px] font-fira hover:text-[#5b5b5b] hover:bg-[#333333] hover:pl-2"
      >
        <div className="flex items-center gap-2">
          <FaChevronRight className="bg-[#5b5b5b] rounded-sm text-white text-[10px]" />
          <h4 className="font-semibold group-text-white transition-colors text-[13px]">
            {item.title}
          </h4>
        </div>
        <div className="bg-[#5B5B5B] text-white text-xs px-2 py-0.5 rounded-sm flex-shrink-0">
          Episode {item.episode}
        </div>
      </a>
      <hr className="border-t border-gray-700/50" />
    </>
  );
}

function PopularListItem({ item }) {
  return (
    <a href="#" className="flex items-center gap-3">
      <div className="border border-gray-600 text-gray-400 w-6 h-6 flex items-center justify-center font-semibold text-[12px] rounded-sm flex-shrink-0">
        {item.rank}
      </div>
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-16 h-20 object-cover rounded-sm"
      />
      <div>
        <h4 className="text-white font-semibold hover:text-[#5b5b5b] transition-colors">
          {item.title}
        </h4>
        <p className="font-semibold text-gray-200 text-xs mt-1">
          <span className="gap-2 text-gray-500">Genres:</span>
          {item.genres.join(", ")}
        </p>
      </div>
    </a>
  );
}

function Sidebar() {
  const [activeTab, setActiveTab] = useState("weekly");
  const popularContent = sidebarData.popular[activeTab] || [];

  return (
    <aside className="w-full lg:w-84 flex-shrink-0 hidden lg:block space-y-6">
      {/* KARTU ONGOING*/}
      <section className="bg-[#1C1C1C] rounded-[4px]">
        <h3 className="text-lg font-bold text-white pt-2 pl-4 pb-2">
          Ongoing Donghua
        </h3>
        <hr className="border-t border-gray-700/50" />
        <div className="mt-1">
          {sidebarData.ongoing.map((item) => (
            <OngoingListItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* KARTU POPULAR SERIES*/}
      <section className="bg-[#1C1C1C] rounded-[4px]">
        <h3 className="text-lg font-bold text-white pt-2 pl-4 pb-2">
          Popular Series
        </h3>
        <hr className="border-t border-gray-700/50 mb-4" />{" "}
        <div className="flex items-center bg-[#333333] rounded-[4px] p-2 m-4">
          <button
            onClick={() => setActiveTab("weekly")}
            className={`flex-1 py-1 rounded-[4px] text-sm font-semibold transition-colors ${
              activeTab === "weekly"
                ? "bg-[#5B5B5B] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActiveTab("monthly")}
            className={`flex-1 py-1 rounded-[4px] text-sm font-semibold transition-colors ${
              activeTab === "monthly"
                ? "bg-[#5B5B5B] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-1 rounded-[4px] text-sm font-semibold transition-colors ${
              activeTab === "all"
                ? "bg-[#5B5B5B] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>
        </div>
        <div className="flex flex-col p-4">
          {popularContent.map((item, index) => (
            <div key={item.id}>
              <PopularListItem item={item} />
              {index < popularContent.length - 1 && (
                <hr className="border-t border-gray-700/50 my-3" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* KARTU GENRES */}
      <section className="bg-[#1C1C1C] rounded-[4px]">
        <h3 className="text-lg font-bold text-white pt-2 pl-4 pb-2">Genres</h3>
        <div className="grid grid-cols-3 border-t border-gray-700">
          {sidebarData.genres.map((genre, index) => (
            <a
              key={genre}
              href="#"
              className={`hover:text-[#5b5b5b] text-white transition-colors text-[14px] font-semibold px-4 py-2 font-fira
                ${index % 3 === 1 ? "border-x border-gray-700" : ""}
              `}
            >
              {genre}
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;

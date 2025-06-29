import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import logo from "../../src/assets/donghub.png";

const DropdownMenu = () => {
  const menuItems = ["BERANDA", "BOOKMARK", "SCHEDULE", "PRIVACY"];

  return (
    <div className="absolute top-full mt-2 pt-2 pb-2 w-48 bg-[#5B5B5B] rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {menuItems.map((item) => (
          <Link
            key={item}
            to="/"
            className="block px-4 py-2 text-sm text-white hover:bg-[#3D3D3D] hover:text-white font-semibold font-fira"
            role="menuitem"
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="bg-[#0E0E0E] px-4 md:px-6 py-2 top-0 z-50">
      <nav className="flex items-center justify-between gap-x-3 md:gap-x-6 h-14">
        <div className="flex items-center gap-x-6 flex-grow">
          <div ref={menuRef} className="relative z-50">
            <div
              className="p-2 rounded-full hover:bg-zinc-800 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <HiMenu className="text-white text-2xl md:text-3xl" />
            </div>
            {isMenuOpen && <DropdownMenu />}
          </div>
          <img src={logo} alt="Donghub Logo" className="h-13 w-13" />
          <div className="flex flex-grow max-w-lg size-14 grow items-center">
            <div className="flex items-center w-[400px] h-[55px] bg-zinc-900 rounded-full px-5 py-3 transition-all duration-300 focus-within:border-blue-500">
              <input
                type="text"
                placeholder="Search..."
                className="text-white focus:outline-none w-full font-fira"
              />
              <IoSearch className="text-white text-[30px]" />
            </div>
          </div>
        </div>{" "}
        <div className="flex-shrink-0">
          <button className="bg-[#5B5B5B] hover:bg-[#333333] text-zinc-200 font-bold font-fira flex items-center gap-x-1 px-3 py-[14px] rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors">
            <FaStar className="text-zinc-200" />
            <span className="hidden md:inline">Surprise Me!</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { TfiPlus } from "react-icons/tfi";

function Navbar() {
  return (
    <div className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center gap-4">
        {/* Left Section: Menu Icon & YouTube Brand */}
        <div className="flex items-center gap-4"> {/* Increased gap for better spacing */}
          <IoMenu className="text-3xl cursor-pointer hover:text-gray-400 transition-colors" /> {/* Larger icon, subtle hover */}
          <Link
            to="/"
            className="font-extrabold text-2xl flex items-center gap-1"
          >
            <IoLogoYoutube className="text-red-500 text-4xl" /> {/* YouTube logo, larger */}
            <span className="text-white">Y</span>
            <span className="text-red-500">o</span>u
            <span className="text-white">T</span>
            <span className="text-red-500">u</span>be {/* Corrected spelling and varied color */}
          </Link>
        </div>

        {/* Middle Section: Search Bar & Voice Input */}
        <div className="flex-grow max-w-xl flex items-center gap-4"> {/* Flex-grow for search area, consistent gap */}
          <div className="flex-grow flex items-center border border-gray-600 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow p-2 pl-4 text-gray-100 bg-gray-900 focus:outline-none focus:ring-0 rounded-l-full" // Added dark background to input
            />
            <button className="bg-gray-700 p-2 border-l border-gray-600 hover:bg-gray-600 transition-colors">
              <CiSearch className="text-2xl text-white" />
            </button>
          </div>
          {/* Voice icon button - now correctly part of the middle section with proper spacing */}
          <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors flex-shrink-0"> {/* Padded more, flex-shrink to prevent squishing */}
            <MdKeyboardVoice className="text-2xl text-white" />
          </button>
        </div>

        {/* Right Section: Create, Notifications, Login */}
        <div className="flex items-center gap-6"> {/* Use flex to align items, gap for spacing */}
            <button className="flex items-center gap-2 text-xl hover:text-gray-400 transition-colors cursor-pointer">
                <TfiPlus className="text-2xl" />
                <span className="hidden md:inline">Create</span> {/* Hidden on small screens, shown on medium and up */}
            </button>
            <button className="relative text-xl hover:text-gray-400 transition-colors cursor-pointer">
                <IoIosNotifications className="text-3xl" />
                {/* Optional: Add a notification badge */}
                {/* <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">3</span> */}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-medium text-base">
                Login
            </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
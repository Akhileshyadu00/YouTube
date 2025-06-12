import { Link } from "react-router-dom";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { TfiPlus } from "react-icons/tfi";

function Navbar({ setSideNavbarfunc, sideNavbar }) {

  const toggleSidebar = () => {
    setSideNavbarfunc(!sideNavbar);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black text-white z-50 shadow-md">
      <nav className="container mx-auto h-full flex justify-between items-center px-4 gap-4">
        {/* Left Section */}
        <div onClick={toggleSidebar} className="flex items-center gap-3 cursor-pointer">
          <IoMenu className="text-2xl hover:text-gray-400 transition-colors" title="Toggle sidebar" />
          <Link to="/" className="font-extrabold text-xl flex items-center gap-1">
            <IoLogoYoutube className="text-red-500 text-3xl" />
            <span>YouTube</span>
          </Link>
        </div>

        {/* Middle Section */}
        <div className="flex flex-1 justify-center items-center gap-4 max-w-2xl">
          <div className="flex flex-1 items-center border border-gray-600 rounded-full overflow-hidden bg-gray-900">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow p-2 pl-4 text-gray-100 bg-transparent focus:outline-none"
              aria-label="Search"
            />
            <button className="bg-gray-700 p-2 border-l border-gray-600 hover:bg-gray-600 transition-colors" title="Search">
              <CiSearch className="text-2xl text-white" />
            </button>
          </div>
          <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors" title="Voice Search">
            <MdKeyboardVoice className="text-2xl text-white" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-xl hover:text-gray-400 transition-colors cursor-pointer" title="Create">
            <TfiPlus className="text-2xl" />
            <span className="hidden md:inline">Create</span>
          </button>
          <button className="relative text-xl hover:text-gray-400 transition-colors cursor-pointer" title="Notifications">
            <IoIosNotifications className="text-3xl" />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-medium text-base">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

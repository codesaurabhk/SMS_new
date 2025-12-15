import React from "react";
import {
  LuMessageSquare,
  LuSearch,
  LuMail,
  LuCircleUserRound,
  LuBell,
} from "react-icons/lu";
import Logo from "../../assets/images/logo.png";

function Navbar({ onToggleSidebar, isSidebarOpen }) {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      
      {/* Left: Hamburger */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Toggle sidebar"
          aria-controls="app-sidebar"
          aria-expanded={isSidebarOpen ? "true" : "false"}
          onClick={onToggleSidebar}
          className="flex flex-col gap-1 lg:hidden"
        >
          <span className="w-6 h-0.5 bg-gray-700" />
          <span className="w-6 h-0.5 bg-gray-700" />
          <span className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center items-center">
        <div className="w-[150px] h-[35px]">
          {/* Logo */}
          <img src={Logo} alt="img" className="flex justify-center items-center w-full h-full object-contain"  />
        </div>
      </div> 

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent outline-none border-none text-sm w-32 md:w-48"
          />
          <LuSearch className="text-lg text-gray-500" />
        </div>

        {/* Icons */}
        <LuMessageSquare className="text-xl text-gray-500 cursor-pointer hover:text-blue-600" />
        <LuMail className="text-xl text-gray-500 cursor-pointer hover:text-blue-600" />
        <LuBell className="text-xl text-gray-500 cursor-pointer hover:text-blue-600" />

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer">
          <LuCircleUserRound className="text-2xl text-gray-500" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-blue-600">
              Aditya Kumar
            </span>
            <span className="text-[11px] text-gray-500">
              Admin
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

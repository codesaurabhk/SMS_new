import React from "react";
import {
  LuSearch,
  LuMessageSquare,
  LuMail,
  LuBell,
  LuChevronDown,
} from "react-icons/lu";
import { BsChatText } from "react-icons/bs";

function Navbar({ onToggleSidebar }) {
  return (
    <nav className="h-20 bg-white flex items-center justify-between px-4 md:px-6 ">

      {/* ===== LEFT ===== */}
      <div className="flex items-center gap-3">

        {/* Hamburger */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-gray-700" />
          <span className="w-6 h-0.5 bg-gray-700" />
          <span className="w-6 h-0.5 bg-gray-700" />
        </button>

        {/* Search (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-2 bg-gray-200 px-4 py-3 rounded-lg w-[220px] lg:w-[325px]">
          <LuSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* ===== RIGHT ===== */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Icons */}
        
      <div className="bg-[#D9E3E8] h-10 w-10 flex justify-center items-center rounded-full">  <LuBell className="text-xl text-[#12516E]  hover:text-blue-600 cursor-pointer" /></div>
       <div className="bg-[#D9E3E8] h-10 w-10 flex justify-center items-center rounded-full">  <BsChatText  className="text-xl -scale-x-100 text-[#12516E] hover:text-blue-600 cursor-pointer" /></div>

        {/* Divider (hidden on small) */}
        <div className="hidden md:block h-6 w-px bg-gray-300" />

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=7"
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Name hidden on mobile */}
          <div className="hidden md:block leading-tight">
            <p className="text-sm font-semibold text-gray-800">
              Priyanshu...
            </p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          <LuChevronDown className="hidden md:block text-2xl text-gray-400" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

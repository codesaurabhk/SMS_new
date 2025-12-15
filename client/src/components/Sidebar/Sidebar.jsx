import React from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/style.css";
import Logo from "../../assets/images/logo.png";


import {
  LuLayoutDashboard,
  LuSchool,
  LuUser,
  LuFileChartColumnIncreasing,
  LuSettings,
  LuBusFront,
  LuUserPlus,
  LuClipboardList,
} from "react-icons/lu";
import {
  PiStudent,
  PiBuildingApartmentLight,
  PiClockClockwiseFill,
} from "react-icons/pi";
import { BsPersonVcard } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";

function Sidebar() {
  const navItems = [
    { path: "/", label: "Dashboard", icon: <LuLayoutDashboard /> },
    { path: "/campus-setup", label: "Campus Setup", icon: <LuSchool /> },
    { path: "/user-management-system", label: "User Management", icon: <LuUser /> },
    { path: "/students", label: "Students", icon: <PiStudent /> },
    { path: "/teachers", label: "Teachers", icon: <FaChalkboardTeacher /> },
    { path: "/academic-setup", label: "Academic Setup", icon: <IoSchoolOutline /> },
    { path: "/lead-management-system", label: "Lead Management System", icon: <LuUserPlus /> },
    { path: "/hr-management", label: "HR Management", icon: <BsPersonVcard /> },
    { path: "/account-management", label: "Account Management", icon: <FaRegCreditCard /> },
    { path: "/academic-management", label: "Academic Management", icon: <LuClipboardList /> },
    { path: "/library", label: "Library", icon: <MdOutlineLocalLibrary /> },
    { path: "/dormitory", label: "Dormitory", icon: <PiBuildingApartmentLight /> },
    { path: "/transportation", label: "Transportation", icon: <LuBusFront /> },
    { path: "/academic-history", label: "Academic History", icon: <PiClockClockwiseFill /> },
    { path: "/admin-module", label: "Admin Module", icon: <RiShieldUserLine /> },
    { path: "/settings", label: "Settings", icon: <LuSettings /> },
    { path: "/reports", label: "Reports", icon: <LuFileChartColumnIncreasing /> },
  ];

  return (
    <div className="h-full text-slate-900 bg-white">
      {/* Logo Section */}
      <div className="flex justify-center items-center  mb-7 ">
        <div className="w-[200px] h-[40px]  flex  items-center mt-5 mr-15">
          {/* Logo goes here */}
        
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="border-t border-slate-300"></div>

      {/* Navigation */}
      <div className="flex flex-col gap-2 mt-2  px-4  ">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all
               ${
                 isActive
                   ? "bg-slate-800 text-white"
                   : "text-slate-700 hover:bg-gray-200 hover:slate-800"
               }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="w-[200px] overflow-x-auto text-left">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

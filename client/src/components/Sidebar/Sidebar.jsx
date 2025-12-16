// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../../CSS/style.css";
// import Logo from "../../assets/images/logo.png";


// import {
//   LuLayoutDashboard,
//   LuSchool,
//   LuUser,
//   LuFileChartColumnIncreasing,
//   LuSettings,
//   LuBusFront,
//   LuUserPlus,
//   LuClipboardList,
// } from "react-icons/lu";
// import {
//   PiStudent,
//   PiBuildingApartmentLight,
//   PiClockClockwiseFill,
// } from "react-icons/pi";
// import { BsPersonVcard } from "react-icons/bs";
// import { IoSchoolOutline } from "react-icons/io5";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { FaRegCreditCard } from "react-icons/fa6";
// import { MdOutlineLocalLibrary } from "react-icons/md";
// import { RiShieldUserLine } from "react-icons/ri";

// function Sidebar() {
//    const [openStudents, setOpenStudents] = useState(true);
//   const navItems = [
//     { path: "/", label: "Dashboard", icon: <LuLayoutDashboard /> },
//     { path: "/campus-setup", label: "Campus Setup", icon: <LuSchool /> },
//     { path: "/user-management-system", label: "User Management", icon: <LuUser /> },
//     { path: "/students", label: "Students", icon: <PiStudent /> },
//     { path: "/teachers", label: "Teachers", icon: <FaChalkboardTeacher /> },
//     { path: "/academic-setup", label: "Academic Setup", icon: <IoSchoolOutline /> },
//     { path: "/lead-management-system", label: "Lead Management System", icon: <LuUserPlus /> },
//     { path: "/hr-management", label: "HR Management", icon: <BsPersonVcard /> },
//     { path: "/account-management", label: "Account Management", icon: <FaRegCreditCard /> },
//     { path: "/academic-management", label: "Academic Management", icon: <LuClipboardList /> },
//     { path: "/library", label: "Library", icon: <MdOutlineLocalLibrary /> },
//     { path: "/dormitory", label: "Dormitory", icon: <PiBuildingApartmentLight /> },
//     { path: "/transportation", label: "Transportation", icon: <LuBusFront /> },
//     { path: "/academic-history", label: "Academic History", icon: <PiClockClockwiseFill /> },
//     { path: "/admin-module", label: "Admin Module", icon: <RiShieldUserLine /> },
//     { path: "/settings", label: "Settings", icon: <LuSettings /> },
//     { path: "/reports", label: "Reports", icon: <LuFileChartColumnIncreasing /> },
//   ];

//   return (
//     <div className="h-full text-slate-900 bg-white">
//       {/* Logo Section */}
//       <div className="flex justify-center items-center  mb-7 ">
//         <div className="w-[200px] h-[40px]  flex  items-center mt-5 mr-15">
//           {/* Logo goes here */}
        
//           <img src={Logo} alt="" />
//         </div>
//       </div>
//       <div className="border-t border-slate-300"></div>

//       {/* Navigation */}
//       <div className="flex flex-col gap-2 mt-2  px-4  ">
//         {navItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all
//                ${
//                  isActive
//                    ? "bg-slate-800 text-white"
//                    : "text-slate-700 hover:bg-gray-200 hover:slate-800"
//                }`
//             }
//           >
//             <span className="text-lg">{item.icon}</span>
//             <span className="w-[200px] overflow-x-auto text-left">
//               {item.label}
//             </span>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import {
  LuLayoutDashboard,
  LuPlus,
  LuMinus,
} from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineLocalLibrary } from "react-icons/md";

function Sidebar() {
  const [openStudents, setOpenStudents] = useState(true);

  return (
    <aside className="w-[260px] h-screen text-slate-900 bg-white  flex flex-col">
      {/* Logo */}
      <div className=" w-[200px] h-[40px]  flex  items-center mt-5 ml-4 mb-5">
        <img src={Logo} alt="Logo" className="" />
      </div>

      <div className="border-t text-[#E6E6E6]" />

      {/* Menu */}
      <nav className="px-4 py-3 text-sm text-gray-700 mt-3">
        <p className="text-xs mb-3">Main Menu</p>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className="flex items-center text-base gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
        >
          <LuLayoutDashboard />
          Dashboard
        </NavLink>

        {/* Students (Expanded) */}
        <button
          onClick={() => setOpenStudents(!openStudents)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
            <PiStudent />
            Students
          </span>
          {openStudents ? <LuMinus /> : <LuPlus />}
        </button>

        {openStudents && (
  <div className="relative ml-7 mt-3 pl-4 text-base">
    {/* Vertical line */}
    <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

    <SubMenuItem to="/students" label="All Students" />
    <SubMenuItem to="/unassign-students"  label="Unassign Student" />
    <SubMenuItem to="/attendance"  label="Attendance" />
    <SubMenuItem to="/leave-request"  label="Leave Request" />
    <SubMenuItem to="/perfromances"  label="Performance" />
    <SubMenuItem to="/id-card"  label="Id Card" />
    <SubMenuItem to="/manage-login"  label="Manage Login" />
    <SubMenuItem to="/promote" label="Promote" />
  </div>
)}



        {/* Other collapsed menus */}
        <SidebarItem icon={<FaChalkboardTeacher />} label="Staffs" />
        <SidebarItem icon={<IoSchoolOutline />} label="Academic" />
        <SidebarItem icon={<FaRegCreditCard />} label="Finance" />
        <SidebarItem icon={<MdOutlineLocalLibrary />} label="Admission" />
        <SidebarItem icon={<MdOutlineLocalLibrary />} label="Resources" />
        <SidebarItem icon={<MdOutlineLocalLibrary />} label="Communication" />
        <SidebarItem icon={<MdOutlineLocalLibrary />} label="Events & Calendar" />
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 text-xs text-gray-400">
        MUN-C™
      </div>
    </aside>
  );
}

function SubMenuItem({ label, to }) {
  return (
    <NavLink
      to={to || "#"}
      className={({ isActive }) =>
        `group relative flex items-center py-2 text-[14px]
         ${isActive ? "text-slate-800 font-medium" : "text-gray-400 hover:text-slate-800"}`
      }
    >
      {({ isActive }) => (
        <>
          {/* Dot */}
          <span
            className={`
              absolute left-[-22px] w-2 h-2 rounded-full bg-slate-700
              transition-transform
              ${isActive ? "scale-100" : "scale-0 group-hover:scale-100"}
            `}
          />

          {label}
        </>
      )}
    </NavLink>
  );
}
function SidebarItem({ icon, label }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md hover:bg-gray-100">
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>
      <span className="text-gray-400">+</span>
    </button>
  );
}




export default Sidebar

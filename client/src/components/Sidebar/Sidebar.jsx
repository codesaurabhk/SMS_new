import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { LuPlus, LuMinus } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineGroups3 } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { PiMoneyWavyThin } from "react-icons/pi";
import { RiShapesLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbCalendarEvent } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiChats } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa6";
import munc_logo from "../../assets/images/munc-logo.png";


function Sidebar() {
  const [openStudents, setOpenStudents] = useState(false);
  const [openStaffs, setOpenStaffs] = useState(false);
  const [openAcademic, setOpenAcademic] = useState(false);
  const [openFinance, setOpenFinance] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openEventCalender, setOpenEventCalender] = useState(false);



 const openSection = (section) => {
  setOpenStudents(prev => section === "students" ? !prev : false);
  setOpenStaffs(prev => section === "staffs" ? !prev : false);
  setOpenAcademic(prev => section === "academic" ? !prev : false);
  setOpenFinance(prev => section === "finance" ? !prev : false);
  setOpenAdmission(prev => section === "admission" ? !prev : false);
  setOpenResources(prev => section === "resources" ? !prev : false);
  setOpenEventCalender(prev => section === "calendar" ? !prev : false);
};




  return (
    <aside className="w-[260px] h-screen text-slate-900 bg-white  flex flex-col">
      {/* Logo */}
      <div className=" w-[200px] h-[40px]  flex  items-center mt-5 ml-4 mb-5">
        <img src={Logo} alt="Logo" className="" />
      </div>

      <div className="border-t text-[#E6E6E6]" />

      {/* Menu */}
      <nav className="px-4 py-3 text-sm text-gray-700 mt-3  flex-1 overflow-y-auto scrollbar-hide">
        <p className="text-xs mb-3 ml-1">Main Menu</p>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          <IoHomeOutline />
          Dashboard
        </NavLink>

        {/* Students (Expanded) */}
        <button
           onClick={() => openSection("students")}
          className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base
  transition-colors duration-300
  ${
    openStudents
      ? "bg-slate-800 text-white"
      : "bg-white text-gray-600 hover:bg-gray-100"
  }`}
        >
          <span className="flex items-center gap-3 ">
           <span  className="scale-x-[-1]"> <PiStudent /></span>
            Students
          </span>
          {openStudents ? <LuMinus /> : <LuPlus />}
        </button>

        {openStudents && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/students" label="All Students" />
            <SubMenuItem to="/unassign-students" label="Unassign Student" />
            <SubMenuItem to="/attendance" label="Attendance" />
            <SubMenuItem to="/leave-request" label="Leave Request" />
            <SubMenuItem to="/perfromances" label="Performance" />
            <SubMenuItem to="/id-card" label="Id Card" />
            <SubMenuItem to="/manage-login" label="Manage Login" />
            <SubMenuItem to="/promote" label="Promote" />
          </div>
        )}

        {/* Staff (Expanded) */}
        <button
            onClick={() => openSection("staffs")}
         className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base  transition-colors duration-300 ${
      openStaffs
        ? "bg-slate-800 text-white"     // CLICKED (expanded)
        : "bg-white text-gray-600 hover:bg-gray-100" // DEFAULT + HOVER
    }`}
        >
          <span className="flex items-center gap-3">
            <MdOutlineGroups3 />
            Staffs
          </span>
          {openStaffs ? <LuMinus /> : <LuPlus />}
        </button>

        {openStaffs && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/all-staffs" label="All Staff" />
            <SubMenuItem to="/staff-attendance" label="Attendance" />
            <SubMenuItem to="/staffLeave-request" label="Leave Request" />
            <SubMenuItem to="/staff-id" label="Id Card" />
            <SubMenuItem to="/staff-manageLogin" label="Manage Login" />
          </div>
        )}
        
        {/* Academic (Expanded) */}
        <button
            onClick={() => openSection("academic")}
          className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base  transition-colors duration-300 ${
          openAcademic
        ? "bg-slate-800 text-white"     // CLICKED (expanded)
        : "bg-white text-gray-600 hover:bg-gray-100" // DEFAULT + HOVER
    }`}
        >
          <span className="flex items-center gap-3">
            <FaSchool />
            Academic
          </span>
          {openAcademic ? <LuMinus /> : <LuPlus />}
        </button>

        {openAcademic && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/academic-rooms" label="Rooms" />
            <SubMenuItem to="/class-section" label="Class& Section " />
            <SubMenuItem to="/academic-subject" label="Subject" />
            <SubMenuItem to="/academic-timetable" label="Timetable" />
            <SubMenuItem to="/academic-performace" label="Performance" />
            <SubMenuItem to="/academic-exam" label="Exam" />
            <SubMenuItem to="/academic-result" label="Result" />
          </div>
        )}

        {/* Finance (Expanded) */}
        <button
           onClick={() => openSection("finance")}
        className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base  transition-colors duration-300 ${
      openFinance
        ? "bg-slate-800 text-white"     // CLICKED (expanded)
        : "bg-white text-gray-600 hover:bg-gray-100" // DEFAULT + HOVER
    }`}
        >
          <span className="flex items-center gap-3">
           <PiMoneyWavyThin />
            Finance
          </span>
          {openFinance ? <LuMinus /> : <LuPlus />}
        </button>

        {openFinance && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/fee-management" label="Fee Management"/>
            <SubMenuItem to="/payroll" label="Payroll"/>
            <SubMenuItem to="/account-statement" label="Account Statement"/>
            <SubMenuItem to="/report" label="Report"/>
          </div>
        )}

        {/* Admission (Expanded) */}
        <button
           onClick={() => openSection("admission")}
          className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base  transition-colors duration-300 ${
      openAdmission
        ? "bg-slate-800 text-white"     // CLICKED (expanded)
        : "bg-white text-gray-600 hover:bg-gray-100" // DEFAULT + HOVER
    }`}
        >
          <span className="flex items-center gap-3">
          <IoDocumentTextOutline />
            Admission
          </span>
          {openAdmission ? <LuMinus /> : <LuPlus />}
        </button>

        {openAdmission && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/admission-allStudent" label="All Students"/>
            <SubMenuItem to="/admission-attendance" label="Attendance"/>
            <SubMenuItem to="/admission-leave-request" label="Leave Request"/>
            <SubMenuItem to="/admission-performance" label="Performance"/>
            <SubMenuItem to="/admission-id-card" label="Id Card"/>
            <SubMenuItem to="/admission-manage-login" label="Manage Login"/>
            <SubMenuItem to="/admission-promote" label="Promote"/>
          </div>
        )}
        {/* Resources (Expanded) */}
        <button
           onClick={() => openSection("resources")}
         className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base  transition-colors duration-300 ${
      openResources
        ? "bg-slate-800 text-white"     // CLICKED (expanded)
        : "bg-white text-gray-600 hover:bg-gray-100" // DEFAULT + HOVER
    }`}
        >
          <span className="flex items-center gap-3">
          <RiShapesLine />
            Resources 
          </span>
          {openResources ? <LuMinus /> : <LuPlus />}
        </button>

        {openResources && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/library" label="Library"/>
            <SubMenuItem to="/transport" label="Transport"/>
            
          </div>
        )}

        <p className="text-xs mt-3 mb-3 ml-2">Communication</p>

        {/* Events & Calendar (Expanded) */}
        <button
           onClick={() => openSection("calendar")}
         className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base  transition-colors duration-300 ${
      openEventCalender
        ? "bg-slate-800 text-white"     // CLICKED (expanded)
        : "bg-white text-gray-600 hover:bg-gray-100" // DEFAULT + HOVER
    }`}
        >
          <span className="flex items-center gap-3">
          <TbCalendarEvent />
            Events & Calendar
          </span>
          {openEventCalender ? <LuMinus /> : <LuPlus />}
        </button>

        {openEventCalender && (
          <div className="relative ml-7 mt-3 pl-4 text-base">
            {/* Vertical line */}
            <div className="absolute left-[-2px]   top-0 bottom-0 w-px bg-gray-300" />

            <SubMenuItem to="/calender" label="Calendar"/>
            <SubMenuItem to="/events" label="Events"/>
            <SubMenuItem to="/upcoming-events" label="Upcoming Events"/>
            
          </div>
        )}

        {/* Notice */}
        <NavLink
          to="/notice"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 mt-1 rounded-md text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          <IoNotificationsOutline />
          Notice
        </NavLink>


        {/* Messages */}
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md mt-1 text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          <PiChats />
          Messages
        </NavLink>

        <p className="text-xs mt-1 mb-1 ml-2">General</p>

        {/* Reports & Analytics */}
        <NavLink
          to="/reports-analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          <FaRegNewspaper />
          Reports & Analytics
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 mt-1 rounded-md text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          <IoSettingsOutline />
          Settings
        </NavLink>

        {/* Logout */}
        <NavLink
          // to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md mt-1 text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
        >
          <GrLogout />
          Logout
        </NavLink>

        
      </nav>

      {/* Footer */}
      <div className="h-[60px] w-auto  "> <img src={munc_logo} alt="logo" /></div>
    </aside>
  );
}

function SubMenuItem({ label, to }) {
  return (
    <NavLink
      to={to || "#"}
      className={({ isActive }) =>
        `group relative flex items-center py-2 text-[14px]
         ${
           isActive
             ? "text-slate-800 font-medium"
             : "text-gray-400 hover:text-slate-800"
         }`
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

export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import { LuLayoutDashboard, LuPlus, LuMinus } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineLocalLibrary } from "react-icons/md";

function Sidebar() {
  const [openStudents, setOpenStudents] = useState(true);
  const [openStaffs, setOpenStaffs] = useState(true);
  const [openAcademic, setOpenAcademic] = useState(true);
  const [openFinance, setOpenFinance] = useState(true);
  const [openAdmission, setOpenAdmission] = useState(true);
  const [openResources, setOpenResources] = useState(true);
  const [openEventCalender, setOpenEventCalender] = useState(true);

  return (
    <aside className="w-[260px] h-screen text-slate-900 bg-white  flex flex-col">
      {/* Logo */}
      <div className=" w-[200px] h-[40px]  flex  items-center mt-5 ml-4 mb-5">
        <img src={Logo} alt="Logo" className="" />
      </div>

      <div className="border-t text-[#E6E6E6]" />

      {/* Menu */}
      <nav className="px-4 py-3 text-sm text-gray-700 mt-3 ">
        <p className="text-xs mb-3 ml-1">Main Menu</p>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-base
             ${isActive ? "bg-slate-800 text-white" : "text-gray-600 hover:bg-gray-100"}`
          }
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
          onClick={() => setOpenStaffs(!openStaffs)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
            <FaChalkboardTeacher />
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
          onClick={() => setOpenAcademic(!openAcademic)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
            <IoSchoolOutline />
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
          onClick={() => setOpenFinance(!openFinance)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
           <FaRegCreditCard />
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
          onClick={() => setOpenAdmission(!openAdmission)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
          <MdOutlineLocalLibrary />
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
          onClick={() => setOpenResources(!openResources)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
          <MdOutlineLocalLibrary />
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

        <p className="text-xs mt-3 ml-2">Communication</p>

        {/* Events & Calendar (Expanded) */}
        <button
          onClick={() => setOpenEventCalender(!openEventCalender)}
          className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-md bg-slate-800 text-white text-base"
        >
          <span className="flex items-center gap-3">
          <MdOutlineLocalLibrary />
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

        {/* Other collapsed menus */}
        {/* <SidebarItem icon={<FaChalkboardTeacher />} label="Staffs" /> */}
        {/* <SidebarItem icon={<IoSchoolOutline />} label="Academic" /> */}
        {/* <SidebarItem icon={<FaRegCreditCard />} label="Finance" /> */}
        {/* <SidebarItem icon={<MdOutlineLocalLibrary />} label="Admission" /> */}
        {/* <SidebarItem icon={<MdOutlineLocalLibrary />} label="Resources" /> */}
        <SidebarItem icon={<MdOutlineLocalLibrary />} label="Communication" />
        <SidebarItem
          icon={<MdOutlineLocalLibrary />}
          label="Events & Calendar"
        />
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 text-xs text-gray-400">MUN-C™</div>
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

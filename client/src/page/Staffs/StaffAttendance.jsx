import React, { useEffect, useRef, useState } from "react";
import "../../CSS/Style.css";
import * as d3 from "d3";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import calender from "../../assets/images/calender.gif";
import calender3 from "../../assets/images/calender3.gif";
import calender4 from "../../assets/images/calender4.gif";
import calender5 from "../../assets/images/calender5.gif";

{
  /* <---------------------------------------------- icon -----------------------------------------------------> */
}
import { TbFileImport } from "react-icons/tb";
import { GrUserAdd } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { FiEdit, FiSearch } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineCalendarToday, MdOutlineAccessTime } from "react-icons/md";
// import { MdOutlineAccessTime } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import meave from "../../assets/images/meave.jpg";
import Pagination from "../../components/Pagination";
import { Link, Navigate, useNavigate } from "react-router-dom";

import AttendanceRegister from "./AttendanceRegister";

const cardData = [
  {
    des: "Present Staff",
    number: "200",

    text: "Teacher: 176/180 • Others Staff :19/20",
    gif: calender3,
  },
  {
    des: "Absent Staff",
    number: "180",

    text: "Teacher: 3 • others staff: 2",
    gif: calender4,
  },
  {
    des: "On-Leave",
    number: "1",

    text: "Staff on Leave",
    gif: calender5,
  },
  {
    des: "Attendance Rate",
    number: "94%",
    highlight: "+2.1%",
    text: "from the last month",
    gif: calender,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */

function DetailsContent({ active }) {
  switch (active) {
    case "View Attendance":
      const [open, setOpen] = useState(false);
      const [date, setDate] = useState(new Date());
      const [tab, setTab] = useState("teacher");
      const [months, setMonths] = useState(6);

      const staffDatas = [
        {
          staff: "Anushka Sharma",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Ranveer Singh",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Absent",
        },
        {
          staff: "Kareena Kapoor",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Leave",
        },
        {
          staff: "Sharaddha Kapoor",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Hrithik Roshan",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Virat Kohli",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Jhanvi Kapoor",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Ranbir Kapoor",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Ananya Panday",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
        {
          staff: "Ananya Panday",
          empId: "EMP123456",
          img: everdeen,
          shiftfrom: "9:00 AM",
          shiftto: "5:00 PM",
          logintime: "9:10 AM",
          logouttime: "5:00 PM",
          hours: "7h 50m",
          status: "Present",
        },
      ];

      const absentStaff = [
        {
          staffname: "Nico Robin",
          empId: "EMP654321",
          img: everdeen,
          reason: "No information",
          status: "Absent",
          role: "Teacher",
        },
        {
          staffname: "Makima",
          empId: "EMP654321",
          img: everdeen,
          reason: "No information",
          status: "Absent",
          role: "Receptionist",
        },
        {
          staffname: "Dragon",
          empId: "EMP654321",
          img: meave,
          reason: "No information",
          status: "Absent",
          role: "Teacher",
        },
        {
          staffname: "Sanji",
          empId: "EMP654321",
          img: meave,
          reason: "No information",
          status: "Absent",
          role: "Teacher",
        },
        {
          staffname: "Armin",
          empId: "EMP654321",
          img: meave,
          reason: "No information",
          status: "Absent",
          role: "Librarian",
        },
        {
          staffname: "Meavea Johnson",
          empId: "EMP654321",
          img: meave,
          reason: "Sick Leave",
          status: "Leave",
          role: "Teacher",
        },
      ];

      const teacherData = [
        { month: "Jan", value: 60 },
        { month: "Feb", value: 95 },
        { month: "Mar", value: 110 },
        { month: "Apr", value: 100 },
        { month: "May", value: 72 },
        { month: "Jun", value: 115 },
        { month: "Jul", value: 105 },
        { month: "Aug", value: 112 },
        { month: "Sep", value: 98 },
        { month: "Oct", value: 108 },
        { month: "Nov", value: 102 },
        { month: "Dec", value: 110 },
      ];

      const staffData = [
        { month: "Jan", value: 45 },
        { month: "Feb", value: 70 },
        { month: "Mar", value: 85 },
        { month: "Apr", value: 80 },
        { month: "May", value: 60 },
        { month: "Jun", value: 90 },
        { month: "Jul", value: 88 },
        { month: "Aug", value: 92 },
        { month: "Sep", value: 85 },
        { month: "Oct", value: 95 },
        { month: "Nov", value: 90 },
        { month: "Dec", value: 98 },
      ];
      const fullData = tab === "teacher" ? teacherData : staffData;
      const filteredData = fullData.slice(-months);

      const navigate = useNavigate();
      return (
        <div>
          <div className="box-shadow bg-white rounded-xl">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
              {/* LEFT CONTENT */}
              <div>
                <p className="flex flex-col">
                  <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                    Attendance Tracking
                  </span>
                  <span className="text-sm text-[#696969]">
                    Manage staff attendance
                  </span>
                </p>
              </div>

              {/* RIGHT BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 ">
                <div className="relative w-fit ">
                  {/* PILL INPUT */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between gap-2 bg-[#F2F5F4] rounded-lg px-5 py-3 w-50"
                  >
                    <span className="text-[16px] font-medium text-[#1C1C1C]">
                      {format(date, "d MMMM, yyyy")}
                    </span>

                    {/* Calendar Icon */}
                    <LuCalendarDays className="w-6 h-6 text-[#1C1C1C]" />
                  </button>

                  {/* CALENDAR POPOVER */}
                  {open && (
                    <div className="absolute z-50 mt-3 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4">
                      <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={(selected) => {
                          if (selected) {
                            setDate(selected);
                            setOpen(false);
                          }
                        }}
                        className="p-0"
                        classNames={{
                          caption: "flex justify-between items-center mb-4",
                          caption_label: "font-semibold text-[16px]",
                          nav_button:
                            "h-8 w-8 rounded-lg border flex items-center justify-center hover:bg-gray-100",
                          head_cell: "text-[12px] font-medium text-gray-500",
                          day: "h-9 w-9 rounded-full hover:bg-gray-100",
                          day_selected:
                            "bg-[#0F3D4C] text-white hover:bg-[#0F3D4C]",
                          day_today: "font-bold text-[#0F3D4C]",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* <-------------------------------------- search & filter ------------------------------> */}
            <div className="mt-3 p-4 flex items-center gap-36">
              {/* SEARCH */}
              <div className="flex-1">
                <span></span>
                <input
                  type="search"
                  placeholder="🔎︎ Search staff by name or staff id..."
                  className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
                />
              </div>

              {/* FILTER BUTTONS */}
              <div className="inline-flex items-center gap-3">
                <select
                  name=""
                  id="Section"
                  className="bg-[#EFF2F2] rounded px-8 py-2 border-0 outline-0"
                >
                  <option value="">All</option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                  <option value="">D</option>
                </select>

                <select
                  name=""
                  id="Export"
                  className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
                >
                  <option value="">Status</option>
                  <option value="">Absent</option>
                  <option value="">Present</option>
                  <option value="">Leave</option>
                </select>
              </div>
            </div>

            {/* <------------------------------------------ Table ---------------------------------------> */}
            <div className="p-4">
              <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
                <table className="w-full">
                  <thead className="bg-[#F5F7F7]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        <div className="flex items-center gap-1">
                          <span className="text-[#9C9C9C]">
                            <PiArrowsDownUpThin />
                          </span>
                          <span>Staff</span>
                        </div>
                      </th>

                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        <div className="flex items-center gap-2">
                          <span>Shift</span>
                        </div>
                      </th>

                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Login Time
                      </th>

                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Logout Time
                      </th>

                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Hours
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Status
                      </th>

                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {staffDatas.map((item, index) => (
                      <tr
                        key={index}
                        onClick={() => Navigate("/staffDetails")}
                        className="border-b border-[#e6e6e6]"
                      >
                        <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Name + ID */}
                            <div className="flex flex-col leading-tight">
                              <span className="text-[#12516E] font-semibold">
                                {item.staff}
                              </span>
                              <span className="text-sm text-[#9c9c9c] font-semibold">
                                {item.empId}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td>
                          {/* <Link to="/staffDetails"> */}
                          <span className="flex items-center">
                            <span className="bg-[#B5FFD1] text-[#009638] py-1 px-3 rounded-2xl">
                              {item.shiftfrom}
                            </span>
                            <HiOutlineArrowNarrowRight
                              size={17}
                              className="text-[#9C9C9C] ml-1 mr-1"
                            />
                            <span className="bg-[#FBD1D1] text-[#DC2626] py-1 px-3 rounded-2xl">
                              {item.shiftto}
                            </span>
                          </span>
                          {/* </Link> */}
                        </td>
                        <td className="px-4 py-3 text-left text-sm ">
                          {item.logintime}
                        </td>
                        <td className="px-4 py-3 text-left text-sm ">
                          {item.logouttime}
                        </td>
                        <td className="px-4 py-3 text-left text-sm ">
                          <span>{item.hours}</span>
                        </td>
                        <td>
                          <div className="relative flex h-8 w-21.75 items-center justify-center">
                            {/* Glow layer */}
                            <span
                              className={`absolute inline-flex h-full w-full rounded-[25px] opacity-20
        ${
          item.status === "Present"
            ? "bg-[#009638]"
            : item.status === "Absent"
              ? "bg-[#DC3545]"
              : "bg-[#F4A100]"
        }`}
                            ></span>

                            {/* Main pill */}
                            <span
                              className={`relative inline-flex h-full w-full items-center justify-center gap-2 rounded-[25px] px-3 text-sm font-medium
        ${
          item.status === "Present"
            ? "bg-[#D4EDDA] text-[#009638]"
            : item.status === "Absent"
              ? "bg-[#F8D7DA] text-[#C92131]"
              : "bg-[#FFEDB4] text-[#A14700]"
        }`}
                            >
                              {/* Dot */}
                              <span
                                className={`h-2 w-2 rounded-full
          ${
            item.status === "Present"
              ? "bg-[#009638]"
              : item.status === "Absent"
                ? "bg-[#DC3545]"
                : "bg-[#F4A100]"
          }`}
                              ></span>

                              {item.status}
                            </span>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                          {/* <Link to="/staffDetails">
                        <CgProfile className="w-5 h-5 text-[#9C9C9C]" />
                      </Link> */}
                          <FiEdit
                            onClick={() => navigate("/edit-staffs")}
                            className="w-5 h-5 text-[#9C9C9C] cursor-pointer"
                          />
                          {/* <FaRegFileAlt className="w-5 h-5 text-[#9C9C9C]" />
                      <RiDeleteBin5Line className="w-5 h-5 text-[#FF4B4B]" /> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* <------------------------------------------- pagination ---------------------------------> */}
            <Pagination />
          </div>
          <div className="box-shadow mt-3 bg-white rounded-xl">
            <div className="flex flex-col p-4">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Today's Absent Staff
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-3">
              {absentStaff.map((item, index) => (
                <div
                  key={index}
                  className="m-1.5 px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center border border-[#E6E6E6] rounded-sm"
                >
                  <div className="flex justify-between  w-full">
                    <div className="flex gap-4">
                      <div className="w-13 h-13 rounded-full overflow-hidden">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name + ID */}
                      <div className="flex flex-col leading-tight">
                        <div className="flex items-center gap-3">
                          <span className="text-[#12516E] font-semibold">
                            {item.staffname}
                            {/* Meavea Johnson */}
                          </span>
                          <div
                            className={`  border-2 rounded-sm px-1 text-xs ${item.role === "Teacher" ? "border-[#007AFF] text-[#007AFF]" : item.role === "Receptionist" ? "border-[#A8038D] text-[#A8038D]" : item.role === "Librarian" ? "border-[#4BA803] text-[#4BA803]" : "border-[#007AFF] text-[#007AFF]"}  `}
                          >
                            {/* Teacher */}
                            {item.role}
                          </div>
                        </div>
                        <span className="text-sm text-[#9c9c9c] font-normal">
                          {item.empId}
                          {/* EMP654321 */}
                        </span>
                        <span className="font-normal">
                          <span className="text-[#696969]">Reason- </span>
                          {/* No information */}
                          <span
                            className={`${item.reason === "Sick Leave" ? "text-[#F97316] " : "text-[#00ADAD]"} `}
                          >
                            {" "}
                            {item.reason}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <span
                        className={` font-normal rounded-sm px-2 py-0.5 ${item.status === "Leave" ? "bg-[#F973161A] text-[#F97316]" : "bg-[#DC26261A] text-[#DC2626]"} `}
                      >
                        {/* Absent */}
                        {item.status}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl mt-5 p-5 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-lg font-semibold">Attendance Trend</div>

                {/* Month Dropdown */}
                <select
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="mt-1 text-sm bg-[#F1F5F9] rounded-md px-3 py-1 outline-none"
                >
                  <option value={3}>Last 3 month</option>
                  <option value={6}>Last 6 month</option>
                  <option value={9}>Last 9 month</option>
                  <option value={12}>Last 12 month</option>
                </select>
              </div>

              {/* Teacher / Staff Toggle */}
              <div className="flex bg-[#F1F5F9] rounded-full p-1">
                <button
                  onClick={() => setTab("teacher")}
                  className={`px-4 py-1 rounded-full text-sm transition ${
                    tab === "teacher"
                      ? "bg-white shadow text-black"
                      : "text-gray-400"
                  }`}
                >
                  Teacher
                </button>

                <button
                  onClick={() => setTab("staff")}
                  className={`px-4 py-1 rounded-full text-sm transition ${
                    tab === "staff"
                      ? "bg-white shadow text-black"
                      : "text-gray-400"
                  }`}
                >
                  Other Staff
                </button>
              </div>
            </div>

            {/* Chart */}
            <ExamPerformanceTrendChart />
          </div>
        </div>
      );

    case "Attendance Register":
      return <AttendanceRegister />;

    case "Update Attendance":
      return  <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Update Attendance
              </h2>
              <p className="text-sm text-gray-500">
                You can update staff attendance here
              </p>
            </div>
      
            {/* Form */}
            <div className="bg-gray-50 rounded-lg p-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Role */}
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none appearance-none">
                      <option>Select role</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
      
                {/* Staff */}
                <div>
                  <label className="block text-sm font-medium mb-1">Staff</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none appearance-none">
                      <option>Select staff</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
      
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="12-01-2025"
                      className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                    />
                    <MdOutlineCalendarToday className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
      
                {/* Login Time */}
                <div>
                  <label className="block text-sm font-medium mb-1">Login Time</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="--:--"
                      className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                    />
                    <MdOutlineAccessTime className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
      
                {/* Logout Time */}
                <div>
                  <label className="block text-sm font-medium mb-1">Logout Time</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="--:--"
                      className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                    />
                    <MdOutlineAccessTime className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
      
              {/* Remark */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-1">Remark</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full px-4 py-3 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                />
              </div>
      
              {/* Actions */}
              <div className="flex justify-end gap-4">
                <button className="px-6 py-2.5 border  rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">
                  Reset
                </button>
                <button className="px-6 py-2.5 bg-[#0B2C3D] text-white rounded-lg text-sm font-medium hover:opacity-90">
                  Update Attendance
                </button>
              </div>
            </div>
          </div>;

    case "Shift Management":
      return (
        <div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Shift Management
                  </h2>
                  <p className="text-sm text-gray-500">
                    You can create and view all shifts here
                  </p>
                </div>
          
                {/* Create Shift */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  {/* Shift Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                      Shift Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Shift Name"
                      className="w-full px-4 py-3 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                    />
                  </div>
          
                  {/* Start & End Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Start Time
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="--:-- --"
                          className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                        />
                        <MdOutlineAccessTime className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
          
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        End Time
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="--:-- --"
                          className="w-full px-4 py-3 pr-10 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                        />
                        <MdOutlineAccessTime className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
          
                  {/* Minimum Login Hour */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium mb-1">
                      Minimum Login Hour
                    </label>
                    <input
                      type="text"
                      placeholder="-- hrs -- min"
                      className="w-full px-4 py-3 bg-white border border-[#E6E6E6] rounded-lg text-sm outline-none"
                    />
                  </div>
          
                  {/* Buttons */}
                  <div className="flex justify-end gap-4">
                    <button className="px-6 py-2.5 border rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
                      Reset
                    </button>
                    <button className="px-6 py-2.5 bg-[#0B2C3D] text-white rounded-lg text-sm font-medium hover:opacity-90">
                      Create
                    </button>
                  </div>
                </div>
          
                {/* Shift Table */}
                <div className="border border-[#E6E6E6] rounded-lg overflow-hidden w-237 ">
                  <table className="w-full text-sm">
                    <thead className="border-b border-[#E6E6E6]">
                      <tr>
                        <th className="p-4 text-left">
                          <input type="checkbox" />
                        </th>
                        <th className="p-4 text-left font-medium">Shift Name</th>
                        <th className="p-4 text-left font-medium">Start Time</th>
                        <th className="p-4 text-left font-medium">End Time</th>
                        <th className="p-4 text-left font-medium">Min Login Hours</th>
                        <th className="p-4 text-left font-medium">Action</th>
                      </tr>
                    </thead>
          
                    <tbody>
                      {[
                        { name: "Shift 1", start: "8:00 AM", end: "4:00 PM" },
                        { name: "Shift 2", start: "8:25 AM", end: "4:25 PM" },
                        { name: "Shift 3", start: "8:15 AM", end: "4:15 PM" },
                        { name: "Shift 4", start: "8:10 AM", end: "4:10 PM" },
                      ].map((shift, index) => (
                        <tr key={index} className="border-b border-[#E6E6E6] last:border-b-0">
                          <td className="p-4">
                            <input type="checkbox" />
                          </td>
                          <td className="p-4">{shift.name}</td>
                          <td className="p-4">{shift.start}</td>
                          <td className="p-4">{shift.end}</td>
                          <td className="p-4">7 hrs 45 min</td>
                          <td className="p-4 flex gap-3">
                            <FiEdit2 className="text-gray-500 cursor-pointer" />
                            <RiDeleteBin6Line className="text-red-500 cursor-pointer" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
      );

    default:
      return null;
  }
}

function ExamPerformanceTrendChart() {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const [width, setWidth] = useState(0);

  const data = [
    { Attendance: "Jan", attendanceRate: 55 },
    { Attendance: "feb", attendanceRate: 75 },
    { Attendance: "March", attendanceRate: 90 },
    { Attendance: "April", attendanceRate: 82 },
    { Attendance: "May", attendanceRate: 52 },
    { Attendance: "June", attendanceRate: 98 },
  ];

  /* ---------------- Resize Observer ---------------- */
  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- Draw Chart ---------------- */
  useEffect(() => {
    if (!width) return;

    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    /* ---------------- Gradient Definition ---------------- */
    const defs = svg.append("defs");

    const gradient = defs
      .append("linearGradient")
      .attr("id", "area-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#007AFF")
      .attr("stop-opacity", 0.35);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#007AFF")
      .attr("stop-opacity", 0);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d.Attendance))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .nice()
      .range([innerHeight, 0]);

    /* ---------------- Grid Lines ---------------- */
    const grid = chart
      .append("g")
      .call(
        d3
          .axisLeft(yScale)
          .tickValues([0, 25, 50, 75, 100])
          .tickSize(-innerWidth)
          .tickFormat(""),
      );

    grid
      .selectAll("line")
      .attr("stroke", "#e6e6e6")
      .attr("stroke-dasharray", "2 2");

    grid
      .selectAll("line")
      .filter((d) => d === 100)
      .remove();

    /* ---------------- Y Axis ---------------- */
    chart
      .append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale).tickValues([0, 25, 50, 75, 100]));

    chart.select(".y-axis").select(".domain").remove();
    chart.selectAll(".y-axis .tick line").remove();

    /* ---------------- X Axis ---------------- */
    chart
      .append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    chart.selectAll(".domain").remove();

    /* ---------------- Area ---------------- */
    const area = d3
      .area()
      .x((d) => xScale(d.Attendance))
      .y0(innerHeight)
      .y1((d) => yScale(d.attendanceRate))
      .curve(d3.curveMonotoneX);

    chart
      .append("path")
      .datum(data)
      .attr("fill", "url(#area-gradient)")
      .attr("d", area);

    /* ---------------- Line ---------------- */
    const line = d3
      .line()
      .x((d) => xScale(d.Attendance))
      .y((d) => yScale(d.attendanceRate))
      .curve(d3.curveMonotoneX);

    chart
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#007AFF")
      .attr("stroke-width", 3)
      .attr("d", line);

    /* ---------------- Hover Line ---------------- */
    const hoverLine = chart
      .append("line")
      .attr("stroke", "#007AFF")
      .attr("y1", 0)
      .attr("y2", innerHeight)
      .style("opacity", 0);

    /* ---------------- Dots + Tooltip ---------------- */
    chart
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.Attendance))
      .attr("cy", (d) => yScale(d.attendanceRate))
      .attr("r", 6)
      .attr("fill", "#007AFF")
      .on("mouseenter", (event, d) => {
        const cy = yScale(d.attendanceRate);
        hoverLine
          .attr("x1", xScale(d.Attendance))
          .attr("x2", xScale(d.Attendance))
          .attr("y1", cy)
          .attr("y2", innerHeight)
          .style("opacity", 1);

        d3.select(tooltipRef.current)
          .style("opacity", 1)
          .html(
            `<strong>${d.Attendance}</strong><br/>attendanceRate: ${d.attendanceRate}`,
          );
      })
      .on("mousemove", (event) => {
        const bounds = wrapperRef.current.getBoundingClientRect();
        d3.select(tooltipRef.current)
          .style("left", event.clientX - bounds.left + 10 + "px")
          .style("top", event.clientY - bounds.top - 40 + "px");
      })
      .on("mouseleave", () => {
        hoverLine.style("opacity", 0);
        d3.select(tooltipRef.current).style("opacity", 0);
      });
  }, [width]);

  return (
    <div ref={wrapperRef} className="relative w-full h-80">
      <svg ref={svgRef} className="w-full h-full" />
      <div
        ref={tooltipRef}
        className="absolute bg-[#0B3142] text-white px-3 py-2 rounded text-sm pointer-events-none opacity-0"
      />
    </div>
  );
}

/* Legend Card */
function Legend({ label, badge, bg, badgeBg }) {
  return (
    <div className={`flex justify-between items-center px-4 py-3 rounded-lg ${bg}`}>
      <span className="font-medium">{label}</span>
      <span className={`w-8 h-8 flex items-center justify-center rounded-md text-white text-sm font-semibold ${badgeBg}`}>
        {badge}
      </span>
    </div>
  );
}

const StaffAttendance = () => {
  const [active, setActive] = useState("View Attendance");

  return (
    <div>
      {/* <--------------------------------------- Card -----------------------------------> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {cardData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between ">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <p className="font-medium text-[16px] text-[#1C1C1C]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-2 leading-none">
                  {item.number}
                </span>
                <p className="mt-4 text-[14px] font-medium text-[#6B7280]">
                  {item.highlight && (
                    <span className="text-[#009638] font-semibold mr-1">
                      {item.highlight}
                    </span>
                  )}
                  {item.text}
                </p>
              </div>

              {/* RIGHT ICON / GIF */}
              <div className="flex items-center justify-center w-16 h-16">
                <img
                  src={item.gif}
                  alt="student"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mb-5 mt-6 bg-white rounded-full shadow-md">
        <div
          className="
      flex
      gap-2
      p-1.5
      scrollbar-hide
      sm:overflow-visible
      sm:justify-between
    "
        >
          {[
            "View Attendance",
            "Attendance Register",
            "Update Attendance",
            "Shift Management",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
          flex
          items-center
          justify-center
          w-[20%]
          py-2
          text-sm
          sm:text-base
          rounded-full
          transition-all
          duration-200
          ${
            active === item
              ? "bg-[#0B3142] text-white"
              : "text-[#9EA1A1] hover:bg-[#e6e6e6]"
          }
        `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="">
        <DetailsContent active={active} />
      </div>
    </div>
  );
};

export default StaffAttendance;

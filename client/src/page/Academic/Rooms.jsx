import React, { useState } from "react";
import "../../CSS/Style.css";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import TotalRooms from "../../assets/images/gate.gif";
import OccupiedRooms from "../../assets/images/OccupiedRooms.gif";
import AvailableRooms from "../../assets/images/AvailableRooms.gif";
import TotalCapacity from "../../assets/images/TotalCapacity.gif";


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
import { AiOutlinePlus } from "react-icons/ai";

/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import meave from "../../assets/images/meave.jpg";
import Pagination from "../../components/Pagination";
import { Link, Navigate, useNavigate } from "react-router-dom";

const cardData = [
  {
    des: "Total Rooms",
    number: "14",
    text: "Across all buildings",
    gif: TotalRooms,
  },
  {
    des: "Occupied Rooms",
    number: "5",
    text: "Currently in use",
    gif: OccupiedRooms,
  },
  {
    des: "Available Rooms",
    number: "8",
    text: "Ready for use",
    gif: AvailableRooms,
  },
  {
    des: "Total Capacity",
    number: "587",
    text: "Maximum students",
    gif: TotalCapacity,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */

const staffData = [
  {
    staff: "Anushka Sharma",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Ranveer Singh",
    empId: "EMP123456",
    img: everdeen,
    role: "Accountant",
    department: "Finance Department",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "99%",
  },
  {
    staff: "Kareena Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Receptionist",
    department: "Front Office",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "70%",
  },
  {
    staff: "Sharaddha Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "95%",
  },
  {
    staff: "Hrithik Roshan",
    empId: "EMP123456",
    img: everdeen,
    role: "Librarian",
    department: "Library Department",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Virat Kohli",
    empId: "EMP123456",
    img: everdeen,
    role: "Super Admin",
    department: "Administration",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Jhanvi Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Ranbir Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Driver",
    department: "Transport Department",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "80%",
  },
  {
    staff: "Ananya Panday",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    student: "Meave Wiley",
    img: meave,
    studentId: "009",
    class: "12C",
    parent: "Otis Milburn",
    number: 620489625,
    status: "Active",
    staff: "Shahid Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Cleaner",
    department: "Maintenance",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "80%",
  },

];

const Rooms = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <--------------------------------------- Card -----------------------------------> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {cardData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between ">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <p className="font-normal text-[16px] text-[#1C1C1C]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-5 leading-none">
                  {item.number}
                </span>

                <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold ">
                  
                  <span className="text-[#696969]">{item.text}</span>
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

      <div className="box-shadow mt-3 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Room Management
              </span>
              <span className="text-sm text-[#696969]">
                Manage all school rooms, facilities and allocations
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#9C9C9C] font-semibold rounded-lg text-[#9C9C9C] ">
              <TbFileImport className="text-[#9C9C9C]" />
              Bulk Import
            </button>

            <button
              onClick={() => navigate("/add-staffs")}
              className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer bg-[#0B3142] text-white border border-[#0B3142] rounded-lg">
              <AiOutlinePlus className="text-white"/>
              Add Room
            </button>
          </div>
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-3 p-4 flex items-center gap-36">
          {/* SEARCH */}
          <div className="flex-1">
            <span></span>
            <input
              type="search"
              placeholder="🔎︎ Search here..."
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
              <option value="">Role</option>
              <option value="">Staff</option>
              <option value="">Student</option>
              <option value="">Teacher</option>
              <option value="">pricpal</option>
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
                      {/* <span className="text-[#9C9C9C]"><PiArrowsDownUpThin /></span> */}
                      <span>Room Details</span>

                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Location</span>

                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Type
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Capacity
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Assigned To
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    <div className="flex items-center gap-1">
                      {/* <span className="text-[#9C9C9C]"><PiArrowsDownUpThin /></span> */}
                      <span > Status</span>
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {staffData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => Navigate("/staffDetails")}
                    className="border-b border-[#e6e6e6]"
                  >
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">

                      <Link to="/staffDetails">
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
                      </Link>
                    </td>

                    <td className="px-4 py-3 text-left text-sm  font-semibold">
                      <Link to="/staffDetails">
                        <span className={`border  px-8  rounded-md ${item.role == "Teacher" ? "border-[#007AFF] text-[#007AFF]" :
                          item.role == "Accountant" ? "border-[#894B00] text-[#894B00]" :
                            item.role == "Receptionist" ? "border-[#A8038D] text-[#A8038D]" :
                              item.role == "Librarian" ? "border-[#4BA803] text-[#4BA803]" :
                                item.role == "Super Admin" ? "border-[#C1891B] text-[#C1891B]" :
                                  item.role == "Driver" ? "border-[#00ADAD] text-[#00ADAD]" :
                                    item.role == "Cleaner" ? "border-[#EF476F] text-[#EF476F]" : ""

                          } `}>{item.role}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <Link to="/staffDetails">{item.department}</Link>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <Link to="/staffDetails">{item.mob}</Link>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">

                      <span>{item.email}</span>
                    </td>
                    <td className={`text-center ${item.attendance >= "90%"
                      ? "text-[#009638]"
                      : item.attendance >= "75%"
                        ? "text-[#FFAA00]"
                        : "text-[#FF4B4B]"
                      }`}>{item.attendance}</td>
                    <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                      <Link to="/staffDetails">
                        <CgProfile className="w-5 h-5 text-[#9C9C9C]" />
                      </Link>
                      <FiEdit onClick={() => navigate("/edit-staffs")} className="w-5 h-5 text-[#9C9C9C] cursor-pointer" />
                      <FaRegFileAlt onClick={() => navigate("/job-letter")} className="w-5 h-5 text-[#9C9C9C]" />
                      <RiDeleteBin5Line className="w-5 h-5 text-[#FF4B4B]" />
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
    </div>
  );
};

export default Rooms;

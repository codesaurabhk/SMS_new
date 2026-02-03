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
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";

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
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Inactive",
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
                      <span>Room Details</span>                  
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">              
                      Location
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
                      Status
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
                          <div className=" rounded-full overflow-hidden">
                            
                            <HiOutlineBuildingOffice2 size={30} className="text-[#12516E]" />
                          </div>

                          {/* Name + ID */}
                          <div className="flex flex-col leading-tight">
                            <span className="text-[#12516E] font-semibold">
                              {item.roomdetails}
                            </span>
                            <span className="text-sm text-[#9c9c9c] font-normal">
                              {item.roomsize}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    <td className="px-4 py-3 text-left text-sm  font-semibold">
                      
                       <div className="flex flex-col leading-tight">
                            <span className=" font-normal">
                              {item.location}
                            </span>
                            <span className="text-sm text-[#9c9c9c] font-normal">
                              {item.floor}
                            </span>
                          </div>

                    </td>
                    <td className="px-4 py-3 text-left text-sm "> 
                      <span className="border px-8 rounded-md border-[#696969] text-[#696969]">{item.Type}</span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                     <span>{item.Capacity}</span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">

                        <div className="flex flex-col leading-tight">
                            <span className=" font-normal">
                              {item.AssignedToclass}
                            </span>
                            <span className="text-sm text-[#9c9c9c] font-normal">
                              {item.AssignedToperson}
                            </span>
                          </div>
                    </td>
                    <td className="text-center ">
                      {/* {item.status} */}
                        <div className="relative flex h-8 w-21.75 items-center justify-center">
                           
                          

                            {/* Main pill */}
                            <span
                              className={`relative inline-flex h-full w-full items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium
        ${
          item.status === "Active"
            ? "bg-[#D4EDDA] text-[#009638]"
            : item.status === "Inactive"
              ? "bg-[#DEDEDE] text-[#696969]"
              : "bg-[#FFEDB4] text-[#A14700]"
        }`}
                            >
                              {/* Dot */}
                              <span
                                className={`h-2 w-2 rounded-full
          ${
            item.status === "Active"
              ? "bg-[#009638]"
              : item.status === "Inactive"
                ? "bg-[#696969]"
                : "bg-[#F4A100]"
          }`}
                              ></span>

                              {item.status}
                            </span>
                          </div>
                      
                      </td>
                    <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                      
                     <FiEye className="w-5 h-5 text-[#9C9C9C]" />
                      <FiEdit onClick={() => navigate("/edit-staffs")} className="w-5 h-5 text-[#9C9C9C] cursor-pointer" />
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

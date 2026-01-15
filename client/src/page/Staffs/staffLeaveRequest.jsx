import React, { useState } from "react";
import "../../CSS/Style.css";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import AllLeaveGif from "../../assets/images/AllLeaveRequest.gif";
import Pendinggif from "../../assets/images/PendingLeaveRequest.gif";
import Approvedgif from "../../assets/images/ApprovedLeaveRequest.gif";
import rejectedgif from "../../assets/images/RejectedLeaveReuest.gif"; 

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
import { PiPlus } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import goku from "../../assets/images/goku.jpg";
import langford from "../../assets/images/langford.jpg";
import homelander from "../../assets/images/homelander.jpg";
import thanos from "../../assets/images/thanos.jpg";
import Joffrey from "../../assets/images/Joffrey.jpg";
import doll from "../../assets/images/bella.jpg";
import prime from "../../assets/images/prime.jpg";
import peter from "../../assets/images/lord.jpg";
import gamora from "../../assets/images/gamora.jpg";
import meave from "../../assets/images/meave.jpg";
import Pagination from "../../components/Pagination";
import { Link, useNavigate } from "react-router-dom";


const cardData = [
  {
    des: "Total Requests",
    number: "7",
    left: "195",
    text: "All leave requests",
    gif: AllLeaveGif,
  },
  {
    des: "Pending",
    number: "3",
    left: "3",
    text: "Awaiting review",
    gif: Pendinggif,
  },
  {
    des: "Approved",
    number: "3",
    left: "2",
    text: "Requests approved",
    gif: Approvedgif,
  },
  {
    des: "Rejected",
    number: "1",
    left: "+2.1%",
    text: "Request Rejected",
    gif: rejectedgif,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */
const staffData = [
  {
    staff: "Anushka Sharma",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
    durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Pending",
  },
  {
    staff: "Ranveer Singh",
    empId: "EMP123456",
    img: everdeen,
    role: "Accountant",
    durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Approved",
  },
  {
    staff: "Kareena Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Receptionist",
    durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Rejected",
  },
  {
    staff: "Sharaddha Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
    durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Rejected",
  },
  {
    staff: "Hrithik Roshan",
    empId: "EMP123456",
    img: everdeen,
    role: "Librarian",
   durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Rejected",
  },
  {
    staff: "Virat Kohli",
    empId: "EMP123456",
    img: everdeen,
    role: "Super Admin",
   durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Rejected",
  },
  {
    staff: "Jhanvi Kapoor",
    empId: "EMP123456",
    img: everdeen,
    role: "Teacher",
   durationTo :"Oct 7, 2025",
    durationFrom :"Oct 7, 2025",
    createAT : "13:00PM",
    leaveType : "Sick Leave",
    Reason :" Fever and flu symptoms",
    Status :"Rejected",
  },
  

];

const leaveData = [
  { label: "Sick leave", count: 3, percent: 43 },
  { label: "Paid Leave", count: 1, percent: 14 },
  { label: "Casual Leave", count: 1, percent: 14 },
  { label: "Maternity Leave", count: 1, percent: 14 },
  { label: "Paternity Leave", count: 1, percent: 14 },
];


const AllStaff = () => {
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
                <p className="font-medium text-[16px] text-[#1C1C1C]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-2 leading-none">
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
                Leave Requests
              </span>
              <span className="text-sm text-[#696969]">
                Submit and manage staff leave request
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#9C9C9C] font-semibold rounded-lg text-[#9C9C9C] ">
              <TbFileImport className="text-[#9C9C9C]" />
              Bulk Import
            </button> */}

            <button
              
              className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer bg-[#0B3142] text-white border border-[#0B3142] rounded-lg">
              {/* <GrUserAdd  /> */}
              <PiPlus size={19} className="text-white"/>
               Leave Request
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
              <option value="">All status</option>
              <option value="">Approved</option>
              <option value="">Rejected</option>
              <option value="">Pending</option>
              {/* <option value="">pricpal</option> */}
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
                      <span className="text-[#9C9C9C]"><PiArrowsDownUpThin /></span>
                      <span>Staff</span>

                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Role</span>

                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Duration
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Created At
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Leave Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Reason
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
                {staffData.map((item, index) => (
                  <tr
                    key={index}
                    
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
                      <span className="text-[#026C7C]">{item.durationTo}</span> | <span className="text-[#B6174B]">{item.durationFrom}</span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <span>{item.durationFrom}</span> <span className="text-gray-400"> • {item.createAT}</span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">

                      <span className="text-[#4B4B4B] font-semibold">{item.leaveType}</span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">

                      <span  className="border px-5 py-2.5 text-[#696969] border-[#E6E6E6] ">{item.Reason}</span>
                    </td>
                    <td >
                    <div className="relative flex h-[32px] w-[95px] items-center justify-center">
                       
                        <span
                          className={`relative inline-flex h-full w-full items-center justify-center gap-2 rounded-[25px] px-2 text-sm font-medium
        ${item.Status === "Approved"
                              ? "bg-[#D4EDDA] text-[#009638]"
                              : item.Status === "Rejected"
                                ? "bg-[#F8D7DA] text-[#C92131]"
                                : item.Status === "Pending"
                                ? "bg-[#E3F2FD] text-[#1565C0]"
                                : "bg-[#FFEDB4] text-[#A14700]"
                            }`}
                        >
                          {/* Dot */}
                          <span
                            className={`h-2 w-2 rounded-full
          ${item.Status === "Approved"
                                ? "bg-[#009638]"
                                : item.Status === "Rejected"
                                  ? "bg-[#DC3545]"
                                  : item.Status === "Pending"
                                  ? "bg-[#1565C0]"
                                  : "bg-[#F4A100]"
                              }`}
                          ></span>

                          {item.Status}
                        </span>
                      </div>
                    </td>
                    
                    <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                      {/* <span>{item.status}</span> */} 
                      <SiTicktick size={19} className="text-[#009638]" /> <MdOutlineCancel size={20} className="text-[#DC2626]" />
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

       <div className="bg-white rounded-xl border border-[#E6E6E6] mt-4 p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-[#1C1C1C]">
          Leave Statistics
        </h3>
        <p className="text-sm text-[#9CA3AF]">
          Leave request breakdown by type
        </p>
      </div>

      {/* List */}
      <div className="space-y-5">
        {leaveData.map((item) => (
          <div key={item.label}>
            {/* Top Row */}
            <div className="flex justify-between mb-1 text-sm">
              <span className="font-medium text-[#1C1C1C]">
                {item.label}
              </span>
              <span className="text-[#9CA3AF]">
                {item.count} ({item.percent}%)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[6px] bg-[#E5E7EB] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0B4A6F] to-[#1E88E5]"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllStaff;

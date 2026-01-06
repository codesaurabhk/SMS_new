import React, { useState } from "react";
import "../../CSS/Style.css";

/* <------------------------------- icon ------------------------------> */
import { IoMdArrowBack } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { PiChartLineUpLight } from "react-icons/pi";
import { LiaUserEditSolid } from "react-icons/lia";
import {
  FaRegUser,
  FaIdCard,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaMale,
  FaRegFileAlt,
  FaEye,
  FaClipboardList,
  FaEnvelope,
} from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { GiBus } from "react-icons/gi";
import { GoDownload } from "react-icons/go";
import { MdOutlineImage } from "react-icons/md";
import { TfiBook } from "react-icons/tfi";
import { SlBadge } from "react-icons/sl";
import { LuTarget } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import { MdCurrencyRupee } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";

/** <------------------------------------ images -------------------------------> */
import langford from "../../assets/images/langford.jpg";
import mikasa from "../../assets/images/mikasa.png";
import { Link } from "react-router-dom";

import calender from "../../assets/images/calender.gif";
import calender2 from "../../assets/images/calender2.gif";
import Money from "../../assets/images/money.gif";
import Correct from "../../assets/images/correct.gif";
import Danger from "../../assets/images/Danger.gif";
import { CiCalendar } from "react-icons/ci";

function DetailsContent({ active }) {
  
  
  switch (active) {
    case "Personal Info":
      const documentData = [
    {
      img: mikasa,
      documentName: "Photo ID",
      date: "2018-05-15",
      fileType: "image",
      fileSize: "512",
    },
    {
      img: mikasa,
      documentName: "Resume/CV",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "312",
    },
    {
      img: mikasa,
      documentName: "Eduactional Certificate",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Experience Letters",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Aadhar Card",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "PAN Card",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Address Proof",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "420",
    },
    ,
    {
      img: mikasa,
      documentName: "Police Verification",
      date: "2024-04-10",
      fileType: "jpg",
      fileSize: "50",
    },
    {
      img: mikasa,
      documentName: "Medical Certificate",
      date: "2024-04-10",
      fileType: "jpg",
      fileSize: "50",
    },
  ];
      return (
        <div className="">
          {/* <------------------------------------------------------ Basics Information ------------------------------------------------> */}

          <div className="grid grid-cols-1 rounded-lg lg:grid-cols-2  mt-6 gap-6">
            {/* Basic Information */}
            <div className="bg-white rounded-lg p-6 shadow-[0_0_8px_0_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 mb-6">
                <FaRegUser className="text-[#9A9A9A]" />
                <h3 className="font-semibold">Basic Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  ["Full Name", "Anushka Sharma"],
                  ["Gender", "Female"],
                  ["Date of Birth", "14-02-1989"],
                  ["Age", "39"],
                  ["Blood Group", "B+"],
                  ["Marital Status", "Married"],
                  ["Religion", "Hindu"],
                  ["Nationality", "Indian"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-sm text-[#8A8A8A]">{label}</p>
                    <p className="text-sm font-medium text-[#1C1C1C]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Identification Details */}
            <div className="bg-white rounded-lg p-6 shadow-[0_0_8px_0_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 mb-6">
                <MdOutlineContactPage size={18} className="text-[#9A9A9A]" />

                <h3 className="font-semibold">Identification Details</h3>
              </div>

              <div className="space-y-4">
                <div className="border-b pb-4 border-[#E6E6E6]">
                  <p className="text-sm text-[#8A8A8A]">Aadhaar Number</p>
                  <p className="font-medium">1234-5678-9101</p>
                </div>
                <div className="border-b pb-4 border-[#E6E6E6]">
                  <p className="text-sm text-[#8A8A8A]">PAN Number</p>
                  <p className="font-medium">ABCDE1234F</p>
                </div>
                <div className="border-b pb-4 border-[#E6E6E6]">
                  <p className="text-sm text-[#8A8A8A]">Languages Known</p>
                  <p className="font-medium">English, Hindi, Marathi</p>
                </div>
              </div>
            </div>
          </div>

          {/* <------------------------------------------------------ Identification Details ------------------------------------------------> */}

          <div className="bg-white mt-6 rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.15)] p-6">
            <div className="flex mb-6 items-center gap-2 text-[#1c1c1c]">
              <MdOutlineContactPage size={18} className="text-[#9A9A9A]" />
              <span className="font-semibold">Identification Details</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-5 border-[#E6E6E6]">
              <div>
                <p className="text-sm text-[#8A8A8A]">Personal Mobile</p>
                <p className="font-medium flex items-center gap-2">
                  <FaPhoneAlt className="text-green-500" /> (555) 234-5678
                </p>
              </div>
              <div>
                <p className="text-sm text-[#8A8A8A]">Email</p>
                <p className="font-medium flex items-center gap-2">
                  <MdOutlineMailOutline size={18} className="text-blue-500" />
                  michael.c@school.com
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 border-b pb-5 border-[#E6E6E6]">
              <p className="text-sm text-[#8A8A8A]">Current Address</p>
              <p className="font-medium">
                ABC gali, house no. 4, Trilokpuri, Delhi-110096, India
              </p>
            </div>
            <div className="mt-5 space-y-2 border-b pb-5 border-[#E6E6E6]">
              <p className="text-sm text-[#8A8A8A]">Parmanent Address</p>
              <p className="font-medium">
                ABC gali, house no. 4, Trilokpuri, Delhi-110096, India
              </p>
            </div>

            <h4 className="mt-6 text-sm font-semibold text-red-500">
              Emergency Contact
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              <div>
                <p className="text-sm text-[#8A8A8A]">Name</p>
                <p className="font-medium">Lisa Chen</p>
              </div>
              <div>
                <p className="text-sm text-[#8A8A8A]">Relation</p>
                <p className="font-medium">Spouse</p>
              </div>
              <div>
                <p className="text-sm text-[#8A8A8A]">Phone</p>
                <p className="font-medium">(555) 876-5432</p>
              </div>
            </div>
          </div>

          {/* <---------------------------------------------- Family Details --------------------------------------------> */}

          <div className="bg-white mt-6  rounded-xl shadow-[0_0_8px_0_rgba(0,0,0,0.15)]  p-6">
            <div className="flex items-center gap-2 mb-6">
              <MdOutlinePeople className="text-[#696969]" size={18} />

              <h3 className="font-semibold">Family Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-b pb-3 border-[#E6E6E6]">
              {[
                ["Marital Status", "Single"],
                ["Spouse Name", "-"],
                ["Spouse Occupation", "-"],
                ["Spouse Phone", "-"],
                ["Number of Children", "-"],
              ].map(([l, v]) => (
                <div key={l}>
                  <p className="text-sm text-[#8A8A8A]">{l}</p>
                  <p className="font-medium">{v}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div>
                <p className="text-sm text-[#8A8A8A]">Father Name</p>
                <p className="font-medium">Raghav kumar</p>
              </div>

              <div>
                <p className="text-sm text-[#8A8A8A]">Mother Name</p>
                <p className="font-medium">Rina Kumari</p>
              </div>
            </div>
          </div>

          {/* <----------------------------------------------------- Educational Qualifications -----------------------------------------> */}

          <div className="bg-white mt-6 rounded-2xl shadow-[0_0_8px_0_rgba(0,0,0,0.15)] p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <PiGraduationCap className="text-[#696969]" size={18}  />
              <h3 className="text-base font-semibold text-gray-900">
                Educational Qualifications
              </h3>
            </div>

            {/* Table Container */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm text-gray-800">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-3 text-left font-medium">Degree</th>
                    <th className="px-6 py-3 text-left font-medium">
                      Institution
                    </th>
                    <th className="px-6 py-3 text-left font-medium">Year</th>
                    <th className="px-6 py-3 text-left font-medium">
                      Percentage
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {[
                    [
                      "M.Sc. Mathematics",
                      "University of Illinois",
                      "2010",
                      "85%",
                    ],
                    [
                      "B.Sc. Mathematics",
                      "Springfield University",
                      "2007",
                      "82%",
                    ],
                    [
                      "B.Ed. (Teaching Certification)",
                      "Illinois State Teaching College",
                      "2011",
                      "88%",
                    ],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                      {row.map((cell, idx) => (
                        <td key={idx} className="px-6 py-4">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <--------------------------------------------------- Document ------------------------------------------------> */}

          <div className="mt-6 p-4 bg-white rounded-lg shadow-[0_0_8px_0_rgba(0,0,0,0.15)]">
            {/* HEADER */}
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaRegFileAlt className="text-[#696969]" />
              <span className="font-semibold">Document Submitted</span>
            </div>

            {/* GRID */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {/* <------------------------------------------- CARD ---------------------------------------> */}
              {documentData.map((item, index) => (
                <div className="border-2 border-[#e6e6e6] p-4 rounded-lg flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                  {/* <--------------------------------------- LEFT CONTENT --------------------------------------> */}
                  <div className="flex gap-4 items-center">
                    {/* <-------------------------------------- IMAGE ----------------------------------------> */}
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-tl-md rounded-bl-md relative flex justify-center items-center overflow-hidden">
                      <img
                        src={mikasa}
                        alt=""
                        className="w-full h-full object-cover opacity-90 inset-shadow-lg"
                      />
                      <MdOutlineImage className="absolute text-white text-[20px]" />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col text-sm sm:text-base">
                      <span className="font-medium">{item.documentName}</span>

                      <span className="text-[#696969] text-xs sm:text-sm">
                        uploaded: {item.date} • {item.fileType} •{" "}
                        {item.fileSize} KB
                        <span className="ml-2 px-1.5 py-0.5 rounded-md bg-[#D4EDDA] text-[#009638] text-xs">
                          verified
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="px-5 py-2 bg-[#118AB2] rounded-lg flex gap-2 items-center justify-center text-white w-full sm:w-auto">
                      <FaEye /> View
                    </button>

                    <button className="px-4 py-2 bg-white rounded-lg flex gap-2 items-center justify-center text-[#696969] border-2 border-[#9C9C9C] w-full sm:w-auto">
                      <GoDownload /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "Academic":
      return (
        <div>
          <div className="bg-white mt-6 shadow-[0_0_8px_0_rgba(0,0,0,0.15)]   rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              
               <div className="flex items-center gap-2 mb-3">
                <MdWorkOutline size={18} className="text-[#706f6f]" />
                <h3 className="font-semibold">Current Position Details</h3>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 border-b border-[#E6E6E6]">
              <div>
                <p className="text-sm text-[#8A8A8A]">Employee ID</p>
                <p className="font-medium">EMP2024002</p>
              </div>
              <div>
                <p className="text-sm text-[#8A8A8A]">Department</p>
                <p className="font-medium">Academics</p>
              </div>
              <div>
                <p className="text-sm text-[#8A8A8A]">Role</p>
                <p className="font-medium">Teacher</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b border-[#E6E6E6]">
              <div>
                <p className="text-sm text-[#8A8A8A]">Joining Date</p>
                <p className="font-medium">1-06-2025</p>
              </div>

              <div>
                <p className="text-sm text-[#8A8A8A]">Employment Type</p>
                <span className="inline-block mt-1 px-3 py-1 text-sm border-[#b3b3b3] border rounded-md font-medium">
                  Full-time
                </span>
              </div>

              <div>
                <p className="text-sm text-[#8A8A8A]">Years of Service</p>
                <p className="font-medium">2 months</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="pt-6">
              <p className="text-sm text-[#8A8A8A]">Work Shift</p>
              <p className="font-medium">Morning (8:00AM - 2:00PM)</p>
            </div>
          </div>

          <div className="bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.15)] rounded-xl p-6 mt-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              
               <div className="flex items-center gap-2 mb-6">
                <BiBookOpen size={18} className="text-[#706f6f]" />
                <h3 className="font-semibold">Subjects & Classes</h3>
              </div>
            </div>

            {/* Subjects */}
            <div className="pb-6 border-b border-[#E6E6E6]">
              <p className="text-sm text-[#8A8A8A] mb-3">Subjects</p>

              <span className="inline-block px-4 py-2 bg-[#007AFF] text-white text-sm rounded-lg font-medium">
                Mathematics
              </span>
            </div>

            {/* Classes Assigned */}
            <div className="pt-6">
              <p className="text-sm text-[#8A8A8A] mb-3">Classes Assigned</p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border rounded-lg text-sm font-medium border-[#E6E6E6]">
                  Class 1A
                </span>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium border-[#E6E6E6]">
                  Class 3 A
                </span>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium border-[#E6E6E6]">
                  Class 4 A
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "Attendance":
         const AttendancecardData = [
    {
      des: "Working Days",
      number: "240",
      
      gif: calender2,
    },
    {
      des: "Present",
      number: "231",
     
      gif: Correct,
    },
    {
      des: "Absent",
      number: "2",
     
      gif: Danger,
    },
    {
      des: "Attendance %",
      number: "96.25%",
      
      gif: calender,
    },
  ];
  const attendanceData = [
  { month: "January", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "February", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "March", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "April", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "May", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "June", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "July", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "August", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "September", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "October", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "November", working: 22, present: 21, absent: 0, leave: 1 },
  { month: "December", working: 22, present: 21, absent: 0, leave: 1 },
];


  
      return (
        <div className="min-h-screen space-y-6">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {AttendancecardData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between ">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <p className=" text-[16px] text-[#696969]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-6 leading-none">
                 {item.des === "Working Days"
                    ? <span className="text-[#1C1C1C]">{item.number}</span>
                    : item.des === "Present"
                    ?  <span className="text-[#009638]">{item.number}</span>
                    : item.des === "Attendance %"
                    ? <span className=" text-[#007AFF]">{item.number}</span>
                    : item.des === "Absent"
                    ?  <span className="text-[#DC2626]">{item.number}</span>
                    : <span className="text-[#1C1C1C]">{item.number}</span>}

                </span>

               
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
       <div className="p-2 rounded-2xl  w-full justify-center items-center bg-white shadow-md">
              
               <div className="flex justify-between items-center p-3">
            <div className="flex items-center gap-2 mb-2">
                <CiCalendar size={18} className="text-[#696969]" />
                <h3 className="font-semibold">Attendance Record</h3>
              </div>
          
          <select className="border border-[#EFF2F2] rounded-md px-3 py-1 text-sm text-[#696969]">
            <option>2025-26</option>
          </select>
        </div>
             
              <div className="bg-white  p-4">
      {/* Header */}
    

      {/* Table */}
      <div className="rounded-xl border border-gray-200 overflow-hidden p-0">
      
        <table className="w-full text-sm ">
          <thead>
            <tr className="border-b border-[#E6E6E6] text-gray-600">
              <th className="px-6 py-3 text-left font-medium">Month</th>
              <th className="px-6 py-3 text-left font-medium">Working Days</th>
              <th className="px-6 py-3 text-left font-medium">Present</th>
              <th className="px-6 py-3 text-left font-medium">Absent</th>
              <th className="px-6 py-3 text-left font-medium">Leave</th>
              <th className="px-6 py-3 text-left font-medium">Percentage</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((item) => {
              const percentage = ((item.present / item.working) * 100).toFixed(1);

              return (
                <tr
                  key={item.month}
                  className="border-b border-[#E6E6E6] last:border-none hover:bg-gray-50"
                >
                  <td className="py-3 px-6">{item.month}</td>
                  <td className="py-3 px-6">{item.working}</td>
                  <td className="py-3 px-6 text-green-600 font-medium">
                    {item.present}
                  </td>
                  <td className="py-3 px-6 text-red-500 font-medium">
                    {item.absent}
                  </td>
                  <td className="py-3 px-6 text-orange-500 font-medium">
                    {item.leave}
                  </td>
                  <td className="py-3 px-6">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs font-semibold">
                      {percentage}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
            </div>
        </div>
      );

    case "Salary":
      const SalarycardData = [
    {
      des: "Basic Salary",
      number: "₹45,000",
      
      gif: Money,
    },
    {
      des: "Gross Salary",
      number: "₹60,500",
     
      gif: Correct,
    },
    {
      des: "Deductions",
      number: "₹10,900",
     
      gif: Danger,
    },
    {
      des: "Net Salary",
      number: "₹49,600",
      
      gif: calender,
    },
  ];
  const salaryComponents = [
  { label: "Basic Salary", amount: "₹ 45,000" },
  { label: "HRA", amount: "₹ 9,000" },
  { label: "Transport Allowance", amount: "₹ 2,000" },
  { label: "Medical Allowance", amount: "₹ 1,500" },
  { label: "Special Allowance", amount: "₹ 3,000" },
];

const deductions = [
  { label: "Provident Fund", amount: "₹ 5,400" },
  { label: "Tax Deduction", amount: "₹ 4,500" },
  { label: "Insurance", amount: "₹ 1,000" },
];

const paymentHistory = [
  {
    month: "November 2024",
    gross: "₹ 60,500",
    net: "₹ 60,500",
    deduction: "₹ 60,500",
    status: "Paid",
    date: "2024-11-30",
  },
  {
    month: "October 2024",
    gross: "₹ 60,500",
    net: "₹ 60,500",
    deduction: "₹ 60,500",
    status: "Paid",
    date: "2024-10-31",
  },
  {
    month: "September 2024",
    gross: "₹ 60,500",
    net: "₹ 60,500",
    deduction: "₹ 60,500",
    status: "Paid",
    date: "2024-09-30",
  },
];
      return (
      <div className="min-h-screen space-y-6">
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {SalarycardData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between ">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <p className=" text-[16px] text-[#696969]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-6 leading-none">
                 {item.des === "Basic Salary"
                    ? <span className="text-[#1C1C1C]">{item.number}</span>
                    : item.des === "Gross Salary"
                    ?  <span className="text-[#009638]">{item.number}</span>
                    : item.des === "Net Salary"
                    ? <span className=" text-[#007AFF]">{item.number}</span>
                    : item.des === "Deductions"
                    ?  <span className="text-[#DC2626]">{item.number}</span>
                    : <span className="text-[#1C1C1C]">{item.number}</span>}

                </span>

               
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
      
      {/* ===== TOP SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Salary Components */}
        <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-6">
                <MdCurrencyRupee size={18} className="text-[#009638]" />
                <h3 className="font-semibold">Salary Components</h3>
              </div>
        

          <div className="space-y-3">
            {salaryComponents.map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-[#F3F5FF] px-4 py-2 rounded-md text-sm"
              >
                <span>{item.label}</span>
                <span className="font-medium">{item.amount}</span>
              </div>
            ))}

            <div className="flex justify-between bg-green-200 px-4 py-2 rounded-md text-sm">
              <span>Total Gross</span>
              <span className=" font-semibold">₹ 60,500</span>
            </div>
          </div>
        </div>

        {/* Deductions */}
        <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-6">
                <MdCurrencyRupee size={18} className="text-[#DC2626]" />
                <h3 className="font-semibold"> Deductions</h3>
              </div>
          <div className="space-y-3">
            {deductions.map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-[#F3F5FF] px-4 py-2 rounded-md text-sm"
              >
                <span>{item.label}</span>
                <span className="font-medium">{item.amount}</span>
              </div>
            ))}

            <div className="flex justify-between bg-red-200 px-4 py-2 rounded-md text-sm font-semibold text-red-600">
              <span>Total Deductions</span>
              <span>₹ 10,900</span>
            </div>

            <div className="flex justify-between bg-indigo-50 px-4 py-2 rounded-md text-sm font-semibold text-blue-600">
              <span>Net Salary</span>
              <span>₹ 49,600</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SALARY PAYMENT HISTORY ===== */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 mb-6">
                <RiHistoryFill size={18} className="text-[#696969]" />
                <h3 className="font-semibold">Salary Payment History</h3>
              </div>
          
          <select className="border border-[#EFF2F2] rounded-md px-3 py-1 text-sm text-[#696969]">
            <option>2025-26</option>
          </select>
        </div>

        <div className="overflow-x-auto border text-sm border-gray-200 rounded-lg ">
          <table className="w-full  overflow-hidden">
            <thead className="bg-gray-100 text-left ">
              <tr>
                <th className="px-4 py-2  font-medium">Month</th>
                <th className="px-4 py-2 font-medium">Gross</th>
                <th className="px-4 py-2 font-medium">Net Salary</th>
                <th className="px-4 py-2 font-medium">Deductions</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((row, i) => (
                <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{row.month}</td>
                  <td className="px-4 py-2">{row.gross}</td>
                  <td className="px-4 py-2 text-green-600">
                    {row.net}
                  </td>
                  <td className="px-4 py-2 text-red-600">
                    {row.deduction}
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex items-center gap-1.5 bg-[#D4EDDA] text-[#009638] px-3 py-1 rounded-full text-xs font-semibold">
  <SiTicktick className="text-sm" />
  Paid
</span>

                  </td>
                  <td className="px-4 py-2">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   
      </div>
      );

    case "System Access":
      return <div>Fees Details Content</div>;

    default:
      return null;
  }
}

function StaffDetails() {
  const [active, setActive] = useState("Personal Info");

  const baseBtn = "gap-8 flex justify-around w-full items-center";

  const activeBtn =
    "bg-[#0B3142] text-[#FFFFFF] border rounded-full px-25 py-2 gap-8";

  const inactiveBtn =
    "text-[#9EA1A1] px-15 py-2 hover:bg-[#e6e6e6] rounded-full px-25 py-2 gap-8";

  return (
    <div className="p-4">
      <div className="flex gap-4 items-center text-[#1C1C1C] font-semibold">
        <span>
          <Link to="/students">
            <IoMdArrowBack />
          </Link>
        </span>
        <span>Back</span>
      </div>

      <div
        className="mt-3 p-4 sm:p-6 lg:p-7.5 rounded-lg w-full 
  bg-linear-to-r from-[#9796F0] to-[#FBC7D4]"
      >
        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
          {/* LEFT SECTION */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            {/* PROFILE IMAGE */}
            <div className="flex justify-center sm:justify-start">
              <div
                className="rounded-full h-28 w-28 sm:h-36 sm:w-36 
          border-2 border-white overflow-hidden"
              >
                <img
                  src={langford}
                  alt="langford"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* DETAILS */}
            <div className="flex-1 w-full">
              {/* NAME + STATUS */}
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-lg font-semibold">Anushka Sharma</span>

                <div className="relative inline-flex items-center px-3 py-1 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-[#009638] rounded-full animate-spread"></span>
                  <span className="relative z-10 bg-[#009638] text-white text-sm font-semibold rounded-full px-3">
                    Active
                  </span>
                </div>
              </div>

              {/* BASIC INFO */}
              <div className="flex gap-15 mt-4">
                {[
                  ["Employee ID", "EMP2024002"],
                  ["Role", "Teacher"],
                  ["Department", "Academics"],
                  ["Joined", "1 Jan, 2018"],
                ].map(([label, value], idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-white text-sm font-normal">
                      {label}
                    </span>
                    <span className="font-semibold text-[#1C1C1C]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {/* CARD 1 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    {/* <div className="bg-[#DBEAFE] p-2 rounded-full">
                                            <IoSchoolOutline size={26} className="text-[#155DFC]" />
                                        </div> */}
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm text-[#696969]">Attendance</span>
                      <span className="font-semibold text-[#007AFF]">
                        96.25%
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    {/* <div className="bg-[#DCFCE7] p-2 rounded-full">
                                            <PiChartLineUpLight
                                                size={26}
                                                className="text-[#00A63E]"
                                            />
                                        </div> */}
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Classes</span>
                      <span className="font-semibold text-[#9810FA]">3</span>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    {/* <div className="bg-[#DBEAFE] p-2 rounded-full">
                                            <CiTrophy size={26} className="text-[#9810FA]" />
                                        </div> */}
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Experience</span>
                      <span className="font-semibold text-[#F97316]">
                        6 years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACTION BUTTON */}
          <div>
            <div className="bg-[#0B3142] p-2 rounded-lg flex justify-start lg:justify-end">
              <button className="flex gap-1 items-center text-white font-semibold">
                <LiaUserEditSolid />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <------------------------------------------------------ filter ------------------------------------------------> */}
      <div className="w-full mt-6 bg-white rounded-full">
        <div
          className="
      flex items-center p-1 rounded-full
      gap-1
      overflow-x-auto
      whitespace-nowrap
      sm:overflow-visible
      sm:justify-between
    "
        >
          {[
            "Personal Info",
            "Academic",
            "Attendance",
            "Salary",
            "System Access",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
          ${baseBtn}
          min-w-max
          px-4 py-2
          text-sm sm:text-base
          ${active === item ? activeBtn : inactiveBtn}
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
}

export default StaffDetails;

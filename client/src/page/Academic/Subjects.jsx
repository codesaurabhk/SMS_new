import React, { useEffect, useRef, useState } from "react";
import "../../CSS/Style.css";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import studetgif from "../../assets/images/studentgif.gif";
import classroomlesson from "../../assets/images/classroom-lesson.gif";
import books from "../../assets/images/books.gif";
import calender from "../../assets/images/calender.gif";

{
  /* <---------------------------------------------- icon -----------------------------------------------------> */
}

import { FiEdit, FiPlus, FiUpload } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { MdVerified } from "react-icons/md";



/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import meave from "../../assets/images/meave.jpg";
import Pagination from "../../components/Pagination";
import { Link,  useNavigate } from "react-router-dom";
import { TbFileImport } from "react-icons/tb";

const cardData = [
  
  {
    des: "Total Students",
    number: "200",
    text: "active members",
    left : "195",
    gif: studetgif,
  },
  
  {
    des: "Total Classes",
    number: "50",
    text: "Student enrolled",
     left : "145",
    gif: classroomlesson,
  },
  {
    des: "Total Subjects",
    number: "30",
    text: "Active curriculum",
    // left : "+2.1%",
    gif: books,
  },
  {
    des: "Upcoming Exams",
    number: "",
    text: "No exams scheduled",
    gif: calender,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */

const subjectData = [
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Core",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"None",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  {
    subject : "Physics",
    subjectcode :"PHY101",
    studentcout :"256",
    teacher :"4",
    teachername :"Raju Kumar",
    category :"Elective",
  },
  
  
 
];

const teacherData = [
  {
    name : "Raju Kumar",
    role : "Class Teacher",
    isverified : true,
    img : meave,
  },
  {
    name : "Priya Kumari",
    role : "Math Teacher",
    isverified : false,
    img : everdeen,
  },
  {
    name : "Amit Patel",
    role : "English Teacher",
    isverified : false,
    img : meave,
  },
  {
    name : "Deepa Sharma",
    role : "Social Studies Teacher",
    isverified : false,
    img : meave,
  },
  {
    name : "Raju Kumar",
    role : "Class Teacher",
    isverified : false,
    img : meave,

  },
  {
    name : "Priya Kumari",
    role : "Math Teacher",
    isverified : false,
    img : meave,
  }

]


const Subjects = () => {
  const [openAddModel, setopenAddModel] = useState(false);
  const [openEditModel, setopenEditModel] = useState(false);
  const [openRoomDetails, setopenRoomDetails] = useState(false);
  const [openAdd, setopenAdd] = useState(false);
  

  const navigate = useNavigate();
  const addRef = useRef(null);
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (addRef.current && !addRef.current.contains(e.target)) {
      setopenAdd(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  return (
    <div>
      {/* <--------------------------------------- Card -----------------------------------> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {cardData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-xl p-4">
            <div className="flex items-center justify-between ">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <p className="font-normal text-[16px] text-[#1C1C1C]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-5 leading-none">
                 {item.number ? `${item.number}`:`-` } 
                </span>

                <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold ">
                 <span className="text-[#009638]">{item.left}</span> <span className="text-[#696969]">{item.text}</span>
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

      <div className="box-shadow mt-6 bg-white rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Subject Mangaement
              </span>
              <span className="text-sm text-[#696969]">
                Manage subjects, curriculum, and teacher assignments
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
          

           <div className="flex flex-col sm:flex-row gap-3">
                       <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#9C9C9C] font-semibold rounded-lg text-[#9C9C9C] ">
                         <TbFileImport className="text-[#9C9C9C]" />
                         Bulk Import
                       </button>
           
                       <button
                         onClick={() => setopenAddModel(true)}
                         className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer bg-[#0B3142] text-white border border-[#0B3142] rounded-lg"
                       >
                         <AiOutlinePlus className="text-white" />
                         Add Subjects
                       </button>
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
              placeholder="🔎︎ Search here..."
              className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="inline-flex items-center gap-3">
            

            <select
              name=""
              id="Export"
              className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
            >
              <option value="">Category</option>
              <option value="">Available</option>
              <option value="">Occupied</option>
            </select>
          </div>
        </div>

        {/* <------------------------------------------ Table ---------------------------------------> */}
       <div className="p-4">
  <div className="w-full overflow-x-auto border border-[#E6E6E6] rounded-xl">
    <table className="w-full text-sm">
      
      {/* TABLE HEADER */}
      <thead className="bg-[#F5F7F7] text-[#1C1C1C]">
        <tr>
          <th className="px-6 py-4 text-left font-semibold">Subject</th>
          <th className="px-6 py-4 text-left font-semibold">Students</th>
          <th className="px-6 py-4 text-left font-semibold">Teachers</th>
          <th className="px-6 py-4 text-center font-semibold">Category</th>
          <th className="px-6 py-4 text-right font-semibold">Action</th>
        </tr>
      </thead>

      {/* TABLE BODY */}
      <tbody>
        {subjectData.map((item, index) => (
          <tr
            key={index}
            className="border-t border-[#E6E6E6] hover:bg-[#FAFAFA] transition"
          >
            {/* SUBJECT COLUMN */}
            <td
              onClick={() => setopenRoomDetails(true)}
              className="px-6 py-4 cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-[#12516E]">
                  {item.subject}
                </span>
                <span className="text-xs text-[#9C9C9C]">
                  {item.subjectcode}
                </span>
              </div>
            </td>

            {/* STUDENTS */}
            <td
              onClick={() => setopenRoomDetails(true)}
              className="px-6 py-4 text-[#1C1C1C]"
            >
              {item.studentcout}
            </td>

            {/* TEACHERS */}
            <td
              onClick={() => setopenRoomDetails(true)}
              className="px-6 py-4"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-[#12516E]">
                  {item.teacher}
                </span>
                <span className="text-xs text-[#9C9C9C] truncate max-w-45">
                  {item.teachername}
                </span>
              </div>
            </td>

            {/* CATEGORY BADGE */}
            <td className="px-6 py-4 text-center">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1 rounded-md text-xs font-semibold
                ${
                  item.category === "Elective"
                    ? "bg-[#E3F2FD] text-[#1565C0]"
                    : item.category === "Core"
                    ? "bg-[#D4EDDA] text-[#009638]"
                    : "bg-[#EEEEEE] text-[#696969]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full
                  ${
                    item.category === "Elective"
                      ? "bg-[#1565C0]"
                      : item.category === "Core"
                      ? "bg-[#009638]"
                      : "bg-[#696969]"
                  }`}
                />
                {item.category}
              </span>
            </td>

            {/* ACTIONS */}
            <td className="px-6 py-4">
              <div className="flex justify-end items-center gap-4">
                <FiEye
                  onClick={() => setopenRoomDetails(true)}
                  className="w-4 h-4 text-[#9C9C9C] cursor-pointer hover:text-[#12516E]"
                />
                <FiEdit
                  onClick={() => setopenEditModel(true)}
                  className="w-4 h-4 text-[#9C9C9C] cursor-pointer hover:text-[#12516E]"
                />
                <RiDeleteBin5Line className="w-4 h-4 text-[#FF4B4B] cursor-pointer hover:scale-110 transition" />
              </div>
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
      {openAddModel && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    onClick={() => setopenAddModel(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-206 max-h-1900 bg-white rounded-2xl shadow-xl flex flex-col"
    >
      {/* HEADER */}
      <div className="flex justify-between items-start p-6">
        <div>
          <h2 className="text-[20px] font-semibold text-[#1C1C1C]">
            Add New Subject
          </h2>
          <p className="text-sm text-[#9C9C9C] mt-1">
            Create a new subject with curriculum details
          </p>
        </div>

        <button
          onClick={() => setopenAddModel(false)}
          className="text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      <div className="px-6 pb-6 space-y-2.5 overflow-y-auto">

        {/* SUBJECT NAME */}
        <div>
          <label className="text-sm font-semibold">Subject Name</label>
          <input
            type="text"
            placeholder="eg., Advance math"
            className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] outline-none focus:ring-2 focus:ring-[#0B3142]"
          />
        </div>

        {/* SUBJECT CODE + CATEGORY */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold">Subject Code</label>
            <input
              type="text"
              placeholder="eg., MATH501"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] outline-none focus:ring-2 focus:ring-[#0B3142]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Category</label>
            <select className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] text-[#9C9C9C] outline-none focus:ring-2 focus:ring-[#0B3142]">
              <option>Select category</option>
              <option>Core</option>
              <option>Elective</option>
              <option>Optional</option>
            </select>
          </div>
        </div>

        {/* ASSIGN TEACHER */}
        <div>
          <label className="text-sm font-semibold">Assign Teacher</label>
          <select className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] text-[#9C9C9C] outline-none focus:ring-2 focus:ring-[#0B3142]">
            <option>Select teacher</option>
            <option>Raju Kumar</option>
            <option>Priya Kumari</option>
          </select>
        </div>

        {/* APPLICABLE CLASS */}
        <div>
          <label className="text-sm font-semibold">Applicable class</label>
          <select className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] text-[#9C9C9C] outline-none focus:ring-2 focus:ring-[#0B3142]">
            <option>Select class</option>
            <option>Nursery</option>
            <option>Class 1</option>
            <option>Class 2</option>
          </select>
        </div>

        {/* COLOR PICKER */}
        <div>
          <label className="text-sm font-semibold">Pick Subject Color</label>

          <div className="mt-3 grid grid-cols-4 gap-4 p-4 border border-[#E6E6E6] rounded-2xl bg-[#F9F9F9]">
            {[
              "#F94144",
              "#F3722C",
              "#F8961E",
              "#F9C74F",
              "#90BE6D",
              "#43AA8B",
              "#577590",
              "#277DA1",
            ].map((color, index) => (
              <div
                key={index}
                className="h-14 rounded-xl cursor-pointer transition hover:scale-105"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-end gap-4 px-6 py-6 border-t border-[#E6E6E6]">
        <button
          onClick={() => setopenAddModel(false)}
          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button className="px-6 py-2 bg-[#0B3142] text-white rounded-lg hover:opacity-90">
          Create Class
        </button>
      </div>
    </div>
  </div>
      )}

      {openEditModel && (
         <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    onClick={() => setopenEditModel(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-206 max-h-1900 bg-white rounded-2xl shadow-xl flex flex-col"
    >
      {/* HEADER */}
      <div className="flex justify-between items-start p-6">
        <div>
          <h2 className="text-[20px] font-semibold text-[#1C1C1C]">
            Edit Subject
          </h2>
          <p className="text-sm text-[#9C9C9C] mt-1">
            Create a new subject with curriculum details
          </p>
        </div>

        <button
          onClick={() => setopenEditModel(false)}
          className="text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      <div className="px-6 pb-6 space-y-2.5 overflow-y-auto">

        {/* SUBJECT NAME */}
        <div>
          <label className="text-sm font-semibold">Subject Name</label>
          <input
            type="text"
            placeholder="eg., Advance math"
            className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] outline-none focus:ring-2 focus:ring-[#0B3142]"
          />
        </div>

        {/* SUBJECT CODE + CATEGORY */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold">Subject Code</label>
            <input
              type="text"
              placeholder="eg., MATH501"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] outline-none focus:ring-2 focus:ring-[#0B3142]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Category</label>
            <select className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] text-[#9C9C9C] outline-none focus:ring-2 focus:ring-[#0B3142]">
              <option>Select category</option>
              <option>Core</option>
              <option>Elective</option>
              <option>Optional</option>
            </select>
          </div>
        </div>

        {/* ASSIGN TEACHER */}
        <div>
          <label className="text-sm font-semibold">Assign Teacher</label>
          <select className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] text-[#9C9C9C] outline-none focus:ring-2 focus:ring-[#0B3142]">
            <option>Select teacher</option>
            <option>Raju Kumar</option>
            <option>Priya Kumari</option>
          </select>
        </div>

        {/* APPLICABLE CLASS */}
        <div>
          <label className="text-sm font-semibold">Applicable class</label>
          <select className="w-full mt-2 px-4 py-3 rounded-xl border border-[#E6E6E6] text-[#9C9C9C] outline-none focus:ring-2 focus:ring-[#0B3142]">
            <option>Select class</option>
            <option>Nursery</option>
            <option>Class 1</option>
            <option>Class 2</option>
          </select>
        </div>

        {/* COLOR PICKER */}
        <div>
          <label className="text-sm font-semibold">Pick Subject Color</label>

          <div className="mt-3 grid grid-cols-4 gap-4 p-4 border border-[#E6E6E6] rounded-2xl bg-[#F9F9F9]">
            {[
              "#F94144",
              "#F3722C",
              "#F8961E",
              "#F9C74F",
              "#90BE6D",
              "#43AA8B",
              "#577590",
              "#277DA1",
            ].map((color, index) => (
              <div
                key={index}
                className="h-14 rounded-xl cursor-pointer transition hover:scale-105"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-end gap-4 px-6 py-6 border-t border-[#E6E6E6]">
        <button
          onClick={() => setopenEditModel(false)}
          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button className="px-6 py-2 bg-[#0B3142] text-white rounded-lg hover:opacity-90">
          Update Class
        </button>
      </div>
    </div>
  </div>
      )}
    {openRoomDetails && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    onClick={() => setopenRoomDetails(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-209 h-191 bg-white rounded-2xl shadow-xl flex flex-col"
    >
      {/* ================= HEADER ================= */}
      <div className="mx-6 mt-6 p-6 rounded-xl bg-linear-to-r from-[#B993D6] to-[#8CA6DB] flex justify-between items-center">
        <h2 className="text-white text-[20px] font-semibold">
          Physics
        </h2>

        <button
          onClick={() => setopenRoomDetails(false)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30"
        >
          <IoClose className="text-white" size={18} />
        </button>
      </div>

      {/* ================= BODY ================= */}
      <div className="px-6 mt-4 flex flex-col gap-4 flex-1">

        {/* SUBJECT INFORMATION */}
        <div className="border border-[#E6E6E6] rounded-xl p-3 flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Subject Code</p>
            <p className="font-semibold text-sm">PHY001</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Student Enroll</p>
            <p className="font-semibold text-sm">100</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Category</p>
            <span className="inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-md text-xs font-semibold bg-[#E3F2FD] text-[#1565C0]">
              <span className="w-2 h-2 rounded-full bg-[#1565C0]" />
              Elective
            </span>
          </div>
        </div>

        {/* ================= TEACHERS ================= */}
        <div className="border border-[#E6E6E6] rounded-xl p-3 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-sm">Teacher</h3>
            <p className="text-xs text-gray-500">
              Instructors assigned to this subject
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {teacherData.map((item, index) => (
              <div
                key={index}
                className="border border-[#E6E6E6] rounded-xl p-3 flex items-center gap-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    {item.isverified && (
                      <MdVerified className="text-[#007AFF]" size={16} />
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CLASS ================= */}
        <div className="border border-[#E6E6E6] rounded-xl p-3 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-sm">Class</h3>
            <p className="text-xs text-gray-500">
              Subject assigned to this classes
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Class 1-A", border: "#F94144", bg: "#FCE8EC" },
              { name: "Class 1-B", border: "#277DA1", bg: "#E6F0F7" },
              { name: "Class 11-A", border: "#43AA8B", bg: "#E6F4EF" },
              { name: "Class 12-A", border: "#F8961E", bg: "#FFF1E6" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl p-4 flex flex-col gap-3"
                style={{
                  backgroundColor: item.bg,
                  borderTop: `4px solid ${item.border}`,
                }}
              >
                <p className="font-semibold text-sm">
                  {item.name}
                </p>

                <div
                  className="h-px opacity-40"
                  style={{ backgroundColor: item.border }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-[#577590] text-white text-xs font-semibold flex items-center justify-center border-2 border-white">
                      +22
                    </div>
                  </div>

                  <span className="text-sm text-gray-600">
                    25 students
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="flex justify-end gap-4 px-6 py-6 border-t border-[#E6E6E6]">
        <button
          onClick={() => setopenRoomDetails(false)}
          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setopenEditModel(true);
            setopenRoomDetails(false);
          }}
          className="px-6 py-2 bg-[#0B3142] text-white rounded-lg"
        >
          Edit Room
        </button>
      </div>
    </div>
  </div>
)}



      
    </div>
  );
};

export default Subjects;

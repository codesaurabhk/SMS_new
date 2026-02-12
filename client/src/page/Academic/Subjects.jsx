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
                <span className="text-xs text-[#9C9C9C] truncate max-w-[45]">
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
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setopenAddModel(false)}>
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg flex flex-col max-h-156"  onClick={(e) => e.stopPropagation()}>
            {/* Scrollable Content */}
            <div className="p-4 overflow-y-auto  mt-0 ">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Add New Class
                  </h2>
                  <p className="text-sm text-[#9C9C9C]">
                    Create a new class section with teacher assignment
                  </p>
                </div>

                <button
                  onClick={() => setopenAddModel(false)}
                  className="text-lg"
                >
                  ✕
                </button>
              </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="text-sm font-semibold">Class Name</label>
                  <input
                    type="text"
                    placeholder="Nursery"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Section</label>
                  <input
                    type="text"
                    placeholder="A"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Stream</label>
                   <select className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] text-[#9C9C9C] outline-none">
                    <option>General</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm font-semibold">Room</label>
                  
                   <select className="w-full mt-1 px-3 py-2 border rounded-lg text-[#9C9C9C] border-[#E6E6E6] outline-none">
                    <option>Room 101</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">Capacity(Automatic Fetch from Room selection)</label>
                 <input
                    type="text"
                    placeholder="30"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none "
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 ">
                <div>
                  <label className="text-sm font-semibold">Class Teacher</label>
                  
                   <select className="w-full mt-1 px-3 py-2 border text-[#9C9C9C] rounded-lg border-[#E6E6E6] outline-none">
                    <option>Raju Kumar</option>
                  </select>
                </div>

                
              </div>

             
             

            
            </div>

            {/* Footer (Fixed) */}
            <div className="flex justify-end gap-3 p-6 ">
              <button
                onClick={() => setopenAddModel(false)}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#0B3142] text-white rounded-lg">
                Create Class
              </button>
            </div>
          </div>
        </div>
      )}
      {openEditModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setopenEditModel(false)}>
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg flex flex-col max-h-156"  onClick={(e) => e.stopPropagation()}>
            {/* Scrollable Content */}
            <div className="p-4 overflow-y-auto  mt-0 ">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Edit Class
                  </h2>
                  <p className="text-sm text-[#9C9C9C]">
                    Update the class information
                  </p>
                </div>

                <button
                  onClick={() => setopenEditModel(false)}
                  className="text-lg"
                >
                  ✕
                </button>
              </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="text-sm font-semibold">Class Name</label>
                  <input
                    type="text"
                    placeholder="Nursery"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Section</label>
                  <input
                    type="text"
                    placeholder="A"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Stream</label>
                   <select className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] text-[#9C9C9C] outline-none">
                    <option>General</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm font-semibold">Room</label>
                  
                   <select className="w-full mt-1 px-3 py-2 border rounded-lg text-[#9C9C9C] border-[#E6E6E6] outline-none">
                    <option>Room 101</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">Capacity(Automatic Fetch from Room selection)</label>
                 <input
                    type="text"
                    placeholder="30"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none "
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 ">
                <div>
                  <label className="text-sm font-semibold">Class Teacher</label>
                  
                   <select className="w-full mt-1 px-3 py-2 border text-[#9C9C9C] rounded-lg border-[#E6E6E6] outline-none">
                    <option>Raju Kumar</option>
                  </select>
                </div>

                
              </div>

             
             

            
            </div>

            {/* Footer (Fixed) */}
            <div className="flex justify-end gap-3 p-6 ">
              <button
                onClick={() => setopenEditModel(false)}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#0B3142] text-white rounded-lg">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      {openRoomDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setopenRoomDetails(false)}>
          <div className="bg-white w-209  rounded-2xl shadow-lg  h-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-linear-to-r from-[#B993D6] to-[#8CA6DB] p-6 m-4 text-white flex justify-between items-center rounded-xl w-201 h-18">
              <div className="flex   gap-3 ">
                <span className="font-semibold text-[24px]">Nursery-A </span>

                <span
                  className="inline-flex w-22  h-5 items-center justify-center gap-1.5
      rounded-sm px-3 py-1 text-sm font-semibold mt-2
      bg-[#FFFFFF] text-[#9C9C9C]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full
       bg-[#9C9C9C]"
                  />
                  General
                </span>
                <span
                  className="inline-flex w-24  h-5 items-center justify-center gap-1.5
      rounded-sm px-3 py-1 text-sm font-semibold mt-2
      bg-[#E3F2FD] text-[#1565C0]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full
       bg-[#1565C0]"
                  />
                  Available
                </span>
              </div>
              <div  onClick={() => setopenRoomDetails(false)} className=" bg-[#FFFFFF59] h-6 w-6 flex justify-center items-center rounded-full">
                <IoClose size={22} className="text-white cursor-pointer" />
              </div>
            </div>
             {/* CLASS INFORMATION */}
      <div className="border border-[#E6E6E6] m-5 rounded-xl p-4">
        <h3 className="font-semibold text-sm mb-3">Class Information</h3>

        <div className="grid grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-gray-500">Room</p>
            <p className="font-semibold">Room 101</p>
          </div>
          <div>
            <p className="text-gray-500">Capacity</p>
            <p className="font-semibold">31</p>
          </div>
          <div>
            <p className="text-gray-500">Occupied</p>
            <p className="font-semibold">29</p>
          </div>
          <div>
            <p className="text-gray-500">Available</p>
            <p className="font-semibold">2</p>
          </div>
        </div>
      </div>

      {/* TEACHERS */}
      <div className="border border-[#E6E6E6] mx-5 rounded-xl p-4">
        <h3 className="font-semibold text-sm mb-1">Teacher</h3>
        <p className="text-xs text-gray-500 mb-4">
          Instructors assigned to this subject
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {teacherData.map((item, index) => (
            <div
              key={index}
              className="border border-[#E6E6E6] rounded-lg p-3 flex items-center gap-3"
            >
              {/* <div  /> */}
              <img src={item.img} alt="" className="w-10 h-10 rounded-full " />
              <div>
                <span className="flex gap-2"><p className="font-semibold text-sm">{item.name} </p> {item.isverified && <MdVerified className="mt-0.5 text-[#007AFF]" />}</span>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUBJECTS */}
      <div className="border border-[#E6E6E6] m-5 rounded-xl p-4">
        <h3 className="font-semibold text-sm ">Subject</h3>
        <p className="text-xs text-gray-500 mb-3">
          Assigned subject to class
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 w-45 py-3 h-12.5 font-semibold rounded-lg border-l-4 bg-[#FEE3E3] text-[#F94144] border border-[#F94144]">
            Physics
          </span>
          <span className="px-4 w-45 py-3 h-12.5 font-semibold rounded-lg border-l-4 bg-[#E3F2EE] text-[#43AA8B] border border-[#43AA8B]">
            Chemistry
          </span>
          <span className="px-4 w-45 py-3 h-12.5 font-semibold rounded-lg border-l-4 bg-[#FEEFDD]  text-[#F8961E] border border-[#F8961E]">
            Math
          </span>
          <span className="px-4 w-45 py-3 h-12.5 font-semibold rounded-lg border-l-4 bg-[#E6EAEF] text-[#277DA1] border border-[#277DA1]">
            English
          </span>
          <span className="px-4 w-45 py-3 h-12.5 font-semibold rounded-lg border-l-4 bg-[#EFF5E9] text-[#90BE6D] border border-[#90BE6D]">
            Social Studies
          </span>
        </div>
      </div>
             
               

                {/* Footer (Fixed) */}
            <div className="flex justify-end gap-3 p-6 ">
              <button
                onClick={() => setopenRoomDetails(false)}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button  onClick={() => {setopenEditModel(true); setopenRoomDetails(false);}} className="px-4 py-2 bg-[#0B3142] text-white rounded-lg">
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

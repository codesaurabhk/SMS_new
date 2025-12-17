import React, { useState } from "react";
import "../../CSS/Style.CSS";

{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import student from "../../assets/images/studentGif.gif";
import calender from "../../assets/images/calender.gif";
import kalu from "../../assets/images/kalu.gif";
import chair from "../../assets/images/chair.gif";

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
import emma from "../../assets/images/emma.jpg";
import Pagination from "../../components/Pagination";

const cardData = [
  {
    des: "Total Student",
    number: "500",
    left: "468",
    text: "Student Present",
    gif: student,
  },
  {
    des: "Attendance Rate",
    number: "94.7%",
    left: "+2.1%",
    text: "from the last month",
    gif: calender,
  },
  {
    des: "New Student",
    number: "34",
    left: "",
    text: "session 2024-2025",
    gif: kalu,
  },
  {
    des: "Unassigned Student",
    number: "12",
    left: "",
    text: "Not mapped to class or section",
    gif: chair,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */
const studentData = [
  {
    student: "katniss Everdeen",
    studentId: "001",
    img: everdeen,
    class: "12B",
    parent: "Peeta Mallak",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Goku",
    studentId: "002",
    img: goku,
    class: "11B",
    parent: "Bodok",
    number: 620489855,
    status: "Inactive",
  },
  {
    student: "Katniss langford",
    studentId: "010",
    img: langford,
    class: "1B",
    parent: "Jensen",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Homelander",
    img: homelander,
    studentId: "003",
    class: "10C",
    parent: "Soldier Boy",
    number: 620489625,
    status: "Inactive",
  },
  {
    student: "Thanos",
    studentId: "004",
    img: thanos,
    class: "9A",
    parent: "A'Lars",
    number: 629639625,
    status: "Alumni",
  },
  {
    student: "Joffrey Baratheon",
    img: Joffrey,
    studentId: "005",
    class: "11A",
    parent: "Robert Baratheon",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Annembella",
    img: doll,
    studentId: "006",
    class: "11B",
    parent: "Nun",
    number: 600489625,
    status: "Active",
  },
  {
    student: "optimus Prime",
    img: prime,
    studentId: "007",
    class: "7A",
    parent: "Bumble Bee",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Gamora ",
    img: gamora,
    studentId: "008",
    class: "12A",
    parent: "Thanos",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Meave Wiley",
    img: emma,
    studentId: "009",
    class: "12C",
    parent: "Otis Milburn",
    number: 620489625,
    status: "Active",
  },
];

const statusStyle = {
  Active: 'bg-[#D4EDDA] text-[#009638]',
  Inactive: 'bg-[#DEDEDE] text-[#696969]',
  Alumni: "bg-[#FDEBD0] text-[#D35400]"
}

const Student = () => {
  const [active, setActive] = useState("All");

  const baseBtn = "  gap-8 ";

  const activeBtn =
    "bg-[#F5F7F7] text-[#0B3142] border border-[#ffffff] rounded-full px-15 py-2 ";

  const inactiveBtn = "text-[#9EA1A1] px-15 py-2";

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
                  <span className="text-[#009638]">{item.left}</span>
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
                Student Management
              </span>
              <span className="text-sm text-[#696969]">
                Manage Student Information, Enrollment, and Academic Report
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#9C9C9C] font-semibold rounded-lg text-[#9C9C9C] ">
              <TbFileImport className="text-[#9C9C9C]" />
              Bulk Import
            </button>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg">
              <GrUserAdd className="text-white" />
              Add Student
            </button>
          </div>
        </div>

        {/* <------------------------------------- filter -------------------------------> */}
        <div className="w-full p-4 bg-white">
          <div className="inline-flex items-center gap-2 bg-[linear-gradient(to_right,#F5F2ED,#F4F5F0,#EDF5F3)] mt-2 rounded-2xl p-1">
            {["All", "Active", "Inactive", "Alumni"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`${baseBtn} ${
                  active === item ? activeBtn : inactiveBtn
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-3 p-4 flex items-center gap-36">
          {/* SEARCH */}
          <div className="flex-1">
            <span>
            </span>
            <input
              type="search"
              placeholder="🔎︎ Search Student by name or admission Number..."
              className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="inline-flex items-center gap-3">
            <div className="flex justify-between">
              <label For="class" className=""></label>
              <select
                name=""
                id="class"
                className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
              >
                <option value="">Class</option>
                <option value="">Nursery </option>
                <option value="">UKG</option>
                <option value="">Class 1</option>
                <option value="">Class 2</option>
                <option value="">Class 3</option>
                <option value="">Class 4</option>
                <option value="">Class 5</option>
                <option value="">Class 6</option>
                <option value="">Class 7</option>
                <option value="">Class 8</option>
              </select>
            </div>
            <label For="Section"></label>
            <select
              name=""
              id="Section"
              className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
            >
              <option value="">Section</option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>
            <label For="Export"></label>
            <select
              name=""
              id="Export"
              className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
            >
              <option value="">Export As</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
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
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Student Name</span>
                      <PiArrowsDownUpThin />
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Class</span>
                      <PiArrowsDownUpThin />
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Parent / Guardian
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Mobile Number
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              {studentData.map((item, index) => (
                <tbody key={index} className="border-b border-[#e6e6e6]">
                  <tr>
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">
                      <input type="checkbox" />

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
                          {item.student}
                        </span>
                        <span className="text-sm text-[#9c9c9c] font-semibold">
                          {item.studentId}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      {item.class}
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      {item.parent}
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      {item.number}
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                       <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[item.status] || "bg-gray-100 text-gray-600"}`}>
                        <span className="text-sm leading-none">•{item.status}</span>
                       </span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 ">
                      <CgProfile className="w-5 h-5 text-[#9C9C9C]" />
                      <FiEdit className="w-5 h-5 text-[#9C9C9C]" />
                      <FaRegFileAlt className="w-5 h-5 text-[#9C9C9C]" />
                      <RiDeleteBin5Line className="w-5 h-5 text-[#FF4B4B]" />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {/* <------------------------------------------- pagination ---------------------------------> */}
        <Pagination />
      </div>
    </div>
  );
};

export default Student;

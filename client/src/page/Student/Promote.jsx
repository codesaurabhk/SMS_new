import React, { useState } from "react";
import "../../CSS/Style.css";
import { Link, Navigate } from "react-router-dom";

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
import { PiArrowsDownUpThin } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";

/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import goku from "../../assets/images/goku.jpg";
import langford from "../../assets/images/langford.jpg";
import homelander from "../../assets/images/homelander.jpg";
import thanos from "../../assets/images/thanos.jpg";
import Joffrey from "../../assets/images/Joffrey.jpg";
import doll from "../../assets/images/bella.jpg";
import prime from "../../assets/images/prime.jpg";
import gamora from "../../assets/images/gamora.jpg";
import meave from "../../assets/images/meave.jpg";
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
    class: "UKG",
    updatedClass: "1A",
    status: "Promoted",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Goku",
    studentId: "002",
    img: goku,
    class: "11B",
    updatedClass: "12B",
    status: "Pending Review",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Katniss langford",
    studentId: "010",
    img: langford,
    class: "1B",
    updatedClass: "2B",
    status: "Promoted",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Homelander",
    img: homelander,
    studentId: "003",
    class: "10C",
    updatedClass: "11C",
    status: "Pending Review",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Thanos",
    studentId: "004",
    img: thanos,
    class: "9A",
    updatedClass: "10A",
    status: "Hold Back",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Joffrey Baratheon",
    img: Joffrey,
    studentId: "005",
    class: "11A",
    updatedClass: "12A",
    status: "Promoted",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Annembella",
    img: doll,
    studentId: "006",
    class: "11B",
    updatedClass: "12A",
    status: "Promoted",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "optimus Prime",
    img: prime,
    studentId: "007",
    class: "7A",
    updatedClass: "8A",
    status: "Pending Review",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Gamora ",
    img: gamora,
    studentId: "008",
    class: "10A",
    updatedClass: "11A",
    status: "Hold Back",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
  {
    student: "Meave Wiley",
    img: meave,
    studentId: "009",
    class: "11C",
    updatedClass: "12A",
    status: "prometed",
    date: "07 Aug, 2025",
    action: "Promoted",
  },
];

const statusStyle = {
  Promoted: "bg-[#D4EDDA] text-[#009638]",
  "Pending Review": "bg-[#DEDEDE] text-[#696969]",
  "Hold Back": "bg-[#F8D7DA] text-[#C92131]",
};

const actionStyle = {
  Promoted: "bg-[#118AB2] text-[#ffffff]",
};

function Promote() {
  return (
    <div className="">
      <div className="box-shadow mt-3 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Promotion Management
              </span>
              <span className="text-sm text-[#696969]">
                Select and promote students to the next Acedemic year
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#9C9C9C] font-semibold rounded-lg text-[#DC2626] text-[16px]">
              {/* <TbFileImport className="text-[#9C9C9C]" /> */}
              Hold Back (1)
            </button>

            <div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg">
                <FaArrowTrendUp className="text-white" />
                Promote (1)
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
                  <th className="px-4 py-3 text-left text-sm font-semibold w-2/4">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      &ensp; &ensp;
                      <span>Student Name</span>
                      <PiArrowsDownUpThin />
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Current Class</span>
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold"></th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Next Class
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Updated On
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {studentData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#e6e6e6] hover:bg-[#FAFBFF]"
                  >
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">
                      <input type="checkbox" />
                      &ensp;
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
                            {item.student}
                          </span>
                          <span className="text-sm text-[#9c9c9c] font-semibold">
                            {item.studentId}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-left text-[14px] text-[#1C1C1C] font-semibold">
                      {item.class}
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      <IoIosArrowRoundForward size={20} className="text-[#9C9C9C]" />
                    </td>
                    <td className="px-4 py-3 text-left text-[14px] font-semibold text-[#007AFF]">
                      {item.updatedClass}
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold ${statusStyle[item.status] || "bg-gray-100 text-gray-600"}`}
                      >
                        <span className="text-sm leading-none">
                          {item.status}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-left text-[14px] font-normal flex gap-3 text-[#696969]">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 text-left">
                      <span
                        className={`px-3 py-1 rounded text-sm font-semibold ${
                          actionStyle[item.action] ||
                          "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {item.action}
                      </span>
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
}

export default Promote;

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
import { CiMail } from "react-icons/ci";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdSave } from "react-icons/io";

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
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
  },
  {
    student: "Goku",
    studentId: "002",
    img: goku,
    class: "11B",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
    password: "********",
  },
  {
    student: "Katniss langford",
    studentId: "010",
    img: langford,
    class: "1B",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
    password: "********",
  },
  {
    student: "Homelander",
    img: homelander,
    studentId: "003",
    class: "10C",
    number: "6202124896",
    status: "Pending Review",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
    password: "********",
  },
  {
    student: "Thanos",
    studentId: "004",
    img: thanos,
    class: "9A",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
    password: "********",
  },
  {
    student: "Joffrey Baratheon",
    img: Joffrey,
    studentId: "005",
    class: "11A",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
  },
  {
    student: "Annembella",
    img: doll,
    studentId: "006",
    class: "11B",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW2024",
    password: "********",
  },
  {
    student: "optimus Prime",
    img: prime,
    studentId: "007",
    class: "7A",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "Prime@007",
    password: "********",
  },
  {
    student: "Gamora ",
    img: gamora,
    studentId: "008",
    class: "10A",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "Gamora@2024",
    password: "********",
  },
  {
    student: "Meave Wiley",
    img: meave,
    studentId: "009",
    class: "11C",
    number: "6202124896",
    email: "itsDiwakar05@gmail.com",
    userId: "MeaveW@2024",
    password: "********",
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

function ManageLogin() {
  const [toggleState, setToggleState] = useState({});

  const handleToggle = (id) => {
    setToggleState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="box-shadow mt-3 bg-white rounded-md">
      <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="flex flex-col">
            <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
              Login Access Management
            </span>
            <span className="text-sm text-[#696969]">
              View and manage student login details
            </span>
          </p>
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
                    <span>Student Name</span>
                    <PiArrowsDownUpThin />
                  </div>
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <span>Current Class</span>
                  </div>
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Mobile Number
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Email
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Login Permission
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold">
                  User Name
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Password
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
                    {item.number}
                  </td>
                  <td className="px-4 py-3 text-left text-[14px] font-normal text-[#1C1C1C]">
                    {item.email}
                  </td>
                  <td className="px-4 py-3 text-left">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={toggleState[item.studentId] || false}
                        onChange={() => handleToggle(item.studentId)}
                      />

                      <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#0B5D7A] transition-colors duration-300"></div>

                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </td>

                  <td className="px-4 py-3 text-left text-[14px] font-normal text-[#696969]">
                    <div className="relative w-full">
                      {/* Icon */}
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9C9C9C] text-[14px]" />

                      {/* Input */}
                      <input
                        type="text"
                        value={item.userId}
                        readOnly
                        className="w-full border border-[#d9d9d9] rounded-md py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#0B3142]"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-left text-[14px] font-normal text-[#696969]">
                    <div className="relative w-full">
                      <IoMdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9C9C9C] text-[14px]" />
                      <input
                        type="password"
                        value={item.password}
                        readOnly
                        className="w-full border border-[#d9d9d9] rounded-md py-2 pl-9 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#0B3142]"
                      />
                      <FaRegEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9C9C9C] text-[14px] cursor-pointer" />
                    </div>
                  </td>

                  <td className="px-4 py-3 text-left flex gap-2 items-center">
                    <button
                      className={{}}
                    >
                      <IoMdSave size={20} className="text-[#9c9c9c] bg-[#ffffff]" />
                    </button>
                    <button
                      className={{}}
                    >
                      <CiMail size={20} />
                    </button>
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
  );
}

export default ManageLogin;

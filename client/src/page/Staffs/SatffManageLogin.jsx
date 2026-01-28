import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
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


{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import Teamwork from "../../assets/images/TeamWork.gif";
import calender from "../../assets/images/calender.gif";
import worker from "../../assets/images/worker.gif";
import teacher from "../../assets/images/teacher.gif";


const SatffManageLogin = () => {
   const [toggleState, setToggleState] = useState({});

  const cardData = [
    {
      des: "Total Staff",
      number: "200",
      left: "195",
      text: "active members",
      gif: Teamwork,
    },
    {
      des: "Total Teaching Staff",
      number: "180",
      left: "3",
      text: "teaching staff are absent",
      gif: teacher,
    },
    {
      des: "Total Other Staff",
      number: "20",
      left: "2",
      text: "other staff are absent",
      gif: worker,
    },
    {
      des: "Attendance Rate",
      number: "94%",
      left: "+2.1%",
      text: "from the last month",
      gif: calender,
    },
  ];  


  const staffData = [
    {
      student: "katniss Everdeen",
      studentId: "001",
      img: everdeen,
      role :"Teacher",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW2024",
    },
    {
      student: "Goku",
      studentId: "002",
      img: goku,
      role: "Accountant",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW2024",
      password: "********",
    },
    {
      student: "Katniss langford",
      studentId: "010",
      img: langford,
      role: "Librarian",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW2024",
      password: "********",
    },
    {
      student: "Homelander",
      img: homelander,
      studentId: "003",
      role: "Teacher",
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
      role: "Teacher",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW2024",
      password: "********",
    },
    {
      student: "Joffrey Baratheon",
      img: Joffrey,
      studentId: "005",
      role: "Driver",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW2024",
    },
    {
      student: "Annembella",
      img: doll,
      studentId: "006",
      role:  "Receptionist",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW2024",
      password: "********",
    },
    {
      student: "optimus Prime",
      img: prime,
      studentId: "007",
      role: "Cleaner",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "Prime@007",
      password: "********",
    },
    {
      student: "Gamora ",
      img: gamora,
      studentId: "008",
      role: "Librarian",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "Gamora@2024",
      password: "********",
    },
    {
      student: "Meave Wiley",
      img: meave,
      studentId: "009",
      role: "Super Admin",
      number: "6202124896",
      email: "itsDiwakar05@gmail.com",
      userId: "MeaveW@2024",
      password: "********",
    },
  ];

  const handleToggle = (id) => {
    setToggleState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  


  return (
    <div>
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
                  <span
                    className={`${
                      item.text.includes("absent")
                        ? "text-[#FF4B4B]" // red for absent
                        : "text-[#009638]" // green for normal
                    }`}
                  >
                    {item.left}
                  </span>
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
                  placeholder="🔎︎ Search Staff by name or staff id..."
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
                          <span>Staff</span>
                          <PiArrowsDownUpThin />
                        </div>
                      </th>
      
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        <div className="flex items-center gap-2">
                          <span>Role</span>
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
                    {staffData.map((item, index) => (
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
    </div>
  )
}

export default SatffManageLogin
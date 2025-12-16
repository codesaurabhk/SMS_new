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


/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import goku from "../../assets/images/goku.jpg";
import langford from "../../assets/images/langford.jpg";
import homelander from "../../assets/images/homelander.jpg";
import thanos from "../../assets/images/thanos.jpg";
import Joffrey from "../../assets/images/Joffrey.jpg";
import doll from "../../assets/images/bella.jpg";
import prime from "../../assets/images/prime.jpg"
import peter from "../../assets/images/lord.jpg"
import gamora from "../../assets/images/gamora.jpg"


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
    img: everdeen,
    class: "12B",
    parent: "Hitler",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Goku",
    img:goku,
    class: "11B",
    parent: "Bodok",
    number: 620489855,
    status: "Inactive",
  },
  {
    student: "Katniss langford",
    img: langford,
    class: "1B",
    parent: "Hitesh",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Homelander",
    img:homelander,
    class: "10C",
    parent: "Ritesh",
    number: 620489625,
    status: "Inactive",
  },
  {
    student: "Thanos",
    img:thanos,
    class: "9A",
    parent: "",
    number: 629639625,
    status: "Inactive",
  },
  {
    student: "Joffrey Baratheon",
    img: Joffrey,
    class: "11A",
    parent: "Robert Baratheon",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Annembella",
    img: doll,
    class: "11B",
    parent: "Nun",
    number: 600489625,
    status: "Active",
  },
  {
    student: "optimus Prime",
    img:prime,
    class: "7A",
    parent: "Bumble Bee",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Gamora ",
    img:gamora,
    class: "12A",
    parent: "Thanos",
    number: 620489625,
    status: "Active",
  },
  {
    student: "Super Man",
    img:peter,
    class: "12C",
    parent: "EGO",
    number: 620489625,
    status: "Active",
  },
];

const Student = () => {
  const [active, setActive] = useState("All");

  const baseBtn = " transition-all duration-500 gap-8 ";

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
          <div
            className="inline-flex items-center gap-2 
      bg-[linear-gradient(to_right,#F5F2ED,#F4F5F0,#EDF5F3)]
      mt-2 rounded-lg p-1"
          >
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
            <input
              type="search"
              placeholder="Search Student by name or admission Number..."
              className="w-full bg-[#EEEEEE] rounded-2xl px-4 py-2"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="inline-flex items-center gap-3">
            {["Class", "Section", "Exported As"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-2 px-4 py-2 
        border border-[#D1D1D1] rounded-lg text-[#1c1c1c] bg-[#EFF2F2]"
              >
                {item}
                <MdOutlineKeyboardArrowDown />
              </button>
            ))}
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

                  <th className="px-4 py-3 text-left text-sm font-semibold">Mobile Number</th>

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
                  <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center "><input type="checkbox" /> <img src={item.img} alt="" className="h-9.5 w-9.8 p-1.5 rounded"/> {item.student}</td>
                  <td className="px-4 py-3 text-left text-sm font-semibold">{item.class}</td>
                  <td className="px-4 py-3 text-left text-sm font-semibold">{item.parent}</td>
                  <td className="px-4 py-3 text-left text-sm font-semibold">{item.number}</td>
                  <td className="px-4 py-3 text-left text-sm font-semibold">{item.status}</td>
                  <td className="px-4 py-3 text-left text-sm font-semibold"></td>
                </tr>
              </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;

import React, { useState } from "react";
import "../../CSS/Style.css";

/* <------------------------------- icon ------------------------------> */
import { IoMdArrowBack } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { PiChartLineUpLight } from "react-icons/pi";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

/** <------------------------------------ images -------------------------------> */
import langford from "../../assets/images/langford.jpg";
import { Link } from "react-router-dom";

function DetailsContent({ active }) {
  switch (active) {
    case "Personal Info":
      return (
        <div className="">
          <div className="bg-white mt-6 p-4 rounded-lg">
            {/* HEADER */}
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaRegUser className="text-[#696969]" />
              <span className="font-semibold">Personal Information</span>
            </div>

            {/* GRID CONTENT */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
              {/* ITEM */}
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Full Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Kathrine Langford
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Date of Birth
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  29 April 1996
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Age
                </span>
                <span className="text-[#1c1c1c] text-[16px]">29</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Gender
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Female</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Mobile Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">6202124896</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Email
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Langford@yahoo.com
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Admission Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">123456</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Blood Group
                </span>
                <span className="text-[#1c1c1c] text-[16px]">A+</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Category
                </span>
                <span className="text-[#1c1c1c] text-[16px]">OBC</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Citizenship
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Perth</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Religion
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Jews</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Nationality
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Australian</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Mother Tongue
                </span>
                <span className="text-[#1c1c1c] text-[16px]">English</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Place of Birth
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Australia Perth
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Primary Language
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  English, Bhojpuri
                </span>
              </div>
            </div>
          </div>
          {/* <------------------------------------------------------ Address ------------------------------------------------> */}
          <div className="bg-white mt-6 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaMapMarkerAlt className="text-[#696969]" />
              <span className="font-semibold">Permament Address</span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-10">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Full Address
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Autralia Perth
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Country
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Australia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  State
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Bihar</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  City
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Perth</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Zip Code
                </span>
                <span className="text-[#1c1c1c] text-[16px]">800020</span>
              </div>
            </div>
          </div>

          {/* <---------------------------------------------- Parent Information --------------------------------------------> */}

          <div className="bg-white mt-6 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <div>
                <MdFamilyRestroom className="text-[#696969]" />
              </div>
              <div>
                <span className="font-semibold">
                  Parent/Guardian Information
                </span>
                <p className="text-[#9C9C9C] font-normal">
                  Detailed Parent Guardian Contact
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="border border-[#e6e6e6] rounded shadow-sm p-4">
                <div className="flex items-center gap-2 text-[#1c1c1c]">
                  <FaMale className="text-[#696969]" />
                  <span className="font-semibold">Father's Information</span>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-y-6 gap-x-10">
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Name
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Jason Langford
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Occupation
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Actor</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Company
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Fox</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Qualification
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">M.I.T</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Mobile
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      9661285080
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Email
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Jason@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Annual Income
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">20 m</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#e6e6e6] rounded shadow-sm p-4">
                <div className="flex items-center gap-2 text-[#1c1c1c]">
                  <FaMale className="text-[#696969]" />
                  <span className="font-semibold">Mother Information</span>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-y-6 gap-x-10">
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Name
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Natasha Langford
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Occupation
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Actress</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Company
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Disney</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Qualification
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Oxford</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Mobile
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      9661288050
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Email
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Natasha@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Annual Income
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">30 m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <----------------------------------------------------- Admission Details -----------------------------------------> */}
          <div className="mt-6 bg-white p-4 rounded-lg">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaRegFileAlt className="text-[#696969]" />
              <span className="font-semibold">
                Medical & Health Infoprmation
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cold-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Chornics Illness
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  -
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Allgeries
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  -
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Medication
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  -
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Dietary Restrition
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  None
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Physical Disablity
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  None
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Doctor Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  -
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Doctor Contact Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  -
                </span>
              </div>
            </div>
          </div>

          {/* <----------------------------------------------- Sibling Information ---------------------------------------------------> */}
          <div></div>
        </div>
      );

    case "Academic":
      return <div>Academic Details Content</div>;

    case "Performance":
      return <div>Performance Report Content</div>;

    case "Attandance":
      return <div>Attendance Content</div>;

    case "Fees":
      return <div>Fees Details Content</div>;

    default:
      return null;
  }
}

function StudentDetails() {
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
                <span className="text-lg font-semibold">
                  Katherine Langford
                </span>

                <div className="relative inline-flex items-center px-3 py-1 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-[#009638] rounded-full animate-spread"></span>
                  <span className="relative z-10 bg-[#009638] text-white text-sm font-semibold rounded-full px-3">
                    Active
                  </span>
                </div>
              </div>

              {/* BASIC INFO */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {[
                  ["Student ID", "STUD 1234"],
                  ["Admission No.", "0531"],
                  ["Class", "10 A"],
                  ["Academic Year", "2024-26"],
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
                    <div className="bg-[#DBEAFE] p-2 rounded-full">
                      <IoSchoolOutline size={26} className="text-[#155DFC]" />
                    </div>
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Overall Grade</span>
                      <span className="font-semibold">A+</span>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#DCFCE7] p-2 rounded-full">
                      <PiChartLineUpLight
                        size={26}
                        className="text-[#00A63E]"
                      />
                    </div>
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Attendance Rate</span>
                      <span className="font-semibold">95%</span>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#DBEAFE] p-2 rounded-full">
                      <CiTrophy size={26} className="text-[#9810FA]" />
                    </div>
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Class Rank</span>
                      <span className="font-semibold">#1</span>
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
            "Performance",
            "Attendance",
            "Fees",
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

export default StudentDetails;

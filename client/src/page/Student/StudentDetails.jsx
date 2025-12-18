import React, { useState } from "react";
import "../../CSS/Style.css";

/* <------------------------------- icon ------------------------------> */
import { IoMdArrowBack } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { PiChartLineUpLight } from "react-icons/pi";
import { LiaUserEditSolid } from "react-icons/lia";

/** <------------------------------------ images -------------------------------> */
import langford from "../../assets/images/langford.jpg";
import { Link } from "react-router-dom";

function DetailsContent({ active }) {
  switch (active) {
    case "Personal Info":
      return <div>Personal Information Content</div>;

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

      <div className="mt-3 p-7.5 rounded-lg w-full bg-linear-to-r from-[#9796F0] to-[#FBC7D4] flex gap-7 justify-between">
        <div className="flex justify-start gap-7">
          <div className="w-40">
            <div className="rounded-full h-37 w-37 border-2 border-[#ffffff] overflow-hidden">
              <img
                src={langford}
                alt="langford"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          <div className="w-300 ">
            <div className="flex gap-5 items-center flex-1 w-full">
              <span>Katherine Langford</span>

              <div className="relative inline-flex items-center px-3 py-1 rounded-full overflow-hidden">
                <span className="absolute inset-0 bg-[#009638] rounded-full animate-spread"></span>
                <span className="relative z-10 bg-[#009638] text-white text-sm font-semibold rounded-full px-2">
                  Active
                </span>
              </div>
            </div>
            <div className="flex gap-7 mt-3 w-full">
              <div className="flex flex-col">
                <span className="text-white font-normal">Student ID</span>
                <span className="font-semibold text-[#1C1C1C]">STUD 1234</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-normal">Admission No.</span>
                <span className="font-semibold text-[#1C1C1C]">0531</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-normal">Class</span>
                <span className="font-semibold text-[#1C1C1C]">10 A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-normal">Acedemic Year</span>
                <span className="font-semibold text-[#1C1C1C]">2024-26</span>
              </div>
            </div>

            <div className="mt-3 w-full flex justify-between gap-6">
              <div className="bg-[#ffffff73] px-4 py-1 rounded-lg w-full items-center">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#DBEAFE] p-2 rounded-full">
                    <span>
                      <IoSchoolOutline size={28} className="text-[#155DFC]" />
                    </span>
                  </div>
                  <div className="flex flex-col text-[#1C1C1C] ">
                    <span className="font-normal">Overall Grade</span>
                    <span className="font-semibold">A+</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff73] px-4 py-1 items-center rounded-lg w-full">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#DCFCE7] p-2 rounded-full">
                    <span>
                      <PiChartLineUpLight
                        size={28}
                        className="text-[#00A63E] "
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-[#1C1C1C] ">
                    <span className="font-normal">Attendance Rate</span>
                    <span className="font-semibold">95%</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff73] items-center px-4 py-1 rounded-lg w-full">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#DBEAFE] p-2 rounded-full">
                    <span>
                      <CiTrophy
                        size={28}
                        className="text-[#9810FA] font-semibold"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-[#1C1C1C] ">
                    <span className="font-normal">Class Rank</span>
                    <span className="font-semibold">#1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" bg-[#0B3142] p-2 rounded-lg ">
            <button className="flex  gap-1 items-center text-[#ffffff] font-semibold">
              <span className="font-semibold">
                <LiaUserEditSolid className="text-[#ffffff]" />
              </span>
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* <------------------------------------------------------ filter ------------------------------------------------> */}
      <div className="w-full mt-8 bg-white rounded-full">
        <div className="flex items-center rounded-2xl p-1 justify-around gap-1">
          {[
            "Personal Info",
            "Academic",
            "Performance",
            "Attandance",
            "Fees",
          ].map((item) => (
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

      <div className="mt-6 p-4 bg-white rounded-lg">
        <DetailsContent active={active} />
      </div>
    </div>
  );
}

export default StudentDetails;

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

/** <------------------------------------ images -------------------------------> */
import langford from "../../assets/images/langford.jpg";
import mikasa from "../../assets/images/mikasa.png";
import { Link } from "react-router-dom";

function DetailsContent({ active }) {
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
  switch (active) {
    case "Personal Info":
      return (
        <div className="">
          {/* <------------------------------------------------------ Basics Information ------------------------------------------------> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
            {/* Basic Information */}
            <div className="bg-white rounded-lg p-6">
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
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <MdOutlineContactPage size={18} className="text-[#9A9A9A]" />

                <h3 className="font-semibold">Identification Details</h3>
              </div>

              <div className="space-y-4">
                <div className="border-b-1 pb-4 border-[#E6E6E6]">
                  <p className="text-sm text-[#8A8A8A]">Aadhaar Number</p>
                  <p className="font-medium">1234-5678-9101</p>
                </div>
                <div className="border-b-1 pb-4 border-[#E6E6E6]">
                  <p className="text-sm text-[#8A8A8A]">PAN Number</p>
                  <p className="font-medium">ABCDE1234F</p>
                </div>
                <div className="border-b-1 pb-4 border-[#E6E6E6]">
                  <p className="text-sm text-[#8A8A8A]">Languages Known</p>
                  <p className="font-medium">English, Hindi, Marathi</p>
                </div>
              </div>
            </div>
          </div>

          {/* <------------------------------------------------------ Identification Details ------------------------------------------------> */}

          <div className="bg-white mt-6 rounded-lg p-6">
            <div className="flex mb-6 items-center gap-2 text-[#1c1c1c]">
              <MdOutlineContactPage size={18} className="text-[#9A9A9A]" />
              <span className="font-semibold">Identification Details</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-1 pb-5 border-[#E6E6E6]">
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

            <div className="mt-5 space-y-2 border-b-1 pb-5 border-[#E6E6E6]">
              <p className="text-sm text-[#8A8A8A]">Current Address</p>
              <p className="font-medium">
                ABC gali, house no. 4, Trilokpuri, Delhi-110096, India
              </p>
            </div>
            <div className="mt-5 space-y-2 border-b-1 pb-5 border-[#E6E6E6]">
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

          <div className="bg-white mt-6  rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <MdOutlinePeople className="text-[#696969]" size={18} />

              <h3 className="font-semibold">Family Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-b-1 pb-3 border-[#E6E6E6]">
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
                <p className="text-sm text-[#8A8A8A]">Rina Kumari</p>
                <p className="font-medium">(555) 876-5432</p>
              </div>
            </div>
          </div>

          {/* <----------------------------------------------------- Educational Qualifications -----------------------------------------> */}

          <div className="bg-white mt-6 rounded-2xl shadow-md p-6">
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

          <div className="mt-6 p-4 bg-white rounded-lg">
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
          <div className="bg-white mt-6 border border-[#E6E6E6] rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-semibold text-[#1C1C1C]">
                Current Position Details
              </span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 border-b">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b">
              <div>
                <p className="text-sm text-[#8A8A8A]">Joining Date</p>
                <p className="font-medium">1-06-2025</p>
              </div>

              <div>
                <p className="text-sm text-[#8A8A8A]">Employment Type</p>
                <span className="inline-block mt-1 px-3 py-1 text-sm border rounded-md font-medium">
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

          <div className="bg-white border border-[#E6E6E6] rounded-xl p-6 mt-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-semibold text-[#1C1C1C]">
                Subjects & Classes
              </span>
            </div>

            {/* Subjects */}
            <div className="pb-6 border-b">
              <p className="text-sm text-[#8A8A8A] mb-3">Subjects</p>

              <span className="inline-block px-4 py-2 bg-[#007AFF] text-white text-sm rounded-lg font-medium">
                Mathematics
              </span>
            </div>

            {/* Classes Assigned */}
            <div className="pt-6">
              <p className="text-sm text-[#8A8A8A] mb-3">Classes Assigned</p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  Class 1A
                </span>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  Class 3 A
                </span>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  Class 4 A
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "Performance":
      const performanceData = [
        {
          subject: "Mathematics",
          marksObtained: 85,
          totalMarks: 100,
          percentage: 85,
          grade: "A+",
          texts: "good performance",
        },
        {
          subject: "Science",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "C",
          texts: "good performance",
        },
        {
          subject: "English",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "B+",
          texts: "good performance",
        },
        {
          subject: "Hindi",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "B",
          texts: "good performance",
        },
        {
          subject: "History",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "A",
          texts: "good performance",
        },
        {
          subject: "Geography",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "D+",
          texts: "good performance but need",
        },
      ];

      const subjectHoverColors = {
        Mathematics: "hover:bg-[#007AFF]/20",
        Science: "hover:bg-[#00A87C]/20",
        Englis: "hover:bg-[#118AB2]/20",
        Hindi: "hover:bg-[#894B00]/20",
        History: "hover:bg-[#FFF4F4]",
        Geography: "hover:bg-[#0077B6]/20",
        default: "hover:bg-gray-100",
      };

      const gradeColors = {
        "A+": "bg-green-500",
        A: "bg-blue-500",
        "B+": "bg-teal-500",
        B: "bg-yellow-500",
        "c+": "bg-purple-500",
        C: "bg-orange-500",
        "D+": "bg-pink-500",
        D: "bg-red-500",
      };

      const examPerformanceData = [
        {
          examName: "UT 1",
          maxMarks: 600,
          marksObtained: 540,
          percentage: 90,
          grade: "A",
          result: "Pass",
          rank: 1,
        },
        {
          examName: "Mid Term",
          maxMarks: 600,
          marksObtained: 310,
          percentage: 85,
          grade: "B+",
          result: "Pass",
          rank: 2,
        },
        {
          examName: "UT 2",
          maxMarks: 600,
          marksObtained: 380,
          percentage: 80,
          grade: "B",
          result: "Pass",
          rank: 3,
        },
        {
          examName: "Annual",
          maxMarks: 600,
          marksObtained: 40,
          percentage: 75,
          grade: "C",
          result: "Fail",
          rank: 5,
        },
      ];

      const ResultColors = {
        Pass: "bg-[#D4EDDA] text-[#155724]",
        Fail: "bg-[#F8D7DA] text-[#721C24]",
      };

      return (
        <div>
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <SlBadge size={20} className="text-[#696969]" />
              <span className="font-semibold">Overall Performance Summary</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Class & Section
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Grade 10 - A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Overall Percentage
                </span>
                <span className="text-[#1c1c1c] text-[16px] items-center gap-2 flex">
                  85.4%
                  <p className="px-4 bg-[#009638] rounded text-white">A</p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Class Rank
                </span>
                <span className="text-[#1c1c1c] text-[16px]">1 / 120</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Section Rank
                </span>
                <span className="text-[#1c1c1c] text-[16px]">1</span>
              </div>
            </div>
          </div>
          {/* <---------------------------------------------- Table -----------------------------------------------> */}
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <LuTarget size={20} className="text-[#696969]" />
                <span className="font-semibold text-[#1c1c1c]">
                  Subject-wise Performance Breakdown
                </span>
              </div>
              {/* <------------------------------------- Filter -----------------------------------------> */}
              <div className="inline-flex items-center gap-3">
                <label For="Exam"></label>
                <select
                  name=""
                  id="Exam"
                  className="bg-[#EFF2F2] rounded-md px-4 py-1 border-0 outline-0 text-[#1c1c1c] font-normal"
                >
                  <option value="">UT 1</option>
                  <option value="">UT 2</option>
                  <option value="">Mid Term</option>
                  <option value="">Annual</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
                <table className="min-w-full border-collapse ">
                  <thead>
                    <tr className="bg-[#F5F5F5]">
                      <th className="px-4 py-2 text-left">Subject</th>
                      <th className="px-4 py-2 text-left">Marks Obtained</th>
                      <th className="px-4 py-2 text-left">Total Marks</th>
                      <th className="px-4 py-2 text-left">Percentage</th>
                      <th className="px-4 py-2 text-left">Grade</th>
                      <th className="px-4 py-2 text-left w-60">
                        Teacher Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          subjectHoverColors[item.subject] ||
                          subjectHoverColors.default
                        }
                      >
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]  ">
                          {item.subject}
                        </td>
                        <td className=" px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c] text-left">
                          {item.marksObtained}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.totalMarks}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.percentage}%
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#ffffff]">
                          <span
                            className={`inline-block min-w-12 px-3 py-1 rounded text-white font-semibold text-center ${
                              gradeColors[item.grade] || "bg-gray-500"
                            }`}
                          >
                            {item.grade}
                          </span>
                        </td>
                        <td className="px-3 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          <textarea
                            name=""
                            id=""
                            className="bg-gray-200 rounded border border-[#E6E6E6] w-full h-12 p-2 resize-none outline-0"
                          >
                            {item.texts}
                          </textarea>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
              <div className="p-4 bg-[#F8F3F3] border-2 border-[#FBD1D1] rounded-lg">
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px] flex items-center gap-2">
                    <CiWarning size={28} className="fill-[red]" />
                    <span className="text-[#DC2626] text-[18px]">
                      Weakest Subject
                    </span>
                  </span>
                  <span className="text-[#DC2626] text-[16px]">
                    Hindi - 60% (Need to improve Writing Skill)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#D0FFE2] border-2 border-[#B5FFD1] rounded-lg">
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px] flex items-center gap-2">
                    <CiStar size={28} className="fill-[#04ff04] " />
                    <span className="text-[#267E3E] text-[18px]">
                      Strongest Subject
                    </span>
                  </span>
                  <span className="text-[#267E3E] text-[16px]">
                    Hindi - 60% (Excelent Writing Skill)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <------------------------------------- Exam Performance Summary ---------------------------------------> */}
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <FaClipboardList size={20} className="text-[#696969]" />
                <span className="font-semibold text-[#1c1c1c]">
                  Exam Performance Summary
                </span>
              </div>
              {/* <------------------------------------- Filter -----------------------------------------> */}
              <div className="inline-flex items-center gap-3">
                <label For="Exam"></label>
                <select
                  name=""
                  id="Exam"
                  className="bg-[#EFF2F2] rounded-md px-4 py-1 border-0 outline-0 text-[#1c1c1c] font-normal"
                >
                  <option value="">UT 1</option>
                  <option value="">UT 2</option>
                  <option value="">Mid Term</option>
                  <option value="">Annual</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
                <table className="min-w-full border-collapse ">
                  <thead>
                    <tr className="bg-[#F5F5F5]">
                      <th className="px-4 py-2 text-left">Exam Name</th>
                      <th className="px-4 py-2 text-left">Marks Obtained</th>
                      <th className="px-4 py-2 text-left">Max Marks</th>
                      <th className="px-4 py-2 text-left">Percentage</th>
                      <th className="px-4 py-2 text-left">Grade</th>
                      <th className="px-4 py-2 text-left">Rank</th>
                      <th className="px-4 py-2 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examPerformanceData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          subjectHoverColors[item.subject] ||
                          subjectHoverColors.default
                        }
                      >
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]  ">
                          {item.examName}
                        </td>
                        <td className=" px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c] text-left">
                          {item.marksObtained}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.maxMarks}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.percentage}%
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#ffffff]">
                          <span
                            className={`inline-block min-w-12 px-3 py-1 rounded text-white font-semibold text-center ${
                              gradeColors[item.grade] || "bg-gray-500"
                            }`}
                          >
                            {item.grade}
                          </span>
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          #{item.rank}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          <span
                            className={`inline-flex items-center gap-2 px-2 py-1  rounded font-semibold min-w-24 text-center justify-center ${
                              ResultColors[item.result] ||
                              "bg-gray-200 text-gray-700"
                            }`}
                          >
                            <span className="text-lg leading-none">•</span>
                            {item.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );

    case "Attandance":
      return <div>Attendance Content</div>;

    case "Fees":
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

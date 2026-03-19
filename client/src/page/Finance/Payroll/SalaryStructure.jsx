import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

{
  /* <================================== img ================================> */
}
import iron from "../../../assets/images/iron-man.jpg";
import spy from "../../../assets/images/spider-man.jpeg";
import thor from "../../../assets/images/thor.jpg";
import captain from "../../../assets/images/captain.jpg";
import king from "../../../assets/images/king.jpg";
import hulk from "../../../assets/images/hulk.jpeg";
import batman from "../../../assets/images/batman.jpg";
import flash from "../../../assets/images/flash.jpg";
import diana from "../../../assets/images/wonder-women.jpg";
import superman from "../../../assets/images/super.jpg";

function SalaryStructure() {
  const [showApplyConcessionType, setShowApplyConcessionType] = useState(false);

  const conscessiondata = [
    {
      id: 1,
      studentName: "Iron Man",
      studId: "HERO-001",
      role: "Teacher",
      department: "Mathematics",
      basic: 35000,
      hra: 8000,
      deduction: 2000,
      allowances: 3000,
      netSalary: 44000,
      img: iron,
    },
    {
      id: 2,
      studentName: "Spider Man",
      studId: "HERO-002",
      role: "Accountant",
      department: "Finance",
      basic: 42000,
      hra: 9000,
      deduction: 2500,
      allowances: 3500,
      netSalary: 52000,
      img: spy,
    },
    {
      id: 3,
      studentName: "Thor",
      studId: "HERO-003",
      role: "Admin",
      department: "Administration",
      basic: 38000,
      hra: 8500,
      deduction: 2200,
      allowances: 2800,
      img: thor,
    },
    {
      id: 4,
      studentName: "Hulk",
      studId: "HERO-004",
      role: "Sports Coach",
      department: "Physical Education",
      basic: 32000,
      hra: 7200,
      deduction: 1600,
      allowances: 2500,
      netSalary: 40100,
      img: hulk,
    },
    {
      id: 5,
      studentName: "Captain America",
      studId: "HERO-005",
      role: "Admin",
      department: "Administration",
      basic: 38000,
      hra: 8500,
      deduction: 2200,
      allowances: 2800,
      img: captain,
    },
    {
      id: 6,
      studentName: "Black Panther",
      studId: "HERO-006",
      role: "Sports Coach",
      department: "Physical Education",
      basic: 32000,
      hra: 7200,
      deduction: 1600,
      allowances: 2500,
      netSalary: 40100,
      img: king,
    },
    {
      id: 7,
      studentName: "Flash",
      studId: "HERO-007",
      role: "Sports Coach",
      department: "Physical Education",
      basic: 32000,
      hra: 7200,
      deduction: 1600,
      allowances: 2500,
      netSalary: 40100,
      img: flash,
    },
    {
      id: 8,
      studentName: "Batman",
      studId: "HERO-008",
      role: "Sports Coach",
      department: "Physical Education",
      basic: 32000,
      hra: 7200,
      deduction: 1600,
      allowances: 2500,
      netSalary: 40100,
      img: batman,
    },
    {
      id: 9,
      studentName: "Superman",
      studId: "HERO-009",
      role: "Sports Coach",
      department: "Physical Education",
      basic: 32000,
      hra: 7200,
      deduction: 1600,
      allowances: 2500,
      netSalary: 40100,
      img: superman,
    },
    {
      id: 10,
      studentName: "Wonder Woman",
      studId: "HERO-010",
      role: "Sports Coach",
      department: "Physical Education",
      basic: 32000,
      hra: 7200,
      deduction: 1600,
      allowances: 2500,
      netSalary: 40100,
      img: diana,
    },
  ];

  return (
    <div className="">
      {/* <-------------====== Header ------------=======> */}
      <div className="bg-white mt-4 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Employee Salary Structure
              </span>
              <span className="text-sm text-[#696969]">
                Configure pay structure and salary components
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex gap-3">
            <Link to="/ConcessionType">
              <button className="flex items-center gap-2 px-6 py-3 text-[#696969] font-semibold text-[16px] border border-[#9c9c9c] rounded-lg">
                <IoMdAdd size={20} />
                Add allowance head
              </button>
            </Link>
            <button
              className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg"
              onClick={() => setShowApplyConcessionType(true)}
            >
              <IoMdAdd size={20} />
              Add Salary Structure
            </button>
          </div>
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-6 flex items-center gap-28">
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
          <div className="inline-flex items-center gap-2">
            <div className="flex justify-between">
              <label htmlFor="Role" className=""></label>
              <div className="bg-[#EFF2F2] rounded px-2 py-2">
                <select name="" id="Role" className="border-0 outline-0">
                  <option value="">Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Principal">Principal</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* <============================ Table ============================> */}
        <div className="mt-8 border border-[#e6e6e6] rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e6e6e6]">
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold flex justify-between items-center">
                  <span>Student</span>
                  <span>
                    <RxCaretSort />
                  </span>
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  Role
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  Department
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  Basic
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  HRA
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold flex justify-between items-center">
                  Deduction
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  Allowances
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  Net Salary
                </th>
                <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {conscessiondata.map((item, index) => (
                <tr key={index} className="border-b border-[#e6e6e6]">
                  <td className="px-4 py-3 text-left font-normal text-[#12516E] text-[14px]">
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
                          {item.studentName}
                        </span>
                        <span className="text-sm text-[#9c9c9c] font-semibold">
                          {item.studId}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex w-full items-center justify-center px-3 py-1 text-sm font-medium border border-[#007AFF] text-[#007AFF] rounded-md">
                      {item.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-left font-normal text-[14px]">
                    {item.department}
                  </td>
                  <td className="px-4 py-3 text-left font-normal text-[14px]">
                    ₹ {item.basic}
                  </td>
                  <td className="px-4 py-3 text-left font-normal text-[14px]">
                     ₹ {item.hra}
                  </td>
                  <td className="px-4 py-3 text-left font-normal text-[14px] text-[#DC2626]">
                     ₹ {item.deduction}
                  </td>
                  <td className="px-4 py-3 text-left font-normal text-[14px]">
                     ₹ {item.allowances}
                  </td>

                  <td className="px-4 py-3 text-left font-normal text-[14px]">
                     ₹ {item.netSalary}
                  </td>
                  <td className="px-4 py-3 text-left font-normal text-[14px] flex gap-2 items-center text-[#9C9C9C]">
                    <span className="">
                      <IoEyeOutline size={18} />
                    </span>
                    <span>
                      <FiEdit size={18} />
                    </span>
                    <span>
                      <RiDeleteBinLine size={18} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>

      {showApplyConcessionType && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center z-50 p-3 sm:p-6"
          onClick={() => setShowApplyConcessionType(false)}
        >
          <div
            className="bg-white w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-xl shadow-lg relative p-4 sm:p-6 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#1c1c1c] font-semibold">
                  Add New Concession
                </span>
                <span className=" text-[#696969] font-normal text-[18px]">
                  Grant a fee concession or schloarship to a student
                </span>
              </div>
              <div>
                <button
                  onClick={() => setShowApplyConcessionType(false)}
                  className="text-xl"
                >
                  <IoClose size={28} />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="academicyear">Academic years</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <select
                    name=""
                    id="academicyear"
                    className="border-none outline-none w-full"
                  >
                    <option value="">Select Academic Year</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="class">Class</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <select
                    name=""
                    id="class"
                    className="border-none outline-none w-full"
                  >
                    <option value="">Select Class</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="section">Section</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <select
                    name=""
                    id="section"
                    className="border-none outline-none w-full"
                  >
                    <option value="">Select Section</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="student">Student</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <select
                    name=""
                    id="student"
                    className="border-none outline-none w-full"
                  >
                    <option value="">Select Student</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="concessiontype">Concession Type</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <select
                    name=""
                    id="concessiontype"
                    className="border-none outline-none w-full"
                  >
                    <option value="">Select Concession type</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="discount">Discount percentange(%)</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <input
                    type="text"
                    name=""
                    id="discount"
                    placeholder="50%"
                    className="border-none outline-none w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <label htmlFor="reason">Reason / Justification</label>
              <textarea
                name=""
                id="reason"
                placeholder="provide details reason for granting this concession"
                className="w-full resize-none px-3 py-4 outline-none border border-[#E6E6E6] rounded-xl"
              ></textarea>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="validstartdate">Valid from</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <input
                    type="date"
                    name=""
                    id="validstartdate"
                    placeholder=""
                    className="border-none outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="validuntil">Valid Until</label>
                <div className="border border-[#E6E6E6] px-4 py-3 rounded-xl">
                  <input
                    type="date"
                    name=""
                    id="validuntil"
                    placeholder=""
                    className="border-none outline-none w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <span>Supporting Document</span>
              <div className="w-full">
                <div
                  className="relative w-full border border-dashed border-[#118AB2] rounded-lg bg-white px-2 py-4 cursor-pointer hover:bg-[#F8FBFF] hover:border-[#0B77FF] transition"
                  onClick={() => document.getElementById("doc-upload").click()}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <FiUpload className="text-[#118AB2]" size={28} />

                    <p className="flex flex-wrap justify-center gap-1 mt-2 text-[16px] text-[#1c1c1c] font-medium">
                      Drag & Drop to upload or
                      <span className="text-[#0B77FF] font-semibold ml-1">
                        Browse
                      </span>
                    </p>

                    <p className="mt-1 text-[14px] text-[#696969]">
                      Only PDF files are allowed.
                    </p>

                    {/* Hidden Input */}
                    <input
                      id="doc-upload"
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
                <span className="text-[12px] text-[#6A7282] font-normal">
                  upload certificates, income proof, or the other supporting
                  document
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-2 justify-end">
              <button
                className="flex items-center gap-2 px-6 py-3 text-[#696969] font-semibold text-[16px] border border-[#9C9C9C] rounded-lg"
                onClick={() => setShowApplyConcessionType(false)}
              >
                Cancel
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg">
                Create Fee Head
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SalaryStructure;

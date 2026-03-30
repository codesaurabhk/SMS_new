import React, { useState } from "react";
import Pagination from "../../../components/Pagination";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

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

function PaySlip() {
  const conscessiondata = [
    {
      id: 1,
      studentName: "Iron Man",
      studId: "HERO-001",
      role: "Teacher",
      department: "Mathematics",
      generateDate: "2026-03-01",
      paidDate: "2026-03-05",
      status: "Paid",
      img: iron,
    },
    {
      id: 2,
      studentName: "Spider Man",
      studId: "HERO-002",
      role: "Accountant",
      department: "Finance",
      generateDate: "2026-03-02",
      paidDate: "2026-03-06",
      status: "Pending",
      img: spy,
    },
    {
      id: 3,
      studentName: "Thor",
      studId: "HERO-003",
      role: "Admin",
      department: "Administration",
      generateDate: "2026-03-03",
      paidDate: "2026-03-07",
      status: "Paid",
      img: thor,
    },
    {
      id: 4,
      studentName: "Hulk",
      studId: "HERO-004",
      role: "Sports Coach",
      department: "Physical Education",
      generateDate: "2026-03-04",
      paidDate: "2026-03-08",
      status: "Hold",
      img: hulk,
    },
    {
      id: 5,
      studentName: "Captain America",
      studId: "HERO-005",
      role: "Admin",
      department: "Administration",
      generateDate: "2026-03-05",
      paidDate: "2026-03-09",
      status: "Paid",
      img: captain,
    },
    {
      id: 6,
      studentName: "Black Panther",
      studId: "HERO-006",
      role: "Sports Coach",
      department: "Physical Education",
      generateDate: "2026-03-06",
      paidDate: "2026-03-10",
      status: "Pending",
      img: king,
    },
    {
      id: 7,
      studentName: "Flash",
      studId: "HERO-007",
      role: "Sports Coach",
      department: "Physical Education",
      generateDate: "2026-03-07",
      paidDate: "2026-03-11",
      status: "Paid",
      img: flash,
    },
    {
      id: 8,
      studentName: "Batman",
      studId: "HERO-008",
      role: "Sports Coach",
      department: "Physical Education",
      generateDate: "2026-03-08",
      paidDate: "2026-03-12",
      status: "Pending",
      img: batman,
    },
    {
      id: 9,
      studentName: "Superman",
      studId: "HERO-009",
      role: "Sports Coach",
      department: "Physical Education",
      generateDate: "2026-03-09",
      paidDate: "2026-03-13",
      status: "Paid",
      img: superman,
    },
    {
      id: 10,
      studentName: "Wonder Woman",
      studId: "HERO-010",
      role: "Sports Coach",
      department: "Physical Education",
      generateDate: "2026-03-10",
      paidDate: "2026-03-14",
      status: "Processed",
      img: diana,
    },
  ];

  const statusStyle = {
    Paid: "bg-[#D4EDDA] text-[#009638]",
    Hold: "bg-[#F8D7DA] text-[#C92131]",
    Pending: "bg-[#FDEBD0] text-[#D35400]",
    Processed: "bg-[#E3F2FD] text-[#1565C0]",
  };

  return (
    <div>
      {/* <-------------====== Header ------------=======> */}
      <div className="bg-white mt-4 p-4 rounded-lg shadow-lg">
        {/* LEFT CONTENT */}
        <div>
          <p className="flex flex-col">
            <span className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[#1c1c1c] font-semibold">
              Pay slip Genration & Distribution
            </span>
            <span className="text-sm text-[#696969] lg:text-[16px] md:text-[14px] sm:text-[12px] font-normal">
              Download or email salary slips to employees
            </span>
          </p>
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-8 flex items-center gap-28">
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
                  <option value="">Status</option>
                  <option value="Admin">Proceed</option>
                  <option value="Accountant">Pending</option>
                  <option value="Accountant">Hold</option>
                  <option value="Accountant">Paid</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* <============================ Table ============================> */}
        <div className="mt-8 border border-[#e6e6e6] rounded-lg overflow-x-auto">
          <table className="min-w-[1000px] w-full">
            {/* ================= HEADER ================= */}
            <thead>
              <tr className="border-b border-[#e6e6e6]">
                <th className="px-3 py-2 sm:px-5 sm:py-4 text-left text-[12px] sm:text-[14px] font-semibold text-[#1c1c1c]">
                  <div className="flex justify-between items-center">
                    <span>Staff</span>
                    <RxCaretSort />
                  </div>
                </th>

                <th className="px-3 py-2 sm:px-5 sm:py-4 text-left text-[12px] sm:text-[14px] font-semibold text-[#1c1c1c]">
                  Role
                </th>

                {/* Hide on small screens */}
                <th className="hidden sm:table-cell px-3 py-2 sm:px-5 sm:py-4 text-left text-[14px] font-semibold text-[#1c1c1c]">
                  Department
                </th>

                <th className="px-3 py-2 sm:px-5 sm:py-4 text-left text-[12px] sm:text-[14px] font-semibold text-[#1c1c1c]">
                  Genrated Date
                </th>

                {/* Hide on small screens */}
                <th className="hidden sm:table-cell px-3 py-2 sm:px-5 sm:py-4 text-left text-[14px] font-semibold text-[#1c1c1c]">
                  Paid Date
                </th>

                <th className="px-3 py-2 sm:px-5 sm:py-4 text-left text-[12px] sm:text-[14px] font-semibold text-[#1c1c1c]">
                  Status
                </th>

                <th className="px-3 py-2 sm:px-5 sm:py-4 text-center text-[12px] sm:text-[14px] font-semibold text-[#1c1c1c]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {conscessiondata.map((item, index) => (
                <tr key={index} className="border-b border-[#e6e6e6]">
                  {/* STUDENT */}
                  <td className="px-3 py-2 sm:px-4 sm:py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col leading-tight">
                        <span className="text-[#12516E] font-semibold text-[12px] sm:text-[14px]">
                          {item.studentName}
                        </span>
                        <span className="text-[10px] sm:text-sm text-[#9c9c9c] font-semibold">
                          {item.studId}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* ROLE */}
                  <td className="px-3 py-2 sm:px-4 sm:py-3">
                    <span className="inline-flex w-full items-center justify-center px-2 py-1 text-[10px] sm:text-sm font-medium border border-[#007AFF] text-[#007AFF] rounded-md">
                      {item.role}
                    </span>
                  </td>

                  {/* DEPARTMENT */}
                  <td className="hidden sm:table-cell px-4 py-3 text-[14px]">
                    {item.department}
                  </td>

                  {/* BASIC */}
                  <td className="px-3 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-[14px]">
                    {item.generateDate}
                  </td>

                  {/* HRA */}
                  <td className="hidden sm:table-cell px-4 py-3 text-[14px]">
                    {item.paidDate}
                  </td>

                  {/* DEDUCTION */}
                  <td className="px-4 py-3 text-center text-sm font-semibold">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-medium ${statusStyle[item.status] || "bg-gray-100 text-gray-600"}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* ACTION */}
                  <td className="px-3 py-2 sm:px-4 sm:py-3">
                    <div className="flex items-center justify-center gap-3 text-[#9C9C9C]">
                      <IoEyeOutline className="text-[16px] sm:text-[18px] cursor-pointer hover:text-[#007AFF]" />
                      <FiEdit className="text-[16px] sm:text-[18px] cursor-pointer hover:text-green-600" />
                      <RiDeleteBinLine className="text-[16px] sm:text-[18px] cursor-pointer hover:text-red-500 text-[#DC2626]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default PaySlip;

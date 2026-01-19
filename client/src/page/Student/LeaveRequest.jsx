import React, { useRef, useState } from "react";
/* <----------------------------------------------- Import gif -------------------------------------------------------> */
import task from "../../assets/images/task.gif";
import rejected from "../../assets/images/rejected.gif";
import file from "../../assets/images/file.gif";
import id from "../../assets/images/idcard.gif";

/* <----------------------------------------------- Import icons -------------------------------------------------------> */
import { IoAdd } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { format } from "date-fns";
import { LuCalendarDays } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";
import { DayPicker } from "react-day-picker";

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
import { Link } from "react-router-dom";

function LeaveRequest() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [applyLeave, setApplyLeave] = useState(false);

  const leaveCardData = [
    {
      leaveType: "Total Request",
      data: "7",
      gif: task,
      summary: "All Leave Type",
    },
    {
      leaveType: "Pending",
      data: "3",
      gif: file,
      summary: "Awaiting Request",
    },
    {
      leaveType: "Approved",
      data: "3",
      gif: id,
      summary: "Request Approved",
    },
    {
      leaveType: "Rejected",
      data: "1",
      gif: rejected,
      summary: "Request Rejected",
    },
  ];

  const studentData = [
    {
      student: "katniss Everdeen",
      studentId: "001",
      img: everdeen,
      class: "12B",
      parent: "Peeta Mallak",
      number: 620489625,
      status: "Approved",
      appliedDate: "Oct 01, 2026",
      time: "10 : 30 am",
      startDate: "Oct 03, 2026",
      endDate: "Oct 05, 2026",
      totalDays: "2 Days",
      leaveType: "Casual Leave",
      reason: "Family work at home",
    },

    {
      student: "Goku",
      studentId: "002",
      img: goku,
      class: "11B",
      parent: "Bodok",
      number: 620489855,
      status: "Rejected",
      appliedDate: "Oct 02, 2026",
      time: "11 : 00 am",
      startDate: "Oct 04, 2026",
      endDate: "Oct 06, 2026",
      totalDays: "2 Days",
      leaveType: "Personal Leave",
      reason: "Going out of station",
    },

    {
      student: "Katniss langford",
      studentId: "010",
      img: langford,
      class: "1B",
      parent: "Jensen",
      number: 620489625,
      status: "Approved",
      appliedDate: "Oct 03, 2026",
      time: "09 : 15 am",
      startDate: "Oct 04, 2026",
      endDate: "Oct 04, 2026",
      totalDays: "1 Day",
      leaveType: "Emergency Leave",
      reason: "Urgent home work",
    },

    {
      student: "Homelander",
      img: homelander,
      studentId: "003",
      class: "10C",
      parent: "Soldier Boy",
      number: 620489625,
      status: "Pending",
      appliedDate: "Oct 04, 2026",
      time: "12 : 10 pm",
      startDate: "Oct 06, 2026",
      endDate: "Oct 08, 2026",
      totalDays: "2 Days",
      leaveType: "Medical Leave",
      reason: "Doctor suggested rest",
    },

    {
      student: "Thanos",
      studentId: "004",
      img: thanos,
      class: "9A",
      parent: "A'Lars",
      number: 629639625,
      status: "Rejected",
      appliedDate: "Oct 01, 2026",
      time: "02 : 00 pm",
      startDate: "Oct 02, 2026",
      endDate: "Oct 03, 2026",
      totalDays: "1 Day",
      leaveType: "Casual Leave",
      reason: "Personal work",
    },

    {
      student: "Joffrey Baratheon",
      img: Joffrey,
      studentId: "005",
      class: "11A",
      parent: "Robert Baratheon",
      number: 620489625,
      status: "Approved",
      appliedDate: "Oct 05, 2026",
      time: "03 : 40 pm",
      startDate: "Oct 06, 2026",
      endDate: "Oct 06, 2026",
      totalDays: "1 Day",
      leaveType: "Sick Leave",
      reason: "Headache and fever",
    },

    {
      student: "Annembella",
      img: doll,
      studentId: "006",
      class: "11B",
      parent: "Nun",
      number: 600489625,
      status: "Pending",
      appliedDate: "Oct 06, 2026",
      time: "01 : 20 pm",
      startDate: "Oct 08, 2026",
      endDate: "Oct 10, 2026",
      totalDays: "2 Days",
      leaveType: "Medical Leave",
      reason: "Cold and cough",
    },

    {
      student: "optimus Prime",
      img: prime,
      studentId: "007",
      class: "7A",
      parent: "Bumble Bee",
      number: 620489625,
      status: "Rejected",
      appliedDate: "Oct 02, 2026",
      time: "09 : 45 am",
      startDate: "Oct 03, 2026",
      endDate: "Oct 04, 2026",
      totalDays: "1 Day",
      leaveType: "Personal Leave",
      reason: "Function at home",
    },

    {
      student: "Gamora ",
      img: gamora,
      studentId: "008",
      class: "12A",
      parent: "Thanos",
      number: 620489625,
      status: "Pending",
      appliedDate: "Oct 03, 2026",
      time: "04 : 10 pm",
      startDate: "Oct 05, 2026",
      endDate: "Oct 06, 2026",
      totalDays: "1 Day",
      leaveType: "Emergency Leave",
      reason: "Urgent family issue",
    },

    {
      student: "Meave Wiley",
      img: meave,
      studentId: "009",
      class: "12C",
      parent: "Otis Milburn",
      number: 620489625,
      appliedDate: "Oct 05, 2026",
      time: "13 : 00 pm",
      status: "Approved",
      endDate: "Oct 07, 2026",
      startDate: "Oct 07, 2026",
      totalDays: "1 Day",
      leaveType: "Sick Leave",
      reason: "Fever and Cold",
    },
  ];

  const statusStyle = {
    Approved: "bg-[#D4EDDA] text-[#009638]",
    Pending: "bg-[#E3F2FD] text-[#1565C0]",
    Rejected: "bg-[#F8D7DA] text-[#C92131]",
  };

  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {leaveCardData.map((id, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <div>
              <span className="text-[16px] font-normal text-[#1C1C1C]">
                {id.leaveType}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <span className="text-[28px] font-bold text-[#1C1C1C]">
                  {id.data}
                </span>
              </div>
              <div className="w-16 h-16">
                <img
                  src={id.gif}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-1 font-semibold text-[14px]">
              <span className="text-[#696969]">{id.summary}</span>
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
                Leave Request
              </span>
              <span className="text-sm text-[#696969]">
                Submit and mange student leave request
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div>
            <button
              onClick={() => setApplyLeave(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg"
            >
              <IoAdd className="text-white" />
              Leave request
            </button>
          </div>

          {/* Popup Modal */}
          {applyLeave && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#9c9c9c]/10 backdrop-blur-sm px-3"
              onClick={() => setApplyLeave(false)} // click outside close
            >
              {/* Modal Box */}
              <div
                className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6 relative"
                onClick={(e) => e.stopPropagation()} // stop closing when clicking inside
              >
                {/* Close Button */}
                <button
                  onClick={() => setApplyLeave(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black"
                >
                  <IoClose size={22} />
                </button>

                {/* Heading */}
                <h2 className="font-semibold text-[#0B3142] text-[18px]">
                  Submit Leave Request
                </h2>
                <p className="font-normal text-[#9C9C9C] text-[16px]  mt-1">
                  Fill in the details for the student leave request
                </p>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-[#1c1c1c]">
                      Select Class
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                      <option value="" disabled hidden>
                        Select Class
                      </option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-[#1c1c1c]">
                      Select Student <span className="text-red-500">*</span>
                    </label>
                    <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                      <option value="" disabled hidden>
                        Select Student
                      </option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-6">
                  <label className="text-sm text-[#1c1c1c]">
                    Leave type
                    <span className="text-red-500">*</span>
                  </label>
                  <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                    <option value="" disabled hidden>
                      Select leave
                    </option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-5 ">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-[#1c1c1c]">
                      Start date
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Enter Student name"
                      className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-[#1c1c1c]">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Enter Student name"
                      className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-6">
                  <label className="text-sm text-[#1c1c1c]">leave Type</label>
                  <textarea
                    placeholder="Provide Detailed reason for leave request"
                    className="w-full border rounded-sm p-2"
                  ></textarea>
                </div>

                <div className="w-full mt-6">
                  {/* Heading */}
                  <p className="text-sm font-medium text-[#1c1c1c] mb-2">
                    Supporting Document
                    <span className="text-[#1c1c1c]">(Optional)</span>
                  </p>

                  {/* Upload Box */}
                  <div
                    onClick={() => fileRef.current.click()}
                    className="w-full rounded-md border-4 border-dashed border-[#118AB2] px-4 py-6 flex flex-col items-center justify-center cursor-pointer bg-white"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#118AB2]">
                      <FiUpload size={28} />
                    </div>

                    {/* Text */}
                    <p className="text-[16px] text-[#1c1c1c] mt-2 font-medium">
                      Drag & Drop to upload or
                      <span className="text-[#0B3142] font-semibold">
                        Browse
                      </span>
                    </p>

                    <p className="text-[14px] text-[#696969] mt-1">
                      Only Pdf file are allowed.
                    </p>

                    {/* Show file name after select */}
                    {fileName && (
                      <p className="text-xs text-green-600 mt-3 font-semibold">
                        Selected: {fileName}
                      </p>
                    )}

                    {/* Hidden input */}
                    <input
                      ref={fileRef}
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setApplyLeave(false)}
                    className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button className="px-5 py-2 rounded-md bg-[#0B3142] text-white hover:opacity-90">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
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
            <div className="flex flex-col sm:flex-row gap-3 ">
              <div className="relative w-fit ">
                {/* PILL INPUT */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between gap-2 bg-[#F2F5F4] rounded-lg px-5 py-3"
                >
                  <span className="text-[16px] font-medium text-[#1C1C1C]">
                    {format(date, "d MMMM, yyyy")}
                  </span>

                  {/* Calendar Icon */}
                  <LuCalendarDays className="w-6 h-6 text-[#1C1C1C]" />
                </button>

                {/* CALENDAR POPOVER */}
                {open && (
                  <div className="absolute z-50 mt-3 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4">
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={(selected) => {
                        if (selected) {
                          setDate(selected);
                          setOpen(false);
                        }
                      }}
                      className=""
                      classNames={{
                        caption: "flex justify-between items-center mb-4",
                        caption_label: "font-semibold text-[16px]",
                        nav_button:
                          "h-8 w-8 rounded-lg border flex items-center justify-center hover:bg-gray-100",
                        head_cell: "text-[12px] font-medium text-gray-500",
                        day: "h-9 w-9 rounded-full hover:bg-gray-100",
                        day_selected:
                          "bg-[#0F3D4C] text-white hover:bg-[#0F3D4C]",
                        day_today: "font-bold text-[#0F3D4C]",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <label For="Export"></label>
            <select
              name=""
              id="Export"
              className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
            >
              <option value="">All Status</option>
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
                    Duration
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Created At
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Leave Type
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Reason
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Status
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

                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      <Link to="/StudentDetails">{item.class}</Link>
                    </td>
                    <td className="px-4 py-3 text-left text-[14px] font-normal">
                      <Link to="/StudentDetails">
                        <div className="flex gap-2">
                          <span className="text-[#026C7C]">
                            {item.startDate}
                          </span>{" "}
                          |{" "}
                          <span className="text-[#B6174B]">{item.endDate}</span>
                        </div>
                        <div>
                          <span className="text-[#9C9C9C]">
                            {item.totalDays}
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-left text-[14px] font-normal">
                      <div className="flex">
                        <span className="text-[#1c1c1c]">
                          {item.appliedDate}
                        </span>
                        <span className="text-[#9c9c9c]">•{item.time}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-left text-[14px] font-normal">
                      {item.leaveType}
                    </td>
                    <td className="px-4 py-3 text-left text-[14px] font-normal">
                      <textarea
                        defaultValue={item.reason}
                        className="w-full border px-2 py-1 rounded text-[#696969] text-14px font-normal border-[#e6e6e6] bg-transparent"
                        rows={2}
                        readOnly
                      />
                    </td>

                    <td className="px-4 py-3 text-left text-[14px] font-normal">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold ${
                          statusStyle[item.status] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <span className="text-sm leading-none">
                          •{item.status}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                      <SiTicktick size={19} className="text-[#009638]" />
                      <MdOutlineCancel size={20} className="text-[#DC2626]" />
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

export default LeaveRequest;

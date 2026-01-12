import React, { useState } from "react";
import "../../CSS/Style.css";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import calender from "../../assets/images/calender.gif";
import calender3 from "../../assets/images/calender3.gif";
import calender4 from "../../assets/images/calender4.gif";
import calender5 from "../../assets/images/calender5.gif";

{
  /* <---------------------------------------------- icon -----------------------------------------------------> */
}
import { TbFileImport } from "react-icons/tb";
import { GrUserAdd } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { FiEdit, FiSearch } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import meave from "../../assets/images/meave.jpg";
import Pagination from "../../components/Pagination";
import { Link, Navigate, useNavigate } from "react-router-dom";

const cardData = [
  {
    des: "Present Staff",
    number: "200",

    text: "Teacher: 176/180 • Others Staff :19/20",
    gif: calender3,
  },
  {
    des: "Absent Staff",
    number: "180",

    text: "Teacher: 3 • others staff: 2",
    gif: calender4,
  },
  {
    des: "On-Leave",
    number: "1",

    text: "Staff on Leave",
    gif: calender5,
  },
  {
    des: "Attendance Rate",
    number: "94%",
    highlight: "+2.1%",
    text: "from the last month",
    gif: calender,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */
const staffData = [
  {
    staff: "Anushka Sharma",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Ranveer Singh",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Absent",
  },
  {
    staff: "Kareena Kapoor",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Leave",
  },
  {
    staff: "Sharaddha Kapoor",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Hrithik Roshan",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Virat Kohli",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Jhanvi Kapoor",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Ranbir Kapoor",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Ananya Panday",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
  {
    staff: "Ananya Panday",
    empId: "EMP123456",
    img: everdeen,
    shiftfrom: "9:00 AM",
    shiftto: "5:00 PM",
    logintime: "9:10 AM",
    logouttime: "5:00 PM",
    hours: "7h 50m",
    status: "Present",
  },
];

const absentStaff = [
  {
    staffname: "Nico Robin",
    empId: "EMP654321",
    img: everdeen,
    reason: "No information",
    status: "Absent",
    role: "Teacher",

  },
  {
    staffname: "Makima",
    empId: "EMP654321",
    img: everdeen,
    reason: "No information",
    status: "Absent",
    role: "Receptionist",

  },
  {
    staffname: "Dragon",
    empId: "EMP654321",
    img: meave,
    reason: "No information",
    status: "Absent",
    role: "Teacher",

  },
  {
    staffname: "Sanji",
    empId: "EMP654321",
    img: meave,
    reason: "No information",
    status: "Absent",
    role: "Teacher",

  },
  {
    staffname: "Armin",
    empId: "EMP654321",
    img: meave,
    reason: "No information",
    status: "Absent",
    role: "Librarian",

  },
  {
    staffname: "Meavea Johnson",
    empId: "EMP654321",
    img: meave,
    reason: "Sick Leave",
    status: "Leave",
    role: "Teacher",

  },

]

const StaffAttendance = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();
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
                <p className="mt-4 text-[14px] font-medium text-[#6B7280]">
                  {item.highlight && (
                    <span className="text-[#009638] font-semibold mr-1">
                      {item.highlight}
                    </span>
                  )}
                  {item.text}
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

      <div className="box-shadow mt-3 bg-white rounded-xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Attendance Tracking
              </span>
              <span className="text-sm text-[#696969]">
                Manage staff attendance
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 ">
            <div className="relative w-fit ">
              {/* PILL INPUT */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between gap-2 bg-[#F2F5F4] rounded-lg px-5 py-3 w-[200px]"
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
                    className="!p-0"
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
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-3 p-4 flex items-center gap-36">
          {/* SEARCH */}
          <div className="flex-1">
            <span></span>
            <input
              type="search"
              placeholder="🔎︎ Search staff by name or staff id..."
              className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="inline-flex items-center gap-3">
            <select
              name=""
              id="Section"
              className="bg-[#EFF2F2] rounded px-8 py-2 border-0 outline-0"
            >
              <option value="">All</option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>

            <select
              name=""
              id="Export"
              className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
            >
              <option value="">Status</option>
              <option value="">Absent</option>
              <option value="">Present</option>
              <option value="">Leave</option>
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
                    <div className="flex items-center gap-1">
                      <span className="text-[#9C9C9C]">
                        <PiArrowsDownUpThin />
                      </span>
                      <span>Staff</span>
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Shift</span>
                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Login Time
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Logout Time
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Hours
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
                {staffData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => Navigate("/staffDetails")}
                    className="border-b border-[#e6e6e6]"
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
                            {item.staff}
                          </span>
                          <span className="text-sm text-[#9c9c9c] font-semibold">
                            {item.empId}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      {/* <Link to="/staffDetails"> */}
                      <span className="flex items-center">
                        <span className="bg-[#B5FFD1] text-[#009638] py-1 px-3 rounded-2xl">
                          {item.shiftfrom}
                        </span>
                        <HiOutlineArrowNarrowRight
                          size={17}
                          className="text-[#9C9C9C] ml-1 mr-1"
                        />
                        <span className="bg-[#FBD1D1] text-[#DC2626] py-1 px-3 rounded-2xl">
                          {item.shiftto}
                        </span>
                      </span>
                      {/* </Link> */}
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      {item.logintime}
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      {item.logouttime}
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <span>{item.hours}</span>
                    </td>
                    <td>
                      <div className="relative flex h-[32px] w-[87px] items-center justify-center">
                        {/* Glow layer */}
                        <span
                          className={`absolute inline-flex h-full w-full rounded-[25px] opacity-20
        ${item.status === "Present"
                              ? "bg-[#009638]"
                              : item.status === "Absent"
                                ? "bg-[#DC3545]"
                                : "bg-[#F4A100]"
                            }`}
                        ></span>

                        {/* Main pill */}
                        <span
                          className={`relative inline-flex h-full w-full items-center justify-center gap-2 rounded-[25px] px-3 text-sm font-medium
        ${item.status === "Present"
                              ? "bg-[#D4EDDA] text-[#009638]"
                              : item.status === "Absent"
                                ? "bg-[#F8D7DA] text-[#C92131]"
                                : "bg-[#FFEDB4] text-[#A14700]"
                            }`}
                        >
                          {/* Dot */}
                          <span
                            className={`h-2 w-2 rounded-full
          ${item.status === "Present"
                                ? "bg-[#009638]"
                                : item.status === "Absent"
                                  ? "bg-[#DC3545]"
                                  : "bg-[#F4A100]"
                              }`}
                          ></span>

                          {item.status}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                      {/* <Link to="/staffDetails">
                        <CgProfile className="w-5 h-5 text-[#9C9C9C]" />
                      </Link> */}
                      <FiEdit
                        onClick={() => navigate("/edit-staffs")}
                        className="w-5 h-5 text-[#9C9C9C] cursor-pointer"
                      />
                      {/* <FaRegFileAlt className="w-5 h-5 text-[#9C9C9C]" />
                      <RiDeleteBin5Line className="w-5 h-5 text-[#FF4B4B]" /> */}
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

      <div className="box-shadow mt-3 bg-white rounded-xl">
        <div className="flex flex-col p-4">
          <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
            Today's Absent Staff
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-3">
          {absentStaff.map((item, index) => (
            <div key={index} className="m-1.5 px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center border border-[#E6E6E6] rounded-sm">
              <div className="flex justify-between  w-full">
                <div className="flex gap-4">
                  <div className="w-13 h-13 rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name + ID */}
                  <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-3">
                      <span className="text-[#12516E] font-semibold">
                        {item.staffname}
                        {/* Meavea Johnson */}
                      </span>
                      <div
                        className={`  border-2 rounded-sm px-1 text-xs ${item.role === "Teacher" ? "border-[#007AFF] text-[#007AFF]" : item.role === "Receptionist" ? "border-[#A8038D] text-[#A8038D]" : item.role === "Librarian" ? "border-[#4BA803] text-[#4BA803]" : "border-[#007AFF] text-[#007AFF]"}  `}
                      >
                        {/* Teacher */}
                        {item.role}
                      </div>
                    </div>
                    <span className="text-sm text-[#9c9c9c] font-normal">
                      {item.empId}
                      {/* EMP654321 */}
                    </span>
                    <span className="font-normal">
                      <span className="text-[#696969]">Reason- </span>
                      {/* No information */}
                      <span
                        className={`${item.reason === "Sick Leave" ? "text-[#F97316] " : "text-[#00ADAD]"} `}
                      > {item.reason}</span>
                    </span>
                  </div>
                </div>
                <div > <span className={` font-normal rounded-sm px-2 py-0.5 ${item.status === "Leave" ? "bg-[#F973161A] text-[#F97316]" : "bg-[#DC26261A] text-[#DC2626]"} `}>
                  {/* Absent */}
                  {item.status}
                </span> </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default StaffAttendance;

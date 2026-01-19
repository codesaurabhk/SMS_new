import React, { useState } from "react";
import "../../CSS/Style.css";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import Teamwork from "../../assets/images/TeamWork.gif";
import calender from "../../assets/images/calender.gif";
import worker from "../../assets/images/worker.gif";
import teacher from "../../assets/images/teacher.gif";

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
import { IoEyeOutline } from "react-icons/io5";
import { PiPrinterLight } from "react-icons/pi";

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
import { Link, Navigate, useNavigate } from "react-router-dom";

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

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */
const staffData = [
  {
    staff: "Anushka Sharma",
    empId: "EMP123451",
    img: everdeen,
    role: "Teacher",
   
  },
  {
    staff: "Ranveer Singh",
    empId: "EMP123452",
    img: everdeen,
    role: "Accountant",
    department: "Finance Department",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "99%",
  },
  {
    staff: "Kareena Kapoor",
    empId: "EMP123453",
    img: everdeen,
    role: "Receptionist",
    department: "Front Office",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "70%",
  },
  {
    staff: "Sharaddha Kapoor",
    empId: "EMP123454",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "95%",
  },
  {
    staff: "Hrithik Roshan",
    empId: "EMP123455",
    img: everdeen,
    role: "Librarian",
    department: "Library Department",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Virat Kohli",
    empId: "EMP123456",
    img: everdeen,
    role: "Super Admin",
    department: "Administration",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Jhanvi Kapoor",
    empId: "EMP123457",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  {
    staff: "Ranbir Kapoor",
    empId: "EMP123458",
    img: everdeen,
    role: "Driver",
    department: "Transport Department",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "80%",
  },
  {
    staff: "Ananya Panday",
    empId: "EMP123459",
    img: everdeen,
    role: "Teacher",
    department: "Academics",
    mob: "+91 00000 00000",
    email: "abc@example.com",
    attendance: "100%",
  },
  

];



const StaffIdCard = () => {
   /* ================= STATES ================= */
  const [selectedStaffIds, setSelectedStaffIds] = useState([]);
  const [previewStaffList, setPreviewStaffList] = useState([]);

  /* ================= CHECKBOX HANDLER ================= */
  const handleCheckboxChange = (empId) => {
    setSelectedStaffIds((prev) =>
      prev.includes(empId)
        ? prev.filter((id) => id !== empId)
        : [...prev, empId]
    );
  };

  /* ================= EYE CLICK HANDLER ================= */
  const handlePreview = () => {
    if (selectedStaffIds.length === 0) {
      alert("Please select at least one staff");
      return;
    }

    const selectedStaff = staffData.filter((staff) =>
      selectedStaffIds.includes(staff.empId)
    );

    setPreviewStaffList(selectedStaff);
  };
  const handleSelectAll = (e) => {
  if (e.target.checked) {
    const allIds = staffData.map(item => item.empId);
    setSelectedStaffIds(allIds);
  } else {
    setSelectedStaffIds([]);
  }
};

  const navigate = useNavigate();
  return (
    <div>
      {/* <--------------------------------------- Card -----------------------------------> */}
      <div
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3"
       >
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
                    className={`${item.text.includes("absent")
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
      <div 
      // className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      className={`grid gap-4 transition-all duration-300
      ${previewStaffList.length > 0 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}
    `}
      >
      <div className="box-shadow mt-3 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Staff ID Card Management 
              </span>
              <span className="text-sm text-[#696969]">
                Generate, print, and manage staff ID cards
              </span>
            </p>
          </div>

          
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-3 p-4 flex items-center gap-36">
          {/* SEARCH */}
          <div className="flex-1">
            
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

            
          </div>
        </div>

        {/* <------------------------------------------ Table ---------------------------------------> */}
        <div className="p-4">
          <div className="w-full border border-[#e6e6e6] rounded-lg overflow-hidden">
            <table className="w-full table  table-responsive">
              <thead className="bg-[#F5F7F7]">
                <tr>
                  {/* <th className="px-4 py-3 text-left">
                  <input type="checkbox"  checked={selectedStaffIds.length === staffData.length}
  onChange={handleSelectAll} />
                </th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold w-[70%]">
                    <div className="flex items-center gap-10">
                       <input type="checkbox" 
                        checked={selectedStaffIds.length === staffData.length}
                         onChange={handleSelectAll} 
                        />
                      
                      <span className="flex  gap-2 items-center"><span className="text-[#9C9C9C]"><PiArrowsDownUpThin /></span>Staff</span>

                    </div>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Role</span>

                    </div>
                  </th>

                  

                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Action
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {staffData.map((item, index) => (
                  <tr
                    key={index}
                    
                    className="border-b border-[#e6e6e6]"
                  >
                    {/* <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedStaffIds.includes(item.empId)}
                      onChange={() => handleCheckboxChange(item.empId)}
                    />
                  </td> */}
                    
                    <td className="px-4 py-3 text-left text-sm font-semibold w-[80%] ">

                      
                        <div className="flex gap-10">
                          <input
                      type="checkbox"
                      checked={selectedStaffIds.includes(item.empId)}
                      onChange={() => handleCheckboxChange(item.empId)}
                    />
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

                    <td className="px-4 py-3 text-left text-sm font-semibold">
  <div className="flex items-center">
    <span
      className={`inline-flex px-4 py-1 rounded-md border ${
        item.role === "Teacher" ? "border-[#007AFF] text-[#007AFF]" :
        item.role === "Accountant" ? "border-[#894B00] text-[#894B00]" :
        item.role === "Receptionist" ? "border-[#A8038D] text-[#A8038D]" :
        item.role === "Librarian" ? "border-[#4BA803] text-[#4BA803]" :
        item.role === "Super Admin" ? "border-[#C1891B] text-[#C1891B]" :
        item.role === "Driver" ? "border-[#00ADAD] text-[#00ADAD]" :
        item.role === "Cleaner" ? "border-[#EF476F] text-[#EF476F]" : ""
      }`}
    >
      {item.role}
    </span>
  </div>
</td>

                   
                   
                    <td className="px-4 py-3    text-sm  font-semibold   ">
                      <div className="flex justify-center gap-3">
                      <IoEyeOutline className="w-5 h-5 text-[#9C9C9C]"  onClick={(e) => {
    e.stopPropagation();
    handlePreview();
  }}/>
                      <PiPrinterLight className="w-5 h-5 text-[#9C9C9C]"/>
                     </div>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      

        

        {/* <------------------------------------------- pagination ---------------------------------> */}
        <Pagination />
      </div>
      <div className="border border-[#e6e6e6] rounded-lg p-4 mt-3 shadow-sm bg-white">
  {previewStaffList.length > 0 && (
        <div className="p-4">
          <h3 className="font-semibold mb-3">
            ID Card Preview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewStaffList.map((staff, index) => (
              <div
                key={index}
                className="w-60 bg-white rounded-xl shadow-md overflow-hidden mx-auto"
              >
                <img
                  src={staff.img}
                  alt=""
                  className="w-full h-37.5 object-cover"
                />

                <div className="p-3 text-center">
                  <p className="font-semibold text-[#C1121F]">
                    {staff.staff}
                  </p>
                  <p className="text-xs text-gray-600">
                    {staff.empId}
                  </p>
                  <p className="mt-2 text-xs">
                    Role: {staff.role}
                  </p>
                  <p className="text-xs">
                    Dept: {staff.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default StaffIdCard; 

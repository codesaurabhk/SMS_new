import React, { useState } from "react";
import "../../CSS/Style.css";
{
  /* <----------------------------------------------- GIF ----------------------------------------------------> */
}
import TotalRooms from "../../assets/images/gate.gif";
import OccupiedRooms from "../../assets/images/OccupiedRooms.gif";
import AvailableRooms from "../../assets/images/AvailableRooms.gif";
import TotalCapacity from "../../assets/images/TotalCapacity.gif";

{
  /* <---------------------------------------------- icon -----------------------------------------------------> */
}
import { TbFileImport } from "react-icons/tb";
import { FiEdit} from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

/* <----------------------------------------------- img -------------------------------------------------------> */
import Pagination from "../../components/Pagination";
import { Link,  useNavigate } from "react-router-dom";

const cardData = [
  {
    des: "Total Rooms",
    number: "14",
    text: "Across all buildings",
    gif: TotalRooms,
  },
  {
    des: "Occupied Rooms",
    number: "5",
    text: "Currently in use",
    gif: OccupiedRooms,
  },
  {
    des: "Available Rooms",
    number: "8",
    text: "Ready for use",
    gif: AvailableRooms,
  },
  {
    des: "Total Capacity",
    number: "587",
    text: "Maximum students",
    gif: TotalCapacity,
  },
];

/* <--------------------------------------------------- student Dummy Data --------------------------------------------> */

const rommData = [
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Active",
  },
  {
    roomdetails: "Room 101",
    roomsize: "600 sq ft",
    location: "Main Building",
    floor: "Ground Floor",
    Type: "Classroom",
    Capacity: "30",
    AssignedToclass: "Class 1 A",
    AssignedToperson: "Sarah Johnson",
    status: "Inactive",
  },
];

const Rooms = () => {
  const [openAddModel, setopenAddModel] = useState(false);
  const [openEditModel, setopenEditModel] = useState(false);
  const [openRoomDetails, setopenRoomDetails] = useState(false);

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
                <p className="font-normal text-[16px] text-[#1C1C1C]">
                  {item.des}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-5 leading-none">
                  {item.number}
                </span>

                <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold ">
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

      <div className="box-shadow mt-6 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Room Management
              </span>
              <span className="text-sm text-[#696969]">
                Manage all school rooms, facilities and allocations
              </span>
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#9C9C9C] font-semibold rounded-lg text-[#9C9C9C] ">
              <TbFileImport className="text-[#9C9C9C]" />
              Bulk Import
            </button>

            <button
              onClick={() => setopenAddModel(true)}
              className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer bg-[#0B3142] text-white border border-[#0B3142] rounded-lg"
            >
              <AiOutlinePlus className="text-white" />
              Add Room
            </button>
          </div>
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-3 p-4 flex items-center gap-36">
          {/* SEARCH */}
          <div className="flex-1">
            <span></span>
            <input
              type="search"
              placeholder="🔎︎ Search here..."
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
              <option value="">Role</option>
              <option value="">Staff</option>
              <option value="">Student</option>
              <option value="">Teacher</option>
              <option value="">pricpal</option>
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
                    <span>Room Details</span>
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Location
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Type
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Capacity
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Assigned To
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {rommData.map((item, index) => (
                  <tr key={index} className="border-b border-[#e6e6e6]">
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">
                      <Link to="/staffDetails">
                        <div className="flex gap-4">
                          <div className=" rounded-full overflow-hidden">
                            <HiOutlineBuildingOffice2
                              size={30}
                              className="text-[#12516E]"
                            />
                          </div>

                          {/* Name + ID */}
                          <div className="flex flex-col leading-tight">
                            <span className="text-[#12516E] font-semibold">
                              {item.roomdetails}
                            </span>
                            <span className="text-sm text-[#9c9c9c] font-normal">
                              {item.roomsize}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    <td className="px-4 py-3 text-left text-sm  font-semibold">
                      <div className="flex flex-col leading-tight">
                        <span className=" font-normal">{item.location}</span>
                        <span className="text-sm text-[#9c9c9c] font-normal">
                          {item.floor}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <span className="border px-8 rounded-md border-[#696969] text-[#696969]">
                        {item.Type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <span>{item.Capacity}</span>
                    </td>
                    <td className="px-4 py-3 text-left text-sm ">
                      <div className="flex flex-col leading-tight">
                        <span className=" font-normal">
                          {item.AssignedToclass}
                        </span>
                        <span className="text-sm text-[#9c9c9c] font-normal">
                          {item.AssignedToperson}
                        </span>
                      </div>
                    </td>

                    <td className="align-middle text-center">
                      <span
                        className={`inline-flex w-25 h-5 items-center justify-center gap-1.5
      rounded-sm px-3 py-1 text-sm font-semibold
      ${
        item.status === "Active"
          ? "bg-[#D4EDDA] text-[#009638]"
          : item.status === "Inactive"
            ? "bg-[#DEDEDE] text-[#696969]"
            : "bg-[#FFEDB4] text-[#A14700]"
      }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full
        ${
          item.status === "Active"
            ? "bg-[#009638]"
            : item.status === "Inactive"
              ? "bg-[#696969]"
              : "bg-[#F4A100]"
        }`}
                        />
                        {item.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-left text-sm  font-semibold flex gap-3 ">
                      <FiEye
                        onClick={() => setopenRoomDetails(true)}
                        className="w-5 h-5 text-[#9C9C9C]"
                      />
                      <FiEdit
                        onClick={() => setopenEditModel(true)}
                        className="w-5 h-5 text-[#9C9C9C] cursor-pointer"
                      />
                      <RiDeleteBin5Line className="w-5 h-5 text-[#FF4B4B]" />
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
      {openAddModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg flex flex-col max-h-156">
            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto  mt-3 ">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Add New Room
                  </h2>
                  <p className="text-sm text-[#9C9C9C]">
                    Create a new room with facilities and capacity details
                  </p>
                </div>

                <button
                  onClick={() => setopenAddModel(false)}
                  className="text-gray-400 hover:text-gray-600 text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Main Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Room Name</label>
                  <input
                    type="text"
                    placeholder="eg., Room 501"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none "
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Room Type</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none">
                    <option>Select type</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">Location</label>
                  <input
                    type="text"
                    placeholder="eg., Building A"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Floor</label>
                  <input
                    type="text"
                    placeholder="Floor"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Capacity</label>
                  <input
                    type="number"
                    placeholder="30"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Area (sq ft)</label>
                  <input
                    type="number"
                    placeholder="600"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Status</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none">
                    <option>Select status</option>
                  </select>
                </div>
              </div>

              {/* Furniture */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="text-sm font-semibold">Desks</label>
                  <input
                    type="number"
                    placeholder="4"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Chair</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Teacher Table</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>
              </div>

              {/* Facilities */}
              <div className="mt-6">
                <label className="text-sm font-semibold block mb-3">
                  Facilities
                </label>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 border p-4 rounded-lg border-[#E6E6E6]">
                  {[
                    "Projector",
                    "Whiteboard",
                    "Smart Board",
                    "WiFi",
                    "Air Conditioning",
                    "Computers",
                    "Lab Equipment",
                    "Sound System",
                    "Ventilation",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-6">
                <label className="text-sm font-semibold block mb-1">
                  Note (Optional)
                </label>
                <textarea
                  rows={1}
                  placeholder="Any additional about the room..."
                  className="w-full px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                />
              </div>
            </div>

            {/* Footer (Fixed) */}
            <div className="flex justify-end gap-3 p-6 ">
              <button
                onClick={() => setopenAddModel(false)}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#0B3142] text-white rounded-lg">
                Create Room
              </button>
            </div>
          </div>
        </div>
      )}
      {openEditModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg flex flex-col max-h-156">
            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto  mt-3 ">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Edit Room
                  </h2>
                  <p className="text-sm text-[#9C9C9C]">
                    Update the room information
                  </p>
                </div>

                <button
                  onClick={() => setopenEditModel(false)}
                  className="text-gray-400 hover:text-gray-600 text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Main Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Room Name</label>
                  <input
                    type="text"
                    placeholder="eg., Room 501"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none "
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Room Type</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none">
                    <option>Select type</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">Location</label>
                  <input
                    type="text"
                    placeholder="eg., Building A"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Ground Floor</label>
                  <input
                    type="text"
                    placeholder="Ground Floor"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Capacity</label>
                  <input
                    type="number"
                    placeholder="30"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Area (sq ft)</label>
                  <input
                    type="number"
                    placeholder="600"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Status</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none">
                    <option>Select status</option>
                  </select>
                </div>
              </div>

              {/* Furniture */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="text-sm font-semibold">Desks</label>
                  <input
                    type="number"
                    placeholder="4"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Chair</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Teacher Table</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="w-full mt-1 px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                  />
                </div>
              </div>

              {/* Facilities */}
              <div className="mt-6">
                <label className="text-sm font-semibold block mb-3">
                  Facilities
                </label>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 border p-4 rounded-lg border-[#E6E6E6]">
                  {[
                    "Projector",
                    "Whiteboard",
                    "Smart Board",
                    "WiFi",
                    "Air Conditioning",
                    "Computers",
                    "Lab Equipment",
                    "Sound System",
                    "Ventilation",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-6">
                <label className="text-sm font-semibold block mb-1">
                  Note (Optional)
                </label>
                <textarea
                  rows={1}
                  placeholder="Any additional about the room..."
                  className="w-full px-3 py-2 border rounded-lg border-[#E6E6E6] outline-none"
                />
              </div>
            </div>

            {/* Footer (Fixed) */}
            <div className="flex justify-end gap-3 p-6 ">
              <button
                onClick={() => setopenEditModel(false)}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#0B3142] text-white rounded-lg">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      {openRoomDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white w-209  rounded-2xl shadow-lg  h-auto">
            <div className="bg-linear-to-r from-[#B993D6] to-[#8CA6DB] p-6 m-4 text-white flex justify-between items-center rounded-xl w-201 h-18">
              <div className="flex   gap-5">
                <span className="font-semibold text-[24px]"> Room 101</span>

                <span
                  className="inline-flex w-19  h-5 items-center justify-center gap-1.5
      rounded-sm px-3 py-1 text-sm font-semibold mt-2
      bg-[#D4EDDA] text-[#009638]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full
       bg-[#009638]"
                  />
                  Active
                </span>
              </div>
              <div  onClick={() => setopenRoomDetails(false)} className=" bg-[#FFFFFF59] h-6 w-6 flex justify-center items-center rounded-full">
                <IoClose size={22} className="text-white cursor-pointer" />
              </div>
            </div>
            <div className=" border border-[#E6E6E6] m-4 p-1 rounded-xl  ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                {/* left content */}
                <div>
                  <h3 className="text-sm font-semibold text-black/80 mb-4">
                    
                    Room Information
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-black/50">Type</p>
                      <p className="font-medium">Classroom</p>
                    </div>

                    <div>
                      <p className="text-black/50">Location</p>
                      <p className="font-medium">Main Building, Ground Floor</p>
                    </div>

                    <div>
                      <p className="text-black/50">Area</p>
                      <p className="font-medium">600 sq ft</p>
                    </div>

                    <div>
                      <p className="text-black/50">Capacity</p>
                      <p className="font-medium">30</p>
                    </div>
                  </div>
                </div>
                {/* right content  */}
                <div>
                  <h3 className="text-sm font-semibold text-black/80 mb-4">
                  
                    Assign Information</h3>
                     <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-black/50">Assigned To</p>
                      <p className="font-medium">Class 1-A</p>
                    </div>

                    <div>
                      <p className="text-black/50">Class Teacher</p>
                      <p className="font-medium">Sarah Johnson</p>
                    </div>

                   
                  </div>
                  
                </div>
              </div>
            </div>
             <div className=" border border-[#E6E6E6] m-4 p-1 rounded-xl  ">
               <h3 className="text-sm font-semibold text-black/80 mb-2 m-1 "> Facilities</h3>
               <div className="p-2 gap-2 flex flex-wrap">
                <span className="bg-[#007AFF40] text-[#007AFF] font-normal px-3 py-1 rounded-md text"> Projector</span>
                <span className="bg-[#007AFF40] text-[#007AFF] font-normal px-3 py-1 rounded-md text"> Whiteboard</span>
                <span className="bg-[#007AFF40] text-[#007AFF] font-normal px-3 py-1 rounded-md text"> Air Conditioning</span>
                <span className="bg-[#007AFF40] text-[#007AFF] font-normal px-3 py-1 rounded-md text"> Wifi</span>
               </div>
             </div>
               <div className=" border border-[#E6E6E6] m-4 p-1 rounded-xl  ">
                 <h3 className="text-sm font-semibold text-black/80 mb-4 m-1 "> Furniture</h3>
                 <div className=" grid grid-cols-3 mb-2">
                  
                    <span className="flex flex-col  ml-3 "><span>Desk  </span> <span className="font-medium">4</span></span>
                   <span className="flex flex-col  ml-3 "> <span>Chair </span> <span className="font-medium">2</span></span>
                   <span className="flex flex-col  ml-3 "> <span>Teacher Table </span> <span className="font-medium">2</span></span>
                 
                 </div>
               </div>

                {/* Footer (Fixed) */}
            <div className="flex justify-end gap-3 p-6 ">
              <button
                onClick={() => setopenRoomDetails(false)}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button  onClick={() => {setopenEditModel(true); setopenRoomDetails(false);}} className="px-4 py-2 bg-[#0B3142] text-white rounded-lg">
                Edit Room
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;

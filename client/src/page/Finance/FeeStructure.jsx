import React, { useState } from "react";

import Pagination from "../../components/Pagination";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

function FeeStructure() {
  const [showAddfees, setShowAddFees] = useState(false);

  const FeeStructure = [
    {
      id: 1,
      Class: "Spider Squad",
      Steam: "",
      FeeCategory: "Default",
      TutionFees: "5000",
      Tranpost: "1000",
      Library: "200",
      Exam: "500",
      OtherFees: "1500",
      Total: "8200",
    },
    {
      id: 2,
      Class: "Thunder Titans",
      Steam: "",
      FeeCategory: "Default",
      TutionFees: "5200",
      Tranpost: "900",
      Library: "250",
      Exam: "600",
      OtherFees: "1200",
      Total: "8150",
    },
    {
      id: 3,
      Class: "Iron Legends",
      Steam: "",
      FeeCategory: "Default",
      TutionFees: "5500",
      Tranpost: "1100",
      Library: "300",
      Exam: "700",
      OtherFees: "1400",
      Total: "9000",
    },
    {
      id: 4,
      Class: "Captain Champs",
      Steam: "Power Science",
      FeeCategory: "Default",
      TutionFees: "4800",
      Tranpost: "800",
      Library: "200",
      Exam: "400",
      OtherFees: "1000",
      Total: "7200",
    },
    {
      id: 5,
      Class: "Hulk Heroes",
      Steam: "Ninja Arts",
      FeeCategory: "Default",
      TutionFees: "6000",
      Tranpost: "1300",
      Library: "350",
      Exam: "800",
      OtherFees: "1600",
      Total: "10050",
    },
    {
      id: 6,
      Class: "Flash Force",
      Steam: "",
      FeeCategory: "Default",
      TutionFees: "5300",
      Tranpost: "950",
      Library: "250",
      Exam: "550",
      OtherFees: "1250",
      Total: "8300",
    },
    {
      id: 7,
      Class: "Shadow Ninjas",
      Steam: "",
      FeeCategory: "Default",
      TutionFees: "4700",
      Tranpost: "850",
      Library: "200",
      Exam: "450",
      OtherFees: "900",
      Total: "7100",
    },
    {
      id: 8,
      Class: "Power Rangers",
      Steam: "Default",
      FeeCategory: "",
      TutionFees: "5100",
      Tranpost: "1000",
      Library: "220",
      Exam: "520",
      OtherFees: "1300",
      Total: "8140",
    },
    {
      id: 9,
      Class: "Galaxy Guardians",
      Steam: "Default",
      FeeCategory: "",
      TutionFees: "4500",
      Tranpost: "700",
      Library: "180",
      Exam: "350",
      OtherFees: "800",
      Total: "6530",
    },
    {
      id: 10,
      Class: "Super Sparks",
      Steam: "Default",
      FeeCategory: "Default",
      TutionFees: "4900",
      Tranpost: "900",
      Library: "210",
      Exam: "480",
      OtherFees: "1100",
      Total: "7590",
    },
  ];

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
      {/* <-------------====== Header ------------=======> */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="flex flex-col">
            <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
              Fee Structure
            </span>
            <span className="text-sm text-[#696969]">
              Class-wise & steam-wise fee configuration
            </span>
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-3" onClick={() => setShowAddFees(true)}>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg">
            <IoMdAdd className="text-white" />
            Add Fee Structure
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
        <div className="flex items-center gap-2">
          <label For="status"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name=""
              id="status"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0 text-[14px] font-normal text-[#1c1c1c]"
            >
              <option value="">Class</option>
              <option value="">Class 1</option>
              <option value="">Class 2</option>
              <option value="">Class 3</option>
              <option value="">Class 4</option>
              <option value="">Class 5</option>
              <option value="">Class 6</option>
              <option value="">Class 7</option>
              <option value="">Class 8</option>
              <option value="">Class 9</option>
              <option value="">Class 10</option>
              <option value="">Class 11</option>
              <option value="">Class 12</option>
            </select>
          </div>
        </div>
      </div>

      {/* <================================= Table ==================================> */}
      <div className="mt-8 border border-[#e6e6e6] rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e6e6e6]">
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Class
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Steam
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Fee Category
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Tution Fees
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Transport
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Library
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Exam{" "}
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Other Fees
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Total Amount
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {FeeStructure.map((item, index) => (
              <tr key={index} className="border-b border-[#e6e6e6]">
                <td className="px-4 py-3 text-left font-normal text-[#12516E] text-[14px]">
                  {item.Class}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.Steam}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.FeeCategory}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.TutionFees}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.Tranpost}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.Library}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.Exam}
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] text-[#1c1c1c]">
                  {item.OtherFees}
                </td>
                <td className="px-4 py-3 text-left font-semibold text-[14px] text-[#1c1c1c]">
                  {item.Total}
                </td>
                <td className="px-4 py-3 text-left flex gap-3">
                  <span>
                    <FiEdit className="w-5 h-5 text-[#9C9C9C]" />
                  </span>
                  <span>
                    <RiDeleteBin5Line className="w-5 h-5 text-[#FF4B4B]" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddfees && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowAddFees(false)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#1c1c1c] font-semibold">
                  Create New Fee Structure
                </span>
                <span className=" text-[#696969] font-normal text-[18px]">
                  Define comprehensive fee structure for a class
                </span>
              </div>
              <div>
                <button
                  onClick={() => setShowAddFees(false)}
                  className="text-xl"
                >
                  <IoClose size={28} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor="appliCableclass"
                className="text-[14px] font-semibold text-[#1C1C1C]"
              >
                Class
              </label>
              <div className="px-4 py-3 rounded-xl border border-[#E6E6E6]">
                <select
                  name=""
                  id="applicableClass"
                  className="w-full text-[14px] font-normal text-[#9C9C9C] border-none outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                </select>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <label
                htmlFor="feecategory"
                className="text-[14px] font-semibold text-[#1C1C1C]"
              >
                Fee Category
              </label>
              <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                <input
                  type="text"
                  placeholder="Default"
                  id="feecategory"
                  className="w-full bg-transparent outline-none border-none"
                />
              </div>
            </div>
            <div className="mt-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Tution Fee 
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="102"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Tranport Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="520"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Exam Fee 
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="30"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Computer Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="100"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Lab Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="200"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Admission Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="400"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Library Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="1000"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Development Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="620"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Sport Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="500"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="feecategory"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Activity Fee
                </label>
                <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                  <input
                    type="text"
                    placeholder="100"
                    id="feecategory"
                    className="w-full bg-transparent outline-none border-none"
                  />
                </div>
              </div>
            </div>
            

            <div className="flex gap-3 mt-4 justify-end">
              <button
                className="flex items-center gap-2 px-6 py-3 text-[#696969] font-semibold text-[16px] border border-[#9C9C9C] rounded-lg"
                onClick={() => setShowAddFees(false)}
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg"
              >
                Create Structure
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <------------------------------------------- pagination ---------------------------------> */}
      <Pagination />
    </div>
  );
}

export default FeeStructure;

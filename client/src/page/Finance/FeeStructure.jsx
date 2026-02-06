import React from "react";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function FeeStructure() {
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
        <div className="flex gap-3">
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
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Class</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Steam</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Fee Category</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Tution Fees</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Transport</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Library</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Exam </th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Other Fees</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Total Amount</th>
                    <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeStructure;

import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function ConcessionType() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2 text-[24px] text-[#696969] font-semibold">
        <Link to="/concession" className="flex items-center gap-2">
          <IoChevronBack />
        <span>Back</span>
        </Link>
      </div>

      {/* <======================== create Consession ==========================> */}
      <div className="mt-6 p-6 rounded-2xl bg-white shadow-2xl">
        <span className="text-[18px] text-[#1C1C1C] font-semibold">
          Create Concession
        </span>
        <div className="flex flex-col gap-2.5 mt-4">
          <label
            htmlFor="concession"
            className="text-[14px] text-[#1C1C1C] font-semibold"
          >
            Type Name
          </label>
          <input
            type="text"
            id="concession"
            placeholder="Financial Hardship"
            className="border border-[#E6E6E6] rounded-xl px-3 py-4"
          />
        </div>
        <div className="flex gap-4 items-center mt-6">
          <button className="flex items-center gap-2 px-6 py-3 text-[#696969] font-semibold text-[16px] border border-[#9c9c9c] rounded-lg">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg">
            Create
          </button>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-[#ffffff]">
        <span className="text-[16px] text-[#1C1C1C] font-semibold">
          Concession List
        </span>

        <div className="mt-4 border border-[#e6e6e6] rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e6e6e6]">
                <th className="text-left px-5 py-4 text-[14px] text-[#1c1c1c] font-semibold w-[85%]">
                  Type
                </th>
                <th className="text-left px-5 py-4  text-[14px] text-[#1c1c1c] font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" hover:bg-[#F9FAFC]">
                <td className="px-4 py-3 text-left font-normal text-[#1c1c1c] text-[14px]">
                  Financial Head
                </td>
                <td className="px-4 py-3 text-left font-normal text-[14px] flex gap-2 items-center text-[#9C9C9C]">
                  <span>
                    <FiEdit size={18} className="text-[#9C9C9C]"/>
                  </span>
                  <span>
                    <RiDeleteBinLine size={18} className="text-[#FF4B4B]"/>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ConcessionType;

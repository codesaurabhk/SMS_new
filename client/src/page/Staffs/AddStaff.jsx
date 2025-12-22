import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const AddStaff = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-1 items-center text-[#696969]">
        <span className="text-2xl font-semibold cursor-pointer hover:text-black">All Staff</span>
        <MdOutlineKeyboardArrowRight className="text-2xl font-semibold mt-0.5" />
        <span className="text-2xl font-semibold text-black">Add Staff</span>
      </div>
      <div className="box-shadow bg-white rounded-xl h-100 p-6 min-h-[200px]">
        <div className=" flex flex-col items-center justify-center text-center gap-1">
            <span className="text-[28px] font-semibold text-[#1C1C1C]">
        Add New Staff Member
      </span>
      <p className="text-[#696969]">
        Enter staff member information to add to the system.
      </p>
        </div>
        <h2 className="text-lg font-semibold  border-l-[3px] border-[#00C950] text-[#1C1C1C] pl-2" > 1. Employee Information</h2>
      </div>
    </div>
  );
};

export default AddStaff;

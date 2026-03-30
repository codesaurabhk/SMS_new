import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

function Deduction() {
  return (
    <div className="mt-6 bg-[#ffffff] rounded-lg p-4 shadow-md">
      <div className="flex flex-col gap-1">
        <span className="text-[#1C1C1C] lg:text-[18px] md:text-[16px] sm:text-[14px] font-semibold">
          Deduction & Salary Advances
        </span>
        <span className="text-[#9C9C9C] lg:text-[18px] md:text-[16px] sm:text-[14px] font-normal">
          Manage Loans, PF, Deductions and Salary Advances
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-[3] border border-[#E6E6E6] rounded-lg p-4">
          <div className="flex flex-col gap-1">
            <span className="text-[#1C1C1C] font-semibold lg:text-[18px] md:text-[16px] sm:text-[14px]">
              Standard Deductions
            </span>
            <span className="text-[#9C9C9C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-normal">
              Automatic deduction to all employees
            </span>
          </div>
          <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
            <div className="flex flex-col gap-2">
                <span className="text-[#1C1C1C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold">Provident Fund (PF)</span>
                <span className="text-[#9C9C9C] font-normal lg:text-[14px] md:text-[12px] sm:text[10px]">Employees Contribution</span>
            </div>
          </div>
          <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
            <div className="flex flex-col gap-2">
                <span className="text-[#1C1C1C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold">Professional Tax</span>
                <span className="text-[#9C9C9C] font-normal lg:text-[14px] md:text-[12px] sm:text[10px]">State goverment Tax</span>
            </div>
          </div>
          <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
            <div className="flex flex-col gap-2">
                <span className="text-[#1C1C1C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold">Income Tax (TDS)</span>
                <span className="text-[#9C9C9C] font-normal lg:text-[14px] md:text-[12px] sm:text[10px]">Tax Deducted at source</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#0B3142] border border-[#E6E6E6] rounded-lg mt-4 ">
             <button className="flex items-center gap-2 text-white px-4 py-2 rounded-md">
    <IoSettingsOutline />
    Configure Deduction
  </button>
            <button></button>
          </div>
        </div>

        <div className="flex-[2] border border-[#E6E6E6] rounded-lg p-4">
          <span className="text-[#1C1C1C] font-semibold lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Salary Advanced Requests
          </span>
        </div>
      </div>
    </div>
  );
}

export default Deduction;

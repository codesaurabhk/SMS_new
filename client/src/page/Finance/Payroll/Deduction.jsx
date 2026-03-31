import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Deduction() {
  const [showConfigureDeduction, setShowConfigureDeduction] = useState(false);

  const [isEnabled, setIsEnabled] = useState(true);
  const [isDisable, setIsDisable] = useState(false);

  const requests = [
    {
      id: 1,
      name: "Marry Jane",
      date: "2026-10-05",
      empId: "Emp015",
      department: "HR",
      amount: 50000,
    },
    {
      id: 2,
      name: "John Doe",
      date: "2026-10-03",
      empId: "Emp021",
      department: "Finance",
      amount: 30000,
    },
  ];

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
        <div className="flex-[3]">
          <div className="border border-[#E6E6E6] rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#1C1C1C] font-semibold text-sm md:text-base lg:text-lg leading-tight">
                Standard Deductions
              </span>
              <span className="text-[#9C9C9C] text-xs md:text-sm lg:text-base leading-tight">
                Automatic deduction to all employees
              </span>
            </div>
            <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-[#1C1C1C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold">
                  Provident Fund (PF)
                </span>
                <span className="text-[#9C9C9C] font-normal lg:text-[14px] md:text-[12px] sm:text[10px]">
                  Employees Contribution
                </span>
              </div>
            </div>
            <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-[#1C1C1C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold">
                  Professional Tax
                </span>
                <span className="text-[#9C9C9C] font-normal lg:text-[14px] md:text-[12px] sm:text[10px]">
                  State goverment Tax
                </span>
              </div>
            </div>
            <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-[#1C1C1C] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold">
                  Income Tax (TDS)
                </span>
                <span className="text-[#9C9C9C] font-normal lg:text-[14px] md:text-[12px] sm:text[10px]">
                  Tax Deducted at source
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setShowConfigureDeduction(true)}
                className="flex justify-center items-center bg-[#0B3142] border border-[#E6E6E6] rounded-lg mt-4 w-full cursor-pointer transition"
              >
                <span className="flex items-center gap-2 text-white px-4 py-2">
                  <IoSettingsOutline />
                  Configure Deduction
                </span>
              </button>
              <button
                onClick={() => console.log("Clicked")}
                className="flex justify-center items-center border border-[#9C9C9C] rounded-lg w-full cursor-pointer transition"
              >
                <span className="flex items-center gap-2 text-[#696969] px-4 py-2">
                  <IoMdAdd />
                  Add New Deduction
                </span>
              </button>
            </div>
          </div>

          <div className="border border-[#E6E6E6] rounded-lg p-4 mt-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#1C1C1C] font-semibold text-sm md:text-base lg:text-lg leading-tight">
                Active Loan Deductions
              </span>
              <span className="text-[#9C9C9C] text-xs md:text-sm lg:text-base leading-tight">
                Employees loan and recovery schedule
              </span>
            </div>
            <div className="mt-4 border border-[#e6e6e6] rounded-lg p-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="text-[#1c1c1c] lg:text-[16px] md:text[14px] text-[12px] font-semibold">
                    Peter Parker
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="bg-[#12516E26] px-1 border border-[#12516E33] text-[#12516E] font-semibold lg:text-[14px] md:text-[12px] text-[10px] rounded">
                      ₹ 5000/mo
                    </span>
                  </div>
                </div>
                <span className="text-[#696969] lg:text-[12px] md:text[10px] text-[8px] font-normal">
                  Education Loan
                </span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-normal text-[#696969] lg:text-[14px] md:text-[12px] text-[10px]">
                  Outstanding: ₹ 25000
                </span>
                <span className="font-normal text-[#696969] lg:text-[12px] md:text-[10px] text-[8px]">
                  5 month left
                </span>
              </div>
            </div>
            <div className="mt-4 border border-[#e6e6e6] rounded-lg p-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="text-[#1c1c1c] lg:text-[16px] md:text[14px] text-[12px] font-semibold">
                    Marry Jane
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="bg-[#12516E26] px-1 border border-[#12516E33] text-[#12516E] font-semibold lg:text-[14px] md:text-[12px] text-[10px] rounded">
                      ₹ 5000/mo
                    </span>
                  </div>
                </div>
                <span className="text-[#696969] lg:text-[12px] md:text[10px] text-[8px] font-normal">
                  Marriage Loan
                </span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-normal text-[#696969] lg:text-[14px] md:text-[12px] text-[10px]">
                  Outstanding: ₹ 50000
                </span>
                <span className="font-normal text-[#696969] lg:text-[12px] md:text-[10px] text-[8px]">
                  10 month left
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[2] border border-[#E6E6E6] rounded-lg p-4">
          <span className="text-[#1C1C1C] font-semibold lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Salary Advanced Requests
          </span>

          {requests.map((item) => (
            <div
              key={item.id}
              className="mt-4 border border-[#e6e6e6] rounded-lg p-4"
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className="text-[#1c1c1c] lg:text-[16px] md:text[14px] text-[12px] font-semibold">
                      {item.name}
                    </span>
                    <span className="px-1 border border-[#E6E6E6] rounded text-[#9C9C9C] lg:text-[12px] md:text-[10px] text-[8px]">
                      Pending
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="text-[#9C9C9C] font-normal lg:text-[12px] md:text-[10px] text-[8px]">
                      Requested On:
                    </span>
                    <span className="text-[#9C9C9C] font-normal lg:text-[12px] md:text-[10px] text-[8px]">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-[#696969] lg:text-[12px] md:text[10px] text-[8px] font-normal">
                    {item.empId}
                  </span>
                  <span className="text-[#696969] lg:text-[12px] md:text[10px] text-[8px] font-normal">
                    •
                  </span>
                  <span className="text-[#696969] lg:text-[12px] md:text[10px] text-[8px] font-normal">
                    {item.department}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-semibold text-[#1C1C1C] lg:text-[16px] md:text-[14px] text-[12px]">
                  Amount: ₹ {item.amount}
                </span>
                <div className="flex gap-2 items-center">
                  <span className="font-normal text-[#696969] px-2  py-1 lg:text-[12px] md:text-[10px] text-[8px] border border-[#DC2626] rounded text-[#DC2626] font-normal">
                    Reject
                  </span>
                  <span className="font-normal text-[#696969] px-2  py-1 lg:text-[12px] md:text-[10px] text-[8px] rounded text-[#ffffff] bg-[#009638] font-normal">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <=======----------- popup Button ----------=========> */}
      {showConfigureDeduction && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-6"
          onClick={() => setShowConfigureDeduction(false)}
        >
          <div
            className="bg-white w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-xl shadow-lg relative p-4 sm:p-6 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 sm:gap-1">
                <span className="text-[#1C1C1C] text-[14px] md:text-[16px] lg:text-18px font-semibold">
                  Configure Standard Deductions
                </span>
                <span className="text-[#9C9C9C] text-[12px] md:text-[14px] lg:text-[16px] text-16px font-semibold">
                  Set up automatic deductions applied to all employees salaries
                </span>
              </div>
              <div>
                <button
                  onClick={() => setShowConfigureDeduction(false)}
                  className="text-xl"
                >
                  <IoClose size={28} />
                </button>
              </div>
            </div>

            <div className="mt-4 md:mt-7 lg:mt-10 p-2 md:p-3 lg:p-4 border border-[#E6E6E6] rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-[#0A0A0A] text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
                  Provident Fund
                </span>

                <button
                  onClick={() => setIsEnabled(!isEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    isEnabled ? "bg-[#0B5D7A]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      isEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="border border-[#E6E6E6] rounded-full px-4 py-3 mt-4 md:mt-5 lg:mt-6">
                <input type="Number" placeholder="₹ 0.00" />
              </div>
            </div>

            <div className="mt-2 md:mt-4 lg:mt-6 p-2 md:p-3 lg:p-4 border border-[#E6E6E6] rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-[#0A0A0A] text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
                  medical Insurance
                </span>

                <button
                  onClick={() => setIsEnabled(!isEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    isEnabled ? "bg-[#0B5D7A]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      isEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="border border-[#E6E6E6] rounded-full px-4 py-3 mt-4 md:mt-5 lg:mt-6">
                <input type="Number" placeholder="₹ 0.00" />
              </div>
            </div>

            <div className="mt-2 md:mt-4 lg:mt-6 p-2 md:p-3 lg:p-4 border border-[#E6E6E6] rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-[#0A0A0A] text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
                  ESI(Employee State Insurance)
                </span>

                <button
                  onClick={() => setIsDisable(!isDisable)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    isDisable ? "bg-[#0B5D7A]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      isDisable ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="border border-[#E6E6E6] rounded-full px-4 py-3 mt-4 md:mt-5 lg:mt-6">
                <input type="Number" placeholder="₹ 0.00" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 justify-end">
              {/* Cancel Button */}
              <button
                onClick={() => setShowConfigureDeduction(false)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[14px] lg:text-[16px] text-[#696969] font-semibold border border-[#9C9C9C] rounded-lg cursor-pointer"
              >
                Cancel
              </button>

              {/* Create Button */}
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[14px] lg:text-[16px] 
                bg-[#0B3142] text-white font-semibold border border-[#0B3142] rounded-lg cursor-pointer"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Deduction;

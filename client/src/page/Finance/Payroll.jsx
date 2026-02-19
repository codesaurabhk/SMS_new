import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function DetailsContent({ active }) {
  switch (active) {
    case "Generate Payroll":
      return (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg gap-6">
          <div className="flex flex-col">
            <span className="text-[#1c1c1c] text-[18px] font-semibold">
              Fee Collections
            </span>
            <span className="text-[#9c9c9c] text-[16px] font-normal">
              Record Payments and genrates receipts
            </span>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-9">
            <div>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="class"
                  className="text-[#1C1C1C] text-[14px] font-semibold"
                >
                  Role
                </label>
                <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                  <select
                    name=""
                    id="class"
                    className="w-full border-none outline-none"
                  >
                    <option value=""></option>
                    <option value="">Teacher</option>
                    <option value="">Staff</option>
                    <option value="">Others</option>
                  </select>
                </div>
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="section"
                  className="text-[#1C1C1C] text-[14px] font-semibold"
                >
                  Payroll Month
                </label>
                <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                  <select
                    name=""
                    id="section"
                    className="w-full border-none outline-none"
                  >
                    <option value="">Select Month</option>
                    <option value="">January</option>
                    <option value="">Feburary</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">june</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                  </select>
                </div>
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="student"
                  className="text-[#1C1C1C] text-[14px] font-semibold"
                >
                  yaer
                </label>
                <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                  <select
                    name=""
                    id="student"
                    className="w-full border-none outline-none"
                  >
                    <option value="">Select Year</option>
                    <option value="">2020</option>
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                    <option value="">2026</option>
                  </select>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowFeeMonth(true)}
              className="flex gap-2 border items-center px-6 py-3 rounded-lg border-none bg-[#0B3142] text-white"
            >
              <span>
                <IoSearchOutline size={16} />
              </span>
              <span className="text-[16px] font-semibold">Search</span>
            </button>
          </div>
        </div>
      );

    case "Fee Receipt":
      return <div></div>;

    case "Pending Fees":
      return <div></div>;

    case "Fee Particulars":
      return <div></div>;

    default:
      return null;
  }
}

function Payroll() {
  const [active, setActive] = useState("Pay roll");
  return (
    <div>
      {/* <================================ Switch Case ========================================> */}
      <div className="w-full bg-white rounded-full shadow-md">
        <div className="flex gap-2 px-2 py-1 scrollbar-hide sm:overflow-visible sm:justify-between">
          {[
            "Generate Payroll",
            "Salary Structure",
            "Pay Slips",
            "Deduction & Advanced",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`flex items-center justify-center w-[20%] py-2 text-sm sm:text-base rounded-full transition-all duration-200
          ${
            active === item
              ? "bg-[#0B3142] text-white"
              : "text-[#9EA1A1] hover:bg-[#e6e6e6]"
          }
        `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="">
        <DetailsContent active={active} />
      </div>
    </div>
  );
}

export default Payroll;

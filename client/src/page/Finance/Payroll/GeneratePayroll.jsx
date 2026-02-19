import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function GeneratePayroll() {
  const [showPayroll, setShowPayroll] = useState(false);
  const [active, setActive] = useState("All");

  const baseBtn = "gap-8 ";

  const activeBtn =
    "bg-[#F5F7F7] text-[#0B3142] text-[16px] font-semibold border border-[#ffffff] rounded-full px-4 py-2 ";

  const inactiveBtn = "text-[#9EA1A1] text-[16px] font-semibold px-4 py-2";

  return (
    <div>
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
            type="button"
            onClick={() => setShowPayroll(true)}
            className="flex gap-2 border items-center px-6 py-3 rounded-lg border-none bg-[#0B3142] text-white"
          >
            <span>
              <IoSearchOutline size={16} />
            </span>
            <span className="text-[16px] font-semibold">Search</span>
          </button>
        </div>
      </div>

      {showPayroll && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg gap-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[#1c1c1c] text-[18px] font-semibold">
                Generate Teacher Payroll
              </span>
              <span className="text-[#9c9c9c] text-[16px] font-normal">
                generate and manage monthly salary payment
              </span>
            </div>

            {/* <------------------------------------- filter -------------------------------> */}
            <div className="">
              <div className="inline-flex items-center gap-1 bg-[linear-gradient(to_right,#F5F2ED,#F4F5F0,#EDF5F3)] rounded-2xl p-1">
                {["Manually", "Bulk Action"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`${baseBtn} ${
                      active === item ? activeBtn : inactiveBtn
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* <-------------------------------------- search & filter ------------------------------> */}
          <div className="mt-3 flex items-center gap-36">
            {/* SEARCH */}
            <div className="flex-1">
              <span></span>
              <input
                type="search"
                placeholder="🔎︎ Search Student by name or admission Number..."
                className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
              />
            </div>

            <label htmlFor="status"></label>
            <div className="bg-[#EFF2F2] rounded px-1 py-1">
              <select
                name=""
                id="status"
                className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0"
              >
                <option value="">Status</option>
                <option value="">Expire</option>
                <option value="">Active</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneratePayroll;

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import FeeDepositeDetails from "./FeeDepositeDetails";

function FeeDeposite() {
  const [showFeeMonth, setShowFeeMonth] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

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
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-9">
          <div>
            <section className="flex flex-col gap-2">
              <label
                htmlFor="admissionNumber"
                className="text-[#1C1C1C] text-[14px] font-semibold"
              >
                Admission Number
              </label>

              <input
                id="admissionNumber"
                type="text"
                className="rounded-2xl px-3 py-4 border border-[#E6E6E6] outline-none"
              />
            </section>
          </div>

          <div>
            <section className="flex flex-col gap-2">
              <label
                htmlFor="studentid"
                className="text-[#1C1C1C] text-[14px] font-semibold"
              >
                Student ID
              </label>

              <input
                id="studentid"
                type="text"
                className="rounded-2xl px-3 py-4 border border-[#E6E6E6] outline-none"
              />
            </section>
          </div>
          <div>
            <section className="flex flex-col gap-2">
              <label
                htmlFor="class"
                className="text-[#1C1C1C] text-[14px] font-semibold"
              >
                Class
              </label>
              <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                <select
                  name=""
                  id="class"
                  className="w-full border-none outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="">Class 1</option>
                  <option value="">Class 2</option>
                  <option value="">Class 3</option>
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
                Section
              </label>
              <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                <select
                  name=""
                  id="section"
                  className="w-full border-none outline-none"
                >
                  <option value="">Select Section</option>
                  <option value="">Section A</option>
                  <option value="">Section B</option>
                  <option value="">Section C</option>
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
                Student
              </label>
              <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                <select
                  name=""
                  id="student"
                  className="w-full border-none outline-none"
                >
                  <option value="">Select Student</option>
                  <option value="">Langford</option>
                  <option value="">Homelander</option>
                  <option value="">Thanos</option>
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

        {showFeeMonth && (
          <div className="mt-9">
            <div>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="admissionNumber"
                  className="text-[#1C1C1C] text-[14px] font-semibold"
                >
                  Fee Month
                </label>

                <input
                  id="feeMonth"
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="rounded-2xl px-3 py-4 border border-[#E6E6E6] outline-none"
                />
              </section>
            </div>
          </div>
        )}
      </div>

      {selectedMonth && (
        <div>
          <FeeDepositeDetails />
        </div>
      )}
    </div>
  );
}

export default FeeDeposite;

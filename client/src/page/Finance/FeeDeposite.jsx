import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import yoda from "../../assets/images/yoda.jpg";
import { Link } from "react-router-dom";

function FeeDeposite() {
  const [showFeeMonth, setShowFeeMonth] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const currentYear = new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

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
                <select
                  id="feeMonth"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="rounded-2xl px-3 py-4 border border-[#E6E6E6] outline-none"
                >
                  <option value="">Select Month</option>

                  {months.map((month, index) => {
                    const value = `${currentYear}-${String(index + 1).padStart(2, "0")}`;
                    return (
                      <option key={value} value={value}>
                        {month} {currentYear}
                      </option>
                    );
                  })}
                </select>
              </section>
            </div>
          </div>
        )}
      </div>

      {selectedMonth && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg gap-6">
          <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 gap-6 px-4 py-6 rounded-lg border border-[#E6E6E6] items-center">
            <div className="h-25 w-25 rounded-lg overflow-hidden">
              <img src={yoda} alt="yoda" className="h-full w-full object-fit" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Student Name:
              </span>
              <span className="font-semibold text-[14px] font-[#1C1C1C]">
                Baby Yoda
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Admission Number :
              </span>
              <span className="font-semibold text-[14px] font-[#1C1C1C]">
                ADM0531
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Student ID:
              </span>
              <span className="font-semibold text-[14px] font-[#1C1C1C]">
                STU0531
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Class:
              </span>
              <span className="font-semibold text-[14px] font-[#1C1C1C]">
                Nurcessary
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Father Name:
              </span>
              <span className="font-semibold text-[14px] font-[#1C1C1C]">
                Chai Wala
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Fee For Month:
              </span>
              <span className="font-semibold text-[14px] font-[#1C1C1C]">
                25 Jan
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-[#696969] font-normal">
                Status:
              </span>
              <span className="px-2 py-1 bg-[#F8D7DA] text-[#C92131] w-fit rounded-md text-[12px] font-semibold">
                Unpaid
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
            <div>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="receiptno"
                  className="text-[#1C1C1C] text-[14px] font-semibold"
                >
                  Receipt Number
                </label>

                <input
                  id="receiptno"
                  type="text"
                  className="rounded-2xl px-3 py-4 border border-[#E6E6E6] outline-none text-[16px] font-normal text-[#9C9C9C]"
                  placeholder="RCP-2025-005"
                  readOnly
                />
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="date"
                  className="text-[#1C1C1C] text-[14px] font-semibold"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-2xl px-3 py-4 border border-[#E6E6E6] outline-none text-[16px] font-normal text-[#9C9C9C]"
                />
              </section>
            </div>
          </div>

          <div className="mt-3 border-t border-b border-[#1c1c1c] py-3 space-y-4">
            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Tuition Fee(Monthly):
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 5000"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Transport(monthly):
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 500"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Library(Yearly):
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Uniform Fee (Once):
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Exam Fee (Quatarly):
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Old Balance:
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                readOnly
              />
            </div>
            <span className="text-[16px] font-semibold text-[#DC2626]">
              * important Notes: Once & Yearly particulars will not shown if
              deposited in the Cureent Session
            </span>
          </div>

          <div className="mt-3 border-b border-[#1c1c1c] py-3 space-y-4">
            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Total Amount:
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 5000"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Late Fee(+):
              </span>
              <input
                type="text"
                className=" rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                // readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Concession(-):
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                readOnly
              />
            </div>
          </div>

          <div className="mt-3 py-3 space-y-4">
            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Grand Total:
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 5000"
                readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Received Amount:
              </span>
              <input
                type="text"
                className="rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                // readOnly
              />
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Balance:
              </span>
              <input
                type="text"
                className="bg-[#f2f2f2] rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="₹ 200"
                readOnly
              />
            </div>
            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Payment Mode:
              </span>

              <select
                className=" rounded-xl border border-[#E6E6E6] px-4 py-3 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Payment Mode
                </option>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Income Mode:
              </span>

              <select
                className=" rounded-xl border border-[#E6E6E6] px-4 py-3 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Payment Mode
                </option>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Income Head:
              </span>

              <select
                className=" rounded-xl border border-[#E6E6E6] px-4 py-3 outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Fee
                </option>
                <option value=""></option>
              </select>
            </div>

            <div className="grid grid-cols-[200px_1fr] items-center gap-3">
              <span className="text-[16px] text-[#1C1C1C] font-semibold">
                Remarks:
              </span>
              <input
                type="text"
                className=" rounded-xl border border-[#E6E6E6] px-4 py-3"
                placeholder="Type here...."
              />
            </div>
          </div>

          <Link to="/receipt">
            <div className="w-full flex justify-center items-center bg-[#0B3142] px-8 py-4 rounded-lg text-[white] font-semibold text-[18px] mt-3">
              <button>Submit</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default FeeDeposite;

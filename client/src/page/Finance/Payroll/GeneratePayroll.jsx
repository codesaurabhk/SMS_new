import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import king from "../../../assets/images/king.jpg";
import lantern from "../../../assets/images/lantern.png";
import Pagination from "../../../components/Pagination";

function GeneratePayroll() {
  const [showPayroll, setShowPayroll] = useState(false);
  const [active, setActive] = useState("Manually");

  const baseBtn = "gap-8 ";
  const activeBtn =
    "bg-[#F5F7F7] text-[#0B3142] text-[16px] font-semibold border border-[#ffffff] rounded-full px-4 py-2 ";
  const inactiveBtn = "text-[#9EA1A1] text-[16px] font-semibold px-4 py-2";

  const staffData = [
    {
      id: 1,
      name: "Aarav Sharma",
      image: king,
      empId: "EMP001",
      role: "Mathematics Teacher",
      department: "Academics",
      paid: "₹45,000",
      status: "Processed",
    },
    {
      id: 2,
      name: "Priya Verma",
      image: lantern,
      empId: "EMP001",
      role: "Science Teacher",
      department: "Academics",
      paid: "₹42,000",
      status: "Unpaid",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      image: king,
      empId: "EMP001",
      role: "Accountant",
      department: "Finance",
      paid: "₹38,000",
      status: "Paid",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      image: lantern,
      empId: "EMP001",
      role: "HR Manager",
      department: "Human Resources",
      paid: "₹50,000",
      status: "Paid",
    },
    {
      id: 5,
      name: "Vikram Singh",
      image: king,
      empId: "EMP001",
      role: "Librarian",
      department: "Library",
      paid: "₹28,000",
      status: "Unpaid",
    },
    {
      id: 6,
      name: "Ananya Das",
      image: king,
      empId: "EMP001",
      role: "Computer Instructor",
      department: "IT",
      paid: "₹47,000",
      status: "Processed",
    },
    {
      id: 7,
      name: "Kunal Patel",
      image: lantern,
      empId: "EMP001",
      role: "Sports Coach",
      department: "Sports",
      paid: "₹30,000",
      status: "Pending",
    },
    {
      id: 8,
      name: "Meera Nair",
      image: king,
      empId: "EMP001",
      role: "Receptionist",
      department: "Administration",
      paid: "₹25,000",
      status: "Paid",
    },
    {
      id: 9,
      name: "Rahul Yadav",
      image: king,
      empId: "EMP001",
      role: "Transport Manager",
      department: "Transport",
      paid: "₹35,000",
      status: "Pending",
    },
    {
      id: 10,
      name: "Pooja Iyer",
      image: lantern,
      empId: "EMP001",
      role: "Counselor",
      department: "Student Welfare",
      paid: "₹40,000",
      status: "Unpaid",
    },
  ];

  const statusStyle = {
    Processed: "bg-[#F8D7DA] text-[#C92131]",
    Pending: "bg-[#E3F2FD] text-[#1565C0]",
    Paid: "bg-[#D4EDDA] text-[#009638]",
  };

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
              <label className="text-[#1C1C1C] text-[14px] font-semibold">
                Role
              </label>
              <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                <select className="w-full border-none outline-none">
                  <option></option>
                  <option>Teacher</option>
                  <option>Staff</option>
                  <option>Others</option>
                </select>
              </div>
            </section>
          </div>

          <div>
            <section className="flex flex-col gap-2">
              <label className="text-[#1C1C1C] text-[14px] font-semibold">
                Payroll Month
              </label>
              <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                <select className="w-full border-none outline-none">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
            </section>
          </div>

          <div>
            <section className="flex flex-col gap-2">
              <label className="text-[#1C1C1C] text-[14px] font-semibold">
                Year
              </label>
              <div className="rounded-2xl px-3 py-4 border border-[#E6E6E6]">
                <select className="w-full border-none outline-none">
                  <option>Select Year</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowPayroll(true)}
            className="flex gap-2 items-center px-6 py-3 rounded-lg bg-[#0B3142] text-white"
          >
            <IoSearchOutline size={16} />
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

          {/* MANUAL SECTION */}
          {active === "Manually" && (
            <>
              <div className="mt-3 flex items-center gap-36">
                <div className="flex-1">
                  <input
                    type="search"
                    placeholder="🔎︎ Search Student by name or admission Number..."
                    className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
                  />
                </div>

                <div className="bg-[#EFF2F2] rounded px-1 py-1">
                  <select className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0">
                    <option>Status</option>
                    <option>Expire</option>
                    <option>Active</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 border border-[#e6e6e6] rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e6e6e6]">
                      <th className="px-5 py-4 text-left text-[14px] font-semibold">
                        Staff
                      </th>
                      <th className="px-5 py-4 text-left text-[14px] font-semibold">
                        Role
                      </th>
                      <th className="px-5 py-4 text-left text-[14px] font-semibold">
                        Department
                      </th>
                      <th className="px-5 py-4 text-left text-[14px] font-semibold">
                        Paid
                      </th>
                      <th className="px-5 py-4 text-left text-[14px] font-semibold">
                        Status
                      </th>
                      <th className="px-5 py-4 text-left text-[14px] font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {staffData.map((item) => (
                      <tr key={item.id} className="border-b border-[#e6e6e6]">
                        <td className="px-4 py-3 text-[#12516E] text-[14px]">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              className="w-10 h-10 rounded-full object-cover"
                            />

                            <div className="flex flex-col">
                              <span className="font-semibold">{item.name}</span>
                              <span className="text-sm text-[#9c9c9c]">
                                {item.empId}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <span className="inline-flex w-full items-center justify-center px-3 py-1 text-sm font-medium border border-[#007AFF] text-[#007AFF] rounded-md">
                            {item.role}
                          </span>
                        </td>

                        <td className="px-4 py-3">{item.department}</td>
                        <td className="px-4 py-3">{item.paid}</td>

                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded text-xs font-semibold ${
                              statusStyle[item.status] || ""
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="px-4 py-3 text-[#9C9C9C]">Actions</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination />
              </div>
            </>
          )}

          {/* BULK ACTION */}
          {active === "Bulk Action" && (
            <div className="mt-6 p-6 border border-[#E6E6E6] rounded-xl">
              <span className="text-[18px] font-semibold">
                Bulk Payroll Action
              </span>

              <div className="mt-4 flex gap-4">
                <button className="px-6 py-3 bg-[#0B3142] text-white rounded-lg">
                  Upload Excel
                </button>

                <button className="px-6 py-3 bg-[#009638] text-white rounded-lg">
                  Process Payroll
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GeneratePayroll;

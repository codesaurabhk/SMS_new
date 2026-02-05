import React from "react";
{
  /* <<========================------- icons -------==========================>> */
}
import { FiMail } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";

{
  /* <<=============================== images ================================>> */
}
import comet from "../../assets/images/comet.jpg";
import rocket from "../../assets/images/rocket.jpg";
import cosmo from "../../assets/images/cosmo.jpg";
import zenith from "../../assets/images/zenith.jpg";
import astro from "../../assets/images/astro.jpg";
import luna from "../../assets/images/luna.jpg";
import nova from "../../assets/images/nova.jpeg";
import orion from "../../assets/images/orion.jpeg";
import Pagination from "../../components/Pagination";

function PendingFees() {
  const dueFeesData = [
    {
      id: 1,
      dueDate: "05 Jan, 2026",
      studentName: "Rocket",
      class: "Space 1A",
      amountDue: "500",
      feeMonth: "January",
      overdue: "5 Days",
      studentId: "STU-001",
      img: rocket,
      status:"unpaid"
    },
    {
      id: 2,
      dueDate: "12 Jan, 2026",
      studentName: "Nova",
      class: "Galaxy 2B",
      amountDue: "750",
      feeMonth: "January",
      overdue: "10 Days",
      studentId: "STU-002",
      img: nova,
      status:"unpaid"
    },
    {
      id: 3,
      dueDate: "20 Jan, 2026",
      studentName: "Orion",
      class: "Star 3C",
      amountDue: "620",
      feeMonth: "January",
      overdue: "20 Days",
      studentId: "STU-003",
      img: cosmo,
      status:"partial"
    },
    {
      id: 4,
      dueDate: "02 Feb, 2026",
      studentName: "Luna",
      class: "Moon 1A",
      amountDue: "900",
      feeMonth: "February",
      overdue: "3 Days",
      studentId: "STU-004",
      img: luna,
      status:"partial"
    },
    {
      id: 5,
      dueDate: "10 Feb, 2026",
      studentName: "Comet",
      class: "Orbit 4D",
      amountDue: "450",
      feeMonth: "February",
      overdue: "8 Days",
      studentId: "STU-005",
      img: comet,
      status:"partial"
    },
    {
      id: 6,
      dueDate: "18 Feb, 2026",
      studentName: "Astro",
      class: "Sky 2A",
      amountDue: "800",
      feeMonth: "February",
      overdue: "12 Days",
      studentId: "STU-006",
      img: astro,
      status:"unpaid"
    },
    {
      id: 7,
      dueDate: "01 Mar, 2026",
      studentName: "Cosmo",
      class: "Galaxy 5B",
      amountDue: "670",
      feeMonth: "March",
      overdue: "1 Day",
      studentId: "STU-007",
      img: orion,
      status:"unpaid"
    },
    {
      id: 8,
      dueDate: "09 Mar, 2026",
      studentName: "Nebula",
      class: "Star 1C",
      amountDue: "720",
      feeMonth: "March",
      overdue: "6 Days",
      studentId: "STU-008",
      img: cosmo,
      status:"unpaid"
    },
    {
      id: 9,
      dueDate: "14 Mar, 2026",
      studentName: "Meteor",
      class: "Orbit 3A",
      amountDue: "560",
      feeMonth: "March",
      overdue: "9 Days",
      studentId: "STU-009",
      img: zenith,
      status:"partial"
    },
    {
      id: 10,
      dueDate: "25 Mar, 2026",
      studentName: "Zenith",
      class: "Sky 6D",
      amountDue: "1000",
      feeMonth: "March",
      overdue: "15 Days",
      studentId: "STU-010",
      img: zenith,
      status:"partial"
    },
  ];

  const statusStyle = {
    unpaid: "bg-[#F8D7DA] text-[#C92131]",
    partial: "bg-[#E3F2FD] text-[#1565C0]",

  }

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <span className="text-[#1c1c1c] text-[18px] font-semibold">
          Pending Fees Collections
        </span>
        <span className="text-[#9c9c9c] text-[16px] font-normal">
          Manage and track outstanding student fee payments
        </span>
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
        <div className="inline-flex items-center gap-2">
          <div className="flex justify-between">
            <label For="class" className=""></label>
            <div className="bg-[#EFF2F2] rounded px-2 py-2">
              <select name="" id="class" className="border-0 outline-0">
                <option value="">Class</option>
                <option value="">Nursery </option>
                <option value="">UKG</option>
                <option value="">Class 1</option>
                <option value="">Class 2</option>
                <option value="">Class 3</option>
                <option value="">Class 4</option>
                <option value="">Class 5</option>
                <option value="">Class 6</option>
                <option value="">Class 7</option>
                <option value="">Class 8</option>
              </select>
            </div>
          </div>

          <label For="Section"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name=""
              id="Section"
              className="px-1 py-1 border-0 outline-0"
            >
              <option value="">Section</option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>
          </div>

          <label For="status"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name="status"
              id="status"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0"
            >
              <option value="">status</option>
              <option value="">Partial</option>
              <option value="">Unpaid</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 border border-[#e6e6e6] rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-[#e6e6e6]">
              <th className="px-5 py-4 text-left text-sm font-semibold w-[30%]">
                Student
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Class
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Fee Month
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Amount Due
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Due Date
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Overdue
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dueFeesData.map((item, index) => (
              <tr key={index} className="border-b border-[#e6e6e6]">
                <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name + ID */}
                    <div className="flex flex-col leading-tight">
                      <span className="text-[#12516E] font-semibold">
                        {item.studentName}
                      </span>
                      <span className="text-sm text-[#9c9c9c] font-semibold">
                        {item.studentId}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-left text-[14px] font-normal text-[#1c1c1c]">
                  {item.class}
                </td>
                <td className="px-4 py-3 text-left text-[14px] font-normal text-[#1c1c1c]">
                  {item.feeMonth}
                </td>
                <td className="px-4 py-3 text-left text-[14px] font-normal text-[#DC2626]">
                  {item.amountDue}
                </td>
                <td className="px-4 py-3 text-left text-[14px] font-normal text-[#1c1c1c]">
                  {item.dueDate}
                </td>
                <td className="px-4 py-3 text-left text-[14px] font-normal text-[#1c1c1c]">
                  {item.overdue}
                </td>
                <td className="px-4 py-3 text-left text-[14px] font-normal  text-[#1c1c1c]">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold ${statusStyle[item.status] || "bg-gray-100 text-gray-600"}`}
                  >
                    <span className="text-sm leading-none">
                      {item.status}
                    </span>
                  </span>
                </td>
                <td className="px-4 py-3 text-left font-semibold flex gap-3">
                  <span>
                    <FiMail size={24} className="text-[#9c9c9c]" />
                  </span>
                  <span>
                    <PiTelegramLogoBold size={24} className="text-[#9C9C9C]" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <------------------------------------------- pagination ---------------------------------> */}
      <Pagination />
    </div>
  );
}

export default PendingFees;

import React from "react";
{/* <<========================------- icons -------==========================>> */}
import { FiEye } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { FiPrinter } from "react-icons/fi";

{/* <<=============================== images ================================>> */}
import comet from "../../assets/images/comet.jpg";
import rocket from "../../assets/images/rocket.jpg";
import cosmo from "../../assets/images/cosmo.jpg";
import zenith from "../../assets/images/zenith.jpg";
import astro from "../../assets/images/astro.jpg";
import luna from "../../assets/images/luna.jpg";
import nova from "../../assets/images/nova.jpeg";
import orion from "../../assets/images/orion.jpeg";
import Pagination from "../../components/Pagination";

function FeeReceipt() {
  const studentFeeReceiptData = [
    {
      id: 1,
      Date: "12 Jan, 2026",
      receiptNo: "RCP-2026-001",
      studentName: "Rocket",
      class: "Space 1A",
      amountPaid: "500",
      month: "January",
      paymentMode: "Credit Card",
      studentId: "STU-005",
      img: rocket,
    },
    {
      id: 2,
      Date: "15 Jan, 2026",
      receiptNo: "RCP-2026-002",
      studentName: "Nova",
      class: "Galaxy 2B",
      amountPaid: "750",
      month: "January",
      paymentMode: "Cash",
      studentId: "STU-005",
      img: nova,
    },
    {
      id: 3,
      Date: "20 Jan, 2026",
      receiptNo: "RCP-2026-003",
      studentName: "Orion",
      class: "Star 3C",
      amountPaid: "620",
      month: "January",
      paymentMode: "UPI",
      studentId: "STU-005",
      img: cosmo,
    },
    {
      id: 4,
      Date: "02 Feb, 2026",
      receiptNo: "RCP-2026-004",
      studentName: "Luna",
      class: "Moon 1A",
      amountPaid: "900",
      month: "February",
      paymentMode: "Debit Card",
      studentId: "STU-005",
      img: luna,
    },
    {
      id: 5,
      Date: "10 Feb, 2026",
      receiptNo: "RCP-2026-005",
      studentName: "Comet",
      class: "Orbit 4D",
      amountPaid: "450",
      month: "February",
      paymentMode: "Net Banking",
      studentId: "STU-005",
      img: orion,
    },
    {
      id: 6,
      Date: "18 Feb, 2026",
      receiptNo: "RCP-2026-006",
      studentName: "Astro",
      class: "Sky 2A",
      amountPaid: "800",
      month: "February",
      paymentMode: "Cash",
      studentId: "STU-005",
      img: comet,
    },
    {
      id: 7,
      Date: "01 Mar, 2026",
      receiptNo: "RCP-2026-007",
      studentName: "Cosmo",
      class: "Galaxy 5B",
      amountPaid: "670",
      month: "March",
      paymentMode: "UPI",
      studentId: "STU-005",
      img: cosmo,
    },
    {
      id: 8,
      Date: "09 Mar, 2026",
      receiptNo: "RCP-2026-008",
      studentName: "Nebula",
      class: "Star 1C",
      amountPaid: "720",
      month: "March",
      paymentMode: "Credit Card",
      studentId: "STU-005",
      img: comet,
    },
    {
      id: 9,
      Date: "14 Mar, 2026",
      receiptNo: "RCP-2026-009",
      studentName: "Meteor",
      class: "Orbit 3A",
      amountPaid: "560",
      month: "March",
      paymentMode: "Debit Card",
      studentId: "STU-005",
      img: astro,
    },
    {
      id: 10,
      Date: "25 Mar, 2026",
      receiptNo: "RCP-2026-010",
      studentName: "Zenith",
      class: "Sky 6D",
      amountPaid: "1000",
      month: "March",
      paymentMode: "Net Banking",
      studentId: "STU-005",
      img: zenith,
    },
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <span className="text-[#1c1c1c] text-[18px] font-semibold">
          Fee Receipt
        </span>
        <span className="text-[#9c9c9c] text-[16px] font-normal">
          View and generate receipts
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
                <option value="" >
                  Class
                </option>
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
              <option value="" >
                Section
              </option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>
          </div>

          <label For="month"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name=""
              id="month"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0"
            >
              <option value="" >
                Month
              </option>
              <option value="">January</option>
              <option value="">Febuary</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
          </div>

          <label For="paymode"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name="PaymentMode"
              id="paymode"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0"
            >
              <option value="" >
                Payment Mode
              </option>
              <option value="">Cash</option>
              <option value="">Upi</option>
              <option value="">Cheque</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 border border-[#e6e6e6] rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-[#e6e6e6]">
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Receipt No.
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold w-[30%]">
                Student
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Class
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Amount Paid
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Month
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Payment Mode
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {studentFeeReceiptData.map((item, index) => (
              <tr key={index} className="border-b border-[#e6e6e6]">
                <td className="px-4 py-3 text-left text-sm font-semibold ">
                  {item.Date}
                </td>
                <td className="px-4 py-3 text-left text-sm font-semibold ">
                  {item.receiptNo}
                </td>
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
                <td className="px-4 py-3 text-left text-sm font-semibold ">
                  {item.class}
                </td>
                <td className="px-4 py-3 text-left text-sm font-semibold ">
                  {item.month}
                </td>
                <td className="px-4 py-3 text-left text-sm font-semibold ">
                  {item.amountPaid}
                </td>
                <td className="px-4 py-3 text-left text-sm font-semibold ">
                  {item.paymentMode}
                </td>
                <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 ">
                  <span>
                    <FiEye size={24} className="text-[#9c9c9c]" />
                  </span>
                  <span>
                    <LuDownload size={24} className="text-[#9C9C9C]" />
                  </span>
                  <span>
                    <FiPrinter size={24} className="text-[#9C9C9C]" />
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

export default FeeReceipt;

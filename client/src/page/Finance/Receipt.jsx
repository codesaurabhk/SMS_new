import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { BiPrinter } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/treelogo.png";

function Receipt() {
  const feeData = [
    {
      id: 1,
      particulars: "Tuition Fees",
      amount: "5000",
    },
    {
      id: 2,
      particulars: "Tuition Fees",
      amount: "5000",
    },
    {
      id: 3,
      particulars: "Tuition Fees",
      amount: "5000",
    },
    {
      id: 4,
      particulars: "Tuition Fees",
      amount: "5000",
    },
  ];


  return (
    <div className="">
      <Link to="/fee-management">
        <div className="flex items-center gap-2 text-[#696969] font-semibold text-[24px]">
          <span>
            <IoChevronBack size={20} />
          </span>
          <span>Back</span>
        </div>
      </Link>

      <div className="mt-9 rounded-2xl bg-[white] p-4">
        <div className="flex gap-6 items-center">
          <button className="flex w-full justify-center rounded-lg bg-[#0B3142] text-white px-6 py-3 items-center gap-4 text-[16px] font-semibold">
            <FiDownload size={20} />
            Download
          </button>
          <button className="flex w-full justify-center border border-[#9C9C9C] rounded-lg px-6 py-3 items-center gap-4 text-[#9c9c9c] text-[16px] font-semibold">
            <BiPrinter size={20} className="text-[#9C9C9C]" />
            Print
          </button>
        </div>
        {/* <<========================== Receipt ================================>> */}
        <div className="flex justify-center mt-6">
          <div className="border border-[#E6E6E6] gap-1 rounded-xl">
            <div className="flex justify-around px-32 py-4 gap-4 bg-[#C2CBCF] rounded-t-xl">
              <div className="h-16 w-16 rounded-lg overflow-hidden">
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[24px] text-[#1C1C1C] font-semibold">
                  Stormbreaker School
                </span>
                <span className="text-[12px] font-normal text-[#1C1C1C]">
                  (Stark & wayne Recognized)
                </span>
                <span className="text-[14px] font-normal text-[#1C1C1C]">
                  Dark Nebula StreetMoon Vortex-3, Galaxy Nocturna
                </span>
                <span className="text-[14px] font-normal text-[#1C1C1C]">
                  Mobile:856-963-7854
                </span>
                <span className="text-[14px] font-normal text-[#1C1C1C]">
                  Email: connect@galaxyguardians.space
                </span>
                <span className="text-[14px] font-normal text-[#1C1C1C]">
                  Website: www.valorheights.edu
                </span>
              </div>
              <div className="h-16 w-16 rounded-lg overflow-hidden">
                <img src={logo} alt="" className="h-full w-full object-fit" />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <span className="text-[18px] font-bold text-[#1C1C1C]">
                Fee Receipt
              </span>
            </div>
            <div className="flex p-4 gap-18">
              <div className="flex gap-2.5">
                <span className="font-normal text-[14px] text-[#696969]">
                  Receipt Number:
                </span>
                <span className="text-[14px] font-semibold text-[#1C1C1C]">
                  12345690
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className="font-normal text-[14px] text-[#696969]">
                  Date:
                </span>
                <span className="text-[14px] font-semibold text-[#1C1C1C]">
                  12 January, 2025
                </span>
              </div>
              <div className="flex gap-2.5">
                <span className="font-normal text-[14px] text-[#696969]">
                  Session:
                </span>
                <span className="text-[14px] font-semibold text-[#1C1C1C]">
                  2025-2026
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-b border-[#E6E6E6] px-4 py-6 gap-12">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2.5">
                  <span className="text-[14px] font-normal text-[#696969]">
                    Admission Number:
                  </span>
                  <span className="text-[14px] text-[#1C1C1C] font-semibold">
                    12345678
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[14px] font-normal text-[#696969]">
                    Student ID
                  </span>
                  <span className="text-[14px] text-[#1C1C1C] font-semibold">
                    STU-9803
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[14px] font-normal text-[#696969]">
                    Student Name:
                  </span>
                  <span className="text-[14px] text-[#1C1C1C] font-semibold">
                    Leo Messi
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2.5">
                  <span className="text-[14px] font-normal text-[#696969]">
                    Class:
                  </span>
                  <span className="text-[14px] text-[#1C1C1C] font-semibold">
                    10(E)
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[14px] font-normal text-[#696969]">
                    Father Name:
                  </span>
                  <span className="text-[14px] text-[#1C1C1C] font-semibold">
                    Unknown
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-[14px] font-normal text-[#696969]">
                    Fee For Month:
                  </span>
                  <span className="text-[14px] text-[#1C1C1C] font-semibold">
                    Jan 25
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            <div className="flex justify-between px-12 py-4 border-b border-[#E6E6E6] text-[14px] font-semibold text-[#1c1c1c]">
              <span>Old Balance:</span>
              <span>0.00</span>
            </div>
            <div className="w-full">
              <table className="w-full ">
                <thead className="border-b border-[#E6E6E6]">
                  <tr className="">
                    <th className="text-left w-[20%] px-2 py-2">S.No.</th>
                    <th className="w-[60%] text-left px-2 py-2">Particulars</th>
                    <th className="text-right px-2 py-2 ">Amount</th>
                  </tr>
                </thead>

                <tbody className="border-b border-[#E6E6E6]">
                  {feeData.map((item, id) => (
                    <tr key={id} className="">
                      <td className="text-left px-2 ">{item.id}</td>
                      <td className="text-left px-2 ">{item.particulars}</td>
                      <td className="text-right px-2">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full">
              <table className="w-full ">
                <thead className="border-b border-[#E6E6E6]">
                  <tr className="">
                  </tr>
                </thead>

                <tbody className="border-b border-[#E6E6E6]">
                  {feeData.map((item, id) => (
                    <tr key={id} className="">
                      <td className="text-left w-[20%] px-2"></td>
                      <td className="w-[60%] text-left px-2">{item.particulars}</td>
                      <td className="text-right px-2">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;

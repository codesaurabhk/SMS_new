import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { BiPrinter } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

function Receipt() {
  return (
    <div>
        <Link to="/fee-management">
      <div className="flex items-center gap-2 text-[#696969] font-semibold text-[24px]">
        <span><IoChevronBack size={20} /></span>
        <span>
          Back
        </span>
      </div>
      </Link>

      <div className="mt-9 rounded-2xl bg-[white] p-4">
        <div className="flex gap-6 items-center">
            <button className="flex w-full justify-center rounded-lg bg-[#0B3142] text-white px-6 py-3 items-center gap-4 text-[16px] font-semibold"><FiDownload size={20} />Download</button>
            <button className="flex w-full justify-center border border-[#9C9C9C] rounded-lg px-6 py-3 items-center gap-4 text-[#9c9c9c] text-[16px] font-semibold"><BiPrinter size={20} className="text-[#9C9C9C]" />Print</button>
        </div>
      </div>
    </div>
  );
}

export default Receipt;

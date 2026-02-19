import React, { useState } from "react";
import GeneratePayroll from "./GeneratePayroll";

function DetailsContent({ active }) {
  switch (active) {
    case "Generate Payroll":
      return <GeneratePayroll />;

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
  const [active, setActive] = useState("Generate Payroll");
  return (
    <div>
      {/* <================================ Switch Case ========================================> */}
      <div className="w-full bg-white rounded-full shadow-md">
        <div className="flex gap-2 px-3 py-1 scrollbar-hide sm:overflow-visible sm:justify-between">
          {[
            "Generate Payroll",
            "Salary Structure",
            "Pay Slips",
            "Deduction & Advanced",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`flex items-center justify-center flex-1 py-2 text-sm sm:text-base rounded-full transition-all duration-200
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

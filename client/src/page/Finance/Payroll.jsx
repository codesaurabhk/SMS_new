import React, { useState } from 'react'






function DetailsContent({ active }) {
  switch (active) {
    case "Genrate Payroll":
      return (
        <div>
          hii
        </div>
      );

    case "Fee Receipt":
      return (
        <div></div>
      );

    case "Pending Fees":
      return (
        <div></div>
      );

    case "Fee Particulars":
      return (
        <div></div>
      );

    default:
      return null;
  }
}

function Payroll() {
   const [active, setActive] = useState("Fee Deposite");
  return (
    <div>
      {/* <================================ Switch Case ========================================> */}
      <div className="w-full bg-white rounded-full shadow-md">
        <div className="flex gap-2 px-2 py-1 scrollbar-hide sm:overflow-visible sm:justify-between">
          {[
            "Genrate Payroll",
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
  )
}

export default Payroll

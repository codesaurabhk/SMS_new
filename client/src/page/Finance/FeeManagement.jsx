import React, { useState } from "react";

/* -------------------------------- GIF -------------------------------- */
import rupee from "../../assets/images/rupee.gif";
import hour from "../../assets/images/hoursglass.gif";
import irate from "../../assets/images/intrestrate.gif";

import FeeDeposite from "./FeeDeposite";
import FeeReceipt from "./FeeReceipt";
import PendingFees from "./PendingFees";
import FeeParticular from "./FeeParticular";

function DetailsContent({ active }) {
  switch (active) {
    case "Fee Deposite":
      return <FeeDeposite />;

    case "Fee Receipt":
      return <FeeReceipt />;

    case "Pending Fees":
      return <PendingFees />;

    case "Fee Particulars":
      return <FeeParticular />;

    case "Fee Structure":
      return <div>nope</div>;

    case "Concessions":
      return <div>nahh</div>;

    default:
      return null;
  }
}

function FeeManagement() {
  const [active, setActive] = useState("Fee Deposite");

  const cardData = [
    {
      des: "Fee Collected",
      number: "3.6 L",
      left: "",
      text: "This month",
      gif: rupee,
    },
    {
      des: "Pending Fees",
      number: "12,500",
      left: "",
      text: "From 45 Students",
      gif: hour,
    },
    {
      des: "Collection Rate",
      number: 50,
      progress: true,
      gif: irate,
    },
  ];

  return (
    <div>
      {/* -------------------------------- Cards -------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              {/* LEFT CONTENT */}
              <div className="flex flex-col w-full">
                <p className="font-medium text-[16px] text-[#1C1C1C]">
                  {item.des}
                </p>

                {/* NUMBER + GIF */}
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-[28px] text-[#1c1c1c] leading-none">
                    {item.progress
                      ? `${item.number}%`
                      : index === 0
                        ? `₹ ${item.number}`
                        : item.number}
                  </span>

                  <div className="flex items-center justify-center w-14 h-14">
                    <img
                      src={item.gif}
                      alt="icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* PROGRESS OR TEXT */}
                {item.progress ? (
                  <div className="mt-4 w-full">
                    {/* Progress Track */}
                    <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                      {/* Progress Fill */}
                      <div
                        className="h-full rounded-full bg-linear-to-r from-[#0B3142] to-[#1C7DA8] transition-all duration-700 ease-in-out"
                        style={{ width: `${item.number}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="mt-1 flex items-center gap-2 text-[14px] font-semibold">
                    <span className="text-[#009638]">{item.left}</span>
                    <span className="text-[#696969]">{item.text}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <================================ Switch Case ========================================> */}
      <div className="w-full mt-6 bg-white rounded-full shadow-md">
        <div className="flex gap-2 px-2 py-1 scrollbar-hide sm:overflow-visible sm:justify-between">
          {[
            "Fee Deposite",
            "Fee Receipt",
            "Pending Fees",
            "Fee Particulars",
            "Fee Structure",
            "Concessions",
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
  );
}

export default FeeManagement;

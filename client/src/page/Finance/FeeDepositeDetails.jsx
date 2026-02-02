import React from "react";
import yoda from "../../assets/images/yoda.jpg";

function FeeDepositeDetails() {
  return (
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
          <span className="text-[14px] text-[#696969] font-normal">Class:</span>
          <span className="font-semibold text-[14px] font-[#1C1C1C]">
            Nurcessary
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[14px] text-[#696969] font-normal">
            Father Name:
          </span>
          <span className="font-semibold text-[14px] font-[#1C1C1C]">
            Lakhan Pal
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
          <span className="px-2 py-1 bg-[#F8D7DA] text-[#C92131] w-fit rounded-md text-[12px] font-semibold">Unpaid</span>
        </div>
      </div>
    </div>
  );
}

export default FeeDepositeDetails;

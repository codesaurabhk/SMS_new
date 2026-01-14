import React from "react";
import pass from "../../assets/images/pass.gif";
import meter from "../../assets/images/meter.gif";
import fail from "../../assets/images/fail.gif";
import result from "../../assets/images/result.gif";
import { IoSearchOutline } from "react-icons/io5";

function Performance() {
  const performanceCardData = [
    {
      id: "1",
      performanceType: "Average Score",
      data: "85.2%",
      img: meter,
      result: "2.1%",
      summary: "from the last Exam",
    },
    {
      id: "2",
      performanceType: "Top Performer",
      data: "5",
      img: result,
      result: "",
      summary: "Student Above 90%",
    },
    {
      id: "3",
      performanceType: "Pass Rate",
      data: "95.2%",
      img: pass,
      result: "",
      summary: "Succesfully Passed",
    },
    {
      id: "4",
      performanceType: "Least Performears",
      data: "12",
      img: fail,
      result: "",
      summary: "Student Below 35%",
    },
  ];
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {performanceCardData.map((id, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <div>
              <span className="text-[16px] font-normal text-[#1C1C1C]">
                {id.performanceType}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <span className="text-[28px] font-bold text-[#1C1C1C]">
                  {id.data}
                </span>
              </div>
              <div className="w-16 h-16">
                <img
                  src={id.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-1 font-semibold text-[14px]">
              <span className="text-[#009638]">{id.result}</span>
              <span className="text-[#696969]">{id.summary}</span>
            </div>
          </div>
        ))}
      </div>

      {/* <================================ Select Student & Class ===========================> */}
      <div className="mt-6 rounded-lg bg-white p-4">
        <span className="font-semibold text-[18px] text-[#000000]">
          Performance Overview
        </span>
        <section className="mt-6">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-4">
            <div className="flex flex-col gap-1">
              <label>Class</label>
              <select className="border rounded-lg px-3 py-3 text-sm outline-none border-[#e6e6e6] focus:ring-1 focus:ring-[#696969]">
                <option value="" disabled>
                  Select Class
                </option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Student</label>
              <select className="border rounded-lg px-3 py-3 text-sm outline-none border-[#e6e6e6] focus:ring-1 focus:ring-[#696969]">
                <option value="Select" disabled>
                  Select Student
                </option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </section>

        <div className="mt-6 flex gap-4 items-center">
          <button className="text-white flex items-center bg-[#0B3142] p-2 rounded-md gap-2 font-semibold text-[16px]"><IoSearchOutline />Search</button>
          <button className="border border-[#9c9c9c] rounded-md font-semibold py-2 px-4 text-[14px] flex justify-center">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Performance;

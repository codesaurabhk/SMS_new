import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import mother from "../../assets/images/mother.jpg";
import baker from "../../assets/images/kathrine.jpg";

function Admission() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[#696969] text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
          All Student
        </span>

        <span className="text-[#696969]">
          <IoIosArrowForward size={18} />
        </span>

        <span className="text-[#1c1c1c] text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
          Admission Letter
        </span>
      </div>

      <div className="w-full">
        <div className="flex justify-around mt-8 ">
          <div className="pt-3 bg-linear-to-r from-[#0F4057] via-[#118AB2] to-[#0077B6] w-[80%]">
            <div className="bg-white mt-2 p-6 w-full">
              <div className="flex flex-wrap justify-between p-4 border-b-2 border-dashed border-[#9C9C9C] mb-8">
                <div className="w-63 h-40 overflow-hidden">
                  <img src={logo} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[#000000] text-[24px] font-semibold">
                    <span>Kasper Infotech Private Limited</span>
                  </div>
                  <div className="flex justify-center text-[16px] font-normal text-[#000000]">
                    <span>123, Education Avenue, springfield, IL 62710</span>
                  </div>
                  <div className="flex justify-center text-[16px] font-normal text-[#000000]">
                    <span>
                      Phone:- +91 620 212 4896 | Email:- info@greenwood.edu
                    </span>
                  </div>
                </div>
                <div>
                  <button className="px-3 py-2 bg-[#B5FFD1] border border-[#5BCB85] rounded-md font-semibold text-[#009638] text-[16px]">
                    • Active
                  </button>
                </div>
              </div>
              {/* <<--------------------------------------- id & login ----------------------------------->> */}
              <div className="mt-7 p-4 flex gap-12 w-full justify-between">
                {/* <<=========================== id card preview ===========================>> */}
                <div className="shadow-lg p-8 b w-[25%] rounded-lg bg-white">
                  <div className="flex flex-col gap-2 justify-center items-center ">
                    <div className=" h-60 w-60 overflow-hidden rounded-lg">
                      <img
                        src={baker}
                        alt="baker" 
                        className="rounded border border-[#ffffff]"
                        style={{
                          boxShadow: `2px 2px 12px rgba(255, 126, 249, 0.5),
                                     -2px -2px 12px rgba(100, 192, 233, 0.69)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* <<=========================== login id & password ===========================>> */}
                <div className="shadow-lg p-4 b w-[75%] rounded-lg bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;

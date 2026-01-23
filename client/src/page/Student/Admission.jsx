import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../assets/images/logo.png";

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
        <div className="flex justify-around mt-8 w-[80%]">
          <div className="pt-3 bg-linear-to-r from-[#0F4057] via-[#118AB2] to-[#0077B6] rounded-full">
            <div className="bg-white rounded-full mt-2 p-6 items-center">
              <div className="flex justify-between p-4">
                <div className="w-83 h-21 rounded-full overflow-hidden">
                  <img src={logo} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <span>Kasper Infotech Private Limited</span>
                  <span>123, Education Avenue, springfield, || il 62710</span>
                  <span>
                    Phone:- +91 620 212 4896 | Email:- info@greenwood.edu
                  </span>
                </div>
                <div>
                  <button>Active</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;

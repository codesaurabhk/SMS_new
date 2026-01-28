import React from "react";
import { FaHashtag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSchool } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CiLock } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsFillKeyFill } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoPrintOutline } from "react-icons/io5";
import { GrDownload } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import baker from "../../assets/images/kathrine.jpg";
import top from "../../assets/images/top.png";
import bottom from "../../assets/images/bottom.png";

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
          <div className="pt-3 bg-linear-to-r from-[#0F4057] via-[#118AB2] to-[#0077B6] w-[80%] rounded-4xl relative">
            <img src={bottom} alt="logo" className="absolute top-5 left-0" />
            <img src={top} alt="" className="absolute bottom-0 right-0" />

            <div className="bg-white mt-2 p-6 w-full rounded-4xl">
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
              <div className="mt-7 p-4 flex gap-12 w-full">
                {/* <<=========================== id card preview ===========================>> */}
                <div
                  className="p-8 w-[25%] rounded-lg bg-linear-to-r from-[#F9FAFB] to-[#ffffff]"
                  style={{
                    boxShadow: `0px 0px 8px 0px rgba(0, 0, 0, 0.15)`,
                  }}
                >
                  <div className="flex flex-col gap-2 items-center w-full">
                    <div
                      className="h-64 w-60 rounded-lg"
                      style={{
                        boxShadow: `2px 2px 12px rgba(255, 126, 249, 0.5),
                                   -2px -2px 12px rgba(100, 192, 233, 0.69)`,
                      }}
                    >
                      <img
                        src={baker}
                        alt="baker"
                        className="h-full w-full rounded-lg object-cover border-2 border-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center px-8 py-4 border-b border-[#E6E6E6] w-full">
                      <span className="text-[18px] text-[#000000] font-semibold">
                        Varsha Singh
                      </span>
                      <span className="text-[16px] text-[#9C9C9C] font-semibold">
                        STUD-1234
                      </span>
                    </div>

                    <div className="flex gap-3 border border-[#E6E6E6] px-3 py-4 w-full rounded-lg items-center">
                      <span className="text-[#155DFC] bg-[#D2E9FE] rounded-lg p-2">
                        <FaHashtag size={30} />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[14px] font-normal text-[#696969]">
                          Admission Number
                        </span>
                        <span className="font-semibold text-[#1C1C1C] text-[16px]">
                          12345678
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 border border-[#E6E6E6] px-3 py-4 w-full rounded-lg items-center">
                      <span className="text-[#9810FA] bg-[#E6E8FF] rounded-lg p-2">
                        <MdOutlineSchool size={30} />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[14px] font-normal text-[#696969]">
                          Class
                        </span>
                        <span className="font-semibold text-[#1C1C1C] text-[16px]">
                          12 A
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 border border-[#E6E6E6] px-3 py-4 w-full rounded-lg items-center">
                      <span className="text-[#E60076] bg-[#FEE5EB] rounded-lg p-2">
                        <SlCalender size={30} />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[14px] font-normal text-[#696969]">
                          Admission Date
                        </span>
                        <span className="font-semibold text-[#1C1C1C] text-[16px]">
                          13 November, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <<=========================== login id & password ===========================>> */}
                <div className="w-[75%]">
                  <div
                    className="p-8 rounded-lg bg-linear-to-r from-[#F9FAFB] to-[#ffffff] w-full"
                    style={{
                      boxShadow: `0px 0px 8px 0px rgba(0, 0, 0, 0.15)`,
                    }}
                  >
                    <div className="flex gap-3 px-3 py-4 w-full rounded-lg items-center">
                      <span className="bg-linear-to-r from-[#0F4057] to-[#118AB2] rounded-lg p-2">
                        <CiLock size={20} style={{ color: "white" }} />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[16px] font-semibold text-[#1c1c1c]">
                          Access Credential
                        </span>
                        <span className="font-normal text-[#696969] text-[14px]">
                          Use these to log into your account
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 border border-[#E6E6E6] px-6 py-4 w-full rounded-lg items-center mt-3">
                      <div className="flex justify-between p-2 w-full">
                        <div className="flex gap-6">
                          <span className="bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] rounded-lg p-2">
                            <FaUser size={30} style={{ color: "#FFFFFF" }} />
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[16px] font-normal text-[#696969]">
                              User Name
                            </span>
                            <span className="font-semibold text-[#1C1C1C] text-[16px]">
                              Langford@99gmail.com
                            </span>
                          </div>
                        </div>
                        <div>
                          <span>
                            <FaRegCopy size={20} style={{ color: "#9C9C9C" }} />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 border border-[#E6E6E6] px-6 py-4 w-full rounded-lg items-center mt-3">
                      <div className="flex justify-between p-2 w-full">
                        <div className="flex gap-6">
                          <span className="bg-linear-to-r from-[#0F4057] to-[#11B2AA] rounded-lg p-2">
                            <BsFillKeyFill
                              size={30}
                              style={{ color: "#FFFFFF" }}
                            />
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[16px] font-normal text-[#696969]">
                              User Name
                            </span>
                            <span className="font-semibold text-[#1C1C1C] text-[16px]">
                              Langford@99gmail.com
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span>
                            <FiEye size={20} style={{ color: "#9C9C9C" }} />
                          </span>
                          <span>
                            <FaRegCopy size={20} style={{ color: "#9C9C9C" }} />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 border border-[#FEE685] px-6 py-4 w-full rounded-lg items-center mt-3 bg-linear-to-r from-[#FFFBEB] to-[#FFF7ED]">
                      <span className="bg-linear-to-r from-[#C4523D] to-[#B29A11] rounded-lg p-2">
                        <BsFillShieldLockFill
                          size={30}
                          style={{ color: "white" }}
                        />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[16px] font-semibold text-[#894B00]">
                          Important Security Notice
                        </span>
                        <span className="font-normal text-[#BB4D00] text-[14px]">
                          Please Change your password immediately after your
                          first login to keep your account secure
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-8">
                    <button className="w-full flex items-center bg-[#0B3142] justify-center p-2 gap-4 rounded text-[#ffffff] text-[18px] font-semibold">
                      <IoPrintOutline /> Print Letter
                    </button>
                    <button className="w-full flex items-center bg-[#e6e6e6] border-2 border-[#E6E6E6] text-[#696969] justify-center p-2 gap-4 rounded text-[18px] font-semibold relative">
                      <GrDownload />
                      Download Pdf
                    </button>
                  </div>
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

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { HiDocumentText } from "react-icons/hi";
import { MdClass } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";

function AddStudent() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-[#696969] text-[24px] font-semibold">
          {" "}
          All Student
        </span>
        <span className="text-[#696969] ">
          <IoIosArrowForward size={18} />
        </span>
        <span className="text-[#1c1c1c] text-[24px] font-semibold">
          Add Student
        </span>
      </div>

      <div className="mt-6 bg-white p-4 rounded-md shadow-md">
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#1c1c1c] text-[18px] font-semibold">
              Add New Student
            </span>
            <span className="text-[#9c9c9c] text-[16px] font-normal ">
              Enter student information to enroll them in the school
            </span>
          </div>
        </div>

        {/* <----------------------------- stepper --------------------> */}
        {/* <div className="flex justify-center items-center mt-8 px-50">
          <div className="flex-auto p-0.5 rounded bg-[#eeeeee]"></div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-2">
            <div className="bg-[#E9C05A] text-[#0B3142] p-3 rounded-full w-12">
              <LuUser size={24} className=""/>
            </div>
            <div className="w-24">
            <span className="text-[#1c1c1c] text-[16px] font-medium">
              Student and Parents Info
            </span>
            </div>
            </div>
          </div>

          <div className="flex-auto p-0.5 rounded bg-[#eeeeee]"></div>
          
          <div className="flex flex-col items-center">
            <div>
            <div className="bg-[#E0E0E0] text-white p-3 rounded-full">
              <HiDocumentText size={24} />
            </div>
            </div>
            <span className="text-[#9c9c9c] text-[16px] font-medium">
              Upload Document
            </span>
          </div>
          <div className="flex-auto p-0.5 rounded bg-[#EEEEEE]"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#E0E0E0] text-white p-3 rounded-full">
              <MdClass size={24} />
            </div>
            <span className="text-[#9c9c9c] text-[16px] font-medium">
              Assign Class
            </span>
          </div>
          <div className="flex-auto p-0.5 rounded bg-[#EEEEEE]"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#E0E0E0] text-white p-3 rounded-full">
              <RiFileList3Fill size={24} />
            </div>
            <span className="text-[#9c9c9c] text-[16px] font-medium">
              Review & Submit
            </span>
          </div>
          <div className="flex-auto p-0.5 rounded bg-[#EEEEEE]"></div>
        </div> */}
        <div className="px-50 mt-8">
          <div className="bg-[#eeeeee] p-0.5  flex justify-between relative">
            <div
              style={{
                position: "absolute",
                display: "flex",
                zIndex: "999",
                width: "100%",
                justifyContent: "space-between",
                padding: "0 50px",
                top: "0px",
                bottom: "0",
              }}
            >
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9C05A] text-[#0B3142] p-3 rounded-full w-12">
                    <LuUser size={24} className="" />
                  </div>
                  <div className="w-24">
                    <span className="text-[#1c1c1c] text-[16px] font-medium">
                      Student and Parents Info
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9C05A] text-[#0B3142] p-3 rounded-full w-12">
                    <LuUser size={24} className="" />
                  </div>
                  <div className="w-24">
                    <span className="text-[#1c1c1c] text-[16px] font-medium">
                      Student and Parents Info
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9C05A] text-[#0B3142] p-3 rounded-full w-12">
                    <LuUser size={24} className="" />
                  </div>
                  <div className="w-24">
                    <span className="text-[#1c1c1c] text-[16px] font-medium">
                      Student and Parents Info
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9C05A] text-[#0B3142] p-3 rounded-full w-12">
                    <LuUser size={24} className="" />
                  </div>
                  <div className="w-24">
                    <span className="text-[#1c1c1c] text-[16px] font-medium">
                      Student and Parents Info
                    </span>
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

export default AddStudent;

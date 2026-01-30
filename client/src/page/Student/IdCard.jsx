import React, { useState } from "react";

/* ---------------- ICONS ---------------- */
import { IoPrintOutline } from "react-icons/io5";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { GrDownload } from "react-icons/gr";

/* ---------------- IMAGES ---------------- */
import everdeen from "../../assets/images/katnis.jpg";
import goku from "../../assets/images/goku.jpg";
import langford from "../../assets/images/langford.jpg";
import homelander from "../../assets/images/homelander.jpg";
import thanos from "../../assets/images/thanos.jpg";
import Joffrey from "../../assets/images/Joffrey.jpg";
import doll from "../../assets/images/bella.jpg";
import prime from "../../assets/images/prime.jpg";
import gamora from "../../assets/images/gamora.jpg";
import meave from "../../assets/images/meave.jpg";
import backgroundImg1 from "../../assets/images/backgroundone.png";
import backgroundImg2 from "../../assets/images/backgroundtwo.png";
import iddown1 from "../../assets/images/bottomone.png";
import iddown2 from "../../assets/images/bottom2.png";
import schoollogo from "../../assets/images/school-logo.png";
import Pagination from "../../components/Pagination";

/* ---------------- DATA ---------------- */
const studentData = [
  {
    student: "Katniss Everdeen",
    studentId: "001",
    img: everdeen,
    class: "12B",
  },
  { student: "Goku", studentId: "002", img: goku, class: "11B" },
  { student: "Katniss Langford", studentId: "010", img: langford, class: "1B" },
  { student: "Homelander", studentId: "003", img: homelander, class: "10C" },
  { student: "Thanos", studentId: "004", img: thanos, class: "9A" },
  {
    student: "Joffrey Baratheon",
    studentId: "005",
    img: Joffrey,
    class: "11A",
  },
  { student: "Annembella", studentId: "006", img: doll, class: "11B" },
  { student: "Optimus Prime", studentId: "007", img: prime, class: "7A" },
  { student: "Gamora", studentId: "008", img: gamora, class: "12A" },
  { student: "Maeve Wiley", studentId: "009", img: meave, class: "12C" },
];

const IdCard = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  /* Toggle checkbox */
  const handleCheckbox = (student) => {
    setSelectedStudents((prev) =>
      prev.some((s) => s.studentId === student.studentId)
        ? prev.filter((s) => s.studentId !== student.studentId)
        : [...prev, student],
    );
  };

  return (
    <div>
      <div className="box-shadow mt-3 bg-white rounded-md">
        {/* HEADER */}
        <div className="p-4">
          <h2 className="text-[18px] font-semibold text-[#1c1c1c]">
            Student ID Card Management
          </h2>
          <p className="text-sm text-[#696969]">
            Generate, print, and manage student ID cards
          </p>
        </div>

        {/* <-------------------------------------- search & filter ------------------------------> */}
        <div className="mt-3 p-4 flex items-center gap-36">
          {/* SEARCH */}
          <div className="flex-1">
            <span></span>
            <input
              type="search"
              placeholder="🔎︎ Search Student by name or admission Number..."
              className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="inline-flex items-center gap-3">
            <div className="flex justify-between">
              <label For="class" className=""></label>
              <div className="bg-[#EFF2F2] rounded px-2 py-2">
                <select name="" id="class" className="border-0 outline-0">
                  <option value="">Class</option>
                  <option value="">Nursery </option>
                  <option value="">UKG</option>
                  <option value="">Class 1</option>
                  <option value="">Class 2</option>
                  <option value="">Class 3</option>
                  <option value="">Class 4</option>
                  <option value="">Class 5</option>
                  <option value="">Class 6</option>
                  <option value="">Class 7</option>
                  <option value="">Class 8</option>
                </select>
              </div>
            </div>
            <label For="Section"></label>
            <div className="bg-[#EFF2F2] rounded px-1 py-1">
              <select
                name=""
                id="Section"
                className="px-1 py-1 border-0 outline-0"
              >
                <option value="">Section</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE + PREVIEW */}
        <div className="p-4">
          <div className="flex gap-4 w-full transition-all duration-300">
            {/* TABLE */}
            <div
              className={`${showPreview ? "w-1/2" : "w-full"} transition-all duration-300`}
            >
              <div className="border border-[#e6e6e6] rounded-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F5F7F7]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold w-[75%]">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          <span>Student Name</span>
                          <PiArrowsDownUpThin />
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Class
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentData.map((item, index) => {
                      const checked = selectedStudents.some(
                        (s) => s.studentId === item.studentId,
                      );

                      return (
                        <tr key={index} className="border-b border-[#e6e6e6]">
                          <td className="px-4 py-3 flex gap-3 items-center">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleCheckbox(item)}
                            />

                            <img
                              src={item.img}
                              alt=""
                              className="w-10 h-10 rounded-full object-cover"
                            />

                            <div className="flex flex-col">
                              <span className="font-semibold text-[#12516E]">
                                {item.student}
                              </span>
                              <span className="text-sm text-[#9c9c9c]">
                                {item.studentId}
                              </span>
                            </div>
                          </td>

                          <td className="px-4 py-3">{item.class}</td>

                          <td className="px-4 py-3 flex gap-3">
                            <FiEye
                              className={`w-5 h-5 cursor-pointer ${
                                checked ? "text-[#12516E]" : "text-[#ccc]"
                              }`}
                              onClick={() =>
                                selectedStudents.length && setShowPreview(true)
                              }
                            />
                            <IoPrintOutline className="w-5 h-5 text-[#9C9C9C]" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* PREVIEW */}
            {showPreview && (
              <div className="w-1/2 transition-all duration-300">
                <div className="border border-[#e6e6e6] rounded-lg p-6 bg-white overflow-y-auto">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[17px] text-[#1c1c1c] font-semibold">
                        ID Card Preview
                      </span>
                      <span className="text-[15px] text-[#9C9C9C] font-normal">
                        Preview of the Student id Card design
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <button className="w-full flex items-center bg-[#FFFFFF] border-2 border-[#E6E6E6] text-[#696969] justify-center px-4 py-2 gap-2 rounded text-[18px] font-semibold relative">
                        <GrDownload />
                        Download
                      </button>
                      <button className="w-full flex items-center bg-[#0B3142] justify-center px-4 py-2 gap-2 rounded text-[#ffffff] text-[18px] font-semibold">
                        <IoPrintOutline /> Print
                      </button>
                    </div>
                  </div>

                  {/* <<----------------------------ID Card ------------------------------->> */}

                  {/* Content */}
                  <div className="flex flex-wrap gap-x-2 gap-y-6 mt-12">
                    {selectedStudents.map((student, index) => (
                      <div key={index} className="w-51">
                        <div className="relative border border-[#E6E6E6] bg-white rounded-xl overflow-hidden shadow-md h-80">
                          {/* Top Header */}
                          <img src={backgroundImg1} alt="" />
                          <img
                            src={backgroundImg2}
                            alt=""
                            className="absolute top-0 left-0 z-10"
                          />

                          <div className="text-white text-center p-4 absolute top-0 left-0 z-10 flex">
                            <div>
                              <img
                                src={schoollogo}
                                alt=""
                                className="h-9 w-9 overflow-hidden rounded-full mt-1"
                              />
                            </div>

                            <div>
                              <p className="font-semibold text-sm">
                                School name
                              </p>
                              <p className="text-[10px] opacity-90 mt-1">
                                (Govt. Recognized)
                              </p>
                              <p className="text-[10px] mt-1 leading-tight">
                                Place your address, District
                                <br />
                                state and pin - 000000
                              </p>

                              <img
                                src={student.img}
                                alt="Profile"
                                className="w-16 h-18 mx-auto rounded-md object-cover border-2 mt-2 ml-3 border-[#FFFFFF]"
                              />
                            </div>
                          </div>

                          {/* Body */}
                          <div className="mt-4 text-center">
                            <h3 className="mt-3 text-[#118AB2] text-[16px] font-bold">
                              {student.student}
                            </h3>

                            <p className="text-[10px] font-semibold text-[#0B3142]">
                              {student.studentId}
                            </p>

                            <div className="flex justify-between items-center gap-2 mt-1.5 px-6">
                              <div className="flex flex-col text-[8px] text-left text-nowrap">
                                <span>Father Name</span>
                                <span>Mother Name</span>
                                <span>Date of Birth</span>
                                <span>Contact</span>
                                <span>Address</span>
                              </div>
                              <div className="flex flex-col text-[8px] text-left font-semibold text-nowrap">
                                <span>Super Man</span>
                                <span>Louise Lane</span>
                                <span>05-10-1999</span>
                                <span>6204569873</span>
                                <span>A-3/ 228 New Kondli, Delhi-96</span>
                              </div>
                            </div>

                            <div className="flex justify-between px-6 mt-5">
                              <div className="flex gap-2">
                                <span className="font-normal text-[8px] text-[#000000]">
                                  Class:-
                                </span>
                                <span className="font-medium text-[8px] text-[#000000]">
                                  12A
                                </span>
                              </div>
                              <span className="text-[#000000] text-[6px] font-normal">
                                Princple Sign.
                              </span>
                            </div>
                          </div>

                          {/* Bottom Curve */}
                          <img
                            src={iddown1}
                            className="absolute bottom-0 -right-1"
                            alt=""
                          />
                          <img
                            src={iddown2}
                            className="absolute z-10 bottom-0"
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-[#F9F9F9] border border-[#E6E6E6] p-2 rounded-lg">
                    <span className="text-[#9C9C9C] font-semibold text-[12px]">
                      Card Specifications:
                    </span>
                    <div className="mt-4">
                      <div className="flex flex-col">
                        <span className="font-normal text-[12px] text-[#9C9C9C]">
                          • Size: 85.6mm × 54mm (CR80){" "}
                        </span>
                        <span className="font-normal text-[12px] text-[#9C9C9C]">
                          • Material: PVC with lamination
                        </span>
                        <span className="font-normal text-[12px] text-[#9C9C9C]">
                          • Features: QR Code, Emergency contact
                        </span>
                        <span className="font-normal text-[12px] text-[#9C9C9C]">
                          • Validity: 1 Academic Year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default IdCard;

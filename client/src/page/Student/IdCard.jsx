import React from "react";



{
  /* <---------------------------------------------- icon -----------------------------------------------------> */
}
import { IoPrintOutline } from "react-icons/io5";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";


/* <----------------------------------------------- img -------------------------------------------------------> */
import everdeen from "../../assets/images/katnis.jpg";
import goku from "../../assets/images/goku.jpg";
import langford from "../../assets/images/langford.jpg";
import homelander from "../../assets/images/homelander.jpg";
import thanos from "../../assets/images/thanos.jpg";
import Joffrey from "../../assets/images/Joffrey.jpg";
import doll from "../../assets/images/bella.jpg";
import prime from "../../assets/images/prime.jpg";
import peter from "../../assets/images/lord.jpg";
import gamora from "../../assets/images/gamora.jpg";
import meave from "../../assets/images/meave.jpg";
import Pagination from "../../components/Pagination";


const studentData = [
  {
    student: "katniss Everdeen",
    studentId: "001",
    img: everdeen,
    class: "12B",
  },
  {
    student: "Goku",
    studentId: "002",
    img: goku,
    class: "11B",
  },
  {
    student: "Katniss langford",
    studentId: "010",
    img: langford,
    class: "1B",
  },
  {
    student: "Homelander",
    img: homelander,
    studentId: "003",
    class: "10C",
  },
  {
    student: "Thanos",
    studentId: "004",
    img: thanos,
    class: "9A",
  },
  {
    student: "Joffrey Baratheon",
    img: Joffrey,
    studentId: "005",
    class: "11A",
  },
  {
    student: "Annembella",
    img: doll,
    studentId: "006",
    class: "11B",
  },
  {
    student: "optimus Prime",
    img: prime,
    studentId: "007",
    class: "7A",
  },
  {
    student: "Gamora ",
    img: gamora,
    studentId: "008",
    class: "12A",
  },
  {
    student: "Meave Wiley",
    img: meave,
    studentId: "009",
    class: "12C",
  },
];
const IdCard = () => {
  return (
    <div>
      <div className="box-shadow mt-3 bg-white rounded-md">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Student ID Card Management
              </span>
              <span className="text-sm text-[#696969]">
                Genrate, print, and manage student ID Cards 
              </span>
            </p>
          </div>
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
              <select
                name=""
                id="class"
                className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
              >
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
            <label For="Section"></label>
            <select
              name=""
              id="Section"
              className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0"
            >
              <option value="">Section</option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>
          </div>
        </div>

        {/* <------------------------------------------ Table ---------------------------------------> */}
        <div className="p-4">
          <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
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
                    <div className="flex items-center gap-2">
                      <span>Class</span>
                      <PiArrowsDownUpThin />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {studentData.map((item, index) => (
                  <tr key={index} className="border-b border-[#e6e6e6]">
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 items-center">
                      <input type="checkbox" />
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Name + ID */}
                          <div className="flex flex-col leading-tight">
                            <span className="text-[#12516E] font-semibold">
                              {item.student}
                            </span>
                            <span className="text-sm text-[#9c9c9c] font-semibold">
                              {item.studentId}
                            </span>
                          </div>
                        </div>
                    </td>

                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      {item.class}
                    </td>
                   
                    <td className="px-4 py-3 text-left text-sm font-semibold flex gap-3 ">
                      
                      <FiEye className="w-5 h-5 text-[#9C9C9C]" />
                      <IoPrintOutline className="w-5 h-5 text-[#9C9C9C]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <------------------------------------------- pagination ---------------------------------> */}
        <Pagination />
      </div>
    </div>
  );
};

export default IdCard;

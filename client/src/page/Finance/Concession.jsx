import React from "react";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";

{
  /* <================================== img ================================> */
}
import iron from "../../assets/images/iron-man.jpg";
import spy from "../../assets/images/spider-man.jpeg";
import thor from "../../assets/images/thor.jpg";
import captain from "../../assets/images/captain.jpg";
import king from "../../assets/images/king.jpg";
import hulk from "../../assets/images/hulk.jpeg";
import batman from "../../assets/images/batman.jpg";
import flash from "../../assets/images/flash.jpg";
import diana from "../../assets/images/wonder-women.jpg";
import superman from "../../assets/images/super.jpg";

function Concession() {
  const conscessiondata = [
    {
      id: 1,
      studentName: "Iron Man",
      studId: "HERO-001",
      class: "Avenger Squad",
      type:"merit",
      amountwaived: "500",
      discount: "10%",
      valid: "31 Mar 2026",
      status: "Active",
      img: iron,
    },
    {
      id: 2,
      studentName: "Spider Man",
      studId: "HERO-002",
      class: "Web Warriors",
      type:"merit",
      amountwaived: "700",
      discount: "15%",
      valid: "30 Apr 2026",
      status: "Active",
      img: spy,
    },
    {
      id: 3,
      studentName: "Thor",
      studId: "HERO-003",
      class: "Thunder Titans",
      type:"merit",
      amountwaived: "900",
      discount: "20%",
      valid: "15 May 2026",
      status: "Inactive",
      img: thor,
    },
    {
      id: 4,
      studentName: "Hulk",
      studId: "HERO-004",
      class: "Gamma Giants",
      type:"merit",
      amountwaived: "600",
      discount: "12%",
      valid: "01 Jun 2026",
      status: "Active",
      img: hulk,
    },
    {
      id: 5,
      studentName: "Captain America",
      studId: "HERO-005",
      class: "Shield Champs",
      type:"merit",
      amountwaived: "800",
      discount: "18%",
      valid: "20 Jun 2026",
      status: "Expired",
      img: captain,
    },
    {
      id: 6,
      studentName: "Black Panther",
      studId: "HERO-006",
      class: "Wakanda Force",
      type:"merit",
      amountwaived: "650",
      discount: "13%",
      valid: "10 Jul 2026",
      status: "Active",
      img: king,
    },
    {
      id: 7,
      studentName: "Flash",
      studId: "HERO-007",
      class: "Speed Stars",
      type:"merit",
      amountwaived: "400",
      discount: "8%",
      valid: "05 Aug 2026",
      status: "Inactive",
      img: flash,
    },
    {
      id: 8,
      studentName: "Batman",
      studId: "HERO-008",
      class: "Dark Knights",
      type:"merit",
      amountwaived: "750",
      discount: "16%",
      valid: "25 Sep 2026",
      status: "Active",
      img: batman,
    },
    {
      id: 9,
      studentName: "Superman",
      studId: "HERO-009",
      class: "Sky Legends",
      type:"merit",
      amountwaived: "950",
      discount: "22%",
      valid: "12 Oct 2026",
      status: "Active",
      img: superman,
    },
    {
      id: 10,
      studentName: "Wonder Woman",
      studId: "HERO-010",
      class: "Amazon Warriors",
      type:"merit",
      amountwaived: "700",
      discount: "14%",
      valid: "30 Nov 2026",
      status: "Active",
      img: diana,
    },
  ];

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
      {/* <-------------====== Header ------------=======> */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="flex flex-col">
            <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
              Consession & Scholarships
            </span>
            <span className="text-sm text-[#696969]">
              Manage fee structure, Collenction & connections
            </span>
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 text-[#e6e6e6] font-semibold text-[16px] border border-[#9c9c9c] rounded-lg">
            <IoMdAdd size={20} className="text-[#e6e6e6]" />
            Consession Type
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg">
            <IoMdAdd size={20} className="text-white" />
            Apply Concession
          </button>
        </div>
      </div>

      {/* <-------------------------------------- search & filter ------------------------------> */}
      <div className="mt-6 flex items-center gap-28">
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
        <div className="inline-flex items-center gap-2">
          <div className="flex justify-between">
            <label htmlFor="class" className=""></label>
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

          <label htmlFor="Section"></label>
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

          <label htmlFor="qutoatype"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name=""
              id="qutoatype"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0"
            >
              <option value="">Select Type</option>
              <option value="">Sport Quota</option>
              <option value="">Sibling Discount</option>
              <option value="">Merit Scholarship</option>
            </select>
          </div>

          <label htmlFor="status"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name=""
              id="status"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0"
            >
              <option value="">Status</option>
              <option value="">Expire</option>
              <option value="">Active</option>
            </select>
          </div>
        </div>
      </div>

      {/* <============================ Table ============================> */}
      <div className="mt-8 border border-[#e6e6e6] rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e6e6e6]">
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold flex justify-between items-center">
                <span>Student</span>
                <span>
                  <RxCaretSort />
                </span>
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Class
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Consession Type
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Amount Waived
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Discount
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold flex justify-between items-center">
                <span>Valid Period</span>
                <span>
                  <RxCaretSort />
                </span>
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Status
              </th>
              <th className="px-5 py-4 text-left text-[14px] text-[#1c1c1c] font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {conscessiondata.map ((item, index) => (
            <tr key={index} className="border-b border-[#e6e6e6]">
              <td className="px-4 py-3 text-left font-normal text-[#12516E] text-[14px]">
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
                      {item.studentName}
                    </span>
                    <span className="text-sm text-[#9c9c9c] font-semibold">
                      {item.studId}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-left font-normal text-[14px]">{item.class}</td>
              <td className="px-4 py-3 text-left font-normal text-[14px]">{item.type}</td>
              <td className="px-4 py-3 text-left font-normal text-[14px]">{item.amountwaived}</td>
              <td className="px-4 py-3 text-left font-normal text-[14px]">{item.discount}</td>
              <td className="px-4 py-3 text-left font-normal text-[14px]">{item.valid}</td>
              <td className="px-4 py-3 text-left font-normal text-[14px]">{item.status}</td>
              <td className="px-4 py-3 text-left font-normal text-[14px] flex gap-2"></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Concession;

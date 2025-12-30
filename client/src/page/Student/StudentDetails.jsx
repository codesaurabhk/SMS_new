import React, { useEffect, useRef, useState } from "react";
import "../../CSS/Style.css";
import * as d3 from "d3";

/* <------------------------------- icon ------------------------------> */
import { IoMdArrowBack } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { PiChartLineUpLight } from "react-icons/pi";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { GiBus } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdOutlineImage } from "react-icons/md";
import { TfiBook } from "react-icons/tfi";
import { SlBadge } from "react-icons/sl";
import { LuTarget } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";

/** <------------------------------------ images -------------------------------> */
import langford from "../../assets/images/langford.jpg";
import mikasa from "../../assets/images/mikasa.png";
import { Link } from "react-router-dom";

function SubjectWiseMarksChart() {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(0);

  const data = [
    { subject: "Mathematics", marks: 100 },
    { subject: "Science", marks: 88 },
    { subject: "English", marks: 78 },
    { subject: "History", marks: 88 },
    { subject: "Geography", marks: 88 },
  ];

  /* Resize Observer */
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  /* Draw Chart */
  useEffect(() => {
    if (!width) return;

    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg.attr("width", width).attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.subject))
      .range([0, innerWidth])
      .padding(0.25);

    const yScale = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

    const grid = chart.append("g").call(
      d3
        .axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickFormat(() => "")
    );

    grid
      .selectAll("line")
      .attr("stroke", "#e6e6e6")
      .attr("stroke-dasharray", "2 2");

    grid
      .selectAll("line")
      .filter((d) => d === 0 || d === yScale.domain()[1])
      .remove();

    chart
      .append("g")
      .call(d3.axisLeft(yScale).tickValues([0, 25, 50, 75, 100]));
    chart.selectAll(".domain").attr("stroke", "#e6e6e6");

    chart
      .append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .select(".domain")
      .remove(); // ✅ removes black bottom line

    chart
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("path")
      .attr("class", "bar")
      .attr("fill", "#00B4D8")
      .attr("d", (d) => {
        const x = xScale(d.subject);
        const y = yScale(d.marks);
        const w = xScale.bandwidth();
        const h = innerHeight - y;
        const r = 6; // top corner radius

        return `
      M ${x}, ${y + r}
      Q ${x}, ${y} ${x + r}, ${y}
      L ${x + w - r}, ${y}
      Q ${x + w}, ${y} ${x + w}, ${y + r}
      L ${x + w}, ${y + h}
      L ${x}, ${y + h}
      Z
    `;
      });
  }, [width]);

  return (
    <div ref={wrapperRef} className="w-full">
      <svg ref={svgRef} />
    </div>
  );
}

function DetailsContent({ active }) {
  const documentData = [
    {
      img: mikasa,
      documentName: "Date of Birth",
      date: "2024-04-10",
      fileType: "jpg",
      fileSize: "512",
    },
    {
      img: mikasa,
      documentName: "Previous School Transfer Certificate",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "312",
    },
    {
      img: mikasa,
      documentName: "Adhar",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Transfer Certificate",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Medical Certificate",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Parent ID Proof",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "520",
    },
    {
      img: mikasa,
      documentName: "Previous Acedemic Report",
      date: "2024-04-10",
      fileType: "pdf",
      fileSize: "420",
    },
    {
      img: mikasa,
      documentName: "Guardian Photo",
      date: "2024-04-10",
      fileType: "jpg",
      fileSize: "50",
    },
  ];
  switch (active) {
    case "Personal Info":
      return (
        <div className="">
          <div className="bg-white mt-6 p-4 rounded-lg">
            {/* HEADER */}
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaRegUser className="text-[#696969]" />
              <span className="font-semibold">Personal Information</span>
            </div>

            {/* GRID CONTENT */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
              {/* ITEM */}
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Full Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Kathrine Langford
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Date of Birth
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  29 April 1996
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Age
                </span>
                <span className="text-[#1c1c1c] text-[16px]">29</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Gender
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Female</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Mobile Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">6202124896</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Email
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Langford@yahoo.com
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Admission Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">123456</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Blood Group
                </span>
                <span className="text-[#1c1c1c] text-[16px]">A+</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Category
                </span>
                <span className="text-[#1c1c1c] text-[16px]">OBC</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Citizenship
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Perth</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Religion
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Jews</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Nationality
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Australian</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Mother Tongue
                </span>
                <span className="text-[#1c1c1c] text-[16px]">English</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Place of Birth
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Australia Perth
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Primary Language
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  English, Bhojpuri
                </span>
              </div>
            </div>
          </div>
          {/* <------------------------------------------------------ Address ------------------------------------------------> */}
          <div className="bg-white mt-6 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaMapMarkerAlt className="text-[#696969]" />
              <span className="font-semibold">Permament Address</span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-10">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Full Address
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Autralia Perth
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Country
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Australia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  State
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Bihar</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  City
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Perth</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Zip Code
                </span>
                <span className="text-[#1c1c1c] text-[16px]">800020</span>
              </div>
            </div>
          </div>

          {/* <---------------------------------------------- Parent Information --------------------------------------------> */}

          <div className="bg-white mt-6 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <div>
                <MdFamilyRestroom className="text-[#696969]" />
              </div>
              <div>
                <span className="font-semibold">
                  Parent/Guardian Information
                </span>
                <p className="text-[#9C9C9C] font-normal">
                  Detailed Parent Guardian Contact
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <div className="border border-[#e6e6e6] rounded shadow-sm p-4">
                <div className="flex items-center gap-2 text-[#1c1c1c]">
                  <FaMale className="text-[#696969]" />
                  <span className="font-semibold">Father's Information</span>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-y-6 gap-x-10">
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Name
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Jason Langford
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Occupation
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Actor</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Company
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Fox</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Qualification
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">M.I.T</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Mobile
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      9661285080
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Email
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Jason@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Annual Income
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">20 m</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#e6e6e6] rounded shadow-sm p-4">
                <div className="flex items-center gap-2 text-[#1c1c1c]">
                  <FaMale className="text-[#696969]" />
                  <span className="font-semibold">Mother Information</span>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-y-6 gap-x-10">
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Name
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Natasha Langford
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Occupation
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Actress</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Company
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Disney</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Qualification
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">Oxford</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Mobile
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      9661288050
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Email
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">
                      Natasha@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#696969] font-normal text-[16px]">
                      Annual Income
                    </span>
                    <span className="text-[#1c1c1c] text-[16px]">30 m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <----------------------------------------------------- Admission Details -----------------------------------------> */}
          <div className="mt-6 bg-white p-4 rounded-lg">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaRegFileAlt className="text-[#696969]" />
              <span className="font-semibold">
                Medical & Health Infoprmation
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cold-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Chornics Illness
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Allgeries
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Medication
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Dietary Restrition
                </span>
                <span className="text-[#1c1c1c] text-[16px]">None</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Physical Disablity
                </span>
                <span className="text-[#1c1c1c] text-[16px]">None</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Doctor Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Doctor Contact Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
            </div>
          </div>

          {/* <----------------------------------------------- Sibling Information ---------------------------------------------------> */}
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <LuUser className="text-[#696969]" />
              <span className="font-semibold">
                Medical & Health Infoprmation
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Full Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Arya Stark</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Ralation
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Step Sister</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Admission Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">123456897</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Class
                </span>
                <span className="text-[#1c1c1c] text-[16px]">12 A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Gender
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Female</span>
              </div>
            </div>
          </div>

          {/* <------------------------------------------------ transport -------------------------------------------------> */}
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <GiBus className="text-[#696969]" />
              <span className="font-semibold">Transport Information</span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Uses School Transport
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Bus of Howgwarts
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Bus Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  IND 24-Au 0531
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Route Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Howgwarts to Winterfell
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Bus Stop
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Westrors</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  pick up Time
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Winter</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Drop off
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Summar</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Driver Man
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  R.R. Martin & J.K Rollins
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Driver Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">652134789</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Transport Fee
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Death</span>
              </div>
            </div>
          </div>

          {/* <--------------------------------------------------- Document ------------------------------------------------> */}

          <div className="mt-6 p-4 bg-white rounded-lg">
            {/* HEADER */}
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <FaRegFileAlt className="text-[#696969]" />
              <span className="font-semibold">Document Submitted</span>
            </div>

            {/* GRID */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {/* <------------------------------------------- CARD ---------------------------------------> */}
              {documentData.map((item, index) => (
                <div className="border-2 border-[#e6e6e6] p-4 rounded-lg flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                  {/* <--------------------------------------- LEFT CONTENT --------------------------------------> */}
                  <div className="flex gap-4 items-center">
                    {/* <-------------------------------------- IMAGE ----------------------------------------> */}
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-tl-md rounded-bl-md relative flex justify-center items-center overflow-hidden">
                      <img
                        src={mikasa}
                        alt=""
                        className="w-full h-full object-cover opacity-90 inset-shadow-lg"
                      />
                      <MdOutlineImage className="absolute text-white text-[20px]" />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col text-sm sm:text-base">
                      <span className="font-medium">{item.documentName}</span>

                      <span className="text-[#696969] text-xs sm:text-sm">
                        uploaded: {item.date} • {item.fileType} •{" "}
                        {item.fileSize} KB
                        <span className="ml-2 px-1.5 py-0.5 rounded-md bg-[#D4EDDA] text-[#009638] text-xs">
                          verified
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="px-5 py-2 bg-[#118AB2] rounded-lg flex gap-2 items-center justify-center text-white w-full sm:w-auto">
                      <FaEye /> View
                    </button>

                    <button className="px-4 py-2 bg-white rounded-lg flex gap-2 items-center justify-center text-[#696969] border-2 border-[#9C9C9C] w-full sm:w-auto">
                      <GoDownload /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "Academic":
      return (
        <div>
          <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-x-6 gap-y-6">
            {/* <-------------------------------------- admission Details -----------------------------------> */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-[#e6e6e6]">
              <div className="flex items-center gap-2 text-[#1c1c1c]">
                <FaRegFileAlt className="text-[#696969]" />
                <span className="font-semibold">Admission Details</span>
              </div>
              <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-10">
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Admission date
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">12-12-12</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Admission number
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">12312412</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Acedemic Year
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">2012-2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Admission Class
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">2</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Aplication Number
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">748965755</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Enterance Test Score
                  </span>
                  <span className="text-[#009638] text-[16px]">92/100</span>
                </div>
              </div>
            </div>

            {/* <------------------------------------ Current Class Details ----------------------------------> */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-[#e6e6e6]">
              <div className="flex items-center gap-2 text-[#1c1c1c]">
                <IoSchoolOutline className="text-[#696969]" />
                <span className="font-semibold">Current Class Details</span>
              </div>
              <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-10">
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Class
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">11</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Section
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Stream
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">-</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    House/Group
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">Blue House</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Roll No
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">1</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px]">
                    Student ID
                  </span>
                  <span className="text-[#1c1c1c] text-[16px]">05311996</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <TfiBook className="text-[#696969]" />
              <span className="font-semibold">Enrolled subjects</span>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-6 mt-6">
              <button className="bg-[#118AB2] px-5 py-2 border-[#e6e6e6] rounded-lg text-[white]">
                English
              </button>
              <button className="bg-[#894B00] px-5 py-2 border-[#e6e6e6] rounded-lg text-[white] ">
                Hindi
              </button>
              <button className="bg-[#007AFF] px-5 py-2 border-[#e6e6e6] rounded-lg text-[white] ">
                Mathematics
              </button>
              <button className="bg-[#00A87C] px-5 py-2 border-[#e6e6e6] rounded-lg text-[white] ">
                Science
              </button>
              <button className="bg-[#EF476F] px-5 py-2 border-[#e6e6e6] rounded-lg text-[white] ">
                History
              </button>
              <button className="bg-[#0077B6] px-5 py-2 border-[#e6e6e6] rounded-lg text-[white] ">
                Geography
              </button>
            </div>
          </div>

          {/* <-------------------------------------------------- Previous Education -------------------------------------> */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm ">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <TfiBook className="text-[#696969]" />
              <span className="font-semibold">Enrolled subjects</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Previous School Name
                </span>
                <span className="text-[#1c1c1c] text-[16px]">
                  Mount Fuzi High School
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Previous Class
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Class 1</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Transfer Certificate Number
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Transfer Reason
                </span>
                <span className="text-[#1c1c1c] text-[16px]">-</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "Performance":
      const performanceData = [
        {
          subject: "Mathematics",
          marksObtained: 85,
          totalMarks: 100,
          percentage: 85,
          grade: "A+",
          texts: "good performance",
        },
        {
          subject: "Science",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "C",
          texts: "good performance",
        },
        {
          subject: "English",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "B+",
          texts: "good performance",
        },
        {
          subject: "Hindi",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "B",
          texts: "good performance",
        },
        {
          subject: "History",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "A",
          texts: "good performance",
        },
        {
          subject: "Geography",
          marksObtained: 90,
          totalMarks: 100,
          percentage: 90,
          grade: "D+",
          texts: "good performance but need",
        },
      ];

      const subjectHoverColors = {
        Mathematics: "hover:bg-[#007AFF]/20",
        Science: "hover:bg-[#00A87C]/20",
        Englis: "hover:bg-[#118AB2]/20",
        Hindi: "hover:bg-[#894B00]/20",
        History: "hover:bg-[#FFF4F4]",
        Geography: "hover:bg-[#0077B6]/20",
        default: "hover:bg-gray-100",
      };

      const gradeColors = {
        "A+": "bg-green-500",
        A: "bg-blue-500",
        "B+": "bg-teal-500",
        B: "bg-yellow-500",
        "c+": "bg-purple-500",
        C: "bg-orange-500",
        "D+": "bg-pink-500",
        D: "bg-red-500",
      };

      const examPerformanceData = [
        {
          examName: "UT 1",
          maxMarks: 600,
          marksObtained: 540,
          percentage: 90,
          grade: "A",
          result: "Pass",
          rank: 1,
        },
        {
          examName: "Mid Term",
          maxMarks: 600,
          marksObtained: 310,
          percentage: 85,
          grade: "B+",
          result: "Pass",
          rank: 2,
        },
        {
          examName: "UT 2",
          maxMarks: 600,
          marksObtained: 380,
          percentage: 80,
          grade: "B",
          result: "Pass",
          rank: 3,
        },
        {
          examName: "Annual",
          maxMarks: 600,
          marksObtained: 40,
          percentage: 75,
          grade: "C",
          result: "Fail",
          rank: 5,
        },
      ];

      const ResultColors = {
        Pass: "bg-[#D4EDDA] text-[#155724]",
        Fail: "bg-[#F8D7DA] text-[#721C24]",
      };

      return (
        <div>
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 text-[#1c1c1c]">
              <SlBadge size={20} className="text-[#696969]" />
              <span className="font-semibold">Overall Performance Summary</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Class & Section
                </span>
                <span className="text-[#1c1c1c] text-[16px]">Grade 10 - A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Overall Percentage
                </span>
                <span className="text-[#1c1c1c] text-[16px] items-center gap-2 flex">
                  85.4%
                  <p className="px-4 bg-[#009638] rounded text-white">A</p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Class Rank
                </span>
                <span className="text-[#1c1c1c] text-[16px]">1 / 120</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#696969] font-normal text-[16px]">
                  Section Rank
                </span>
                <span className="text-[#1c1c1c] text-[16px]">1</span>
              </div>
            </div>
          </div>
          {/* <---------------------------------------------- Table -----------------------------------------------> */}
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <LuTarget size={20} className="text-[#696969]" />
                <span className="font-semibold text-[#1c1c1c]">
                  Subject-wise Performance Breakdown
                </span>
              </div>
              {/* <------------------------------------- Filter -----------------------------------------> */}
              <div className="inline-flex items-center gap-3">
                <label For="Exam"></label>
                <select
                  name=""
                  id="Exam"
                  className="bg-[#EFF2F2] rounded-md px-4 py-1 border-0 outline-0 text-[#1c1c1c] font-normal"
                >
                  <option value="">UT 1</option>
                  <option value="">UT 2</option>
                  <option value="">Mid Term</option>
                  <option value="">Annual</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
                <table className="min-w-full border-collapse ">
                  <thead>
                    <tr className="bg-[#F5F5F5]">
                      <th className="px-4 py-2 text-left">Subject</th>
                      <th className="px-4 py-2 text-left">Marks Obtained</th>
                      <th className="px-4 py-2 text-left">Total Marks</th>
                      <th className="px-4 py-2 text-left">Percentage</th>
                      <th className="px-4 py-2 text-left">Grade</th>
                      <th className="px-4 py-2 text-left w-60">
                        Teacher Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          subjectHoverColors[item.subject] ||
                          subjectHoverColors.default
                        }
                      >
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]  ">
                          {item.subject}
                        </td>
                        <td className=" px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c] text-left">
                          {item.marksObtained}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.totalMarks}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.percentage}%
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#ffffff]">
                          <span
                            className={`inline-block min-w-12 px-3 py-1 rounded text-white font-semibold text-center ${
                              gradeColors[item.grade] || "bg-gray-500"
                            }`}
                          >
                            {item.grade}
                          </span>
                        </td>
                        <td className="px-3 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          <textarea
                            name=""
                            id=""
                            className="bg-gray-200 rounded border border-[#E6E6E6] w-full h-12 p-2 resize-none outline-0"
                          >
                            {item.texts}
                          </textarea>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
              <div className="p-4 bg-[#F8F3F3] border-2 border-[#FBD1D1] rounded-lg">
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px] flex items-center gap-2">
                    <CiWarning size={28} className="fill-[red]" />
                    <span className="text-[#DC2626] text-[18px]">
                      Weakest Subject
                    </span>
                  </span>
                  <span className="text-[#DC2626] text-[16px]">
                    Hindi - 60% (Need to improve Writing Skill)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#D0FFE2] border-2 border-[#B5FFD1] rounded-lg">
                <div className="flex flex-col">
                  <span className="text-[#696969] font-normal text-[16px] flex items-center gap-2">
                    <CiStar size={28} className="fill-[#04ff04] " />
                    <span className="text-[#267E3E] text-[18px]">
                      Strongest Subject
                    </span>
                  </span>
                  <span className="text-[#267E3E] text-[16px]">
                    Hindi - 60% (Excelent Writing Skill)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <------------------------------------- Exam Performance Summary ---------------------------------------> */}
          <div className="mt-6 bg-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <FaClipboardList size={20} className="text-[#696969]" />
                <span className="font-semibold text-[#1c1c1c]">
                  Exam Performance Summary
                </span>
              </div>
              {/* <------------------------------------- Filter -----------------------------------------> */}
              <div className="inline-flex items-center gap-3">
                <label For="Exam"></label>
                <select
                  name=""
                  id="Exam"
                  className="bg-[#EFF2F2] rounded-md px-4 py-1 border-0 outline-0 text-[#1c1c1c] font-normal"
                >
                  <option value="">UT 1</option>
                  <option value="">UT 2</option>
                  <option value="">Mid Term</option>
                  <option value="">Annual</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
                <table className="min-w-full border-collapse ">
                  <thead>
                    <tr className="bg-[#F5F5F5]">
                      <th className="px-4 py-2 text-left">Exam Name</th>
                      <th className="px-4 py-2 text-left">Marks Obtained</th>
                      <th className="px-4 py-2 text-left">Max Marks</th>
                      <th className="px-4 py-2 text-left">Percentage</th>
                      <th className="px-4 py-2 text-left">Grade</th>
                      <th className="px-4 py-2 text-left">Rank</th>
                      <th className="px-4 py-2 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examPerformanceData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          subjectHoverColors[item.subject] ||
                          subjectHoverColors.default
                        }
                      >
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]  ">
                          {item.examName}
                        </td>
                        <td className=" px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c] text-left">
                          {item.marksObtained}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.maxMarks}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          {item.percentage}%
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#ffffff]">
                          <span
                            className={`inline-block min-w-12 px-3 py-1 rounded text-white font-semibold text-center ${
                              gradeColors[item.grade] || "bg-gray-500"
                            }`}
                          >
                            {item.grade}
                          </span>
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          #{item.rank}
                        </td>
                        <td className="px-4 py-2 border-b border-[#e6e6e6] text-[#1c1c1c]">
                          <span
                            className={`inline-flex items-center gap-2 px-2 py-1  rounded font-semibold min-w-24 text-center justify-center ${
                              ResultColors[item.result] ||
                              "bg-gray-200 text-gray-700"
                            }`}
                          >
                            <span className="text-lg leading-none">•</span>
                            {item.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <------------------------------------- Exam Performance Graph -----------------------------------------> */}
          <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
            <div className="mt-6 bg-white rounded-lg p-4">
              <SubjectWiseMarksChart />
            </div>
            <div className="mt-6 bg-white rounded-lg p-4"></div>
          </div>
        </div>
      );

    case "Attendance":
      return <div>Attendance Content</div>;

    case "Fees":
      return <div>Fees Details Content</div>;

    default:
      return null;
  }
}

function StudentDetails() {
  const [active, setActive] = useState("Personal Info");

  const baseBtn = "gap-8 flex justify-around w-full items-center";

  const activeBtn =
    "bg-[#0B3142] text-[#FFFFFF] border rounded-full px-25 py-2 gap-8";

  const inactiveBtn =
    "text-[#9EA1A1] px-15 py-2 hover:bg-[#e6e6e6] rounded-full px-25 py-2 gap-8";

  return (
    <div className="p-4">
      <div className="flex gap-4 items-center text-[#1C1C1C] font-semibold">
        <span>
          <Link to="/students">
            <IoMdArrowBack />
          </Link>
        </span>
        <span>Back</span>
      </div>

      <div
        className="mt-3 p-4 sm:p-6 lg:p-7.5 rounded-lg w-full 
  bg-linear-to-r from-[#9796F0] to-[#FBC7D4]"
      >
        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
          {/* LEFT SECTION */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            {/* PROFILE IMAGE */}
            <div className="flex justify-center sm:justify-start">
              <div
                className="rounded-full h-28 w-28 sm:h-36 sm:w-36 
          border-2 border-white overflow-hidden"
              >
                <img
                  src={langford}
                  alt="langford"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* DETAILS */}
            <div className="flex-1 w-full">
              {/* NAME + STATUS */}
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-lg font-semibold">
                  Katherine Langford
                </span>

                <div className="relative inline-flex items-center px-3 py-1 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-[#009638] rounded-full animate-spread"></span>
                  <span className="relative z-10 bg-[#009638] text-white text-sm font-semibold rounded-full px-3">
                    Active
                  </span>
                </div>
              </div>

              {/* BASIC INFO */}
              <div className="flex gap-15 mt-4">
                {[
                  ["Student ID", "STUD 1234"],
                  ["Admission No.", "0531"],
                  ["Class", "10 A"],
                  ["Academic Year", "2024-26"],
                ].map(([label, value], idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-white text-sm font-normal">
                      {label}
                    </span>
                    <span className="font-semibold text-[#1C1C1C]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {/* CARD 1 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#DBEAFE] p-2 rounded-full">
                      <IoSchoolOutline size={26} className="text-[#155DFC]" />
                    </div>
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Overall Grade</span>
                      <span className="font-semibold">A+</span>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#DCFCE7] p-2 rounded-full">
                      <PiChartLineUpLight
                        size={26}
                        className="text-[#00A63E]"
                      />
                    </div>
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Attendance Rate</span>
                      <span className="font-semibold">95%</span>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-[#ffffff73] px-4 py-2 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#DBEAFE] p-2 rounded-full">
                      <CiTrophy size={26} className="text-[#9810FA]" />
                    </div>
                    <div className="flex flex-col text-[#1C1C1C]">
                      <span className="text-sm">Class Rank</span>
                      <span className="font-semibold">#1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACTION BUTTON */}
          <div>
            <div className="bg-[#0B3142] p-2 rounded-lg flex justify-start lg:justify-end">
              <button className="flex gap-1 items-center text-white font-semibold">
                <LiaUserEditSolid />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <------------------------------------------------------ filter ------------------------------------------------> */}
      <div className="w-full mt-6 bg-white rounded-full">
        <div className="flex items-center p-1 rounded-full gap-1 overflow-x-auto whitespace-nowrap sm:overflow-visible sm:justify-between">
          {[
            "Personal Info",
            "Academic",
            "Performance",
            "Attendance",
            "Fees",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
          ${baseBtn}
          min-w-max
          px-4 py-2
          text-sm sm:text-base
          ${active === item ? activeBtn : inactiveBtn}
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

export default StudentDetails;

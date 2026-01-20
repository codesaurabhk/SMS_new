import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "../../CSS/Style.css";
import "react-day-picker/dist/style.css";

/* <----------------------------------- import img & gif ---------------------------------------> */
import calender1 from "../../assets/images/calender.gif";
import calender2 from "../../assets/images/calender2.gif";
import calender3 from "../../assets/images/calender3.gif";
import calender4 from "../../assets/images/calender4.gif";
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

import Pagination from "../../components/Pagination";

/* <---------------------------------------------- icon -----------------------------------------------------> */
import { PiArrowsDownUpThin } from "react-icons/pi";

/* <--------------------------------------------------- calender -----------------------------------------------> */
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { LuCalendarDays } from "react-icons/lu";

function Attendance() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState("Daily Attendance");

  const baseBtn =
    "flex font-medium text-sm rounded-full transition-all duration-300";

  const activeBtn =
    "bg-[#F5F7F7] text-[#0B3142] border border-white px-8 py-2 shadow-sm";

  const inactiveBtn = "text-[#9EA1A1] px-8 py-2 hover:text-[#0B3142]";

  const attendanceData = [
    {
      id: 1,
      title: "Present Students",
      value: "460",
      percentage: "60%",
      des: "present Students",
      icon: calender1,
      percentColor: "text-[#009638]",
    },
    {
      id: 2,
      title: "Absent Students",
      value: "10",
      percentage: "38%",
      des: "absent Students",
      icon: calender2,
      percentColor: "text-[#DC2626]",
    },
    {
      id: 3,
      title: "On - Leave",
      value: "5",
      percentage: "28%",
      des: "leave Students",
      icon: calender3,
      percentColor: "text-[#F97316]",
    },
    {
      id: 4,
      title: "Attendance Rate",
      value: "95%",
      percentage: "95%",
      des: "attendance rate",
      icon: calender4,
      percentColor: "text-[#009638]",
    },
  ];

  /* <--------------------------------------------------- student Dummy Data --------------------------------------------> */
  const studentData = [
    {
      id: 1,
      student: "katniss Everdeen",
      studentId: "001",
      img: everdeen,
      class: "12B",
      status: "Present",
      rollNo: "1",
      attendancePercentage: "95%",
    },
    {
      id: 2,
      student: "Goku",
      studentId: "002",
      img: goku,
      class: "11B",
      status: "Present",
      rollNo: "2",
      attendancePercentage: "100%",
    },
    {
      id: 3,
      student: "Katniss langford",
      studentId: "010",
      img: langford,
      class: "1B",
      status: "Present",
      rollNo: "3",
      attendancePercentage: "99%",
    },
    {
      id: 4,
      student: "Homelander",
      img: homelander,
      studentId: "003",
      class: "10C",
      status: "Present",
      rollNo: "4",
      attendancePercentage: "45%",
    },
    {
      id: 5,
      student: "Thanos",
      studentId: "004",
      img: thanos,
      class: "9A",
      status: "Absent",
      rollNo: "5",
      attendancePercentage: "2%",
    },
    {
      id: 6,
      student: "Joffrey Baratheon",
      img: Joffrey,
      studentId: "005",
      class: "11A",
      status: "Leave",
      rollNo: "6",
      attendancePercentage: "1%",
    },
    {
      id: 7,
      student: "Annembella",
      img: doll,
      studentId: "006",
      class: "11B",
      status: "Present",
      rollNo: "7",
      attendancePercentage: "9%",
    },
    {
      id: 8,
      student: "optimus Prime",
      img: prime,
      studentId: "007",
      class: "7A",
      status: "Present",
      rollNo: "8",
      attendancePercentage: "100%",
    },
    {
      id: 9,
      student: "Gamora ",
      img: gamora,
      studentId: "008",
      class: "12A",
      status: "Absent",
      rollNo: "9",
      attendancePercentage: "50%",
    },
    {
      id: 10,
      student: "Meave Wiley",
      img: meave,
      studentId: "009",
      class: "12C",
      status: "Leave",
      rollNo: "10",
      attendancePercentage: "90%",
    },
  ];

  const statusStyle = {
    Present: "bg-[#D4EDDA] text-[#009638]",
    Absent: "bg-[#F8D7DA] text-[#C92131]",
    Leave: "bg-[#FDEBD0] text-[#D35400]",
  };

  const leaveAbsent = [
    {
      id: 1,
      img: thanos,
      student: "Thanos",
      class: "9A",
      status: "Absent",
      reason: "No information",
    },
    {
      id: 2,
      img: Joffrey,
      student: "Joffrey Baratheon",
      class: "12A",
      status: "Absent",
      reason: "No information",
    },
    {
      id: 3,
      img: meave,
      student: "Meave Wiley",
      class: "12C",
      status: "Leave",
      reason: "Sick Leave",
    },
    {
      id: 4,
      img: goku,
      student: "Goku",
      class: "11B",
      status: "Absent",
      reason: "No information",
    },
    {
      id: 5,
      img: gamora,
      student: "Gamora ",
      class: "12A",
      status: "Absent",
      reason: "Family Function",
    },
    {
      id: 6,
      img: Joffrey,
      student: "Joffrey Baratheon",
      class: "12A",
      status: "Absent",
      reason: "No information",
    },
  ];

  /* <-------------------------------- graph component ----------------------> */
  function ExamPerformanceTrendChart() {
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);
    const tooltipRef = useRef(null);
    const [width, setWidth] = useState(0);

    const data = [
      { Attendance: "Jan", attendanceRate: 55 },
      { Attendance: "feb", attendanceRate: 75 },
      { Attendance: "March", attendanceRate: 90 },
      { Attendance: "April", attendanceRate: 82 },
      { Attendance: "May", attendanceRate: 52 },
      { Attendance: "June", attendanceRate: 98 },
    ];

    /* ---------------- Resize Observer ---------------- */
    useEffect(() => {
      if (!wrapperRef.current) return;
      const observer = new ResizeObserver((entries) => {
        setWidth(entries[0].contentRect.width);
      });
      observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }, []);

    /* ---------------- Draw Chart ---------------- */
    useEffect(() => {
      if (!width) return;

      const height = 300;
      const margin = { top: 20, right: 30, bottom: 40, left: 50 };

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
      svg.attr("width", width).attr("height", height);

      const chart = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      /* ---------------- Gradient Definition ---------------- */
      const defs = svg.append("defs");

      const gradient = defs
        .append("linearGradient")
        .attr("id", "area-gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#007AFF")
        .attr("stop-opacity", 0.35);

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#007AFF")
        .attr("stop-opacity", 0);

      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const xScale = d3
        .scalePoint()
        .domain(data.map((d) => d.Attendance))
        .range([0, innerWidth]);

      const yScale = d3
        .scaleLinear()
        .domain([0, 100])
        .nice()
        .range([innerHeight, 0]);

      /* ---------------- Grid Lines ---------------- */
      const grid = chart
        .append("g")
        .call(
          d3
            .axisLeft(yScale)
            .tickValues([0, 25, 50, 75, 100])
            .tickSize(-innerWidth)
            .tickFormat(""),
        );

      grid
        .selectAll("line")
        .attr("stroke", "#e6e6e6")
        .attr("stroke-dasharray", "2 2");

      grid
        .selectAll("line")
        .filter((d) => d === 100)
        .remove();

      /* ---------------- Y Axis ---------------- */
      chart
        .append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale).tickValues([0, 25, 50, 75, 100]));

      chart.select(".y-axis").select(".domain").remove();
      chart.selectAll(".y-axis .tick line").remove();

      /* ---------------- X Axis ---------------- */
      chart
        .append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale));

      chart.selectAll(".domain").remove();

      /* ---------------- Area ---------------- */
      const area = d3
        .area()
        .x((d) => xScale(d.Attendance))
        .y0(innerHeight)
        .y1((d) => yScale(d.attendanceRate))
        .curve(d3.curveMonotoneX);

      chart
        .append("path")
        .datum(data)
        .attr("fill", "url(#area-gradient)")
        .attr("d", area);

      /* ---------------- Line ---------------- */
      const line = d3
        .line()
        .x((d) => xScale(d.Attendance))
        .y((d) => yScale(d.attendanceRate))
        .curve(d3.curveMonotoneX);

      chart
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#007AFF")
        .attr("stroke-width", 3)
        .attr("d", line);

      /* ---------------- Hover Line ---------------- */
      const hoverLine = chart
        .append("line")
        .attr("stroke", "#007AFF")
        .attr("y1", 0)
        .attr("y2", innerHeight)
        .style("opacity", 0);

      /* ---------------- Dots + Tooltip ---------------- */
      chart
        .selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => xScale(d.Attendance))
        .attr("cy", (d) => yScale(d.attendanceRate))
        .attr("r", 6)
        .attr("fill", "#007AFF")
        .on("mouseenter", (event, d) => {
          const cy = yScale(d.attendanceRate);
          hoverLine
            .attr("x1", xScale(d.Attendance))
            .attr("x2", xScale(d.Attendance))
            .attr("y1", cy)
            .attr("y2", innerHeight)
            .style("opacity", 1);

          d3.select(tooltipRef.current)
            .style("opacity", 1)
            .html(
              `<strong>${d.Attendance}</strong><br/>attendanceRate: ${d.attendanceRate}`,
            );
        })
        .on("mousemove", (event) => {
          const bounds = wrapperRef.current.getBoundingClientRect();
          d3.select(tooltipRef.current)
            .style("left", event.clientX - bounds.left + 10 + "px")
            .style("top", event.clientY - bounds.top - 40 + "px");
        })
        .on("mouseleave", () => {
          hoverLine.style("opacity", 0);
          d3.select(tooltipRef.current).style("opacity", 0);
        });
    }, [width]);

    return (
      <div ref={wrapperRef} className="relative w-full h-[320px]">
        <svg ref={svgRef} className="w-full h-full" />
        <div
          ref={tooltipRef}
          className="absolute bg-[#0B3142] text-white px-3 py-2 rounded text-sm pointer-events-none opacity-0"
        />
      </div>
    );
  }

  return (
    <div className="">
      {/* TOP CARDS */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {attendanceData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between ">
              <div className="flex flex-col justify-center">
                <p className="font-medium text-[16px] text-[#1C1C1C]">
                  {item.title}
                </p>

                <span className="font-bold text-[28px] text-[#1c1c1c] mt-2 leading-none">
                  {item.value}
                </span>

                <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold ">
                  <span className={`${item.percentColor}`}>
                    {item.percentage}
                  </span>
                  <span className="text-[#696969]">{item.des}</span>
                </p>
              </div>

              <div className="flex items-center justify-center w-16 h-16">
                <img
                  src={item.icon}
                  alt="student"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TABLE SECTION */}
      <div className="shadow-md mt-3 bg-white rounded-md">
        <div className="flex justify-between p-4 items-center">
          <div>
            <p className="flex flex-col">
              <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
                Student Management
              </span>
              <span className="text-sm text-[#696969]">
                Manage Student Information, Enrollment, and Academic Report
              </span>
            </p>
          </div>

          <div className=" p-4 bg-white">
            <div className="inline-flex items-center gap-2 bg-[linear-gradient(to_right,#F5F2ED,#F4F5F0,#EDF5F3)] mt-2 rounded-2xl p-1">
              {["Daily Attendance", "Period Attendance"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`${baseBtn} ${
                    active === item ? activeBtn : inactiveBtn
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="flex flex-col sm:flex-row gap-3 p-4">
          <div className="relative w-fit ">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between gap-2 bg-[#F2F5F4] rounded-lg px-5 py-3"
            >
              <span className="text-[16px] font-medium text-[#1C1C1C]">
                {format(date, "d MMMM, yyyy")}
              </span>
              <LuCalendarDays className="w-6 h-6 text-[#1C1C1C]" />
            </button>

            {open && (
              <div className="absolute z-50 mt-3 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4">
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={(selected) => {
                    if (selected) {
                      setDate(selected);
                      setOpen(false);
                    }
                  }}
                  classNames={{
                    caption: "flex justify-between items-center mb-4",
                    caption_label: "font-semibold text-[16px]",
                    nav_button:
                      "h-8 w-8 rounded-lg border flex items-center justify-center hover:bg-gray-100",
                    head_cell: "text-[12px] font-medium text-gray-500",
                    day: "h-9 w-9 rounded-full hover:bg-gray-100",
                    day_selected: "bg-[#0F3D4C] text-white hover:bg-[#0F3D4C]",
                    day_today: "font-bold text-[#0F3D4C]",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* SEARCH + FILTER */}
        <div className="p-4 flex items-center gap-36">
          <div className="flex-1">
            <input
              type="search"
              placeholder="🔎︎ Search Student by name or admission Number..."
              className="w-full bg-[#EEEEEE] rounded-lg px-4 py-2"
            />
          </div>

          <div className="inline-flex items-center gap-3">
            <select className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0">
              <option value="">Class</option>
              <option value="">Nursery</option>
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

            <select className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0">
              <option value="">Section</option>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
              <option value="">D</option>
            </select>

            <select className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0">
              <option value="">Status</option>
              <option value="">Present</option>
              <option value="">Absent</option>
              <option value="">Leave</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="p-4">
          <div className="w-full overflow-x-auto border border-[#e6e6e6] rounded-lg">
            <table className="w-full">
              <thead className="bg-[#F5F7F7]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Roll No
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold w-[50%]">
                    <div className="flex items-center gap-2">
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
                    Attandance%
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {studentData.map((item, index) => (
                  <tr key={index} className="border-b border-[#e6e6e6]">
                    <td className="px-4 py-3 text-left text-sm font-semibold text-[#9c9c9c]">
                      <div className="flex gap-3 items-center">
                        #{item.rollNo}
                      </div>
                    </td>

                    {/* ✅ FIXED TD (removed flex from td) */}
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={item.img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>

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
                    <td className="px-4 py-3 text-left text-sm font-semibold text-[#009638]">
                      {item.attendancePercentage}
                    </td>
                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold ${
                          statusStyle[item.status] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <span className="text-sm leading-none">
                          • &nbsp;{item.status}
                        </span>
                      </span>
                    </td>

                    <td className="px-4 py-3 text-left text-sm font-semibold">
                      <div>
                        <button className="border border-[#9C9C9C] text-[#9C9C9C] px-3 py-2 rounded-lg font-medium hover:bg-[#009638] hover:text-white">
                          <span>P</span>
                        </button>
                        <button className="ml-2 border border-[#9C9C9C] text-[#9C9C9C] px-3 py-2 rounded-lg font-medium hover:bg-[#DEDEDE] hover:text-white">
                          <span>A</span>
                        </button>
                        <button className="ml-2 border border-[#9C9C9C] text-[#9C9C9C] px-3 py-2 rounded-lg font-medium hover:bg-[#FDEBD0] hover:text-white">
                          <span>L</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination />
      </div>

      {/* BOTTOM 2 CARDS */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        {/* 45% */}
        <div className="w-full lg:w-[45%] bg-white p-4 rounded-lg shadow">
          <div className="bg-white border border-[#e6e6e6] p-2 rounded-lg">
            <span className="text-[#000000] font-semibold text-[18px]">
              Today's Absent Student
            </span>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-3 gap-3">
              {leaveAbsent.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 justify-between rounded p-3 items-center border border-[#e6e6e6]"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-[#000000] text-[16px] font-normal">
                        {item.student}
                      </span>
                      <span className="text-[#9c9c9c] text-[14px] font-normal">
                        {item.class}
                      </span>

                      <div className="flex text-[14px] font-normal">
                        <span className="text-[#696969]">Reason-</span>
                        <span className="text-[#00ADAD]">{item.reason}</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg font-semibold ${
                          statusStyle["Absent"] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <span className="text-sm leading-none">
                          {item.status}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 55% */}
        <div className="w-full lg:w-[55%] bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-[#0B3142]">
              Attandance trend
            </span>

            <select className="bg-[#EFF2F2] rounded px-2 py-2 border-0 outline-0 text-sm">
              <option value="" disabled>
                Select Month
              </option>
              <option value="last 3 month">Last 3 month</option>
              <option value="last 6 month">Last 6 month</option>
              <option value="last 12 month">Last 12 month</option>
            </select>
          </div>

          <div className="mt-4 border border-[#9c9c9c] rounded-md p-4">
            <ExamPerformanceTrendChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;

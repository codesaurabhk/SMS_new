import React from "react";
import "../../CSS/Style.CSS"
import student from "../../assets/images/studentGif.gif";
import calender from "../../assets/images/calender.gif";
import kalu from "../../assets/images/kalu.gif";
import chair from "../../assets/images/chair.gif";


const cardData = [
  {
    des: "Total Student",
    number: "500",
    left: "468",
    text: "Student Present",
    gif: student,
  },
  {
    des: "Attendance Rate",
    number: "94.7%",
    left: "+2.1%",
    text: "from the last month",
    gif: calender,
  },
  {
    des: "New Student",
    number: "34",
    left: "",
    text: "session 2024-2025",
    gif: kalu,
  },
  {
    des: "Unassigned Student",
    number: "12",
    left: "",
    text: "Not mapped to class or section",
    gif: chair,
  }
  
];

const Student = () => {
  return (
    <div>
      {/* <--------------------------------------- Card -----------------------------------> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
        {cardData.map((item, index) => (
          <div key={index} className="box-shadow bg-white rounded-2xl p-4">
          <div className="flex items-center justify-between ">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <p className="font-medium text-[16px] text-[#1C1C1C]">
                {item.des}
              </p>

              <span className="font-bold text-[28px] text-[#1c1c1c] mt-2 leading-none">
                {item.number}
              </span>

              <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold ">
                <span className="text-[#009638]">{item.left}</span>
                <span className="text-[#696969]">
                  {item.text}
                </span>
              </p>
            </div>

            {/* RIGHT ICON / GIF */}
            <div className="flex items-center justify-center w-16 h-16">
              <img
                src={item.gif}
                alt="student"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Student;

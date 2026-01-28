import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiArrowsDownUpThin } from "react-icons/pi";

/* Generate dates till 31 Dec */
const generateDecemberDates = () => {
  const dates = [];
  for (let i = 1; i <= 31; i++) {
    dates.push(`${i} Dec`);
  }
  return dates;
};

const days = generateDecemberDates();

/* Dummy staff data */
const staffData = [
  {
    name: "Anushka Sharma",
    id: "EP123456",
    avatar: "https://i.pravatar.cc/40?img=47",
    attendance: ["P","P","P","P","P","P"]
  },
  {
    name: "Ranveer Singh",
    id: "EP123459",
    avatar: "https://i.pravatar.cc/40?img=12",
    attendance: ["P","A","P","P","P","P"]
  },
  {
    name: "Kareena Kapoor",
    id: "EP123460",
    avatar: "https://i.pravatar.cc/40?img=32",
    attendance: ["A","P","L","P","P","P"]
  },
  {
    name: "Shraddha Kapoor",
    id: "EP123457",
    avatar: "https://i.pravatar.cc/40?img=22",
    attendance: ["P","P","P","P","P","L"]
  },
  {
    name: "Hrithik Roshan",
    id: "EP123462",
    avatar: "",
    attendance: ["P","P","P","P","A","P"]
  },
];

const badgeStyle = {
  P: "bg-green-600 text-white",
  A: "bg-red-500 text-white",
  L: "bg-orange-500 text-white",
  H: "bg-teal-500 text-white",
};

export default function AttendanceRegister() {
  const [search, setSearch] = useState("");

  const filteredStaff = staffData.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border shadow-sm border-[#E6E6E6]  p-6">

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Attendance Summary
        </h2>
        <p className="text-sm text-gray-500">
          View all staff attendance here
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex  items-center gap-4 mb-4">
        <div className="relative basis-[80%]  ">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search staff by name or staff id..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 basis-[20%] justify-end">
          <select className="px-3 py-2 bg-gray-100 rounded-md text-sm">
            <option>2025</option>
          </select>
          <select className="px-3 py-2 bg-gray-100 rounded-md text-sm">
            <option>December</option>
          </select>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto border border-[#E6E6E6] rounded-lg">
        <table className="min-w-600 w-full text-sm">

          {/* Table Head */}
          <thead className="bg-gray-50 border-b border-[#E6E6E6]">
            <tr>
              <th className="sticky left-0 z-20 bg-gray-50 px-4 py-3 text-left font-medium">
                 <div className="flex items-center gap-1">
                <span className="text-[#9C9C9C]"><PiArrowsDownUpThin /></span>
                <span>Staff</span>
                </div>
              </th>
              {days.map(day => (
                <th
                  key={day}
                  className="px-3 py-3 text-center font-medium whitespace-nowrap"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredStaff.map((staff, i) => (
              <tr key={i} className="border-b border-[#E6E6E6] last:border-0">

                {/* Sticky Staff Column */}
                <td className="sticky left-0 z-10 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    {staff.avatar ? (
                      <img
                        src={staff.avatar}
                        alt=""
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
                        👤
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-[#12516E]">
                        {staff.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {staff.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Attendance Cells */}
                {days.map((_, idx) => {
                  const status = staff.attendance[idx];
                  return (
                    <td key={idx} className="px-4 py-3 text-center">
                      {status ? (
                        <span
                          className={`inline-flex w-8.5 h-10 items-center justify-center rounded-md text-base font-semibold ${badgeStyle[status]}`}
                        >
                          {status}
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <Legend label="Present" badge="P" bg="bg-[#B5FFD1]" text="text-[#009638]" badgeBg="bg-[#009638]" />
        <Legend label="Absent" badge="A" bg="bg-[#FBD1D1]" text="text-[#DC2626]" badgeBg="bg-[#DC2626]" />
        <Legend label="Leave" badge="L" bg="bg-[#FDDCC4]" text="text-[#F97316]" badgeBg="bg-[#F97316]" />
        <Legend label="Half Day" badge="H" bg="bg-[#C4FDF3]" text="text-[#00ADAD]" badgeBg="bg-[#00ADAD]" />
      </div>

    </div>
  );
}

/* Legend Card */
function Legend({ label, badge, bg, text, badgeBg }) {
  return (
    <div className={`flex justify-between items-center px-4 py-3 rounded-lg w-92.20 h-18 ${bg}`}>
      <span className={`text-xl ${text}`}>{label}</span>
      <span className={`w-8.5 h-10 flex items-center justify-center rounded-md text-white text-base font-semibold ${badgeBg}`}>
        {badge}
      </span>
    </div>
  );
}

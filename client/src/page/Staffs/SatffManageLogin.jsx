import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const days = [
  "1 Dec","2 Dec","3 Dec","4 Dec","5 Dec","6 Dec",
  "7 Dec","8 Dec","9 Dec","10 Dec","11 Dec","12 Dec","13 Dec","14 Dec"
];

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

export default function AttendanceSummary() {
  const [search, setSearch] = useState("");

  const filteredStaff = staffData.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Attendance Summary
        </h2>
        <p className="text-sm text-gray-500">
          View all staff attendance here
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4 gap-4">
        <div className="relative w-full max-w-xl">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search staff by name or staff id..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <select className="px-3 py-2 text-sm bg-gray-100 rounded-md">
            <option>2025</option>
          </select>
          <select className="px-3 py-2 text-sm bg-gray-100 rounded-md">
            <option>December</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-700">
                Staff
              </th>
              {days.map(day => (
                <th key={day} className="px-3 py-3 font-medium text-gray-700">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredStaff.map((staff, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {staff.avatar ? (
                      <img
                        src={staff.avatar}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                        👤
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-blue-700">
                        {staff.name}
                      </p>
                      <p className="text-xs text-gray-500">{staff.id}</p>
                    </div>
                  </div>
                </td>

                {days.map((_, idx) => {
                  const status = staff.attendance[idx];
                  return (
                    <td key={idx} className="px-3 py-3 text-center">
                      {status ? (
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-xs font-semibold ${badgeStyle[status]}`}
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
        <Legend label="Present" color="bg-green-100 text-green-700" badge="P" badgeColor="bg-green-600" />
        <Legend label="Absent" color="bg-red-100 text-red-700" badge="A" badgeColor="bg-red-500" />
        <Legend label="Leave" color="bg-orange-100 text-orange-700" badge="L" badgeColor="bg-orange-500" />
        <Legend label="Half Day" color="bg-teal-100 text-teal-700" badge="H" badgeColor="bg-teal-500" />
      </div>
    </div>
  );
}

function Legend({ label, color, badge, badgeColor }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-lg ${color}`}>
      <span className="font-medium">{label}</span>
      <span className={`w-8 h-8 flex items-center justify-center rounded-md text-white text-sm font-semibold ${badgeColor}`}>
        {badge}
      </span>
    </div>
  );
}

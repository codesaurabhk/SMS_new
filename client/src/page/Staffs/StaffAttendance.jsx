import React from 'react'

const StaffAttendance = () => {
  return (
    <div>
      <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-semibold text-[#1C1C1C]">
            Current Position Details
          </span>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6 border-b">
          <div>
            <p className="text-sm text-[#8A8A8A]">Employee ID</p>
            <p className="font-medium">EMP2024002</p>
          </div>
          <div>
            <p className="text-sm text-[#8A8A8A]">Department</p>
            <p className="font-medium">Academics</p>
          </div>
          <div>
            <p className="text-sm text-[#8A8A8A]">Role</p>
            <p className="font-medium">Teacher</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b">
          <div>
            <p className="text-sm text-[#8A8A8A]">Joining Date</p>
            <p className="font-medium">1-06-2025</p>
          </div>

          <div>
            <p className="text-sm text-[#8A8A8A]">Employment Type</p>
            <span className="inline-block mt-1 px-3 py-1 text-sm border rounded-md font-medium">
              Full-time
            </span>
          </div>

          <div>
            <p className="text-sm text-[#8A8A8A]">Years of Service</p>
            <p className="font-medium">2 months</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="pt-6">
          <p className="text-sm text-[#8A8A8A]">Work Shift</p>
          <p className="font-medium">Morning (8:00AM - 2:00PM)</p>
        </div>
      </div>
      <div className="bg-white border border-[#E6E6E6] rounded-xl p-6 mt-6">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-semibold text-[#1C1C1C]">
            Subjects & Classes
          </span>
        </div>

        {/* Subjects */}
        <div className="pb-6 border-b">
          <p className="text-sm text-[#8A8A8A] mb-3">Subjects</p>

          <span className="inline-block px-4 py-2 bg-[#007AFF] text-white text-sm rounded-lg font-medium">
            Mathematics
          </span>
        </div>

        {/* Classes Assigned */}
        <div className="pt-6">
          <p className="text-sm text-[#8A8A8A] mb-3">Classes Assigned</p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border rounded-lg text-sm font-medium">
              Class 1A
            </span>
            <span className="px-4 py-2 border rounded-lg text-sm font-medium">
              Class 3 A
            </span>
            <span className="px-4 py-2 border rounded-lg text-sm font-medium">
              Class 4 A
            </span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default StaffAttendance
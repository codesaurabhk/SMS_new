import React from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
  return (
    
    <div className="p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
  
  {/* LEFT: Page size + info */}
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
    <select
      id="page"
      className="w-fit px-3 py-1 bg-[#F9F9F9] text-[#696969] rounded border-0 outline-0
      shadow-[inset_-2px_0px_1px_rgba(0,0,0,0.05),
             inset_2px_1px_0px_rgba(0,0,0,0.05),
             inset_0px_-2px_1px_rgba(0,0,0,0.05),
             inset_0px_2px_1px_rgba(0,0,0,0.05)]"
    >
      <option>All</option>
      <option>10</option>
      <option>20</option>
      <option>30</option>
      <option>40</option>
    </select>

    <label
      htmlFor="page"
      className="text-[#696969] text-sm sm:text-base flex gap-1.5"
    >
      Showing
      <span className="text-[#1C1C1C] ">1 - 10</span>
      of 200 result
    </label>
  </div>

  {/* RIGHT: Pagination */}
  <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-md bg-white">
    
    {/* Previous */}
    <div className="flex gap-2 items-center text-[#9C9C9C]">
      <button className="w-6 h-6 flex items-center justify-center">
        <IoIosArrowBack className="w-4 h-4" />
      </button>
      <span className="text-sm hidden sm:inline">Previous</span>
    </div>

    {/* Page Numbers */}
    <div className="flex items-center gap-1">
      <div className="px-2 py-1 bg-[#12516E] text-white text-sm rounded">
        1
      </div>
      <div className="px-2 py-1 text-sm">2</div>
      <div className="px-2 py-1 text-sm">3</div>
      <div className="px-2 py-1 text-sm hidden sm:block">4</div>
      <span className="px-2 py-1 text-sm hidden sm:block">...</span>
      <div className="px-2 py-1 text-sm hidden sm:block">10</div>
    </div>

    {/* Next */}
    <div className="flex gap-2 items-center text-[#1C1C1C]">
      <span className="text-sm hidden sm:inline">Next</span>
      <button className="w-6 h-6 flex items-center justify-center">
        <IoIosArrowForward className="w-4 h-4" />
      </button>
    </div>
  </div>
</div>

  )
}

export default Pagination
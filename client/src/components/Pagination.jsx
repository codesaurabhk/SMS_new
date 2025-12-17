import React from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
  return (
    <div className="p-4 flex justify-between">
              <div className="flex gap-5 items-center">
                <select
                  name=""
                  id="page"
                  className="px-3 py-1 bg-[#F9F9F9] rounded border-0 outline-0
                  shadow-[inset_-2px_0px_1px_rgba(0,0,0,0.05),
                         inset_2px_1px_0px_rgba(0,0,0,0.05),
                         inset_0px_-2px_1px_rgba(0,0,0,0.05),
                         inset_0px_2px_1px_rgba(0,0,0,0.05)]"
                >
                  <option value="">10</option>
                  <option value="">All</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">40</option>
                </select>
                <label For="page" className="text-[#696969] text-lg flex gap-1.5">
                  showing
                  <span className="text-[#1C1C1C] ">
                    <b>1 - 10</b>
                  </span>
                  of 500 result
                </label>
              </div>
              <div className="flex items-center justify-between px-4 py-2 rounded-md bg-white gap-2">
                {/* Previous */}
                <div className="flex gap-2 items-center text-[#9C9C9C]">
                  <button className="w-6 h-6 flex items-center justify-center">
                    <IoIosArrowBack className="w-4 h-4" />
                  </button>
                  <span className="text-sm">Previous</span>
                </div>
    
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  <div className="px-1 flex items-center justify-center  bg-[#118AB2] text-white text-sm">
                    1
                  </div>
    
                  <div className="p-1 flex items-center justify-center  text-sm">
                    2
                  </div>
    
                  <div className="p-1 flex items-center justify-center text-sm">
                    3
                  </div>
    
                  <div className="p-1 flex items-center justify-center  text-sm">
                    4
                  </div>
    
                  <span className="p-1  text-sm">...</span>
    
                  <div className="flex items-center justify-center text-sm">
                    10
                  </div>
                </div>
    
                {/* Next */}
                <div className="flex gap-2 items-center text-[#1C1C1C]">
                  <span className="text-sm">Next</span>
                  <button className="w-6 h-6 flex items-center justify-center">
                    <IoIosArrowForward className="w-4 h-4 text-[#1C1C1C] " />
                  </button>
                </div>
              </div>
            </div>
  )
}

export default Pagination
import React, { useState } from "react";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";

function FeeParticular() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
      {/* <-------------====== Header ------------=======> */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="flex flex-col">
            <span className="text-[16px] md:text-[18px] text-[#1c1c1c] font-semibold">
              Fee Particular
            </span>
            <span className="text-sm text-[#696969]">
              Manage different type of fee categories
            </span>
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-3" onClick={() => setShowModal(true)}>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg">
            <IoMdAdd className="text-white" />
            Add Fee Particular
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
        <div className="flex items-center gap-2">
          <label For="status"></label>
          <div className="bg-[#EFF2F2] rounded px-1 py-1">
            <select
              name="status"
              id="status"
              className="bg-[#EFF2F2] rounded px-1 py-1 border-0 outline-0 text-[14px] font-normal text-[#1c1c1c]"
            >
              <option value="">status</option>
              <option value="">Active</option>
              <option value="">Deactive</option>
            </select>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {closeModal}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeeParticular;

import React, { useState } from "react";
{
  /* <<========================------- icons -------==========================>> */
}
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function FeeParticular() {
  const [showModal, setShowModal] = useState(false);

  const [feeList, setFeeList] = useState([]);

  const [formData, setFormData] = useState({
    feeName: "",
    description: "",
    applicableClass: "",
     frequency: "",
    status: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCreateFee = () => {
    if (!formData.feeName) return;

    setFeeList((prev) => [...prev, formData]);

    setFormData({
      feeName: "",
      description: "",
      applicableClass: "",
       frequency: "",
      status: "",
    });
    setShowModal(false);
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
              <option value="">Status</option>
              <option value="">Active</option>
              <option value="">Deactive</option>
            </select>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#1c1c1c] font-semibold">
                  Add New Fee Particular
                </span>
                <span className=" text-[#696969] font-normal text-[18px]">
                  Define a new fee category for the school
                </span>
              </div>
              <div>
                <button onClick={() => setShowModal(false)} className="text-xl">
                  <IoClose size={28} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-1">
              <label
                htmlFor="feeName"
                className="text-[14px] font-semibold text-[#1C1C1C]"
              >
                Fee
              </label>
              <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                <input
                  type="text"
                  placeholder="Particular Fees (e.g : tution fee )"
                  id="feeName"
                  value={formData.feeName}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none border-none"
                />
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <label
                htmlFor="description"
                className="text-[14px] font-semibold text-[#1C1C1C]"
              >
                Description
              </label>
              <div className="w-full border border-[#E6E6E6] rounded-xl px-3 py-4">
                <textarea
                  name=""
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide a brief discription of the fee..."
                  className="w-full resize-none outline-none border-none"
                ></textarea>
              </div>
            </div>

            <div className="mt-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="appliCableclass"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Applicable Class
                </label>
                <div className="px-4 py-3 rounded-xl border border-[#E6E6E6]">
                  <select
                    name=""
                    id="applicableClass"
                    value={formData.applicableClass}
                    onChange={handleChange}
                    className="w-full text-[14px] font-normal text-[#9C9C9C] border-none outline-none"
                  >
                    <option value="">Select Class</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="frequency"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Frequency
                </label>

                <div className="px-4 py-3 rounded-xl border border-[#E6E6E6]">
                  <select
                    id="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full text-[14px] font-normal text-[#9C9C9C] border-none outline-none"
                  >
                    <option value="">Select Frequency</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Annually">Annually</option>
                    <option value="Half Yearly">Half Yearly</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="status"
                  className="text-[14px] font-semibold text-[#1C1C1C]"
                >
                  Status
                </label>
                <div className="px-4 py-3 rounded-xl border border-[#E6E6E6]">
                  <select
                    name=""
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full text-[14px] font-normal text-[#9C9C9C] border-none outline-none"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4 justify-end">
              <button
                className="flex items-center gap-2 px-6 py-3 text-[#696969] font-semibold text-[16px] border border-[#9C9C9C] rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white font-semibold text-[16px] border border-[#0B3142] rounded-lg"
                onClick={handleCreateFee}
              >
                Create Fee Head
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {feeList.map((fee, index) => (
          <div className="p-4 rounded-xl border border-[#E6E6E6]">
            <div className="flex justify-between">
              <span>{fee.feeName}</span>
              <span>{fee.status}</span>
            </div>
            <div className="mt-6">
              <div className="flex flex-col">
                <span>{fee.description}</span>
                <span>{fee.frequency}</span>
              </div>
            </div>
            <div className=" flex justify-between gap-2 mt-6">
              <button className="w-[75%] text-left px-3 py-2 rounded-lg border border-[#E6E6E6]">
                Edit
              </button>
              <button className="w-[25%] px-3 py-2 rounded-lg border border-[#E6E6E6] ">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeeParticular;

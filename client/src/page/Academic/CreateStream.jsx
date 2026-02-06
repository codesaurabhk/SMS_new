import React, { useState } from "react";
import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { Link,  useNavigate } from "react-router-dom";

const initialSections = ["Science", "Commerce", "Arts", "General"];

const CreateStream = () => {
  const [sections, setSections] = useState(initialSections);
  const [value, setValue] = useState("");

  const handleCreate = () => {
    if (!value.trim()) return;
    setSections([...sections, value.trim()]);
    setValue("");
  };

  const handleDelete = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };
  const navigate = useNavigate();

  return (
    <div className="p-0">
      {/* Back */}
      <button className="flex items-center gap-1 text-2xl font-semibold text-[#696969] mb-10 cursor-pointer" onClick={() => navigate('/class-section')}>
       <FaAngleLeft />
        Back
      </button>

      {/* Create Section */}
      <div className="bg-white rounded-xl  p-5 mb-6" style={{boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.15)"}}>
        <h3 className="text-sm font-semibold mb-4">Create Stream</h3>

        <label className="text-xs text-gray-500 block mb-1">
          Type Name
        </label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g., A, B, C"
          className="w-full px-3 py-2 border border-[#E6E6E6] rounded-lg outline-none mb-4"
        />

        <div className="flex gap-3">
          <button
            onClick={() => setValue("")}
            className="px-4 py-2 border border-[#E6E6E6] rounded-lg text-sm text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-[#0B3142] text-white rounded-lg text-sm"
          >
            Create
          </button>
        </div>
      </div>

      {/* Section List */}
      <div className="bg-white rounded-xl  p-5" style={{boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.15)"}}>
        <h3 className="text-sm font-semibold mb-4">Stream List</h3>

        <div className="overflow-hidden border border-[#E6E6E6] rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2 font-medium text-gray-600">
                  Type
                </th>
                <th className="text-right px-4 py-2 font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {sections.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-[#E6E6E6] hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{item}</td>
                  <td className="px-4 py-2 text-right">
                    <div className="inline-flex gap-3">
                      <FiEdit className="text-gray-400 cursor-pointer hover:text-blue-600" />
                      <RiDeleteBin6Line
                        onClick={() => handleDelete(index)}
                        className="text-red-500 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateStream;

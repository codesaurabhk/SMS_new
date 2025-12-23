import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsUpload } from "react-icons/bs";

/* =======================
   Reusable Input Field
======================= */
const InputField = ({
  label,
  required,
  placeholder,
  type = "text",
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-[#1C1C1C]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00C950]"
    />
  </div>
);

/* =======================
   Reusable Select Field
======================= */
const SelectField = ({ label, required, options }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-[#1C1C1C]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00C950]">
      <option value="">Select</option>
      {options.map((op, i) => (
        <option key={i}>{op}</option>
      ))}
    </select>
  </div>
);

/* =======================
   Upload Box
======================= */
const UploadBox = ({ title }) => (
  <div className="border-2 border-dashed border-[#BDEBD3] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
    <span className="text-sm font-medium text-[#1C1C1C]">{title}</span>
    <p className="text-xs text-[#696969]">
      Drag & Drop to upload or{" "}
      <span className="text-[#00C950] cursor-pointer">Browse</span>
    </p>
    <p className="text-[11px] text-[#9A9A9A]">Only PDF file allowed</p>
  </div>
);

/* =======================
   Main Component
======================= */
const AddStaff = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Optional validation
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  return (
    <div className="space-y-6">

      {/* ===== Breadcrumb ===== */}
      <div className="flex gap-1 items-center text-[#696969]">
        <span className="text-2xl font-semibold cursor-pointer hover:text-black">
          All Staff
        </span>
        <MdOutlineKeyboardArrowRight className="text-2xl mt-1" />
        <span className="text-2xl font-semibold text-black">
          Add Staff
        </span>
      </div>

      {/* ===== Container ===== */}
      <div className="bg-white rounded-xl p-6 space-y-8">

        {/* ===== Header ===== */}
        <div className="text-center">
          <h1 className="text-[28px] font-semibold text-[#1C1C1C]">
            Add New Staff Member
          </h1>
          <p className="text-[#696969]">
            Enter staff member information to add to the system.
          </p>
        </div>

        {/* =======================
            1. Employee Information
        ======================= */}
        <section className="space-y-4 ">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            1. Employee Information
          </h2>
          <span className="text-[#696969] font-medium ">Profile Photo</span>

          <div className="flex items-center gap-4 mt-2">

            {/* Avatar */}
            <div
              onClick={handleClick}
              className="w-24 h-24 rounded-full border-2 border-[#D1D5DC] flex items-center justify-center bg-[#F3F4F6] cursor-pointer overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <BsUpload className="text-3xl text-[#9C9C9C]" />
              )}
            </div>

            {/* Upload Button */}
            <div>
              <button
                type="button"
                onClick={handleClick}
                className="text-sm text-[#007AFF] font-medium bg-[#EFF6FF] px-4 py-1.5 rounded-lg hover:bg-[#007AFF] hover:text-[#EFF6FF] transition"
              >
                Upload Photo
              </button>
              {/* <p className="text-[11px] text-[#9A9A9A] mt-1">
                JPG, PNG • Max 2MB
              </p> */}
            </div>

            {/* Hidden Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SelectField label="Role" required options={["Teacher", "Admin", "Staff"]} />
            <InputField label="Employee ID" placeholder="EP123456" />
            <InputField label="Staff Name" required placeholder="Enter staff name" />
            <InputField label="Date of Birth" type="date" required />
            <InputField label="Aadhaar Number" required placeholder="Enter Aadhaar number" />
            <InputField label="PAN Number" required placeholder="Enter PAN number" />
            <SelectField label="Category" options={["General", "OBC", "SC", "ST"]} />
            <SelectField label="Gender" required options={["Male", "Female", "Other"]} />
            <SelectField label="Nationality" required options={["Indian", "Other"]} />
          </div>
        </section>

        {/* =======================
            2. Family Information
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            2. Family Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SelectField label="Marital Status" options={["Single", "Married"]} />
            <InputField label="Spouse Name" placeholder="Enter spouse name" />
            <InputField label="Father Name" required placeholder="Enter father name" />
            <InputField label="Mother Name" placeholder="Enter mother name" />
            <InputField label="Spouse Phone" placeholder="+91" />
            <SelectField label="Number of Children" options={["0", "1", "2", "3+"]} />
          </div>
        </section>

        {/* =======================
            3. Contact Information
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            3. Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InputField label="Mobile Number" required placeholder="Enter mobile number" />
            <InputField label="Alternate Mobile" placeholder="Enter alternate number" />
            <InputField label="Email Address" required placeholder="Enter email" />
            <InputField label="Emergency Contact Name" placeholder="Enter name" />
            <InputField label="Emergency Contact Phone" placeholder="Enter number" />
            <InputField label="Relation" placeholder="Enter relation" />
          </div>
        </section>

        {/* =======================
            4. Job / Employment Detail
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            4. Job / Employment Detail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InputField label="Date of Joining" type="date" required />
            <SelectField label="Department" required options={["IT", "HR", "Finance"]} />
            <SelectField label="Employee Type" required options={["Full Time", "Part Time"]} />
            <SelectField label="Work Shift" options={["Morning", "Evening"]} />
          </div>
        </section>

        {/* =======================
            5. Qualification & Experience
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            5. Qualification & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SelectField label="Highest Qualification" required options={["Graduate", "Post Graduate"]} />
            <InputField label="Specialization" placeholder="Enter specialization" />
            <SelectField label="Total Experience (Years)" required options={["0-1", "2-5", "5+"]} />
          </div>

          <UploadBox title="Upload Resume" />
        </section>

        {/* =======================
            6. Payroll / Salary Detail
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            6. Payroll / Salary Detail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InputField label="Basic Salary" required placeholder="₹" />
            <InputField label="Allowances" placeholder="Enter allowances" />
            <InputField label="Deductions" placeholder="Enter deductions" />
            <InputField label="Account Number" required placeholder="Enter account number" />
            <InputField label="Bank Name" required placeholder="Enter bank name" />
            <InputField label="IFSC Code" required placeholder="Enter IFSC" />
          </div>
        </section>

        {/* =======================
            7. Document Upload
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            7. Document Upload
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <UploadBox title="Aadhaar Card / ID Proof" />
            <UploadBox title="PAN Card" />
            <UploadBox title="Experience Letters" />
            <UploadBox title="Qualification Certificates" />
          </div>
        </section>

        {/* ===== Buttons ===== */}
        <div className="flex justify-center gap-4 pt-6">
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg">
            Cancel
          </button>
          <button className="bg-[#0B2B2E] text-white px-6 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;

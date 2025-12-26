import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import {  useNavigate } from "react-router-dom";


/* =======================
   Reusable Input Field
======================= */
const InputField = ({ label, required, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-[#696969]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
    />
  </div>
);

/* =======================
   Reusable Select Field
======================= */
const SelectField = ({ label, required, options }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-[#696969]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
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
  const navigate = useNavigate();

  return (

    <div className="space-y-6">
      {/* ===== Breadcrumb ===== */}
      <div className="flex gap-1 items-center text-[#696969]">
        <span className="text-2xl font-semibold cursor-pointer hover:text-black" onClick={() => navigate("/all-staffs")}>
          All Staff
        </span>
        <MdOutlineKeyboardArrowRight className="text-2xl mt-1" />
        <span className="text-2xl font-semibold text-black">Add Staff</span>
      </div>

      {/* ===== Container ===== */}
      <div className="bg-white box-shadow rounded-xl p-6 space-y-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Role <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Teacher</option>
                <option value="">Admin</option>
                <option value="">Staff</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Employee ID:(auto-fill by admission number){" "}
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="EP123456"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Staff Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter staff name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Date of Birth
                <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Aadhaar Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Aadhaar number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Nationality <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Indian</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Category
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">General</option>
                <option value="">OBC</option>
                <option value="">SC</option>
                <option value="">ST</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Gender <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                PAN Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter PAN number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        {/* =======================
            2. Family Information
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[4px]  border-[#2B7FFF] pl-2">
            2. Family Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Marital Status <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Single</option>
                <option value="">Married</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Spouse Name
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter spouse name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Spouse Occupation
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Salaried</option>
                <option value="">Self-Employed</option>
                <option value="">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Spouse Phone
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="+91 "
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Number of Children
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Father Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter father name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Mother Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter mother name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        {/* =======================
            3. Contact Information
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            3. Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Mobile Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter mobile number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Alternate Mobile
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="number"
                placeholder="Enter alternate number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Email Address
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Emergency Contact Phone
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="number"
                placeholder="Enter emergency contact number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Emergency Contact Name
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Emergency contact name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Emergency Contact Relation
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Emergency Relation"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b-[2px] w-120 border-[#12516E] pl-2">
            Current Address
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Address Line
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter address line"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Country
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Country</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                State
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">State</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                City
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Pin code
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="number"
                placeholder="Enter pin code"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>
        <h2 className="text-lg font-semibold  w-120 border-[#12516E] pl-2 flex items-center gap-3">
          <GoArrowRight size={25} className="text-[#118AB2] " />
          Is Current & Permanent Address Same? <input type="checkbox" />
        </h2>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b-[2px] w-120 border-[#12516E] pl-2">
            Permanent Address
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Address Line
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter address line"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Country
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Country</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                State
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">State</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                City
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Pin code
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="number"
                placeholder="Enter pin code"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        {/* =======================
            4. Job / Employment Detail
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            4. Job / Employment Detail
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Date of Joining
                <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                placeholder="Enter date of joining"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Department
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select Department</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Employee Type
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select employee type</option>
                <option value="">0</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Work Shift
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select work shift</option>
                <option value="">Morning(8:00 AM - 12:00 PM)</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
          </div>
        </section>

        {/* =======================
            5. Qualification & Experience
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#BB4D00] pl-2">
            5. Qualification & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Highest Qualification
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select highest qualification</option>
                <option value="">Graduate</option>
                <option value="">Post Graduate</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Specialization
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select specialization</option>
                <option value="">Computer Science</option>
                <option value="">Mathematics</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Total Experience(Years)
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select total experience</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Certifications
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select Certification</option>]
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3+</option>
              </select>
            </div>
          </div>
          <div className="relative ">
            {/* Title on border */}
            <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
              Upload Resume
            </span>

            {/* Upload Box */}
            <div
              onClick={handleClick}
              className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
            >
              <BsUpload size={28} className="text-[#118AB2]" />

              <p className="text-sm text-[#1C1C1C]">
                Drag & Drop to upload or{" "}
                <span className="text-[#118AB2] font-medium">Browse</span>
              </p>

              <p className="text-xs text-[#9A9A9A]">
                Only Pdf file are allowed.
              </p>
            </div>

            {/* Hidden Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {/* <UploadBox title="Upload Resume" /> */}
        </section>
        {/* =======================
            6. Payroll / Salary Detail
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#AD46FF] pl-2">
            6. Payroll / Salary Detail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Basic Salary
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="₹"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Allowances
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter allowances"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Deductions
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter deductions"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Account Number
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter account number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Bank Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Account Holder Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                IFSC Code
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter IFSC"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        {/* =======================
            7. Document Upload
        ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            7. Document Upload
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative ">
              {/* Title on border */}
              <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                Aadhaar Card / ID Proof
              </span>

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
              >
                <BsUpload size={28} className="text-[#118AB2]" />

                <p className="text-sm text-[#1C1C1C]">
                  Drag & Drop to upload or{" "}
                  <span className="text-[#118AB2] font-medium">Browse</span>
                </p>

                <p className="text-xs text-[#9A9A9A]">
                  Only Pdf file are allowed.
                </p>
              </div>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="relative ">
              {/* Title on border */}
              <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                PAN Card
              </span>

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
              >
                <BsUpload size={28} className="text-[#118AB2]" />

                <p className="text-sm text-[#1C1C1C]">
                  Drag & Drop to upload or{" "}
                  <span className="text-[#118AB2] font-medium">Browse</span>
                </p>

                <p className="text-xs text-[#9A9A9A]">
                  Only Pdf file are allowed.
                </p>
              </div>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="relative ">
              {/* Title on border */}
              <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                Experience Letters
              </span>

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
              >
                <BsUpload size={28} className="text-[#118AB2]" />

                <p className="text-sm text-[#1C1C1C]">
                  Drag & Drop to upload or{" "}
                  <span className="text-[#118AB2] font-medium">Browse</span>
                </p>

                <p className="text-xs text-[#9A9A9A]">
                  Only Pdf file are allowed.
                </p>
              </div>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="relative ">
              {/* Title on border */}
              <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                Qualification Certificates
              </span>

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
              >
                <BsUpload size={28} className="text-[#118AB2]" />

                <p className="text-sm text-[#1C1C1C]">
                  Drag & Drop to upload or{" "}
                  <span className="text-[#118AB2] font-medium">Browse</span>
                </p>

                <p className="text-xs text-[#9A9A9A]">
                  Only Pdf file are allowed.
                </p>
              </div>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="relative ">
              {/* Title on border */}
              <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                Experience Letter
              </span>

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
              >
                <BsUpload size={28} className="text-[#118AB2]" />

                <p className="text-sm text-[#1C1C1C]">
                  Drag & Drop to upload or{" "}
                  <span className="text-[#118AB2] font-medium">Browse</span>
                </p>

                <p className="text-xs text-[#9A9A9A]">
                  Only Pdf file are allowed.
                </p>
              </div>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="relative ">
              {/* Title on border */}
              <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                Upload Resume
              </span>

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
              >
                <BsUpload size={28} className="text-[#118AB2]" />

                <p className="text-sm text-[#1C1C1C]">
                  Drag & Drop to upload or{" "}
                  <span className="text-[#118AB2] font-medium">Browse</span>
                </p>

                <p className="text-xs text-[#9A9A9A]">
                  Only Pdf file are allowed.
                </p>
              </div>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        </section>

        {/* ===== Buttons ===== */}
        <div className="flex justify-center gap-4 pt-6">
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg">
            ❌ Cancel
          </button>
          <button className="bg-[#0B2B2E] text-white px-6 py-2 rounded-lg">
            ✓ Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;

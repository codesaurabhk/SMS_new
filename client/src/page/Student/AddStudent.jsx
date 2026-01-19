import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { MdPictureAsPdf, MdImage } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const uploadFields = [
  { id: "aadhaar", label: "Student Aadhaar Card / ID Proof" },
  { id: "pan", label: "PAN Card" },
  { id: "birth", label: "Birth Certificate" },
  { id: "passport", label: "PassPort" },
  { id: "prev", label: "Previous School Marksheet" },
  { id: "migrationCertificate", label: "Migration Certificate" },
  { id: "mother", label: "Mother Photo" },
  { id: "father", label: "Father Photo" },
  { id: "caste", label: "Caste Certificate" },
  { id: "guardian", label: "Guardian Photo" },
  { id: "authorization", label: "Authorization Letter" },
  { id: "parentProof", label: "Parent ID Proof" },
  { id: "transferCertificate", label: "Transfer Certificate" },
  { id: "guardianAddress", label: "Guardian Address" },
];

const AddStudent = () => {
 
  const [profilePreview, setProfilePreview] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [transportOpted, setTransportOpted] = useState("no");

  

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF or image files are allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be under 2MB");
      return;
    }

    setUploadedFiles((prev) => ({
      ...prev,
      [id]: {
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      },
    }));
  };

  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* ===== Breadcrumb ===== */}
      <div className="flex gap-1 items-center text-[#696969]">
        <span
          className="text-2xl font-semibold cursor-pointer hover:text-black"
          onClick={() => navigate("/students")} 
          // onClick={() => navigate(-1)}

        >
          All Student
        </span>
        <MdOutlineKeyboardArrowRight className="text-2xl mt-1" />
        <span className="text-2xl font-semibold text-black">Add Student</span>
      </div>

      {/* ===== Container ===== */}
      <div className="bg-white box-shadow rounded-xl p-6 space-y-8">
        {/* ===== Header ===== */}
        <div className="text-center">
          <h1 className="text-[28px] font-semibold text-[#1C1C1C]">
            Add New Student
          </h1>
          <p className="text-[#696969]">
            Enter Student information to enroll them in the school.
          </p>
        </div>

        {/* =======================
             1. Employee Information
         ======================= */}
        <section className="space-y-4 ">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#00C950] pl-2">
            1. Student Information
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
            <div className="flex flex-col gap-1 ">
              <label className="text-sm text-[#696969]">
                Application Number
              </label>

              <div className="flex gap-4 items-cente">
                <input
                  type="text"
                  placeholder="Enter Application Number"
                  className="w-full border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                />

                <button className="bg-[#0B3142] text-white border border-[#0B3142] rounded-lg px-6 py-3 whitespace-nowrap">
                  Proceed
                </button>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <span className="text-[#696969] font-medium ">Profile Photo</span>

          <div className="flex items-center gap-4 mt-2">
            {/* Avatar */}
            <div
              // onClick={handleClick}
              className="w-24 h-24 rounded-full border-2 border-[#D1D5DC] flex items-center justify-center bg-[#F3F4F6] cursor-pointer overflow-hidden"
            >
              {profilePreview ? (
                <img
                  src={profilePreview}
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
                // onClick={handleClick}
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
              
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Student Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Student name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Gender <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Date of Birth
                {/* <span className="text-red-500">*</span> */}
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
                type="select"
                placeholder="Enter Aadhaar number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Blood Group
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">A+</option>
                <option value="">A-</option>
                <option value="">B+</option>
                <option value="">B-</option>
                <option value="">O+</option>
                <option value="">O-</option>
                <option value="">AB+</option>
                <option value="">AB-</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Mother Tounge
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Mother Tounge"
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
                Religion
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Hindu</option>
                <option value="">Shikh</option>
                <option value="">Muslims</option>
                <option value="">Buddism</option>
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
                Place of Birth
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Birth Place"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        {/* =======================
              2. Contact Information
         ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            2. Contact Information
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">Mobile Number</label>
              <input
                type="number"
                placeholder="Enter mobile number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">Enter Email</label>
              <input
                type="email"
                placeholder="Enter Email "
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b-2 w-120 border-[#12516E] pl-2">
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
          <h2 className="text-lg font-semibold border-b-2 w-120 border-[#12516E] pl-2">
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
            3. parent / Guardian/ Sibling Details
          </h2>

          <h2 className="text-lg font-semibold border-b-2 w-120 border-[#12516E] pl-2">
            Father Details
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Full Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Mobile Number
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Email
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Occupation
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Occupation"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Qualification
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Qualification</option>
                <option value="">Maters</option>
                <option value="">Graduation</option>
                <option value="">High School</option>
                <option value="">Middle School</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Designation
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Organization
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Organization"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Organization Address
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Organization Address"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Annual Income
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Anuual Income"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
          <h2 className="text-lg font-semibold border-b-2 w-120 border-[#12516E] pl-2">
            Mother Details
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Full Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Mobile Number
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Email
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Occupation
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Occupation"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Qualification
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Qualification</option>
                <option value="">Maters</option>
                <option value="">Graduation</option>
                <option value="">High School</option>
                <option value="">Middle School</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Designation
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Organization
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Organization"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Organization Address
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Organization Address"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Annual Income
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Anuual Income"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>

          <h2 className="text-lg font-semibold border-b-2 w-120 border-[#12516E] pl-2 flex gap-4">
            <span>local Guadian Details if Any </span>
            <input type="checkbox" />
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Full Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Mobile Number
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Email
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Relation
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Relation</option>
                <option value="">Brother</option>
                <option value="">Uncle</option>
                <option value="">Aunty</option>
                <option value="">Sister</option>
                <option value="">inlaw</option>
              </select>
            </div>
          </div>

          <h2 className="text-lg font-semibold border-b-2 w-120 border-[#12516E] pl-2 flex gap-4">
            <span>Sibling Information </span>
            <input type="checkbox" />
          </h2>

          <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Sibling Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Sibling Admission No.
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Class
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Class</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Gender
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Relation
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Relation</option>
                <option value="">Brother</option>
                <option value="">Uncle</option>
                <option value="">Aunty</option>
                <option value="">Sister</option>
                <option value="">inlaw</option>
              </select>
            </div>
            <div className="flex items-center mt-6">
              <button className="bg-[#0B3142] text-white border border-[#0B3142] rounded-lg px-6 py-3 whitespace-nowrap items-center flex">
                <span>
                  <IoMdAdd size={20} />
                </span>{" "}
                Add
              </button>
            </div>
          </div>
        </section>

        {/* =======================
             5. Acedemic Qualification 
         ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#BB4D00] pl-2">
            4. Acedemic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969] flex gap-1">
                Admission Number
                <span className="text-red-500">*</span>
                <span className="text-sm text-[#696969]">(Auto Genrated)</span>
              </label>
              <input
                type="text"
                placeholder="ADN45225"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Admission Date
                <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                placeholder=""
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Acedemic Year
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Acedemic Year</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Class
                <span className="text-red-500">*</span>
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Class</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Section
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Section</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969] flex gap-1">
                Admission Number
                <span className="text-red-500">*</span>
                <span className="text-sm text-[#696969]">(Auto Genrated)</span>
              </label>
              <input
                type="text"
                placeholder="ADN45225"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969] flex gap-1">
                Previous School Name
                {/* <span className="text-red-500">*</span> */}
                <span className="text-sm text-[#696969]">(Auto Genrated)</span>
              </label>
              <input
                type="text"
                placeholder="ADN45225"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Class
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Class</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969] flex gap-1">
                Previous School Address
                {/* <span className="text-red-500">*</span> */}
                <span className="text-sm text-[#696969]">(Auto Genrated)</span>
              </label>
              <input
                type="text"
                placeholder="Previous School Address"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>

          {/* <UploadBox title="Upload Resume" /> */}
        </section>

        {/* =======================
             5. Document Upload
         ======================= */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            5. Document Upload
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {uploadFields.map((item) => {
              const uploaded = uploadedFiles[item.id];

              return (
                <div key={item.id} className="relative">
                  {/* Title */}
                  <span className="absolute -top-3 left-4 bg-white px-2 text-sm text-[#118AB2]">
                    {item.label}
                  </span>

                  {/* Upload Box */}
                  <div
                    // onClick={() => handleClick(item.id)}
                    className="cursor-pointer border border-dashed border-[#118AB2] rounded-lg px-4 py-7 flex flex-col items-center justify-center gap-2 hover:bg-[#F5FBFF] transition"
                  >
                    {!uploaded ? (
                      <>
                        <BsUpload size={28} className="text-[#118AB2]" />
                        <p className="text-sm text-[#1C1C1C]">
                          Drag & Drop to upload or{" "}
                          <span className="text-[#118AB2] font-medium">
                            Browse
                          </span>
                        </p>
                        <p className="text-xs text-[#9A9A9A]">
                          PDF or image files are allowed (max 2MB)
                        </p>
                      </>
                    ) : uploaded.type.startsWith("image") ? (
                      <>
                        <img
                          src={uploaded.url}
                          alt="preview"
                          className="h-20 object-contain"
                        />
                        <p className="text-xs text-[#1C1C1C] truncate max-w-full">
                          {uploaded.name}
                        </p>
                      </>
                    ) : (
                      <>
                        <MdPictureAsPdf size={40} className="text-[#D32F2F]" />
                        <p className="text-xs text-[#1C1C1C] truncate max-w-full">
                          {uploaded.name}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Hidden Input */}
                  <input
                   
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={(e) => handleFileChange(e, item.id)}
                    className="hidden"
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            6. Medical Information
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Allergies (if any)
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="eg: peanut, Sweets, Dust"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Chornic Illness
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="number"
                placeholder="eg: Asthma, Diabities"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Dietary
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Dietary Restrications"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Physical Disabilities
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Medication
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Medication"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Doctor Name
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Doctor Name"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Doctor Contact Number
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="Doctor Contact Number"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#696969]">
              Medical Notes
              {/* <span className="text-red-500">*</span> */}
            </label>
            <textarea
              type="text"
              placeholder="Type Here..."
              className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            7. Transport Information
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Transport Opted.
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                value={transportOpted}
                onChange={(e) => setTransportOpted(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Yes">yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {transportOpted === "Yes" && (
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#696969]">
                  Assigne Route
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                  <option value="">Choose Route</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#696969]">
                  Bus Stop
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                  <option value="">Choose Bus Stop</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#696969]">
                  Bus Number / Vechile No.
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                  <option value="">Choose Bus Number / Vechile No.</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#696969]">
                  Driver name
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  type="text"
                  placeholder="Driver Name"
                  className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#696969]">
                  Transport Fees
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  type="text"
                  placeholder="₹"
                  className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] text-[#1C1C1C]"
                />
              </div>
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-l-[3px] border-[#FF6900] pl-2">
            8. Fee & concession Details
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 gap-5 ">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Fee Category.
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Default</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Fee Structure Assigned
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select Fee Structure</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Consession Type.
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]">
                <option value="">Select consession Type</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#696969]">
                Consession % or Amount
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                placeholder="10% to 50% or 5000"
                className="border rounded-sm px-3 py-3 text-sm outline-none border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
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

export default AddStudent;

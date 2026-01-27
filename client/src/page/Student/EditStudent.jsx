import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

{/* <--------------------------------------- icons ------------------------------------> */}
import { FiUpload } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { HiDocumentText } from "react-icons/hi";
import { MdClass } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";

{/* <--------------------------------------- imgs ------------------------------------> */}
import baker from "../../assets/images/kathrine.jpg";
import stephen from "../../assets/images/super.jpg";
import mother from "../../assets/images/mother.jpg";
import bat from "../../assets/images/batman.jpg";

function EditStudent() {
      const pages = ["student", "documents", "academic", "review"];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [transportOpted, setTransportOpted] = useState("No");
    
      const steps = [
        { title: "Student and Parents Info", icon: <LuUser size={24} /> },
        { title: "Documents", icon: <HiDocumentText size={24} /> },
        { title: "Class Details", icon: <MdClass size={24} /> },
        { title: "Final Review", icon: <RiFileList3Fill size={24} /> },
      ];
    
      const uploadDocs = [
        {
          label: "Student Photo",
        },
        {
          label: "Aadhaar Card",
        },
    
        {
          label: "PassPort",
        },
    
        {
          label: "Pan Card",
        },
    
        {
          label: "Birth Certificate",
        },
        {
          label: "Previous School Marksheet",
        },
        {
          label: "Transfer Certificate",
        },
        {
          label: "Migration",
        },
      ];
    
      const guardianDocs = [
        {
          label: "Father Photo",
        },
        {
          label: "Mother Photo",
        },
    
        {
          label: "Parent ID Proof",
        },
    
        {
          label: "Guardian Photo",
        },
    
        {
          label: "Guardian Address Proof",
        },
        {
          label: "Authorization Letter",
        },
      ];
    
      const [rows, setRows] = useState([
        { subject: "", maxMarks: "", obtained: "" },
      ]);
    
      const handleFileChange = (index, field, value) => {
        const updated = [...rows];
        updated[index][field] = value;
        setRows(updated);
      };
    
      const handleAddRow = () => {
        setRows([...rows, { subject: "", maxMarks: "", obtained: "" }]);
      };
    
      const calcPercent = (maxMarks, obtained) => {
        const max = Number(maxMarks);
        const get = Number(obtained);
        if (!max || max <= 0 || !get) return "";
        return ((get / max) * 100).toFixed(2);
      };
    
      const nextPage = () => {
        if (currentIndex < pages.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const prevPage = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
    
      const handleSubmit = () => {
        console.log("Form Submitted");
      };
  return (
        <div className="w-full">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#696969] text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
              All Student
            </span>
    
            <span className="text-[#696969]">
              <IoIosArrowForward size={18} />
            </span>
    
            <span className="text-[#1c1c1c] text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
              Add Student
            </span>
          </div>
    
          {/* Card */}
          <div className="mt-6 bg-white p-4 sm:p-6 rounded-md shadow-md">
            {/* Heading */}
            <div className="flex justify-center text-center">
              <div className="flex flex-col gap-1">
                <span className="text-[#1c1c1c] text-[16px] sm:text-[18px] font-semibold">
                  Edit Student
                </span>
                <span className="text-[#9c9c9c] text-[13px] sm:text-[15px] font-normal">
                  update the student information
                </span>
              </div>
            </div>
    
            {/* <------------------------------------ Stepper -----------------------> */}
            <div className="px-10 sm:px-30 md:px-50 mt-18 pb-24">
              <div className="relative h-2 bg-[#eeeeee] rounded-full">
                <div className="absolute -top-6 left-0 w-full flex justify-between">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9C05A] text-[#0B3142] shadow-sm">
                        {step.icon}
                      </div>
    
                      <span className="w-30 mt-5 text-[#1c1c1c] text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-tight text-center">
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            {/* <-------------------------------- Form ------------------------------> */}
            {(() => {
              switch (pages[currentIndex]) {
                case "student":
                  return (
                    <div className="flex flex-col gap-2 sm:gap-3 mt-6">
                      <label className="text-[#1c1c1c] font-medium text-[14px] sm:text-[16px]">
                        Application Number
                      </label>
    
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="Enter Application Number"
                          className="w-full sm:w-75 border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                        />
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg">
                          Proceed
                        </button>
                      </div>
    
                      {/* <=========================== Student ===============================> */}
                      <div className="mt-6 flex flex-col gap-2 sm:gap-3">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>1. Student Information</span>
                          </div>
                        </div>
    
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[14px] ">
                                Student Name
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Enter Student Name"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="academicYear"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Academic Year
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="academicYear"
                              id="academicYear"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Acedemic Year"
                            >
                              <option value="">Select Your Academic Year</option>
                              <option value="">2023-2024</option>
                              <option value="">2024-2025</option>
                              <option value="">2025-2026</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="appliedClass"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Applied Class
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="appliedClass"
                              id="appliedClass"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Select Your Class</option>
                              <option value="">UKG</option>
                              <option value="">Class 5</option>
                              <option value="">Class 6</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="birthday"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Date of Birth
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="date"
                              id="birthday"
                              name="birthday"
                              placeholder="Enter Student Name"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="aadhaarNumber"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Adhar Number
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="number"
                              id="adhaarNumber"
                              name="adhaarNumber"
                              placeholder="Enter Your Aadhaar Number"
                              inputMode="numeric"
                              maxLength={12}
                              pattern="[0-9]{12}"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="selecteGender"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Gender
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="selecteGender"
                              id="selecteGender"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Select Gender</option>
                              <option value="">Male</option>
                              <option value="">Female</option>
                              <option value="">Other</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="nationality"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Nationality
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="nationality"
                              id="nationality"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Nationality</option>
                              <option value="">India</option>
                              <option value="">U.S.A</option>
                              <option value="">U.K</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="selecteCategory"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Category
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="selecteCategory"
                              id="selecteCategory"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Select Category</option>
                              <option value="">Genral</option>
                              <option value="">OBC</option>
                              <option value="">SC</option>
                              <option value="">ST</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="selecteReligion"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Religion
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="selecteReligion"
                              id="selecteReligion"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Select Religion</option>
                              <option value="">Hindu</option>
                              <option value="">Muslims</option>
                              <option value="">Sikh</option>
                              <option value="">Christian</option>
                              <option value="">Other</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="selecteBloodGroup"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Blood Group
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="selecteBloodGroup"
                              id="selecteBloodGroup"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Select Blood Group</option>
                              <option value="">A+</option>
                              <option value="">B+</option>
                              <option value="">A-</option>
                              <option value="">B-</option>
                              <option value="">AB-</option>
                              <option value="">AB+</option>
                              <option value="">O-</option>
                              <option value="">+O</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[14px] ">
                                Place of Birth
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Enter Place of Birth"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[14px] ">
                                Mother Tounge
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Enter Mother Tounge"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label
                                htmlFor="languageKnown"
                                className="text-[#696969] font-medium text-[14px] "
                              >
                                Language Known
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <select
                              name="languageKnown"
                              id="languageKnown"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                              defaultValue="Applied Class"
                            >
                              <option value="">Known Language</option>
                              <option value="">Hindi</option>
                              <option value="">English</option>
                              <option value="">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
    
                      {/* <---------------------------------------- Contact Information -------------------------------------> */}
                      <div className="mt-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#2B7FFF]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>2. Contact Information</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[14px] ">
                                Mobile Number
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="number"
                              placeholder="Enter Mobile Number"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[14px] ">
                                Email
                              </label>
                              <span className="text-[#DC2626] text-[14px]">*</span>
                            </div>
                            <input
                              type="number"
                              placeholder="Enter Email"
                              className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <---------------------------------------- Address Details -------------------------------------> */}
                      <div className="grid lg:grid-cols-3 mt-4">
                        <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                          <span>Current Address</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Address Line 1
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Address Line 1"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="selecteCountry"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Country
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="selecteCountry"
                            id="selecteCountry"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Select Country</option>
                            <option value="">India</option>
                            <option value="">Nepal</option>
                            <option value="">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="selecteState"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              State
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="selecteState"
                            id="selecteState"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Select State </option>
                            <option value="">Bihar</option>
                            <option value="">Uttar Pradesh</option>
                            <option value="">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              City
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="City"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Pin Code
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="code"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <span>
                          <LiaLongArrowAltRightSolid
                            size={20}
                            className="text-[#118AB2] font-semibold"
                          />
                        </span>
                        <span className="text-[17px] text-[#1c1c1c] font-semibold">
                          is Current & Permament Address is Same ?{" "}
                        </span>
                        <input type="checkbox" />
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Address Line 1
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Address Line 1"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="selecteCountry"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Country
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="selecteCountry"
                            id="selecteCountry"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Select Country</option>
                            <option value="">India</option>
                            <option value="">Nepal</option>
                            <option value="">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="selecteState"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              State
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="selecteState"
                            id="selecteState"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Select State </option>
                            <option value="">Bihar</option>
                            <option value="">Uttar Pradesh</option>
                            <option value="">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              City
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="City"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Pin Code
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="code"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                      </div>
    
                      {/* <-------------------------- Parent Details ---------------------------> */}
                      <div className="flex gap-4 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#FF6900]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span>3. Parent/Guardian/Sibling Details</span>
                        </div>
                      </div>
                      <div className="grid lg:grid-cols-3">
                        <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                          <span>Father Details</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Father Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Father Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Mobile Number
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="number"
                            placeholder="Enter Mobile Number"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Email
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="occupation"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Occupation
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="occupation"
                            id="occupation"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Occupation</option>
                            <option value="">Goverment Employee</option>
                            <option value="">Bussiness</option>
                            <option value="">Unemployed</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="qualification"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Qualification
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="qualification"
                            id="qualification"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Qualification</option>
                            <option value="">Matriculation</option>
                            <option value="">Intermediate</option>
                            <option value="">Graduaction</option>
                            <option value="">Masters</option>
                            <option value="">P.H.D</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Designation
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Designation"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Organization Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Organization Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Organization Address
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Organization Address"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Annual Income
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Annual Income"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                      </div>
                      {/* <=================================== Mother Details ====================================> */}
                      <div className="grid lg:grid-cols-3">
                        <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                          <span>Mother Details</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Father Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Father Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Mobile Number
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="number"
                            placeholder="Enter Mobile Number"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Email
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="occupation"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Occupation
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="occupation"
                            id="occupation"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Occupation</option>
                            <option value="">Goverment Employee</option>
                            <option value="">Bussiness</option>
                            <option value="">Unemployed</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="qualification"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Qualification
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="qualification"
                            id="qualification"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Qualification</option>
                            <option value="">Matriculation</option>
                            <option value="">Intermediate</option>
                            <option value="">Graduaction</option>
                            <option value="">Masters</option>
                            <option value="">P.H.D</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Designation
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Designation"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Organization Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Organization Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Organization Address
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Organization Address"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Annual Income
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Annual Income"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                      </div>
    
                      {/* <=============================== Local =================================> */}
                      <div className="grid lg:grid-cols-3">
                        <div className="flex items-center gap-2 mt-4 border-b-2 border-[#12516E] p-2">
                          <span className=" text-[17px] text-[#1c1c1c] font-semibold">
                            Local Guardian Details if Any
                          </span>
                          <input type="checkbox" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Full Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Mobile Number
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Email
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="relation"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Relation
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="relation"
                            id="relation"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Relation</option>
                            <option value="">Friend</option>
                            <option value="">Relative</option>
                          </select>
                        </div>
                      </div>
                      {/* <============================== Sibling ==================================> */}
                      <div className="grid lg:grid-cols-3">
                        <div className="flex items-center gap-2 mt-4 border-b-2 border-[#12516E] p-2">
                          <span className=" text-[17px] text-[#1c1c1c] font-semibold">
                            Sibling Information
                          </span>
                          <input type="checkbox" />
                        </div>
                      </div>
                      <span className="text-[#DC2626] underline text-[14px]">
                        *if Sibling are enrolled in the same school, Please provide
                        details for each student
                      </span>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Sibling Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Admission Number
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Admission Number"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="class"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Class
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="class"
                            id="class"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Nurcessary</option>
                            <option value="">LKG</option>
                            <option value="">UKG</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="selecteGender"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Gender
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="selecteGender"
                            id="selecteGender"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied gender"
                          >
                            <option value="">Select Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            <option value="">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="relation"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Relation
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="relation"
                            id="relation"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Relation</option>
                            <option value="">Friend</option>
                            <option value="">Relative</option>
                          </select>
                        </div>
                        <div className="mt-6">
                          <button className="flex items-center gap-2 px-4 py-1.5 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg">
                            <span>
                              <IoAdd />
                            </span>
                            Add
                          </button>
                        </div>
                      </div>
                      {/* <-------------------------- Acedemic Information ---------------------------> */}
                      <div className="flex gap-4 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span>4. Acdemic Information</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Previous School Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter School Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="class"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Class
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="class"
                            id="class"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">Nurcessary</option>
                            <option value="">LKG</option>
                            <option value="">UKG</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="class"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Year of Passing
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="class"
                            id="class"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Applied Class"
                          >
                            <option value="">2025</option>
                            <option value="">2024</option>
                            <option value="">202</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Previous Board
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Previous Board"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              School Code
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter School Code"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              %markes/Grade Obtain
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="%markes/Grade Obtain"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Transfer Certificate No.
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Transfer Certificate No."
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Transfer Reason
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Transfer Reason"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-[18px] text-[#1c1c1c] font-semibold">
                          Details of Marks Obtained:
                        </span>
                      </div>
    
                      {/* <============================= Table ==================================> */}
    
                      <div className="w-full overflow-hidden rounded-lg border border-[#e6e6e6] mt-4">
                        <table className="w-full">
                          <thead className="bg-[#F5F7F7]">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-semibold">
                                Subject
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold">
                                Max Marks
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold">
                                Marks Obtained
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-semibold">
                                % of Marks
                              </th>
                            </tr>
                          </thead>
    
                          <tbody>
                            {rows.map((row, index) => (
                              <tr key={index} className="border-t border-[#e6e6e6]">
                                <td className="px-4 py-3">
                                  <input
                                    type="text"
                                    placeholder="Enter subject"
                                    value={row.subject}
                                    onChange={(e) =>
                                      handleFileChange(
                                        index,
                                        "subject",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full rounded-md px-3 py-2 outline-none"
                                  />
                                </td>
    
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    placeholder="Max"
                                    value={row.maxMarks}
                                    onChange={(e) =>
                                      handleFileChange(
                                        index,
                                        "maxMarks",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full rounded-md px-3 py-2 outline-none"
                                  />
                                </td>
    
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    placeholder="Obtained"
                                    value={row.obtained}
                                    onChange={(e) =>
                                      handleFileChange(
                                        index,
                                        "obtained",
                                        e.target.value,
                                      )
                                    }
                                    className="w-full rounded-md px-3 py-2 outline-none"
                                  />
                                </td>
    
                                <td className="px-4 py-3 text-sm font-semibold text-[#0B3142]">
                                  {calcPercent(row.maxMarks, row.obtained)
                                    ? `${calcPercent(row.maxMarks, row.obtained)}%`
                                    : "Percentage"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-6">
                        <button
                          type="button"
                          onClick={handleAddRow}
                          className="flex items-center gap-2 px-4 py-1.5 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg"
                        >
                          <span>
                            <IoAdd />
                          </span>
                          Add
                        </button>
                      </div>
    
                      {/* <----------------------------- Medical information ---------------------> */}
                      <div className="flex gap-4 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#AD46FF]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span>5. Medical Information</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 mt-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Allergies (If any)
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Peanuts, Dust, etc"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Chronic Illness
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Asthama"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Dietary Restrictions
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Dietary Restrictions"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="class"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Class
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="physicalDisability"
                            id="physicalDisability"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Physical Disability"
                          >
                            <option value="">Physical Disability</option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Medication
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Medication"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Doctor Name
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Doctor Name"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Doctor's Contact Number
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="Number"
                            placeholder="Enter number"
                            className="w-full border border-[#9C9C9C] rounded-md px-3 py-2 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                      </div>
    
                      {/* <========================================== Medical Notes ===================================> */}
                      <div className="flex flex-col gap-1 mt-3">
                        <label
                          htmlFor="medical"
                          className="text-[#696969] text-[14px] font-normal"
                        >
                          Medical Notes
                        </label>
                        <div className="w-full">
                          <textarea
                            name="medical"
                            id="medical"
                            placeholder="Type Here..."
                            className="w-full border border-[#9c9c9c] rounded px-4 py-3 outline-0 resize-none"
                          ></textarea>
                        </div>
                      </div>
    
                      {/* <--------------------------------------- Other Information -------------------------------> */}
                      <div className="flex gap-4 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span>6. Other Information</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 mt-3">
                        <label
                          htmlFor="other"
                          className="text-[#696969] text-[14px] font-normal"
                        >
                          Other Information
                        </label>
                        <div className="w-full">
                          <textarea
                            name="other"
                            id="other"
                            placeholder="Type Here..."
                            className="w-full border border-[#9c9c9c] rounded px-4 py-3 outline-0 resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  );
                  {
                    /* <------------------------------ Document --------------------------> */
                  }
                case "documents":
                  return (
                    <div>
                      {/* <--------------------------- Student Document Uploads ---------------------------------> */}
                      <div className="flex gap-3 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span className="px-2">1. Student Documents:</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 mt-6">
                        {uploadDocs.map((item, index) => (
                          <div key={index} className="w-full">
                            <div
                              className="relative w-full border border-dashed border-[#118AB2] rounded-lg bg-white px-2 py-4 cursor-pointer hover:bg-[#F8FBFF] hover:border-[#0B77FF] transition"
                              onClick={() =>
                                document.getElementById(`doc-${index}`).click()
                              }
                            >
                              {/* Label on Border */}
                              <span className="absolute -top-3 left-4 bg-white px-2 text-[18px] text-[#118AB2] font-medium">
                                {item.label}{" "}
                                <span className="text-[#DC2626]">*</span>
                              </span>
    
                              <div className="flex flex-col items-center justify-center text-center">
                                <FiUpload className="text-[#118AB2]" size={28} />
    
                                <p className="flex flex-wrap justify-center gap-1 mt-2 text-[16px] text-[#1c1c1c] font-medium">
                                  Drag & Drop to upload or
                                  <span className="text-[#0B77FF] font-semibold">
                                    Browse
                                  </span>
                                </p>
    
                                <p className="mt-1 text-[14px] text-[#696969]">
                                  Only PDF file are allowed.
                                </p>
    
                                {/* Hidden Input */}
                                <input
                                  id={`doc-${index}`}
                                  type="file"
                                  accept="application/pdf"
                                  className="hidden"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <------------------------------- Father Documents -----------------------------------> */}
                      <div className="flex gap-3 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#2B7FFF]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span className="px-2">
                            2. Parent/Local Guardian Documents :
                          </span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-5 mt-6">
                        {guardianDocs.map((item, index) => (
                          <div key={index} className="w-full">
                            <div
                              className="relative w-full border border-dashed border-[#118AB2] rounded-lg bg-white px-2 py-4 cursor-pointer hover:bg-[#F8FBFF] hover:border-[#0B77FF] transition"
                              onClick={() =>
                                document.getElementById(`doc-${index}`).click()
                              }
                            >
                              {/* Label on Border */}
                              <span className="absolute -top-3 left-4 bg-white px-2 text-[18px] text-[#118AB2] font-medium">
                                {item.label}{" "}
                                <span className="text-[#DC2626]">*</span>
                              </span>
    
                              <div className="flex flex-col items-center justify-center text-center">
                                <FiUpload className="text-[#118AB2]" size={28} />
    
                                <p className="flex flex-wrap justify-center gap-1 mt-2 text-[16px] text-[#1c1c1c] font-medium">
                                  Drag & Drop to upload or
                                  <span className="text-[#0B77FF] font-semibold">
                                    Browse
                                  </span>
                                </p>
    
                                <p className="mt-1 text-[14px] text-[#696969]">
                                  Only PDF file are allowed.
                                </p>
    
                                {/* Hidden Input */}
                                <input
                                  id={`doc-${index}`}
                                  type="file"
                                  accept="application/pdf"
                                  className="hidden"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <------------------------------- Other Documents ----------------------------------> */}
                      <div className="flex gap-3 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#FF6900]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span className="px-2">3. Other Document :</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-10 gap-y-5 mt-6">
                        <div className="w-full">
                          <div
                            className="relative w-full border border-dashed border-[#118AB2] rounded-lg bg-white px-2 py-4 cursor-pointer hover:bg-[#F8FBFF] hover:border-[#0B77FF] transition"
                            onClick={() =>
                              document.getElementById("doc-caste").click()
                            }
                          >
                            {/* Label on Border */}
                            <span className="absolute -top-3 left-4 bg-white px-2 text-[18px] text-[#118AB2] font-medium">
                              Caste Certificate{" "}
                              <span className="ml-1 text-[#DC2626]">*</span>
                            </span>
    
                            <div className="flex flex-col items-center justify-center text-center">
                              <FiUpload className="text-[#118AB2]" size={28} />
    
                              <p className="flex flex-wrap justify-center gap-1 mt-2 text-[16px] text-[#1c1c1c] font-medium">
                                Drag & Drop to upload or{" "}
                                <span className="text-[#0B77FF] font-semibold">
                                  Browse
                                </span>
                              </p>
    
                              <p className="mt-1 text-[14px] text-[#696969]">
                                Only PDF file are allowed.
                              </p>
    
                              {/* Hidden Input */}
                              <input
                                id="doc-caste"
                                type="file"
                                accept="application/pdf"
                                className="hidden"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
    
                case "academic":
                  return (
                    <div>
                      {/* <-------------------------------------- Assign Class -------------------------------------> */}
                      <div className="flex gap-3 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span className="px-2">1. Assign Class</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Student ID
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="It Will Auto Genrate"
                            className="w-full border border-[#9C9C9C] rounded-md px-4 py-3 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label className="text-[#696969] font-medium text-[14px] ">
                              Admission Number
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <input
                            type="text"
                            placeholder="It Will Auto Genrate"
                            className="w-full border border-[#9C9C9C] rounded-md px-4 py-3 outline-none focus:ring-[#9C9C9C]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="academicYear"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Academic Year
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="academicYear"
                            id="academicYear"
                            className="w-full border border-[#9C9C9C] rounded-md px-4 py-3 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Acedemic Year"
                          >
                            <option value="">Select Your Academic Year</option>
                            <option value="">2023-2024</option>
                            <option value="">2024-2025</option>
                            <option value="">2025-2026</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="academicYear"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Academic Year
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="academicYear"
                            id="academicYear"
                            className="w-full border border-[#9C9C9C] rounded-md px-4 py-3 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Acedemic Year"
                          >
                            <option value="">Select Your Academic Year</option>
                            <option value="">2023-2024</option>
                            <option value="">2024-2025</option>
                            <option value="">2025-2026</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="academicYear"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Academic Year
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="academicYear"
                            id="academicYear"
                            className="w-full border border-[#9C9C9C] rounded-md px-4 py-3 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Acedemic Year"
                          >
                            <option value="">Select Your Academic Year</option>
                            <option value="">2023-2024</option>
                            <option value="">2024-2025</option>
                            <option value="">2025-2026</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1">
                            <label
                              htmlFor="academicYear"
                              className="text-[#696969] font-medium text-[14px] "
                            >
                              Academic Year
                            </label>
                            <span className="text-[#DC2626] text-[14px]">*</span>
                          </div>
                          <select
                            name="academicYear"
                            id="academicYear"
                            className="w-full border border-[#9C9C9C] rounded-md px-4 py-3 outline-none focus:ring-[#9C9C9C]"
                            defaultValue="Acedemic Year"
                          >
                            <option value="">Select Your Academic Year</option>
                            <option value="">2023-2024</option>
                            <option value="">2024-2025</option>
                            <option value="">2025-2026</option>
                          </select>
                        </div>
                      </div>
                      {/* <---------------------------------- Transport -------------------------------> */}
                      <div className="flex gap-3 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#2B7FFF]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span className="px-2">2. Transport information</span>
                        </div>
                      </div>
    
                      <section className="mt-6">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                          <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#696969]">
                              Transport Opted
                            </label>
                            <select
                              value={transportOpted}
                              onChange={(e) => setTransportOpted(e.target.value)}
                              className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] bg-white"
                            >
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                        {transportOpted === "Yes" && (
                          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                            <div className="flex flex-col gap-1">
                              <label className="text-sm text-[#696969]">
                                Assign Route
                              </label>
                              <select className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] bg-white">
                                <option value="">Choose Route</option>
                              </select>
                            </div>
    
                            <div className="flex flex-col gap-1">
                              <label className="text-sm text-[#696969]">
                                Bus Stop
                              </label>
                              <select className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] bg-white">
                                <option value="">Choose Bus Stop</option>
                              </select>
                            </div>
    
                            <div className="flex flex-col gap-1">
                              <label className="text-sm text-[#696969]">
                                Bus Number / Vehicle No.
                              </label>
                              <select className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] bg-white">
                                <option value="">
                                  Choose Bus Number / Vehicle No.
                                </option>
                              </select>
                            </div>
    
                            <div className="flex flex-col gap-1">
                              <label className="text-sm text-[#696969]">
                                Driver Name
                              </label>
                              <input
                                type="text"
                                placeholder="Driver Name"
                                className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                              />
                            </div>
                          </div>
                        )}
                      </section>
    
                      {/* <------------------------------------- Fees & Discount ----------------------------------> */}
                      <div className="flex gap-3 items-center mt-4">
                        <div className="p-1 rounded-full h-10 bg-[#2B7FFF]"></div>
                        <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                          <span className="px-2">
                            3. Fees & Concession Details{" "}
                          </span>
                        </div>
                      </div>
    
                      <section className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                          <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#696969]">
                              Fee Category
                            </label>
                            <select className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] bg-white">
                              <option value="">Choose Route</option>
                            </select>
                          </div>
    
                          <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#696969]">
                              Consession Type
                            </label>
                            <select className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969] bg-white">
                              <option value="">Select Consession Type</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-sm text-[#696969]">
                              Consession % or Amount
                            </label>
                            <input
                              type="text"
                              placeholder="Driver Name"
                              className="w-full rounded-sm px-4 py-3 text-sm outline-none border border-[#9C9C9C] focus:ring-2 focus:ring-[#696969]"
                            />
                          </div>
                        </div>
                      </section>
    
                      {/* <------------------------------- Attach Document -------------------------------------> */}
                      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-6">
                        <div className="flex flex-col gap-1">
                          <label className="text-[18px] text-[#1c1c1c] font-medium">
                            Attach Document
                          </label>
                          <div className="w-full">
                            <div
                              className="relative w-full border border-dashed border-[#118AB2] rounded-lg bg-white px-2 py-4 cursor-pointer hover:bg-[#F8FBFF] hover:border-[#0B77FF] transition"
                              onClick={() =>
                                document.getElementById("doc-other").click()
                              }
                            >
                              <div className="flex flex-col items-center justify-center text-center">
                                <FiUpload className="text-[#118AB2]" size={28} />
    
                                <p className="flex flex-wrap justify-center gap-1 mt-2 text-[16px] text-[#1c1c1c] font-medium">
                                  Drag & Drop to upload or{" "}
                                  <span className="text-[#0B77FF] font-semibold">
                                    Browse
                                  </span>
                                </p>
    
                                <p className="mt-1 text-[14px] text-[#696969]">
                                  Only PDF file are allowed.
                                </p>
    
                                {/* Hidden Input */}
                                <input
                                  id="doc-other"
                                  type="file"
                                  accept="application/pdf"
                                  className="hidden"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
    
                case "review":
                  return (
                    <div className="mt-6 flex flex-col gap-9 ">
                      <div className="w-full bg-[#12516E] text-white px-6 py-3 rounded text-[20px] font-semibold">
                        <span>Review Your Detail:</span>
                      </div>
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>1. Student Information</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Acedemic Year
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                2025-2026
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Date of Birth
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                05-10-1999
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Nationality
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Indian
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Blood Group
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                A+
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Language
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Hindi, English
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Class
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Class 12A
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Aadhaar Number
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                4520 8900 6605
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Category
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                OBC
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Place of birth
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Australia
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Student Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Hannna Baker
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Gender
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Female
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Religion
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Hindu
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Mother Tounge
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                English
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className=" h-50 w-40 overflow-hidden ronded">
                              <img src={baker} alt="baker" className="rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
    
                      {/* <-------------------------------------------Contact ----------------------------------------> */}
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#2B7FFF]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>2. Contact Information</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[15px] ">
                                Mobile No.
                              </label>
                            </div>
                            <span className="text-[15px] text-[#1C1C1C] font-semibold">
                              6202124896
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[15px] ">
                                Email ID
                              </label>
                            </div>
                            <span className="text-[15px] text-[#1C1C1C] font-semibold">
                              KattyKathrine1999@gmail.com
                            </span>
                          </div>
                          <div></div>
                          <div></div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-3">
                          <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                            <span>Current Address</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-x-10 gap-y-3">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Address
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Perth, Australia
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  City
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Perth
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Country
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Australia
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Pin Code
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                4520890
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  State
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Perth
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-3">
                          <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                            <span>Permanent Address</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-x-10 gap-y-3">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Address
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Perth, Australia
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  City
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Perth
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Country
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Australia
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Pin Code
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                4520890
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  State
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Perth
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
    
                      {/* <------------------------------------------- Parent Guardian & sibling Info ----------------------------------------------> */}
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#FF6900]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>3. Parent/Guardian/Sibling Details</span>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-3">
                          <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                            <span>Father Details</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Full Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Stephen Langford
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Occupation
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Writer
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Organization Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Mobile Number
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                1285963470
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Organization Address
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Qualification
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                MBA
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Email ID
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                LangofrdStephen69@gmail.com
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Designation
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Senior Editor & Writer
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Annual Income
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className=" h-50 w-40 overflow-hidden ronded">
                              <img src={stephen} alt="baker" className="rounded" />
                            </div>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-3">
                          <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                            <span>Mother Details</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Full Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Elizabeth Langford
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Occupation
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Actress
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Organization Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Mobile Number
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                5896321047
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Organization Address
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Qualification
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Email ID
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                ElizabethLangford96@gmail.com
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Designation
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Annual Income
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className=" h-50 w-40 overflow-hidden ronded">
                              <img src={mother} alt="baker" className="rounded" />
                            </div>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-3">
                          <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                            <span>Local Guardian</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Full Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Batman
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Relation
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Uncle
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Mobile Number
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Harvey Dent(9660285089)
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Email ID
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                JusticeLeauge@batmail.com
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className=" h-50 w-40 overflow-hidden ronded">
                              <img src={bat} alt="baker" className="rounded" />
                            </div>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-3 mt-1">
                          <div className="border-b-2 border-[#12516E] p-2 text-[16px] font-semibold text-[#1c1c1c]">
                            <span>Sibling Information</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Full Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Robin
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Relation
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Brother
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Admission Number
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                ADM-992
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Gender
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Male
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Class
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Class 10A
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
    
                      {/* <-------------------------------------------------- Academic ---------------------------------------------> */}
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#FF6900]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>4. Academic Details</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Previous School Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Shadowlight Academy
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Previous Board
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Marvel Board of SHIELD
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Transfer Certificate Number
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Class
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                11A
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  School Code
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                MAR-007
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Transfer Certificate
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Year of Passing
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                2025
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  %Mark/Grad Obtain
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                96%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <span>Details Of Marks Obtained:</span>
                          <div className="w-full overflow-hidden rounded-lg border border-[#e6e6e6] mt-3">
                            <table className="w-full">
                              <thead className="bg-[#F5F7F7]">
                                <tr>
                                  <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Subject
                                  </th>
                                  <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Max Marks
                                  </th>
                                  <th className="px-4 py-3 text-left text-sm font-semibold">
                                    Marks Obtained
                                  </th>
                                  <th className="px-4 py-3 text-left text-sm font-semibold">
                                    % of Marks
                                  </th>
                                </tr>
                              </thead>
    
                              <tbody className="bg-[#F5F7F7]">
                                <tr className="border-t border-[#e6e6e6] text-[#1C1C1C]">
                                  <td className="px-4 py-3 font-semibold text-[14px]">
                                    Math
                                  </td>
                                  <td className="px-4 py-3 font-normal text-[14px]">
                                    100
                                  </td>
                                  <td className="px-4 py-3 font-normal text-[14px]">
                                    99
                                  </td>
                                  <td className="px-4 py-3 font-normal text-[14px]">
                                    99%
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
    
                      {/* <===================================== medical ==================================> */}
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#AD46FF]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>5. Medical Information</span>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-x-10 gap-y-3 ">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Allergies (if any)
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Dark Matter
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Physical Disability
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                No
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Doctor Contact No
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Chornics Illness
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Medical Notes
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Medication
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Dietary Restrictions
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                --
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1">
                                <label className="text-[#696969] font-medium text-[15px] ">
                                  Doctor Name
                                </label>
                              </div>
                              <span className="text-[15px] text-[#1C1C1C] font-semibold">
                                Doctor Fate
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
    
                      {/* <==================================== Other Information =============================> */}
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#00C950]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>6. Academic Details</span>
                          </div>
                        </div>
                        <div className="w-full mt-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                              <label className="text-[#696969] font-medium text-[15px] ">
                                Any other information about your ward which the
                                school should be aware of ?
                              </label>
                            </div>
                            <span className="text-[15px] text-[#1C1C1C] font-semibold">
                              --
                            </span>
                          </div>
                        </div>
                      </div>
    
                      {/* <==================================== Documents =============================> */}
                      <div className="rounded w-full border border-[#118AB240] bg-[#118ab225] p-6">
                        <div className="flex gap-4 items-center">
                          <div className="p-1 rounded-full h-10 bg-[#FF6900]"></div>
                          <div className="text-[#1c1c1c] font-medium text-[18px] leading-tight flex gap-2 items-center">
                            <span>8. Upload Documents</span>
                          </div>
                        </div>
                        <div className="w-full mt-4">
                          <div className="flex gap-1">
                            <div className=" h-45 w-40 overflow-hidden ronded">
                              <img src={mother} alt="baker" className="rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
    
                default:
                  return;
              }
            })()}
    
            {/* <-------------------------------- previous & next button ---------------------------> */}
            <div className="mt-6 border-t-2 border-[#e6e6e6]">
              <div className="flex justify-end p-2 mt-3 gap-4">
                {/* Previous Button */}
                {currentIndex !== 0 && (
                  <button
                    onClick={prevPage}
                    disabled={currentIndex === 0}
                    className="inline-flex px-6 py-3 text-[#696969] border border-[#9c9c9c] rounded-lg disabled:opacity-50"
                  >
                    Previous
                  </button>
                )}
                {/* Next OR Submit Button */}
                {currentIndex === pages.length - 1 ? (
                  <Link to="/admissionLetter">
                  <button
                    onClick={handleSubmit}
                    className="inline-flex px-6 py-3 bg-[#FF6900] text-white border border-[#FF6900] rounded-lg"
                  >
                    Submit
                  </button>
                  </Link>
                ) : (
                  <button
                    onClick={nextPage}
                    className="inline-flex px-6 py-3 bg-[#0B3142] text-white border border-[#0B3142] rounded-lg"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
  )
}

export default EditStudent

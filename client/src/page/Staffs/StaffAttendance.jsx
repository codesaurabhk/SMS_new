import {
  FaRegUser,
  FaIdCard,
  FaPhoneAlt,
  FaEnvelope,
  FaRegFileAlt,
} from "react-icons/fa";
import { MdFamilyRestroom, MdOutlineImage } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const documentData = [
  {
    name: "Photo ID",
    date: "2018-05-15",
    type: "Image",
    size: "512 KB",
  },
  {
    name: "Resume / CV",
    date: "2018-05-15",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    name: "Educational Certificates",
    date: "2018-05-15",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    name: "Experience Letters",
    date: "2018-05-15",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    name: "Aadhaar Card",
    date: "2018-05-15",
    type: "PDF",
    size: "256 KB",
  },
  {
    name: "PAN Card",
    date: "2018-05-15",
    type: "PDF",
    size: "128 KB",
  },
  {
    name: "Address Proof",
    date: "2018-05-15",
    type: "PDF",
    size: "384 KB",
  },
  {
    name: "Police Verification",
    date: "2018-05-20",
    type: "PDF",
    size: "512 KB",
  },
  {
    name: "Medical Certificate",
    date: "2024-01-10",
    type: "PDF",
    size: "256 KB",
  },
];

export default function ProfileDetails() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-10 space-y-6">

      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Basic Information */}
        <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <FaRegUser className="text-[#9A9A9A]" />
            <h3 className="font-semibold">Basic Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ["Full Name", "Anushka Sharma"],
              ["Gender", "Female"],
              ["Date of Birth", "14-02-1989"],
              ["Age", "39"],
              ["Blood Group", "B+"],
              ["Marital Status", "Married"],
              ["Religion", "Hindu"],
              ["Nationality", "Indian"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-sm text-[#8A8A8A]">{label}</p>
                <p className="text-sm font-medium text-[#1C1C1C]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Identification Details */}
        <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <FaIdCard className="text-[#9A9A9A]" />
            <h3 className="font-semibold">Identification Details</h3>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-[#8A8A8A]">Aadhaar Number</p>
              <p className="font-medium">1234-5678-9101</p>
            </div>
            <div>
              <p className="text-sm text-[#8A8A8A]">PAN Number</p>
              <p className="font-medium">ABCDE1234F</p>
            </div>
            <div>
              <p className="text-sm text-[#8A8A8A]">Languages Known</p>
              <p className="font-medium">English, Hindi, Marathi</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT ================= */}



      <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-[#8A8A8A]">Personal Mobile</p>
            <p className="font-medium flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" /> (555) 234-5678
            </p>
          </div>
          <div>
            <p className="text-sm text-[#8A8A8A]">Email</p>
            <p className="font-medium flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> michael.c@school.com
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-sm text-[#8A8A8A]">Current Address</p>
          <p className="font-medium">
            ABC gali, house no. 4, Trilokpuri, Delhi-110096, India
          </p>
        </div>

        <h4 className="mt-6 text-sm font-semibold text-red-500">
          Emergency Contact
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <div>
            <p className="text-sm text-[#8A8A8A]">Name</p>
            <p className="font-medium">Lisa Chen</p>
          </div>
          <div>
            <p className="text-sm text-[#8A8A8A]">Relation</p>
            <p className="font-medium">Spouse</p>
          </div>
          <div>
            <p className="text-sm text-[#8A8A8A]">Phone</p>
            <p className="font-medium">(555) 876-5432</p>
          </div>
        </div>
      </div>

      {/* ================= FAMILY ================= */}
      <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <MdFamilyRestroom className="text-[#9A9A9A]" />
          <h3 className="font-semibold">Family Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            ["Marital Status", "Single"],
            ["Spouse Name", "-"],
            ["Spouse Occupation", "-"],
            ["Spouse Phone", "-"],
            ["Children", "-"],
          ].map(([l, v]) => (
            <div key={l}>
              <p className="text-sm text-[#8A8A8A]">{l}</p>
              <p className="font-medium">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">
        <h3 className="font-semibold mb-4">Educational Qualifications</h3>

        <table className="w-full text-sm">
          <thead className="border-b text-[#8A8A8A]">
            <tr>
              <th className="text-left py-2">Degree</th>
              <th className="text-left">Institution</th>
              <th className="text-left">Year</th>
              <th className="text-left">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["M.Sc. Mathematics", "University of Illinois", "2010", "85%"],
              ["B.Sc. Mathematics", "Springfield University", "2007", "82%"],
              ["B.Ed.", "Illinois State Teaching College", "2011", "88%"],
            ].map((row, i) => (
              <tr key={i} className="border-b last:border-none">
                {row.map((cell) => (
                  <td key={cell} className="py-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= DOCUMENTS ================= */}
      <div className="bg-white border border-[#E6E6E6] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <FaRegFileAlt className="text-[#9A9A9A]" />
          <h3 className="font-semibold">Document Submitted</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentData.map((doc, i) => (
            <div
              key={i}
              className="border border-[#E6E6E6] rounded-xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
            >
              <div className="flex gap-4 items-center">
                <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center relative">
                  <MdOutlineImage className="text-gray-400 text-xl" />
                </div>

                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-xs text-[#8A8A8A]">
                    Uploaded: {doc.date} • {doc.type} • {doc.size}
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-[#E7F6EC] text-[#16A34A] text-xs">
                      Verified
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#118AB2] text-white rounded-lg flex items-center gap-2">
                  <FaEye /> View
                </button>
                <button className="px-4 py-2 border rounded-lg flex items-center gap-2 text-[#696969]">
                  <GoDownload /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

import { FiDownload, FiPrinter } from "react-icons/fi";

export default function IDCardPreview() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            ID Card Preview
          </h2>
          <p className="text-sm text-gray-500">
            Preview of the student ID card design
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <FiDownload />
            Download
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-white bg-[#0B2B3C] hover:bg-[#09304a]">
            <FiPrinter />
            Print
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-10">
        
        {/* ID Card Preview */}
        <div className="w-[240px]">
          <div className="relative bg-white rounded-xl overflow-hidden shadow-md border">
            
            {/* Top Red Header */}
            <div className="bg-[#7C0F0F] text-white text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/20" />
              <p className="font-semibold text-sm">School name</p>
              <p className="text-xs opacity-90">(Govt. Recognized)</p>
              <p className="text-[10px] mt-1 leading-tight">
                Place your address, District<br />
                state and pin - 000000
              </p>
            </div>

            {/* Curved Divider */}
            <div className="bg-[#7C0F0F] h-6 rounded-b-full" />

            {/* Body */}
            <div className="px-4 pt-4 pb-6 text-center">
              <img
                src="https://i.pravatar.cc/100?img=47"
                alt="Profile"
                className="w-20 h-20 mx-auto rounded-md object-cover border"
              />

              <h3 className="mt-3 text-[#C1121F] font-semibold">
                Anushka Sharma
              </h3>
              <p className="text-xs font-medium text-gray-700">
                EP123456
              </p>

              <div className="mt-4 text-left text-[11px] space-y-1 text-gray-700">
                <p><span className="font-medium">Role:</span> Teacher</p>
                <p><span className="font-medium">Date of Birth:</span> 23-09-2016</p>
                <p><span className="font-medium">Contact No.:</span> 9876543210</p>
                <p><span className="font-medium">Department:</span> Academics</p>
                <p className="leading-tight">
                  <span className="font-medium">Address:</span> A-3 / 228 New Kondli, Delhi-96
                </p>
              </div>

              <p className="mt-4 text-[10px] text-right text-gray-500">
                Principal Sign.
              </p>
            </div>

            {/* Bottom Red Curve */}
            <div className="bg-[#7C0F0F] h-4 rounded-t-full" />
          </div>
        </div>

        {/* Empty Space (matches screenshot layout) */}
        <div className="flex-1" />
      </div>

      {/* Card Specifications */}
      <div className="mt-8 border rounded-lg p-4 bg-gray-50">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Card Specifications:
        </p>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Size: 85.6mm × 54mm (CR80)</li>
          <li>Material: PVC with lamination</li>
          <li>Features: QR Code, Emergency contact</li>
          <li>Validity: 1 Academic Year</li>
        </ul>
      </div>

    </div>
  );
}

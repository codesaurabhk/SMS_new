// import React, { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import Sidebar from "../components/Sidebar/Sidebar";

// function Menu() {
//   const [openSidebar, setOpenSidebar] = useState(false);
//   const { pathname } = useLocation();

//   // Close sidebar on route change
//   useEffect(() => {
//     setOpenSidebar(false);
//   }, [pathname]);

//   // Lock body scroll when sidebar open
//   useEffect(() => {
//     if (openSidebar) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => (document.body.style.overflow = "");
//   }, [openSidebar]);

//   return (
//     <div >
      
//       {/* Navbar */}
//       <div className="shadow">
//         <Navbar
//           onToggleSidebar={() => setOpenSidebar(v => !v)}
//           isSidebarOpen={openSidebar}
//         />
//       </div>

//       <div className="flex items-center relative">
        
//         {/* Sidebar */}
//          <aside className={`sidebar-left ${openSidebar ? "is-open" : ""}`}>
//           <Sidebar />
//         </aside>

//         {/* Backdrop */}
//         {openSidebar && (
//           <div
//             className="sidebar-backdrop"
//             onClick={() => setOpenSidebar(false)}
//           />
//         )}

//         {/* Content */}
//         <main className="sidebar-right">
//           <Outlet />
//         </main>

//       </div>
//     </div>
//   );
// }

// export default Menu;

import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function Menu() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenSidebar(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = openSidebar ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [openSidebar]);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* ===== SIDEBAR ===== */}
      <aside
        className={`
          fixed lg:static z-50
          h-full w-64 bg-white 
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar />
      </aside>

      {/* ===== RIGHT AREA ===== */}
      <div className="flex flex-col flex-1">

        {/* NAVBAR (STARTS AFTER SIDEBAR) */}
        <div >
          <Navbar
            onToggleSidebar={() => setOpenSidebar(v => !v)}
            isSidebarOpen={openSidebar}
          />
        </div>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>

      {/* ===== BACKDROP (MOBILE ONLY) ===== */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}
    </div>
  );
}

export default Menu;

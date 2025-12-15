import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function Menu() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { pathname } = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setOpenSidebar(false);
  }, [pathname]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [openSidebar]);

  return (
    <div className="min-h-screen">
      
      {/* Navbar */}
      <div className="shadow">
        <Navbar
          onToggleSidebar={() => setOpenSidebar(v => !v)}
          isSidebarOpen={openSidebar}
        />
      </div>

      <div className="flex items-center relative">
        
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-slate-900 transition-transform duration-300
            ${openSidebar ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:translate-x-0`}
        >
          <Sidebar />
        </aside>

        {/* Backdrop */}
        {openSidebar && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setOpenSidebar(false)}
          />
        )}

        {/* Content */}
        <main className="flex-1 min-h-screen p-4 lg:ml-64">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default Menu;

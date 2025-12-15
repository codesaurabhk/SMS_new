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
    <div >
      
      {/* Navbar */}
      <div className="shadow">
        <Navbar
          onToggleSidebar={() => setOpenSidebar(v => !v)}
          isSidebarOpen={openSidebar}
        />
      </div>

      <div className="flex items-center relative">
        
        {/* Sidebar */}
         <aside className={`sidebar-left ${openSidebar ? "is-open" : ""}`}>
          <Sidebar />
        </aside>

        {/* Backdrop */}
        {openSidebar && (
          <div
            className="sidebar-backdrop"
            onClick={() => setOpenSidebar(false)}
          />
        )}

        {/* Content */}
        <main className="sidebar-right">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default Menu;

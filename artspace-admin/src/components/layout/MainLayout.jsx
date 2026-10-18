
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, Bell, UserCircle } from "lucide-react";
import Sidebar from "./Sidebar";

const pageTitles = {
  "/": "Dashboard",
  "/bookings": "Booking Requests",
  "/calendar": "Booking Calendar",
  "/events": "University Events",
  "/students": "Students",
  "/notifications": "Notifications",
  "/reports": "Reports & Analytics",
  "/profile": "Admin Profile",
};

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const title = pageTitles[location.pathname] || "Admin Portal";

  return (
    <div className="admin-app">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1>{title}</h1>
              <p>ArtSpace Administration</p>
            </div>
          </div>

          <div className="header-right">
            <a
              href="/notifications"
              className="header-icon-button"
              aria-label="Notifications"
            >
              <Bell size={21} />
            </a>

            <div className="admin-avatar">
              <UserCircle size={22} />
            </div>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
